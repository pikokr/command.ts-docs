[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / Registry

# Class: Registry

## Table of contents

### Constructors

- [constructor](Registry.md#constructor)

### Properties

- [client](Registry.md#client)
- [emitters](Registry.md#emitters)
- [extensions](Registry.md#extensions)
- [globalHooks](Registry.md#globalhooks)
- [logger](Registry.md#logger)

### Methods

- [addGlobalHook](Registry.md#addglobalhook)
- [getComponentsWithType](Registry.md#getcomponentswithtype)
- [getComponentsWithTypeGlobal](Registry.md#getcomponentswithtypeglobal)
- [loadAllModulesInDirectory](Registry.md#loadallmodulesindirectory)
- [loadModulesAtPath](Registry.md#loadmodulesatpath)
- [registerEventEmitter](Registry.md#registereventemitter)
- [registerEventListeners](Registry.md#registereventlisteners)
- [registerModule](Registry.md#registermodule)
- [registerModules](Registry.md#registermodules)
- [reloadModules](Registry.md#reloadmodules)
- [runModuleHook](Registry.md#runmodulehook)
- [unregisterEventListeners](Registry.md#unregistereventlisteners)
- [unregisterModule](Registry.md#unregistermodule)

## Constructors

### constructor

• **new Registry**(`logger`, `client`): [`Registry`](Registry.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `logger` | `Logger`\<`unknown`\> |
| `client` | [`CommandClient`](CommandClient.md) |

#### Returns

[`Registry`](Registry.md)

#### Defined in

[src/core/structures/Registry.ts:24](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L24)

## Properties

### client

• **client**: [`CommandClient`](CommandClient.md)

#### Defined in

[src/core/structures/Registry.ts:26](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L26)

___

### emitters

• **emitters**: `Collection`\<`string`, `__module`\>

#### Defined in

[src/core/structures/Registry.ts:18](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L18)

___

### extensions

• **extensions**: `object`[] = `[]`

#### Defined in

[src/core/structures/Registry.ts:16](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L16)

___

### globalHooks

• **globalHooks**: `Record`\<`string`, [`ComponentHookFn`](../modules.md#componenthookfn)\<`unknown`[]\>[]\> = `{}`

#### Defined in

[src/core/structures/Registry.ts:22](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L22)

___

### logger

• **logger**: `Logger`\<`unknown`\>

#### Defined in

[src/core/structures/Registry.ts:20](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L20)

## Methods

### addGlobalHook

▸ **addGlobalHook**(`name`, `fn`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`ComponentHookFn`](../modules.md#componenthookfn)\<`unknown`[]\> |

#### Returns

`void`

#### Defined in

[src/core/structures/Registry.ts:33](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L33)

___

### getComponentsWithType

▸ **getComponentsWithType**\<`T`\>(`ext`, `type`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |
| `type` | `unknown` |

#### Returns

`T`[]

#### Defined in

[src/core/structures/Registry.ts:54](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L54)

___

### getComponentsWithTypeGlobal

▸ **getComponentsWithTypeGlobal**\<`T`\>(`type`): `T`[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `unknown` |

#### Returns

`T`[]

#### Defined in

[src/core/structures/Registry.ts:44](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L44)

___

### loadAllModulesInDirectory

▸ **loadAllModulesInDirectory**(`dir`, `pattern?`): `Promise`\<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `pattern?` | `RegExp` |

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[src/core/structures/Registry.ts:89](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L89)

___

### loadModulesAtPath

▸ **loadModulesAtPath**(`file`): `Promise`\<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[src/core/structures/Registry.ts:103](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L103)

___

### registerEventEmitter

▸ **registerEventEmitter**(`name`, `emitter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `emitter` | `__module` |

#### Returns

`void`

#### Defined in

[src/core/structures/Registry.ts:201](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L201)

___

### registerEventListeners

▸ **registerEventListeners**(`ext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |

#### Returns

`void`

#### Defined in

[src/core/structures/Registry.ts:60](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L60)

___

### registerModule

▸ **registerModule**(`ext`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/structures/Registry.ts:173](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L173)

___

### registerModules

▸ **registerModules**(`modules`, `p`): `Promise`\<`object`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modules` | `object` \| `object`[] |
| `p` | `string` |

#### Returns

`Promise`\<`object`[]\>

#### Defined in

[src/core/structures/Registry.ts:118](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L118)

___

### reloadModules

▸ **reloadModules**(): `Promise`\<\{ `error?`: `Error` ; `extensions?`: `object`[] ; `file`: `string` ; `result`: `boolean`  }[]\>

#### Returns

`Promise`\<\{ `error?`: `Error` ; `extensions?`: `object`[] ; `file`: `string` ; `result`: `boolean`  }[]\>

#### Defined in

[src/core/structures/Registry.ts:135](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L135)

___

### runModuleHook

▸ **runModuleHook**(`ext`, `hookName`, `...args`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |
| `hookName` | `string` |
| `...args` | `unknown`[] |

#### Returns

`void`

#### Defined in

[src/core/structures/Registry.ts:189](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L189)

___

### unregisterEventListeners

▸ **unregisterEventListeners**(`ext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |

#### Returns

`void`

#### Defined in

[src/core/structures/Registry.ts:76](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L76)

___

### unregisterModule

▸ **unregisterModule**(`ext`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ext` | `object` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/structures/Registry.ts:182](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/structures/Registry.ts#L182)
