[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / SubCommandGroup

# Class: SubCommandGroup

## Table of contents

### Constructors

- [constructor](SubCommandGroup.md#constructor)

### Properties

- [guilds](SubCommandGroup.md#guilds)
- [options](SubCommandGroup.md#options)

### Methods

- [command](SubCommandGroup.md#command)
- [createChild](SubCommandGroup.md#createchild)

## Constructors

### constructor

• **new SubCommandGroup**(`options`, `guilds?`): [`SubCommandGroup`](SubCommandGroup.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`\<`ChatInputApplicationCommandData`, ``"type"``\> |
| `guilds?` | `string`[] |

#### Returns

[`SubCommandGroup`](SubCommandGroup.md)

#### Defined in

[src/applicationCommand/group.ts:7](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L7)

## Properties

### guilds

• `Optional` **guilds**: `string`[]

#### Defined in

[src/applicationCommand/group.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L9)

___

### options

• **options**: `Omit`\<`ChatInputApplicationCommandData`, ``"type"``\>

#### Defined in

[src/applicationCommand/group.ts:8](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L8)

## Methods

### command

▸ **command**(`options`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`\<`ApplicationCommandSubGroupData`, ``"type"`` \| ``"options"``\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/applicationCommand/group.ts:12](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L12)

___

### createChild

▸ **createChild**(`options`): [`SubCommandGroupChild`](SubCommandGroupChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`\<`ApplicationCommandSubGroupData`, ``"type"`` \| ``"options"``\> |

#### Returns

[`SubCommandGroupChild`](SubCommandGroupChild.md)

#### Defined in

[src/applicationCommand/group.ts:21](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L21)
