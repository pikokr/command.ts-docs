# 자바스크립트 지원

command.ts에는 기본적인 js 로딩 시스템이 있어요!

`tsconfig.json` 에서 `allowJs`를 켰을 때 사용 가능해요! 

자바스크립트에는 타입 선언이 불가능하기 때문에 수동 타입 설정이 필요해요!

```js
class Test extends Module {
    @command({optionTypes: [Message]})
    test(msg) {
        msg.reply('와아아')
    }
}
```
