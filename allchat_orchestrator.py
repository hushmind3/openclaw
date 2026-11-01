#!/usr/bin/env python3
"""나자릭 전체대화 오케스트레이터.

- 이름/멘션이 없으면 9명 전원이 답한다.
- 이름/멘션이 있으면 그 봇만 답한다.
Discord가 봇→봇 메시지를 전달하지 않으므로, 각 발언을 OpenClaw CLI로
생성해 해당 봇 계정으로 직접 게시한다.
"""
import json
import re
import subprocess
import sys
import threading
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HOME = Path.home()
CONFIG = HOME / ".openclaw/openclaw.json"
CHANNEL = "1566368914664067164"
AGENTS = [
    "ainz", "albedo", "aura", "cocytus", "demiurge",
    "mare", "pandora-actor", "sebas", "shalltear",
]
NAMES = {
    "ainz": ["아인즈"], "albedo": ["알베도"], "aura": ["아우라"],
    "cocytus": ["코퀴토스"], "demiurge": ["데미우르고스"], "mare": ["마레"],
    "pandora-actor": ["판도라", "판도라엑터"], "sebas": ["세바스"],
    "shalltear": ["샤르티아", "샬티어"],
}
DISPLAY = {
    "ainz": "아인즈", "albedo": "알베도", "aura": "아우라", "cocytus": "코퀴토스",
    "demiurge": "데미우르고스", "mare": "마레", "pandora-actor": "판도라",
    "sebas": "세바스", "shalltear": "샤르티아",
}
LOG = HOME / ".openclaw/allchat.log"
GEN_FILE = HOME / ".openclaw/allchat.session.json"


def _state() -> dict:
    try:
        return json.loads(GEN_FILE.read_text())
    except Exception:  # noqa: BLE001
        return {}


def generation() -> int:
    return int(_state().get("generation", 0))


def reset_since() -> str | None:
    return _state().get("since")


def bump_generation() -> int:
    n = generation() + 1
    GEN_FILE.write_text(json.dumps({
        "generation": n,
        "since": datetime.now(timezone.utc).isoformat(),
    }))
    return n


def mark_since() -> None:
    state = _state()
    state["since"] = datetime.now(timezone.utc).isoformat()
    GEN_FILE.write_text(json.dumps(state))


def session_key() -> str:
    return f"discord:channel:{CHANNEL}:g{generation()}"


def is_reset(text: str) -> bool:
    return bool(re.match(r"^\s*(새(\s*주제)?|리셋)[\s.!?]*$", text))


def tokens() -> dict[str, str]:
    cfg = json.loads(CONFIG.read_text())
    accounts = cfg["channels"]["discord"]["accounts"]
    return {a: accounts[a]["token"] for a in AGENTS if a in accounts}


def api(token: str, path: str, method: str = "GET", data: dict | None = None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(
        "https://discord.com/api/v10" + path, method=method, data=body,
        headers={"Authorization": f"Bot {token}", "User-Agent": "NazarickAllchat/1.0",
                 "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as res:
        return json.loads(res.read())


def recent(token: str, limit: int = 8) -> list[dict]:
    return sorted(api(token, f"/channels/{CHANNEL}/messages?limit={limit}"),
                  key=lambda m: m["timestamp"])


def select(text: str, ids: dict[str, str]) -> list[str]:
    chosen = []
    for agent in AGENTS:
        if any(name in text for name in NAMES[agent]):
            chosen.append(agent)
    for agent, uid in ids.items():
        if f"<@{uid}>" in text or f"<@!{uid}>" in text:
            if agent not in chosen:
                chosen.append(agent)
    return chosen or list(AGENTS)


def reply(agent: str, transcript: str) -> str:
    out = subprocess.run(
        ["/Users/gim-yeonsu/.openclaw/bin/openclaw", "agent", "--agent", agent,
         "--session-key", session_key(), "--message", transcript or "…"],
        capture_output=True, text=True, timeout=120,
    )
    text = (out.stdout or "").strip()
    if not text:
        raise RuntimeError((out.stderr or "empty reply")[:200])
    return text[:1800]


def run(trigger: str, toks: dict[str, str], ids: dict[str, str],
        trigger_id: str | None = None) -> None:
    if is_reset(trigger):
        n = bump_generation()
        api(toks["ainz"], f"/channels/{CHANNEL}/messages", "POST",
            {"content": f"새 주제로 시작합니다. (세션 {n})"})
        mark_since()
        print(f"reset -> generation {n}", flush=True)
        return
    selected = select(trigger, ids)
    # 리셋 이후 대화만 읽는다. 세대가 바뀌면 예전 채널 기록은 제외된다.
    since = reset_since()
    ctx = recent(toks["ainz"], 100)
    if since:
        ctx = [m for m in ctx if m["timestamp"] > since]
    if trigger_id:
        cut = next((i for i, m in enumerate(ctx) if m["id"] == trigger_id), None)
        if cut is not None:
            ctx = ctx[:cut + 1]
    lines = [
        f"{m['author'].get('username','?')}: {(m.get('content') or '').strip()}"
        for m in ctx if (m.get("content") or "").strip()]
    if not lines or trigger.strip() not in lines[-1]:
        lines.append(f"유튜브_빛나대디: {trigger.strip()}")
    transcript = "\n".join(lines)
    log = open(LOG, "a", encoding="utf-8")
    log.write(f"{time.strftime('%H:%M:%S')} trigger={trigger[:40]!r} selected={selected}\n")
    current = transcript
    for agent in selected:
        stop = threading.Event()
        def keep_typing(tok=toks[agent], ev=stop):
            while not ev.is_set():
                try:
                    api(tok, f"/channels/{CHANNEL}/typing", "POST")
                except Exception:  # noqa: BLE001
                    pass
                ev.wait(8)
        threading.Thread(target=keep_typing, daemon=True).start()
        try:
            text = reply(agent, current)
            stop.set()
            api(toks[agent], f"/channels/{CHANNEL}/messages", "POST", {"content": text})
            current += f"\n{DISPLAY[agent]}: {text}"
            log.write(f"  {agent}: {text[:60]}\n")
            log.flush()
            print(f"{DISPLAY[agent]}: {text[:50]}", flush=True)
        except Exception as exc:  # noqa: BLE001 - one turn may fail
            stop.set()
            log.write(f"  {agent} ERROR: {exc}\n")
            log.flush()
            print(f"{DISPLAY[agent]} ERROR: {exc}", flush=True)
        time.sleep(1.5)
    log.close()


def watch() -> None:
    toks = tokens()
    ids = {}
    for agent, tok in toks.items():
        try:
            ids[agent] = str(api(tok, "/users/@me")["id"])
        except Exception:  # noqa: BLE001
            pass
    seen = {m["id"] for m in recent(toks["ainz"], 20)}
    print("allchat watching...", flush=True)
    while True:
        try:
            msgs = recent(toks["ainz"], 20)
            fresh = [m for m in msgs if m["id"] not in seen]
            seen.update(m["id"] for m in msgs)
            users = [m for m in fresh if not m["author"].get("bot") and (m.get("content") or "").strip()]
            if users:
                last = users[-1]
                run(last["content"], toks, ids, trigger_id=last["id"])
        except Exception as exc:  # noqa: BLE001 - keep watching
            print("watch error:", exc, flush=True)
        time.sleep(3)


if __name__ == "__main__":
    if len(sys.argv) > 2 and sys.argv[1] == "--once":
        toks = tokens()
        ids = {}
        for agent, tok in toks.items():
            try:
                ids[agent] = str(api(tok, "/users/@me")["id"])
            except Exception:  # noqa: BLE001
                pass
        run(sys.argv[2], toks, ids)
    else:
        watch()
