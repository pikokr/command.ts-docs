[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / ApplicationCommandComponent

# Class: ApplicationCommandComponent

## Hierarchy

- [`BaseComponent`](BaseComponent.md)

  ↳ **`ApplicationCommandComponent`**

## Table of contents

### Constructors

- [constructor](ApplicationCommandComponent.md#constructor)

### Properties

- [argTypes](ApplicationCommandComponent.md#argtypes)
- [hooks](ApplicationCommandComponent.md#hooks)
- [method](ApplicationCommandComponent.md#method)
- [options](ApplicationCommandComponent.md#options)
- [subcommandGroup](ApplicationCommandComponent.md#subcommandgroup)
- [subcommandGroupChild](ApplicationCommandComponent.md#subcommandgroupchild)

### Methods

- [\_init](ApplicationCommandComponent.md#_init)
- [execute](ApplicationCommandComponent.md#execute)
- [executeGlobalHook](ApplicationCommandComponent.md#executeglobalhook)
- [executeHook](ApplicationCommandComponent.md#executehook)

## Constructors

### constructor

• **new ApplicationCommandComponent**(`options`): [`ApplicationCommandComponent`](ApplicationCommandComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `UserApplicationCommandData` \| `MessageApplicationCommandData` \| `Omit`\<`ChatInputApplicationCommandData`, ``"options"``\> |

#### Returns

[`ApplicationCommandComponent`](ApplicationCommandComponent.md)

#### Overrides

[BaseComponent](BaseComponent.md).[constructor](BaseComponent.md#constructor)

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:17](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L17)

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

• **options**: [`ApplicationCommandComponentOptions`](../modules.md#applicationcommandcomponentoptions)

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:12](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L12)

___

### subcommandGroup

• `Optional` **subcommandGroup**: [`SubCommandGroup`](SubCommandGroup.md)

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:14](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L14)

___

### subcommandGroupChild

• `Optional` **subcommandGroupChild**: [`SubCommandGroupChild`](SubCommandGroupChild.md)

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:15](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L15)

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
