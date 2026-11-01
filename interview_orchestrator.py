#!/usr/bin/env python3
"""나자릭 면담방 세션 리셋 감시자.

면담방은 OpenClaw 게이트웨이가 직접 응답하므로, '새주제/새 주제/새/리셋'이
올라오면 해당 채널의 9개 에이전트 세션을 삭제해 새 대화로 시작하게 한다.
"""
import json
import re
import subprocess
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path

HOME = Path.home()
CONFIG = HOME / ".openclaw/openclaw.json"
CHANNEL = "1566366150697164882"
AGENTS = [
    "ainz", "albedo", "aura", "cocytus", "demiurge",
    "mare", "pandora-actor", "sebas", "shalltear",
]
OPENCLAW = "/Users/gim-yeonsu/.openclaw/bin/openclaw"
LOG = HOME / ".openclaw/interview.log"
STATE = HOME / ".openclaw/interview.session.json"


def tokens() -> dict[str, str]:
    cfg = json.loads(CONFIG.read_text())
    accounts = cfg["channels"]["discord"]["accounts"]
    return {a: accounts[a]["token"] for a in AGENTS if a in accounts}


def api(token: str, path: str, method: str = "GET", data: dict | None = None):
    body = json.dumps(data).encode() if data is not None else None
    req = urllib.request.Request(
        "https://discord.com/api/v10" + path, method=method, data=body,
        headers={"Authorization": f"Bot {token}", "User-Agent": "NazarickInterview/1.0",
                 "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=30) as res:
        return json.loads(res.read())


def recent(token: str, limit: int = 20) -> list[dict]:
    msgs = api(token, f"/channels/{CHANNEL}/messages?limit={limit}")
    return sorted(msgs, key=lambda m: m["timestamp"])


def is_reset(text: str) -> bool:
    clean = re.sub(r"<@[!&]?\d+>", "", text)
    return bool(re.match(r"^\s*(새(\s*주제)?|리셋)[\s.!?]*$", clean))


def reset_sessions() -> tuple[int, int]:
    ok = fail = 0
    for agent in AGENTS:
        key = f"agent:{agent}:discord:channel:{CHANNEL}"
        out = subprocess.run(
            [OPENCLAW, "sessions", "delete", key, "--agent", agent, "--yes"],
            capture_output=True, text=True, timeout=60,
        )
        if out.returncode == 0 or "not found" in (out.stdout + out.stderr).lower():
            ok += 1
        else:
            fail += 1
    return ok, fail


def bump() -> int:
    try:
        state = json.loads(STATE.read_text())
    except Exception:  # noqa: BLE001
        state = {}
    n = int(state.get("generation", 0)) + 1
    state["generation"] = n
    state["reset_at"] = datetime.now(timezone.utc).isoformat()
    STATE.write_text(json.dumps(state))
    return n


def main() -> None:
    toks = tokens()
    seen = {m["id"] for m in recent(toks["ainz"])}
    print("interview reset watcher...", flush=True)
    while True:
        try:
            msgs = recent(toks["ainz"])
            fresh = [m for m in msgs if m["id"] not in seen]
            seen.update(m["id"] for m in msgs)
            users = [m for m in fresh
                     if not m["author"].get("bot") and (m.get("content") or "").strip()]
            for m in users:
                if is_reset(m["content"]):
                    ok, fail = reset_sessions()
                    n = bump()
                    api(toks["ainz"], f"/channels/{CHANNEL}/messages", "POST",
                        {"content": f"새 주제로 시작합니다. (세션 {n})"})
                    with open(LOG, "a", encoding="utf-8") as log:
                        log.write(f"{time.strftime('%H:%M:%S')} reset g{n} ok={ok} fail={fail}\n")
                    print(f"reset -> generation {n}, ok={ok} fail={fail}", flush=True)
        except Exception as exc:  # noqa: BLE001 - keep watching
            print("watch error:", exc, flush=True)
        time.sleep(3)


if __name__ == "__main__":
    main()
