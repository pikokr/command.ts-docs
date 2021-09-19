# 슬래시 커맨드

## 기본 사용법

```ts
import { slashCommand, Module, option } from '@pikokr/command.ts'
import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

class Test extends Module {
    @slashCommand({
        command: new SlashCommandBuilder().setName('tet').setDescription('테스트 커맨드')
            .addStringOption((builder) => builder.setName('test').setDescription('test option').setRequired(false)),
    })
    async test(i: CommandInteraction, @option('test') test: string = 'test') {
        await i.reply(test)
    }
}
```

![img.png](slashCommands/img.png)

## 커스텀 컨버터

커맨드 컨버터와 같지만, 파라미터 없는 컨버터만 가능해요!

```ts
import { Module, argumentConverter } from '@pikokr/command.ts'
import { CommandInteraction } from 'discord.js'

class Test extends Module {
    @slashArgumentConverter(Type) // 변환할 타입
    test(interaction: CommandInteraction) {
        // ....
        return data // 가공된 값 리턴
    }
}
```
