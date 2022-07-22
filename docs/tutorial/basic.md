---
sidebar_position: 2
---

# 기본

## CommandClient

Command.ts의 모든 기능을 담고 있는 클래스 입니다.

### 사용법

```ts
import { CommandClient } from "@pikokr/command.ts"

const commandClient = new CommandClient(client)
```

## 커맨드 시스템

### 슬래시 커맨드

이 방식은 디스코드의 슬래시 커맨드 시스템을 사용합니다.

```ts
await commandClient.enableApplicationCommandsExtension({
  guilds: [], // 명령어를 등록할 서버 목록
})
```

### 텍스트 커맨드

이 방식은 유저의 메시지를 읽어오는 방식을 사용합니다.  
메시지 컨텐트 인텐트를 받을 필요가 없다면 슬래시 커맨드를 사용하는 것을 추천합니다.

```ts
await commandClient.enableTextCommandsExtension({
  prefix: "!", // 명령어 앞에 붙을 접두사(배열 / 함수(배열 리턴) 가능)
})
```

## 익스텐션(모듈) 만들기

command.ts에서 하는 모든 작업은 `익스텐션` 안에서만 실행됩니다.

```ts
import { Extension } from "@pikokr/command.ts"

class HelloExtension extends Extension {
  // ...
}
```

### 익스텐션 로드하기

#### 1. 직접 로드하기

```ts
await registry.registerModule(new HelloExtension())
```

#### 1. 폴더 로드하기

이 방식을 사용하려면 모듈이 포함된 파일에 `setup` 함수가 존재 해야합니다.  
이 `setup` 함수에서 익스텐션 클래스를 만든 후 리턴해 주면 모듈이 등록됩니다.

```ts
export const setup = () => {
  return new HelloExtension()
}
```

또는 익스텐션 여러개 로드

```ts
export const setup = () => {
  return [new HelloExtension(), new HiExtension()]
}
```

이제 디렉터리를 로드합니다.

```ts
import path from "path"

await commandClient.registry.loadAllModulesInDirectory(
  path.join(__dirname, "extensions")
)
```

## 커맨드 만들기

### 애플리케이션 커맨드(슬래시 커맨드)
