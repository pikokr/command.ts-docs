# 모듈 사용하기

## 모듈 만들기

모듈은 `Module` 클래스를 확장해야 합니다.

```ts
import { Module, CommandClient } from "@pikostudio/command.ts"

class MyModule extends Module {
    // 클라이언트 받기
    constructor(private client: CommandClient) {
        super(__filename) // 모듈 파일 위치(리로드에 사용)
    }
}

export function install(client: CommandClient) {
    return new MyModule(client)
}
```

## install 함수

install 함수는 `loadModule`에서 모듈 인스턴스를 가져올 때 사용합니다. 클라이언트가 첫번째 파라미터로 넘어옵니다.

## 모듈 로딩하기

### 상대경로로 로딩하기

상대경로는 `rootPath` 기준입니다.

```ts
client.loadModule('modules/hello')
```

### 절대경로로 로딩하기

`rootPath`를 무시하고 절대 경로를 사용하려면 이 방법을 사용해주세요

```ts
import * as path from 'path'

client.loadModule(path.join(__dirname, 'modules/hello'), true)
```
