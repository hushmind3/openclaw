# OpenClaw 전체 상태 (2026-11-01)

## 포함
- `config/openclaw.json` — 게이트웨이·모델·Discord/Telegram·브로드캐스트
- `agents/<id>/*.sqlite*` — 에이전트별 런타임 상태 DB
- `state/*.sqlite*` — 게이트웨이 공유 상태
- `extensions/` — 확장(플러그인) 파일
- `personas/`, `staging/`, `workspace/` — SOUL·메모리·작업공간 문서
- `scripts/`, `docs/` — 연동 스크립트와 검증 기록
- `logs/`, `media/`, `soul-backup/`

## 제외 (재설치/캐시)
- `tools/` (Node 런타임 810MB)
- `tmp/`, `cache/`, `browser/` (재생성)
