[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / BaseComponent

# Class: BaseComponent

## Hierarchy

- **`BaseComponent`**

  ↳ [`ConverterComponent`](ConverterComponent.md)

  ↳ [`ListenerComponent`](ListenerComponent.md)

  ↳ [`ApplicationCommandComponent`](ApplicationCommandComponent.md)

  ↳ [`TextCommandComponent`](TextCommandComponent.md)

## Table of contents

### Constructors

- [constructor](BaseComponent.md#constructor)

### Properties

- [argTypes](BaseComponent.md#argtypes)
- [hooks](BaseComponent.md#hooks)
- [method](BaseComponent.md#method)

### Methods

- [\_init](BaseComponent.md#_init)
- [execute](BaseComponent.md#execute)
- [executeGlobalHook](BaseComponent.md#executeglobalhook)
- [executeHook](BaseComponent.md#executehook)

## Constructors

### constructor

• **new BaseComponent**(): [`BaseComponent`](BaseComponent.md)

#### Returns

[`BaseComponent`](BaseComponent.md)

## Properties

### argTypes

• **argTypes**: `Collection`\<`number`, [`ComponentArgument`](ComponentArgument.md)\>

#### Defined in

[src/core/components/BaseComponent.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L11)

___

### hooks

• **hooks**: [`ComponentHookStore`](../modules.md#componenthookstore)

#### Defined in

[src/core/components/BaseComponent.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L9)

___

### method

• **method**: `AnyFunction`

#### Defined in

[src/core/components/BaseComponent.ts:7](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L7)

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

#### Defined in

[src/core/components/BaseComponent.ts:35](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/BaseComponent.ts#L35)
