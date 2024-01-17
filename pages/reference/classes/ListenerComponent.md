[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / ListenerComponent

# Class: ListenerComponent

## Hierarchy

- [`BaseComponent`](BaseComponent.md)

  ↳ **`ListenerComponent`**

## Table of contents

### Constructors

- [constructor](ListenerComponent.md#constructor)

### Properties

- [argTypes](ListenerComponent.md#argtypes)
- [hooks](ListenerComponent.md#hooks)
- [method](ListenerComponent.md#method)
- [options](ListenerComponent.md#options)

### Methods

- [\_init](ListenerComponent.md#_init)
- [execute](ListenerComponent.md#execute)
- [executeGlobalHook](ListenerComponent.md#executeglobalhook)
- [executeHook](ListenerComponent.md#executehook)

## Constructors

### constructor

• **new ListenerComponent**(`options`): [`ListenerComponent`](ListenerComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ListenerOptionsArg`](../modules.md#listeneroptionsarg) |

#### Returns

[`ListenerComponent`](ListenerComponent.md)

#### Overrides

[BaseComponent](BaseComponent.md).[constructor](BaseComponent.md#constructor)

#### Defined in

[src/core/listener/index.ts:12](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/listener/index.ts#L12)

## Properties

### argTypes

• **argTypes**: `Collection`\<`number`, [`ComponentArgument`](ComponentArgument.md)\>

#### Inherited from

[BaseComponent](BaseComponent.md).[argTypes](BaseComponent.md#argtypes)

#### Defined in

[src/core/components/BaseComponent.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L11)

___

### hooks

• **hooks**: [`ComponentHookStore`](../modules.md#componenthookstore)

#### Inherited from

[BaseComponent](BaseComponent.md).[hooks](BaseComponent.md#hooks)

#### Defined in

[src/core/components/BaseComponent.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L9)

___

### method

• **method**: `AnyFunction`

#### Inherited from

[BaseComponent](BaseComponent.md).[method](BaseComponent.md#method)

#### Defined in

[src/core/components/BaseComponent.ts:7](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L7)

___

### options

• **options**: [`ListenerOptions`](../modules.md#listeneroptions)

#### Defined in

[src/core/listener/index.ts:10](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/listener/index.ts#L10)

## Methods

### \_init

▸ **_init**(`method`, `argTypes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | `AnyFunction` |
| `argTypes` | `unknown`[] |

#### Returns

`void`

#### Inherited from

[BaseComponent](BaseComponent.md).[_init](BaseComponent.md#_init)

#### Defined in

[src/core/components/BaseComponent.ts:13](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L13)

___

### execute

▸ **execute**(`target`, `args`, `beforeCallArgs?`): `Promise`\<`unknown`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `target` | `object` | `undefined` |
| `args` | `unknown`[] | `undefined` |
| `beforeCallArgs` | `unknown`[] | `args` |

#### Returns

`Promise`\<`unknown`\>

#### Inherited from

[BaseComponent](BaseComponent.md).[execute](BaseComponent.md#execute)

#### Defined in

[src/core/components/BaseComponent.ts:55](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L55)

___

### executeGlobalHook

▸ **executeGlobalHook**(`target`, `name`, `args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `name` | `string` |
| `args` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[BaseComponent](BaseComponent.md).[executeGlobalHook](BaseComponent.md#executeglobalhook)

#### Defined in

[src/core/components/BaseComponent.ts:21](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L21)

___

### executeHook

▸ **executeHook**(`target`, `name`, `args`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `name` | `string` |
| `args` | `unknown`[] |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[BaseComponent](BaseComponent.md).[executeHook](BaseComponent.md#executehook)

#### Defined in

[src/core/components/BaseComponent.ts:35](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L35)
