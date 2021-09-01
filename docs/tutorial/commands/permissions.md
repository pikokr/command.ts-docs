# 명령어 퍼미션

유저나 봇에 특정 권한이 없을 떄 명령어 사용을 막을 수 있습니다.

## 유저 권한 체크

```ts
import {userPermissions, command} from "@pikokr/command.ts";
import {Message} from "discord.js";

class Permissions extends Module {
    @userPermissions(8)
    @command()
    admin(msg: Message) {
        return msg.reply('관리자용 커맨드')
    }
}
```

## 봇 권한 체크

```ts
import { userPermissions, clientPermissions } from "@pikokr/command.ts";
import { Message } from "discord.js";

class Permissions extends Module {
    @clientPermissions(8)
    @command()
    admin(msg: Message) {
        return msg.reply('봇에 관리자 권한이 있을때 실행됨')
    }
}
```

