#!/usr/bin/env python3
"""나자릭 자유대화 오케스트레이터.

Discord는 봇→봇 메시지를 전달하지 않으므로, 각 에이전트의 발언을
OpenClaw CLI로 생성해 해당 봇 계정으로 직접 게시한다.

사용법:
  python3 freechat_orchestrator.py            # 12턴 실행
  python3 freechat_orchestrator.py 6          # 6턴 실행
  python3 freechat_orchestrator.py --watch    # 채널의 사용자 메시지를 감시해 자동 시작
"""
import json
import subprocess
import sys
import time
import urllib.request
from pathlib import Path

HOME = Path.home()
CONFIG = HOME / ".openclaw/openclaw.json"
CHANNEL = "1566360102913441842"
AGENTS = [
    "ainz", "albedo", "aura", "cocytus", "demiurge",
    "mare", "pandora-actor", "sebas", "shalltear",
]
NAMES = {
    "ainz": "아인즈", "albedo": "알베도", "aura": "아우라", "cocytus": "코퀴토스",
    "demiurge": "데미우르고스", "mare": "마레", "pandora-actor": "판도라",
    "sebas": "세바스", "shalltear": "샤르티아",
}
LOG = HOME / ".openclaw/freechat.log"


def tokens() -> dict[str, str]:
    cfg = json.loads(CONFIG.read_text())
    accounts = cfg["channels"]["discord"]["accounts"]
    return {agent: accounts[agent]["token"] for agent in AGENTS if agent in accounts}


def api(token: str, path: str, method: str = "GET", data: dict | None = None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(
        "https://discord.com/api/v10" + path, method=method, data=body,
        headers={"Authorization": f"Bot {token}", "User-Agent": "NazarickFreechat/1.0",
                 "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as res:
        return json.loads(res.read())


def recent(token: str, limit: int = 8) -> list[dict]:
    msg = api(token, f"/channels/{CHANNEL}/messages?limit={limit}")
    return sorted(msg, key=lambda m: m["timestamp"])


def reply(agent: str, context: list[dict]) -> str:
    lines = []
    for m in context[-6:]:
        who = m["author"].get("username", "?")
        text = (m.get("content") or "").strip()
        if text:
            lines.append(f"{who}: {text[:300]}")
    transcript = "\n".join(lines) or "(대화 시작)"
    prompt = transcript or "…"
    out = subprocess.run(
        ["openclaw", "agent", "--agent", agent, "--message", prompt],
        capture_output=True, text=True, timeout=120,
    )
    text = (out.stdout or "").strip()
    if not text:
        raise RuntimeError((out.stderr or "empty reply")[:200])
    return text[:1800]


def run(turns: int) -> None:
    toks = tokens()
    log = open(LOG, "a", encoding="utf-8")
    for i in range(turns):
        agent = AGENTS[i % len(AGENTS)]
        try:
            ctx = recent(toks["ainz"])
            text = reply(agent, ctx)
            api(toks[agent], f"/channels/{CHANNEL}/messages", "POST",
                {"content": text})
            log.write(f"{time.strftime('%H:%M:%S')} {agent}: {text[:80]}\n")
            log.flush()
            print(f"[{i+1}/{turns}] {NAMES[agent]}: {text[:60]}", flush=True)
        except Exception as exc:  # noqa: BLE001 - best effort turn
            log.write(f"{time.strftime('%H:%M:%S')} {agent} ERROR: {exc}\n")
            log.flush()
            print(f"[{i+1}/{turns}] {NAMES[agent]} ERROR: {exc}", flush=True)
        time.sleep(1.5)
    log.close()


def watch() -> None:
    toks = tokens()
    seen = {m["id"] for m in recent(toks["ainz"], 20)}
    print("watching for a user message...", flush=True)
    while True:
        try:
            msgs = recent(toks["ainz"], 20)
            fresh = [m for m in msgs if m["id"] not in seen]
            seen.update(m["id"] for m in msgs)
            if any(not m["author"].get("bot") and (m.get("content") or "").strip() for m in fresh):
                run(9)
        except Exception as exc:  # noqa: BLE001 - keep watching
            print("watch error:", exc, flush=True)
        time.sleep(3)


if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "--watch":
        watch()
    else:
        run(int(sys.argv[1]) if len(sys.argv) > 1 else 12)
