# OpenClaw 구성 스냅샷 (2026-11-01)

OpenClaw 2026.10.8의 설정·에이전트·페르소나·텔레그램/디스코드 연동 스크립트입니다.

## 구조
- `config/openclaw.json` — 게이트웨이·모델·Discord/Telegram·브로드캐스트 설정
- `agents/<id>/` — 에이전트별 설정 JSON
- `personas/<id>/SOUL.md` — Hermes에서 이식한 나자릭 페르소나 9종
- `workspace/` — 기본 에이전트 작업공간 문서
- `staging/<id>/` — 마이그레이션된 작업공간 문서(SOUL/MEMORY/IDENTITY/AGENTS)
- `scripts/setup-*-broadcast.py` — 텔레그램/디스코드 9인 브로드캐스트 설정
- `docs/` — 연동 절차와 검증 기록

## 상태
- 표시 이름: 한글 (아인즈·알베도·아우라·코퀴토스·데미우르고스·마레·판도라·세바스·샤르티아)
- 폴백 없음: `opencode-go/deepseek-v4.1-flash` 단일
- 모델: `opencode-go/deepseek-v4.1-flash` (Hermes와 동일)
- 디스코드: 9명 브로드캐스트 검증 완료 (2026-11-01)
- 텔레그램: 새 봇 토큰·그룹 ID 입력 시 `scripts/setup-telegram-broadcast.py`로 구성

## 주의
비공개 저장소이며 `openclaw.json`에 봇 토큰·API 키가 포함됩니다.
