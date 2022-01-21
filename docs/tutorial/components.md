# 메시지 컴포넌트

command.ts는 메시지 컴포넌트 이벤트 받기를 지원해요!

## 버튼

```ts
class Test extends Module {
    @messageButton('컴포넌트 ID')
    async button(i: ButtonInteraction) {
        // ...
    }
}
```

## 셀렉트 메뉴

```ts
class Test extends Module {
    @messageSelectMenu('컴포넌트 ID')
    async button(i: SelectMenuInteraction) {
        // ...
    }
}
```
