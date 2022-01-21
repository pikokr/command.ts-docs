---
sidebar_position: 3
slug: /commands
---

# 명령어

## 기본 사용법

```ts
import { command, Module, rest } from '@pikokr/command.ts'
import { Message } from 'discord.js'

class Test extends Module {
    @command() // 커맨드 이름: test
    async test(msg: Message) {
        await msg.reply('와아아아')
    }

    @command({name: 'sans'}) // 커맨드 이름: sans
    async test2(msg: Message) {
        await msg.reply('와아아아!!')
    }

    @command()
    async say(msg: Message, @rest test: string) { // 남은 모든 파라미터를 받아오기
        await msg.reply(test)
    }

    @command()
    async optional(msg: Message, @optional test: string = '와아아') { // 선택적 파라미터
        await msg.reply(test)
    }
}
```

## 파라미터 받기

파라미터에 타입을 지정해주면 명령어에서 옵션을 받을 수 있어요!

`@optional` - 옵션을 선택적으로 받아옵니다. **optional 데코레이터는 선택적으로 받을 처음 파라미터에만 적용해 주세요!**

`@rest` - 남은 모든 파라미터를 받아옵니다. **마지막 파라미터에만 사용 가능해요! 스트링 타입만 사용 가능해요!**

## 커스텀 파라미터 컨버터

기본으로 등록되지 않은 타입을 사용할 때 사용 가능해요!

### 파라미터 받기

```ts
import { Module, argumentConverter } from '@pikokr/command.ts'
import { Message } from 'discord.js'

class Test extends Module {
    @argumentConverter(Type) // 변환할 타입
    test(msg: Message, arg: string) {
        // ....
        return data // 가공된 값 리턴
    }
}
```

### 입력 값이 없는 컨버터

```ts
import { Module, argumentConverter } from '@pikokr/command.ts'
import { Message } from 'discord.js'

class Test extends Module {
    @argumentConverter(Type, false) // 변환할 타입
    test(msg: Message) {
        // ....
        return data // 가공된 값 리턴
    }
}
```



