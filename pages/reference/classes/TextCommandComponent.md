[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / TextCommandComponent

# Class: TextCommandComponent

## Hierarchy

- [`BaseComponent`](BaseComponent.md)

  ↳ **`TextCommandComponent`**

## Table of contents

### Constructors

- [constructor](TextCommandComponent.md#constructor)

### Properties

- [argTypes](TextCommandComponent.md#argtypes)
- [hooks](TextCommandComponent.md#hooks)
- [method](TextCommandComponent.md#method)
- [options](TextCommandComponent.md#options)

### Methods

- [\_init](TextCommandComponent.md#_init)
- [execute](TextCommandComponent.md#execute)
- [executeGlobalHook](TextCommandComponent.md#executeglobalhook)
- [executeHook](TextCommandComponent.md#executehook)

## Constructors

### constructor

• **new TextCommandComponent**(`options`): [`TextCommandComponent`](TextCommandComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TextCommandOptions`](../modules.md#textcommandoptions) |

#### Returns

[`TextCommandComponent`](TextCommandComponent.md)

#### Overrides

[BaseComponent](BaseComponent.md).[constructor](BaseComponent.md#constructor)

#### Defined in

[src/textCommand/TextCommand.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/textCommand/TextCommand.ts#L11)

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

• **options**: [`TextCommandOptions`](../modules.md#textcommandoptions)

#### Defined in

[src/textCommand/TextCommand.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/textCommand/TextCommand.ts#L11)

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
