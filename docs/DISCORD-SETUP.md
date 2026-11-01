# OpenClaw Discord 연동 상태 (2026-11-01)

## 완료된 것
- 나자릭 9개 에이전트에 Hermes의 최신 `SOUL.md` 이식 (백업: `~/.openclaw/soul-backup-20261101/`)
- 모델을 Hermes와 동일하게 `opencode-go/deepseek-v4.1-flash`로 통일
- 페르소나 응답 검증:
  - shalltear → "나는 샤르티아 블러드폴른, 주인님의 명령을 실행하는 자다…"
  - ainz → "저는 추론을 맡은 아인즈이며, 주인님 한 분만을 섬깁니다."
- Discord 브로드캐스트 설정 스크립트: `setup-discord-broadcast.py`

## 남은 것 (Discord 계정 권한 필요)
1. Discord Developer Portal에서 봇 생성 → 토큰 복사
2. 서버에 봇 초대 (스크립트가 초대 링크를 출력)
3. 사용할 채널 ID 확인 (채널 우클릭 → ID 복사)

## 설정 방법
```bash
python3 ~/.openclaw/setup-discord-broadcast.py '<BOT_TOKEN>' '<CHANNEL_ID>'
```

스크립트가 하는 일:
- 봇 토큰 검증 및 초대 링크 출력
- `channels.discord.accounts.openclaw` 추가
- 9개 에이전트를 `broadcast["discord:<channel_id>"]` 참가자로 등록
- `mentionGating: false`, `maxRounds: 2`, `maxTurns: 18`
- 게이트웨이 재시작

## 검증
```bash
openclaw channels list
openclaw agents list
openclaw logs --follow | grep -i broadcast
```
채널에서 메시지를 보내면 9개 에이전트가 각자 이름 라벨과 함께 답변해야 합니다.
