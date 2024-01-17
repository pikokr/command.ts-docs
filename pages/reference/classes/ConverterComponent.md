[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / ConverterComponent

# Class: ConverterComponent\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`BaseComponent`](BaseComponent.md)

  ↳ **`ConverterComponent`**

## Table of contents

### Constructors

- [constructor](ConverterComponent.md#constructor)

### Properties

- [argTypes](ConverterComponent.md#argtypes)
- [hooks](ConverterComponent.md#hooks)
- [method](ConverterComponent.md#method)
- [options](ConverterComponent.md#options)

### Methods

- [\_init](ConverterComponent.md#_init)
- [execute](ConverterComponent.md#execute)
- [executeGlobalHook](ConverterComponent.md#executeglobalhook)
- [executeHook](ConverterComponent.md#executehook)

## Constructors

### constructor

• **new ConverterComponent**\<`T`\>(`options`): [`ConverterComponent`](ConverterComponent.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ArgumentConvertOptionsArg`](../modules.md#argumentconvertoptionsarg)\<`T`\> |

#### Returns

[`ConverterComponent`](ConverterComponent.md)\<`T`\>

#### Overrides

[BaseComponent](BaseComponent.md).[constructor](BaseComponent.md#constructor)

#### Defined in

[src/core/converter/index.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/converter/index.ts#L11)

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

• **options**: [`ArgumentConvertOptions`](../modules.md#argumentconvertoptions)\<`T`\>

#### Defined in

[src/core/converter/index.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/converter/index.ts#L9)

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
