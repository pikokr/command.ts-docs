---
sidebar_position: 1
slug: /
---

# 시작하기

## 템플릿 사용하기

```shell
npx degit https://github.com/pikokr/command.ts-v4-quickstart-template project-name
cd project-name
yarn
```

설치가 끝났다면 `config.json`을 수정해주세요.

```json title="config.json"
{
  "token": "봇 토큰",
  "slash": {
    "guild": "슬래시 커맨드를 적용할 서버 아이디"
  }
}
```

### 봇 실행하기

개발 환경에서 실행하기

```shell
yarn dev
```

프로덕션 환경에서 실행하기

```shell
yarn build # 타입스크립트 프로젝트 빌드
yarn prod # 프로젝트 실행
```

## 수동으로 세팅하기

```shell
yarn init -y # 프로젝트 초기화
yarn add --dev typescript @types/node ts-node # 타입스크립트 관련 패키지 설치
yarn add discord.js @discordjs/builders discord-api-types @discordjs/rest @pikokr/command.ts@3 # Command.TS / Discord.JS 설치
yarn tsc --init # 타입스크립트 셋업
```

`tsconfig.json`을 수정해 주세요.

### 필수로 설정해야 할 값

- target - es6
- experimentalDecorators - true
- emitDecoratorMetadata - true

```json title="tsconfig.json"
{
    "compilerOptions": {
        "target": "es6",
        "experimentalDecorators": true,
        "emitDecoratorMetadata": true,
        "module": "commonjs",
        "outDir": "./dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true,
        "strict": true,
        "skipLibCheck": true,
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### 봇 코드 작성하기

```ts title="src/index.ts"
import { Client, Intents, IntentsString } from 'discord.js'
import { CommandClient } from '@pikokr/command.ts'

const cts = new CommandClient({ client: new Client({intents: Object.keys(Intents.FLAGS) as IntentsString[]}) })

cts.registry.loadModulesIn('modules') // modules 폴더에 있는 모듈 모두 로드

cts.client.login('TOKEN_HERE')
```

### 모듈 작성하기

[모듈 작성하기](modules.md) 를 참고해 주세요.

### 실행하기

```shell
yarn ts-node src # src/index.ts 실행
```
