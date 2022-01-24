# 로거 사용하기

### 모듈에서 로거 사용하기

모든 command.ts 모듈에는 로거가 포함되어 있습니다.

`this.logger` 을 이용해 로거에 접근할 수 있습니다.

```ts
// 모듈 내부
this.logger.info('hello!')
```

### 커스텀 로거 사용하기

command.ts에서는 로깅 모듈로 tslog를 사용합니다.

클라이언트 옵션으로 커스텀 tslog 인스턴스를 전달할 수 있습니다.

```ts
import { Logger } from 'tslog'

const logger = new Logger()

new CommandClient({
    // ...
    logger
})
```
