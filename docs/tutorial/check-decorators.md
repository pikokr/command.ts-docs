# 체크 데코레이터

`@command` 데코레이터와 함께 사용 가능한 데코레이터에요. 명령어 실행 전에 명령어 유효성을 체크하는 데 사용해요. 기본 체크 데코레이터는 모두 슬래시 커맨드를 지원해요.

## 기본 데코레이터

`@ownerOnly` - owners 옵션에 유저가 포함되는지 체크

`@guildOnly` - 서버에서만 사용 가능

`@dmOnly` - 개인 메시지에서만 사용 가능

### `@guildOnly`와 함께 사용되어야 하는 체크 데코레이터

`@requireUserPermissions(PermissionResolvable)` - 명령어를 사용하는 유저가 권한을 가지고 있는지 체크

`@requireClientPermissions(PermissionResolvable)` - 클라이언트가 명령어를 사용한 서버에서 권하을 가지고 있는지 체크


## 커스텀 체크 데코레이터 만들기

`createCheckDecorator` 함수를 이용해 체크 데코레이터를 만들 수 있어요.

```ts
import { createCheckDecorator } from '@pikokr/command.ts'

export const test = createCheckDecorator(msg => { // 메시지 커맨드에서 실행
    // ...
    return result // boolean
}, interaction => { // 슬래시 커맨드에서 실행
    // ...
    return result // boolean
})
```
