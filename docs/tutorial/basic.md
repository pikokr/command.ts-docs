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

```ts
import { Extension, applicationCommand } from "@pikokr/command.ts"
import { ChatInputCommandInteraction, ApplicationCommandType } from "discord.js"

class HelloExtension extends Extension {
  @applicationCommand({
    type: ApplicationCommandType.ChatInput,
    name: "hello",
    description: "Hi!",
  })
  async hello(i: ChatInputCommandInteraction) {
    await i.reply("Hello, discord!")
  }
}
```

`@applicationCommand` 데코레이터를 이용해 애플리케이션 커맨드를 등록하고 사용할 수 있습니다.

### 옵션

[discord.js 문서](https://discord.js.org/#/docs/discord.js/main/typedef/ApplicationCommandData)를 참고해 주세요. 많이 사용하는 옵션은 설명하겠습니다.

| 옵션        | 설명                                                                        |
| ----------- | --------------------------------------------------------------------------- |
| type        | 등록할 명령어의 타입입니다(discord.js의 ApplicationCommandType 참고)        |
| name        | 등록할 명령어의 이름입니다                                                  |
| description | 등록할 명령어의 설명입니다 ChatInput 커맨드에만 사용 가능합니다             |
| guilds      | 명령어를 등록할 서버 id 목록입니다. 설정하지 않으면 기본 설정을 따라갑니다. |

:::info

`options`는 `@applicationCommand` 데코레이터에서 설정할 수 없습니다. 옵션을 받는 방법은 다른 부분에서 다루니 참고해 주세요.

:::

이렇게 `Hello, disord!`를 출력하는 `/hello` 명령어가 완성 되었습니다. 커맨드 등록과 핸들링은 아래에서 다루겠습니다.

## 텍스트 커맨드

```ts
import { Extension, command } from "@pikokr/command.ts"
import { Message } from "discord.js"

class HelloExtension extends Extension {
  @command({ name: "hello" })
  async hello(msg: Message) {
    await msg.reply("Hello, discord!")
  }
}
```

### 옵션

| 옵션        | 타입       | 설명                                                                                                           |
| ----------- | ---------- | -------------------------------------------------------------------------------------------------------------- |
| name        | `string`   | 등록할 명령어의 이름입니다                                                                                     |
| description | `string`   | 등록할 명령어의 설명입니다. 명령어에 등록되지만 따로 표시되진 않습니다(도움말 명령어 등 제작에 사용될 수 있음) |
| aliases     | `string[]` | 다른 여러가지 이름들로 명령어를 추가로 등록합니다                                                              |

이렇게 `Hello, disord!`를 출력하는 `<prefix>hello` 명령어가 완성 되었습니다. 커맨드 핸들링은 아래에서 다루겠습니다.

## 커맨드 핸들러 설치

command.ts에서는 커맨드를 등록만 한다고 바로 사용할 수 있는 것은 아니에요. 원하는 모듈을 활성화해서 사용할 수 있어요.  
일단 텍스트 커맨드 핸들링부터 처리해 보겠습니다.

### 텍스트 커맨드 핸들링

```ts
await commandClient.enableTextCommandsExtension({
  prefix: "!",
})
```

이것으로 텍스트 커맨드 핸들러 등록이 끝났습니다. 만약 작동하지 않는다면 메시지 컨텐트 인텐트가 활성화 되어있는지 확인해주세요.

#### 옵션

| 옵션   | 타입                                                                                        | 설명                                    |
| ------ | ------------------------------------------------------------------------------------------- | --------------------------------------- |
| prefix | string \| string[] \| ((msg: Message) => Promise<string \| string[]> \| string \| string[]) | 명령어를 사용하는 데 쓰일 접두사입니다. |

### 애플리케이션 커맨드(슬래시 커맨드) 핸들링

```ts
await commandClient.enableApplicationCommandsExtension({
  guilds: [
    // ...
  ],
})
```

이것으로 애플리케이션 커맨드 핸들러가 등록 되었습니다. 하지만 애플리케이션 커맨드는 따로 등록 절차가 필요합니다. 등록은 클라이언트 실행 후에 처리하면 됩니다.

```ts
await commandClient.getApplicationCommandsExtension()!.sync()
```

이렇게 모든 명령어를 서버 또는 애플리케이션에 등록합니다.

:::info

`guilds` 옵션은 커맨드 등록 시 어떤 서버에 등록할 지 설정하는 옵션입니다. undefined로 설정해 주면 글로벌 커맨드로 작동합니다.

:::
