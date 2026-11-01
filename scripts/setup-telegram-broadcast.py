#!/usr/bin/env python3
"""OpenClaw Telegram 브로드캐스트 방 설정.

사용법:
  python3 setup-telegram-broadcast.py <bot_token> <chat_id>

- OpenClaw 텔레그램 계정(openclaw)을 추가/갱신
- 그룹 정책을 open으로 설정
- 9개 에이전트를 broadcast 그룹 참가자로 등록
- 게이트웨이 재시작 후 검증 명령 출력
"""
import json
import shutil
import subprocess
import sys
from pathlib import Path

HOME = Path.home()
CONFIG = HOME / ".openclaw/openclaw.json"
AGENTS = [
    "ainz", "albedo", "aura", "cocytus", "demiurge",
    "mare", "pandora-actor", "sebas", "shalltear",
]
ACCOUNT = "openclaw"
OWNER = "7094091589"


def run(*args: str, check: bool = True) -> subprocess.CompletedProcess:
    return subprocess.run(args, text=True, capture_output=True, check=check)


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    token, chat_id = sys.argv[1].strip(), sys.argv[2].strip()
    if not chat_id.startswith("-") and not chat_id.isdigit():
        print("chat_id는 -100… 형식의 숫자여야 합니다.")
        return 2

    shutil.copy2(CONFIG, CONFIG.with_suffix(".json.bak-telegram-broadcast"))
    cfg = json.loads(CONFIG.read_text())

    telegram = cfg.setdefault("channels", {}).setdefault("telegram", {})
    telegram["enabled"] = True
    telegram["groupPolicy"] = "open"
    telegram.setdefault("dmPolicy", "allowlist")
    telegram.setdefault("allowFrom", [OWNER])
    accounts = telegram.setdefault("accounts", {})
    accounts[ACCOUNT] = {
        "enabled": True,
        "botToken": token,
        "dmPolicy": "allowlist",
        "allowFrom": [OWNER],
        "groupPolicy": "open",
        "name": "OpenClaw",
    }

    entries = cfg.setdefault("agents", {}).setdefault("entries", {})
    for agent in AGENTS:
        entry = entries.setdefault(agent, {"name": agent})
        entry.setdefault("groupChat", {})["mentionPatterns"] = [f"@{agent}\\b"]

    bindings = cfg.setdefault("bindings", [])
    if not any(b.get("agentId") == "ainz" and (b.get("match") or {}).get("accountId") == ACCOUNT
               for b in bindings):
        bindings.append({
            "agentId": "ainz",
            "match": {"channel": "telegram", "accountId": ACCOUNT},
        })

    broadcast = cfg.setdefault("broadcast", {})
    broadcast["strategy"] = "parallel"
    broadcast[f"telegram:{chat_id}"] = {
        "agents": AGENTS,
        "mentionGating": False,
        "maxRounds": 2,
        "maxTurns": 18,
    }

    CONFIG.write_text(json.dumps(cfg, ensure_ascii=False, indent=2) + "\n")
    print(f"config updated: {CONFIG}")

    valid = run("openclaw", "config", "validate", check=False)
    print(valid.stdout.strip() or valid.stderr.strip())
    if valid.returncode != 0:
        return valid.returncode

    print(run("openclaw", "gateway", "restart", check=False).stdout.strip())
    print("확인: openclaw channels list | openclaw agents list")
    print(f"방: telegram:{chat_id} → {len(AGENTS)}명 브로드캐스트")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
