---
sidebar_position: 1
---

# 시작하기

Command.ts는 discord.js용 커맨드 프레임워크 입니다.  
discord.js v13 버전은 command.ts v4를 확인해 주세요

## 템플릿으로 시작하기

```sh
npx degit pikokr/command.ts-v5-template <project>
```

```json title=config.json
{
  "token": "", // 봇 토큰
  "guilds": [] // 커맨드를 등록할 서버 목록, 글로벌 커맨드를 사용할 시 null로 설정
}
```

### `yarn dev`

ts-node를 이용해 봇을 실행합니다.

### `yarn build`

봇 프로젝트를 `dist` 폴더에 빌드합니다.

### `yarn start`

빌드된 봇 프로젝트를 실행합니다.
