# 커스텀 arg 컨버터

```ts
import { Module, argConverter } from '@pikokr/command.ts'

class TestModlue extends Module {
    @argConverter(Type) // Type에 원하는 타입을 넣어주세요
    testConverter(data: string) {
        // ...
        return result // 가공된 값 리턴
    }
}
```
