# 모듈

Command.TS 모듈은 로드, 언로드, 리로드 가능하고, 커맨드 등 봇에 기능을 추가할 때 사용해요!

## 기본 모듈 사용법

```ts title="modules/test.ts"
import {Module, CommandClient} from '@pikokr/command.ts'

class Test extends Module {
    constructor(private cts: CommandClient) { // CommandClient 받아오기
        super()
    }
}

export function install(cts: CommandClient) { // 모듈이 로딩될 때 실행
    return new Test(cts)
}
```

## 빌트인 모듈

빌트인 모듈은 처음 로드된 후 언로딩 또는 리로딩이 불가능한 모듈이에요!

```ts title="modules/test.ts"
import { BuiltInModule, CommandClient } from '@pikokr/command.ts'

class Test extends BuiltInModule {
    constructor(private cts: CommandClient) { // CommandClient 받아오기
        super()
    }
}

export function install(cts: CommandClient) { // 모듈이 로딩될 때 실행
    return new Test(cts)
}
```

## 모듈 로드하기

모듈 로딩은 레지스트리의 loadModule 메서드로 할 수 있어요!

```ts
cts.registry.loadModule('modules/test') // modules/test.ts 로드
cts.registry.loadModulesIn('modules') // modules 폴더에 있는 모든 모듈 로드
```

## 언로드/리로드

```ts
const module = cts.registry.modules.find(/*...*/)

cts.registry.unloadModule(module) // 모듈 언로드
cts.registry.reloadModule(module) // 모듈 리로드
cts.registry.reloadAll() // 모든 모듈 리로드(빌트인 제외)
```
