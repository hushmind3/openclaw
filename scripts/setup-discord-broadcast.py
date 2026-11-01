#!/usr/bin/env python3
"""OpenClaw Discord 브로드캐스트 방 설정.

사용법:
  python3 setup-discord-broadcast.py <bot_token> <channel_id>

- OpenClaw Discord 계정(openclaw) 추가/갱신
- 9개 나자릭 에이전트를 broadcast 채널 참가자로 등록
- 봇 초대 링크 출력
- 게이트웨이 재시작 후 검증 명령 출력
"""
import json
import shutil
import subprocess
import sys
import urllib.request
from pathlib import Path

HOME = Path.home()
CONFIG = HOME / ".openclaw/openclaw.json"
AGENTS = [
    "ainz", "albedo", "aura", "cocytus", "demiurge",
    "mare", "pandora-actor", "sebas", "shalltear",
]
ACCOUNT = "openclaw"
OWNER = "7094091589"
PERMISSIONS = 68608  # VIEW_CHANNEL | SEND_MESSAGES | READ_MESSAGE_HISTORY


def api(token: str, path: str) -> dict:
    req = urllib.request.Request(
        f"https://discord.com/api/v10{path}",
        headers={"Authorization": f"Bot {token}", "User-Agent": "OpenClawSetup/1.0"},
    )
    with urllib.request.urlopen(req, timeout=20) as res:
        return json.loads(res.read())


def main() -> int:
    if len(sys.argv) != 3:
        print(__doc__)
        return 2
    token, channel = sys.argv[1].strip(), sys.argv[2].strip()
    if not channel.isdigit():
        print("channel_id는 Discord 채널의 숫자 ID여야 합니다.")
        return 2

    try:
        me = api(token, "/users/@me")
    except Exception as exc:  # noqa: BLE001 - surface the provider error verbatim
        print(f"토큰 확인 실패: {exc}")
        return 1
    app_id = me.get("id")
    print(f"봇 확인: {me.get('username')}#{me.get('discriminator', '0')} (id={app_id})")
    print(
        "초대 링크: "
        f"https://discord.com/api/oauth2/authorize?client_id={app_id}"
        f"&scope=bot&permissions={PERMISSIONS}"
    )

    shutil.copy2(CONFIG, CONFIG.with_suffix(".json.bak-discord-broadcast"))
    cfg = json.loads(CONFIG.read_text())

    discord = cfg.setdefault("channels", {}).setdefault("discord", {})
    discord["enabled"] = True
    discord["groupPolicy"] = "open"
    discord.setdefault("dmPolicy", "allowlist")
    accounts = discord.setdefault("accounts", {})
    accounts[ACCOUNT] = {
        "enabled": True,
        "name": "OpenClaw",
        "token": token,
        "dmPolicy": "allowlist",
        "groupPolicy": "open",
    }

    entries = cfg.setdefault("agents", {}).setdefault("entries", {})
    for agent in AGENTS:
        entry = entries.setdefault(agent, {"name": agent})
        entry.setdefault("groupChat", {})["mentionPatterns"] = [f"@{agent}\\b"]

    bindings = cfg.setdefault("bindings", [])
    if not any(b.get("agentId") == "ainz" and (b.get("match") or {}).get("accountId") == ACCOUNT
               for b in bindings):
        bindings.append({"agentId": "ainz", "match": {"channel": "discord", "accountId": ACCOUNT}})

    broadcast = cfg.setdefault("broadcast", {})
    broadcast["strategy"] = "parallel"
    broadcast[f"discord:{channel}"] = {
        "agents": AGENTS,
        "mentionGating": False,
        "maxRounds": 2,
        "maxTurns": 18,
    }

    CONFIG.write_text(json.dumps(cfg, ensure_ascii=False, indent=2) + "\n")
    print(f"config updated: {CONFIG}")

    valid = subprocess.run(["openclaw", "config", "validate"], text=True, capture_output=True)
    print(valid.stdout.strip() or valid.stderr.strip())
    if valid.returncode != 0:
        return valid.returncode

    print(subprocess.run(["openclaw", "gateway", "restart"], text=True, capture_output=True).stdout.strip())
    print("확인: openclaw channels list | openclaw agents list")
    print(f"채널: discord:{channel} → {len(AGENTS)}명 브로드캐스트")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
