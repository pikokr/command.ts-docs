[@pikokr/command.ts](README.md) / Exports

# @pikokr/command.ts

## Table of contents

### Classes

- [ApplicationCommandComponent](classes/ApplicationCommandComponent.md)
- [ApplicationCommandExtension](classes/ApplicationCommandExtension.md)
- [BaseComponent](classes/BaseComponent.md)
- [CommandClient](classes/CommandClient.md)
- [ComponentArgument](classes/ComponentArgument.md)
- [ComponentArgumentDecorator](classes/ComponentArgumentDecorator.md)
- [ConverterComponent](classes/ConverterComponent.md)
- [Extension](classes/Extension.md)
- [ListenerComponent](classes/ListenerComponent.md)
- [OwnerOnlyError](classes/OwnerOnlyError.md)
- [Registry](classes/Registry.md)
- [SubCommandGroup](classes/SubCommandGroup.md)
- [SubCommandGroupChild](classes/SubCommandGroupChild.md)
- [TextCommandComponent](classes/TextCommandComponent.md)
- [TextCommandRestOption](classes/TextCommandRestOption.md)

### Type Aliases

- [ApplicationCommandComponentOptions](modules.md#applicationcommandcomponentoptions)
- [ApplicationCommandExtensionConfig](modules.md#applicationcommandextensionconfig)
- [ArgumentConvertOptions](modules.md#argumentconvertoptions)
- [ArgumentConvertOptionsArg](modules.md#argumentconvertoptionsarg)
- [ComponentArgumentStore](modules.md#componentargumentstore)
- [ComponentHookFn](modules.md#componenthookfn)
- [ComponentHookStore](modules.md#componenthookstore)
- [ComponentStore](modules.md#componentstore)
- [ListenerOptions](modules.md#listeneroptions)
- [ListenerOptionsArg](modules.md#listeneroptionsarg)
- [ModuleHookStore](modules.md#modulehookstore)
- [TextCommandConfig](modules.md#textcommandconfig)
- [TextCommandOptions](modules.md#textcommandoptions)

### Functions

- [applicationCommand](modules.md#applicationcommand)
- [argConverter](modules.md#argconverter)
- [command](modules.md#command)
- [createArgumentDecorator](modules.md#createargumentdecorator)
- [createCheckDecorator](modules.md#createcheckdecorator)
- [createComponentDecorator](modules.md#createcomponentdecorator)
- [createComponentHook](modules.md#createcomponenthook)
- [getComponent](modules.md#getcomponent)
- [getComponentArgumentStore](modules.md#getcomponentargumentstore)
- [getComponentStore](modules.md#getcomponentstore)
- [getModuleHookStore](modules.md#getmodulehookstore)
- [listener](modules.md#listener)
- [mergeMethodDecorators](modules.md#mergemethoddecorators)
- [moduleHook](modules.md#modulehook)
- [option](modules.md#option)
- [ownerOnly](modules.md#owneronly)
- [rest](modules.md#rest)

## Type Aliases

### ApplicationCommandComponentOptions

Ƭ **ApplicationCommandComponentOptions**: `UserApplicationCommandData` \| `MessageApplicationCommandData` \| `Omit`\<`ChatInputApplicationCommandData`, ``"options"``\> & \{ `guilds?`: `Snowflake`[] ; `type`: `ApplicationCommandType`  }

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:6](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L6)

___

### ApplicationCommandExtensionConfig

Ƭ **ApplicationCommandExtensionConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `guilds?` | `Snowflake`[] |

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:32](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L32)

___

### ArgumentConvertOptions

Ƭ **ArgumentConvertOptions**\<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `component` | `unknown` |
| `parameterless` | `boolean` |
| `type` | `T` |

#### Defined in

[src/core/converter/index.ts:4](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/converter/index.ts#L4)

___

### ArgumentConvertOptionsArg

Ƭ **ArgumentConvertOptionsArg**\<`T`\>: `Omit`\<[`ArgumentConvertOptions`](modules.md#argumentconvertoptions)\<`T`\>, ``"parameterless"``\> & \{ `parameterless?`: `boolean`  }

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[src/core/converter/index.ts:6](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/converter/index.ts#L6)

___

### ComponentArgumentStore

Ƭ **ComponentArgumentStore**: `Collection`\<`number`, [`ComponentArgumentDecorator`](classes/ComponentArgumentDecorator.md)\>

#### Defined in

[src/core/components/decoratorCreator.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L9)

___

### ComponentHookFn

Ƭ **ComponentHookFn**\<`T`\>: (...`args`: `T`) => `void` \| `Promise`\<`void`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Type declaration

▸ (`...args`): `void` \| `Promise`\<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

##### Returns

`void` \| `Promise`\<`void`\>

#### Defined in

[src/core/hooks/componentHook.ts:4](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/componentHook.ts#L4)

___

### ComponentHookStore

Ƭ **ComponentHookStore**: `Collection`\<`string`, [`ComponentHookFn`](modules.md#componenthookfn)\<`unknown`[]\>[]\>

#### Defined in

[src/core/hooks/componentHook.ts:6](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/componentHook.ts#L6)

___

### ComponentStore

Ƭ **ComponentStore**: `Collection`\<`string` \| `symbol`, [`BaseComponent`](classes/BaseComponent.md)\>

#### Defined in

[src/core/components/decoratorCreator.ts:8](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L8)

___

### ListenerOptions

Ƭ **ListenerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `emitter` | `string` |
| `event` | `string` |

#### Defined in

[src/core/listener/index.ts:5](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/listener/index.ts#L5)

___

### ListenerOptionsArg

Ƭ **ListenerOptionsArg**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `emitter?` | `string` |
| `event` | `string` |

#### Defined in

[src/core/listener/index.ts:7](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/listener/index.ts#L7)

___

### ModuleHookStore

Ƭ **ModuleHookStore**: `Collection`\<`string`, [`ComponentHookFn`](modules.md#componenthookfn)\<`unknown`[]\>[]\>

#### Defined in

[src/core/hooks/moduleHook.ts:5](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/moduleHook.ts#L5)

___

### TextCommandConfig

Ƭ **TextCommandConfig**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prefix` | `string` \| `string`[] \| (`msg`: `Message`) => `Promise`\<`string` \| `string`[]\> \| `string` \| `string`[] |

#### Defined in

[src/textCommand/TextCommandExtension.ts:8](https://github.com/pikokr/command.ts/blob/7d0f15d/src/textCommand/TextCommandExtension.ts#L8)

___

### TextCommandOptions

Ƭ **TextCommandOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `aliases?` | `string`[] |
| `description?` | `string` |
| `name` | `string` |

#### Defined in

[src/textCommand/TextCommand.ts:4](https://github.com/pikokr/command.ts/blob/7d0f15d/src/textCommand/TextCommand.ts#L4)

## Functions

### applicationCommand

▸ **applicationCommand**(`options`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ApplicationCommandComponentOptions`](modules.md#applicationcommandcomponentoptions) |

#### Returns

`MethodDecorator`

#### Defined in

[src/applicationCommand/ApplicationCommand.ts:24](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommand.ts#L24)

___

### argConverter

▸ **argConverter**\<`T`\>(`options`): `MethodDecorator`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ArgumentConvertOptionsArg`](modules.md#argumentconvertoptionsarg)\<`T`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/converter/index.ts:18](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/converter/index.ts#L18)

___

### command

▸ **command**(`options`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TextCommandOptions`](modules.md#textcommandoptions) |

#### Returns

`MethodDecorator`

#### Defined in

[src/textCommand/TextCommand.ts:16](https://github.com/pikokr/command.ts/blob/7d0f15d/src/textCommand/TextCommand.ts#L16)

___

### createArgumentDecorator

▸ **createArgumentDecorator**\<`Options`\>(`type`): (`options`: `Options`) => `ParameterDecorator`

#### Type parameters

| Name |
| :------ |
| `Options` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | typeof [`ComponentArgumentDecorator`](classes/ComponentArgumentDecorator.md) |

#### Returns

`fn`

▸ (`options`): `ParameterDecorator`

##### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Options` |

##### Returns

`ParameterDecorator`

#### Defined in

[src/core/components/decoratorCreator.ts:61](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L61)

___

### createCheckDecorator

▸ **createCheckDecorator**(`fn`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`ComponentHookFn`](modules.md#componenthookfn)\<[[`CommandClient`](classes/CommandClient.md), `Interaction` \| `Message`\<`boolean`\>]\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/utils/checks.ts:8](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/utils/checks.ts#L8)

___

### createComponentDecorator

▸ **createComponentDecorator**(`component`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`BaseComponent`](classes/BaseComponent.md) |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/components/decoratorCreator.ts:29](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L29)

___

### createComponentHook

▸ **createComponentHook**\<`T`\>(`name`, `fn`): `MethodDecorator`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown`[] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `fn` | [`ComponentHookFn`](modules.md#componenthookfn)\<`T`\> |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/hooks/componentHook.ts:19](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/componentHook.ts#L19)

___

### getComponent

▸ **getComponent**(`target`, `key`): `undefined` \| [`BaseComponent`](classes/BaseComponent.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `key` | `string` \| `symbol` |

#### Returns

`undefined` \| [`BaseComponent`](classes/BaseComponent.md)

#### Defined in

[src/core/components/decoratorCreator.ts:23](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L23)

___

### getComponentArgumentStore

▸ **getComponentArgumentStore**(`target`, `key`): [`ComponentArgumentStore`](modules.md#componentargumentstore)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |
| `key` | `string` \| `symbol` |

#### Returns

[`ComponentArgumentStore`](modules.md#componentargumentstore)

#### Defined in

[src/core/components/decoratorCreator.ts:49](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L49)

___

### getComponentStore

▸ **getComponentStore**(`target`): [`ComponentStore`](modules.md#componentstore)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

[`ComponentStore`](modules.md#componentstore)

#### Defined in

[src/core/components/decoratorCreator.ts:11](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L11)

___

### getModuleHookStore

▸ **getModuleHookStore**(`target`): [`ModuleHookStore`](modules.md#modulehookstore)

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `object` |

#### Returns

[`ModuleHookStore`](modules.md#modulehookstore)

#### Defined in

[src/core/hooks/moduleHook.ts:7](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/moduleHook.ts#L7)

___

### listener

▸ **listener**(`options`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`ListenerOptionsArg`](modules.md#listeneroptionsarg) |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/listener/index.ts:19](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/listener/index.ts#L19)

___

### mergeMethodDecorators

▸ **mergeMethodDecorators**(`decorators`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `decorators` | `MethodDecorator`[] |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/utils/decorators.ts:1](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/utils/decorators.ts#L1)

___

### moduleHook

▸ **moduleHook**(`name`): `MethodDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`MethodDecorator`

#### Defined in

[src/core/hooks/moduleHook.ts:19](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/hooks/moduleHook.ts#L19)

___

### option

▸ **option**(`options`): `ParameterDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `ApplicationCommandOptionData` |

#### Returns

`ParameterDecorator`

#### Defined in

[src/core/components/decoratorCreator.ts:62](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L62)

___

### ownerOnly

▸ **ownerOnly**\<`T`\>(`target`, `propertyKey`, `descriptor`): `void` \| `TypedPropertyDescriptor`\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `Object` |
| `propertyKey` | `string` \| `symbol` |
| `descriptor` | `TypedPropertyDescriptor`\<`T`\> |

#### Returns

`void` \| `TypedPropertyDescriptor`\<`T`\>

#### Defined in

node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.decorators.legacy.d.ts:21

___

### rest

▸ **rest**(`options`): `ParameterDecorator`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `void` |

#### Returns

`ParameterDecorator`

#### Defined in

[src/core/components/decoratorCreator.ts:62](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/components/decoratorCreator.ts#L62)
