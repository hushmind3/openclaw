# Node 실행 파일 복원

`tools/node-v24.22.1/bin/node`는 GitHub 100MB 제한 때문에 분할 저장했습니다.

```bash
cd tools/node-v24.22.1/bin
cat node.part-* > node
chmod +x node
```
