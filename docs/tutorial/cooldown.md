# 쿨다운

`@coolDown` 데코레이터로 쿨다운 사용이 가능해요!

## 기본 사용법

```ts
import { command, Module, rest, coolDown, CoolDownType } from '@pikokr/command.ts'
import { Message } from 'discord.js'

class Test extends Module {
    @command()
    @coolDown(CoolDownType.USER, 10) // 유저별 10초 쿨타임 설정
    async say(msg: Message, @rest test: string) { // 남은 모든 파라미터를 받아오기
        await msg.reply(test)
    }
}
```

## 커스텀 어댑터

외부 저장소에 데이터를 저장할 때 사용할 수 있습니다.

### Collection 사용 예시(기본)
```ts
import { Collection } from 'discord.js'
import { CoolDownAdapter } from '@pikokr/command.ts'

export class CustomCoolDownAdapter implements CoolDownAdapter {
    map = new Collection<string, number>()
    async get(id: string): Promise<number | undefined> {
        return this.map.get(id)
    }

    async set(id: string, value: number) {
        this.map.set(id, value)
    }
}
```

커스텀 어댑터는 클라이언트 옵션에서 설정 가능합니다.

```ts
new CommandClient({..., coolDownAdapter: new CustomCoolDownAdapter()})
```
