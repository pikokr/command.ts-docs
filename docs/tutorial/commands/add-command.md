# 모듈에 명령어 추가하기

명령어 추가는 `@command` 데코레이터로 가능해요!

### 명령어 만들기

```ts
import { Module, command } from "@pikostudio/command.ts"
import { Message } from "discord.js"

class HelloModule extends Module {
    @command()
    hello(msg: Message) {
        return msg.reply('와아아')
    }
}
```

### 파라미터 받기

커맨드에 추가적인 입력이 필요하다면 파라미터를 받을 수 있어요!

```ts
import { Module, command } from "@pikostudio/command.ts"
import { Message } from "discord.js"

class HelloModule extends Module {
    @command()
    add(msg: Message, a: number, b: number) {
        return msg.reply(`${a} + ${b} = ${a+b}!`)
    }
}
```

### 나머지 파라미터 모두 받기

이 기능은 문자열 타입에서만 사용 가능해요.

```ts
import { Module, command, rest } from "@pikostudio/command.ts"
import { Message } from "discord.js"

class HelloModule extends Module {
    @command()
    say(msg: Message, @rest content: string) {
        return msg.reply(content)
    }
}
```
