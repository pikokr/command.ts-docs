[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / SubCommandGroupChild

# Class: SubCommandGroupChild

## Table of contents

### Constructors

- [constructor](SubCommandGroupChild.md#constructor)

### Properties

- [options](SubCommandGroupChild.md#options)
- [parent](SubCommandGroupChild.md#parent)

### Methods

- [command](SubCommandGroupChild.md#command)

## Constructors

### constructor

• **new SubCommandGroupChild**(`options`, `parent`): [`SubCommandGroupChild`](SubCommandGroupChild.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`\<`ApplicationCommandSubGroupData`, ``"type"`` \| ``"options"``\> |
| `parent` | [`SubCommandGroup`](SubCommandGroup.md) |

#### Returns

[`SubCommandGroupChild`](SubCommandGroupChild.md)

#### Defined in

[src/applicationCommand/group.ts:27](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L27)

## Properties

### options

• **options**: `Omit`\<`ApplicationCommandSubGroupData`, ``"type"`` \| ``"options"``\>

#### Defined in

[src/applicationCommand/group.ts:28](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L28)

___

### parent

• **parent**: [`SubCommandGroup`](SubCommandGroup.md)

#### Defined in

[src/applicationCommand/group.ts:29](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L29)

## Methods

### command

▸ **command**(`options`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Omit`\<`ChatInputApplicationCommandData`, ``"type"`` \| ``"options"``\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/applicationCommand/group.ts:32](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/group.ts#L32)
