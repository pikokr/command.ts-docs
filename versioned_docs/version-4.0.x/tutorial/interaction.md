# 인터렉션

## 기본 사용법

```ts
import { slashCommand, Module, option } from '@pikokr/command.ts'
import { CommandInteraction } from 'discord.js'
import { SlashCommandBuilder } from '@discordjs/builders'

class Test extends Module {
    // 슬래시 커맨드
    @applicationCommand({
        command: {
            type: 'CHAT_INPUT',
            name: 'test',
            description: 'test',
            options: [
                {
                    type: 'STRING',
                    name: 'test',
                    description: 'test',
                },
            ],
        }
    })
    async slashCommandTest(i: CommandInteraction, @option('test') test: string = 'test') {
        await i.reply(test)
    }

    // 메시지 컨텍스트 메뉴
    @applicationCommand({
        command: {
            type: 'MESSAGE',
            name: 'messageContextMenu',
            defaultPermission: true,
        },
    })
    async contextMenuMessage(i: MessageContextMenuInteraction) {
        return i.reply({
            content: `message id: ${i.targetMessage.id}`,
        })
    }
    
    // 유저 컨텍스트 메뉴
    @applicationCommand({
        command: {
            type: 'USER',
            name: 'userContextMenu',
            defaultPermission: true,
        },
    })
    async contextMenuUser(i: UserContextMenuInteraction) {
        return i.reply({
            content: `user id: ${i.targetUser.id}`,
        })
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
