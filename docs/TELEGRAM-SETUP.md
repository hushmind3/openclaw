# OpenClaw 텔레그램 연동 상태 (2026-11-01)

## 완료된 것
- OpenClaw 9개 에이전트 모델을 Hermes와 동일하게 `opencode-go/deepseek-v4.1-flash`로 변경
  - 대상: `main, ainz, albedo, aura, cocytus, demiurge, mare, pandora-actor, sebas, shalltear`
- `OPENCODE_API_KEY`를 OpenClaw `env.vars`에 등록 (Hermes와 같은 키)
- OpenClaw 게이트웨이 재시작 및 에이전트 응답 확인
  - `openclaw agent --agent ainz --message "한 줄로 자기소개 해줘"` 정상 응답
- 브로드캐스트 그룹 설정 스크립트 준비: `setup-telegram-broadcast.py`

## 남은 것 (사용자만 가능한 단계)
OpenClaw는 한 봇 계정으로 여러 에이전트의 답변을 그룹에 브로드캐스트할 수 있습니다.
다만 아래 두 가지는 텔레그램 계정 권한이 필요해 자동화할 수 없습니다.

1. **OpenClaw용 새 봇 생성**
   - 텔레그램에서 `@BotFather` → `/newbot` → 이름/아이디 입력 → 토큰 복사
   - 기존 Hermes 봇 9개는 Hermes 게이트웨이가 polling 중이라 공유할 수 없습니다.
2. **새 그룹 생성 후 봇 추가**
   - 텔레그램에서 새 그룹 생성 → 위 봇을 멤버로 추가
   - 그룹에서 아무 메시지나 전송 (chat_id 수집용)

## 설정 방법 (토큰과 chat_id 준비 후)
```bash
python3 ~/.openclaw/setup-telegram-broadcast.py '<BOT_TOKEN>' '<CHAT_ID>'
```

이 스크립트가 하는 일:
- `channels.telegram.accounts.openclaw` 추가
- 그룹 정책 `open`
- 9개 에이전트를 `broadcast["telegram:<chat_id>"]` 참가자로 등록
- `mentionGating: false`, `maxRounds: 2`, `maxTurns: 18`
- 게이트웨이 재시작 및 검증 명령 출력

## 검증
```bash
openclaw channels list
openclaw agents list
openclaw logs --follow | grep -i broadcast
```
그룹에서 메시지를 보내면 9개 에이전트가 각자 이름 라벨과 함께 답변해야 합니다.
