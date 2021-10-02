---
slug: /addons/views

---

# Views Addon

http://npmjs.com/@pikokr/command.ts-views

command.ts에 메시지 컴포넌트 뷰 시스템을 추가해주는 모듈입니다.

## 설치하기

```shell
yarn add @pikokr/command.ts-views
```

## 모듈 로딩하기

```ts
import { setup } from '@pikokr/command.ts-views'

// ...

setup(cts)
```

## 뷰 사용하기

```ts
import { Module, command } from '@pikokr/command.ts'
import { View, uiComponent, generateComponents } from '@pikokr/command.ts'
import { MessageButton, ButtonInteraction } from 'discord.js'

class TestView extends View {
  @uiComponent(new MessageButton().setLabel('와아아'), { deferReply: false })
  async testButton(i: ButtonInteraction) {
    await i.reply('와!')
  }
}

class Test extends Module {
  @command()
  async test(msg: Message) {
    await msg.reply({
      content: 'test',
      components: generateComponents(view),
    })
  }
}
```
