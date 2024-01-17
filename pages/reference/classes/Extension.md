[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / Extension

# Class: Extension

## Table of contents

### Constructors

- [constructor](Extension.md#constructor)

### Properties

- [\_logger](Extension.md#_logger)

### Accessors

- [client](Extension.md#client)
- [commandClient](Extension.md#commandclient)
- [logger](Extension.md#logger)

### Methods

- [convertArguments](Extension.md#convertarguments)

## Constructors

### constructor

• **new Extension**(): [`Extension`](Extension.md)

#### Returns

[`Extension`](Extension.md)

## Properties

### \_logger

• `Protected` `Optional` **\_logger**: `Logger`\<`unknown`\>

#### Defined in

[src/core/extensions/Extension.ts:17](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L17)

## Accessors

### client

• `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Defined in

[src/core/extensions/Extension.ts:13](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L13)

___

### commandClient

• `get` **commandClient**(): [`CommandClient`](CommandClient.md)

#### Returns

[`CommandClient`](CommandClient.md)

#### Defined in

[src/core/extensions/Extension.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L9)

___

### logger

• `get` **logger**(): `Logger`\<`unknown`\>

#### Returns

`Logger`\<`unknown`\>

#### Defined in

[src/core/extensions/Extension.ts:19](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L19)

## Methods

### convertArguments

▸ **convertArguments**(`component`, `argList`, `args`, `getConverterArgs`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `unknown` |
| `argList` | `unknown`[] |
| `args` | `Collection`\<`number`, [`ComponentArgument`](ComponentArgument.md)\> |
| `getConverterArgs` | (`arg`: [`ComponentArgument`](ComponentArgument.md), `index`: `number`, `converter`: [`ConverterComponent`](ConverterComponent.md)\<`unknown`\>) => `unknown`[] \| `Promise`\<`unknown`[]\> |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/core/extensions/Extension.ts:24](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L24)
