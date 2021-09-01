# 슬래시 커맨드 사용하기

command.ts는 슬래시 커맨드 자동 등록을 지원해요!

## 사용 방법

클라이언트에 slashCommands 옵션을 설정해주세요.

```ts
new CommandClient(/*...*/ {
    slashCommands: {
        autoRegister: true, // 커맨드 자동 등록
        guild: '123123123123' // 서버 아이디
    }
})
```

## 사용하기

```ts
import {Module, slashCommand} from "@pikokr/command.ts";
import {CommandInteraction} from "discord.js";

class SlashCommands extends Module {
    @slashCommand({
        name: '와아', // 커맨드 이름
        description: '와아 조아', // 커맨드 설명
        options: []
    })
    wa(i: CommandInteraction) {
        i.reply({
            content: '와아아',
        })
    }
}
```

## 옵션 받기

```ts
import {Module, slashCommand} from "@pikokr/command.ts";
import {CommandInteraction, CommandInteractionOptionResolver} from "discord.js";

class SlashCommands extends Module {
    @slashCommand({
        name: '와아', // 커맨드 이름
        description: '와아 조아', // 커맨드 설명
        options: [
            {
                name: 'name',
                description: '이름',
                type: 'STRING',
                required: true
            }
        ]
    })
    wa(i: CommandInteraction, options: CommandInteractionOptionResolver) {
        i.reply({
            content: `와아아 ${options.getString('name')}!`,
        })
    }
}
```
