[@pikokr/command.ts](../README.md) / [Exports](../modules.md) / ApplicationCommandExtension

# Class: ApplicationCommandExtension

## Hierarchy

- `CTSExtension`

  ↳ **`ApplicationCommandExtension`**

## Table of contents

### Constructors

- [constructor](ApplicationCommandExtension.md#constructor)

### Properties

- [\_logger](ApplicationCommandExtension.md#_logger)
- [config](ApplicationCommandExtension.md#config)
- [unmanagedCommands](ApplicationCommandExtension.md#unmanagedcommands)

### Accessors

- [client](ApplicationCommandExtension.md#client)
- [commandClient](ApplicationCommandExtension.md#commandclient)
- [logger](ApplicationCommandExtension.md#logger)

### Methods

- [chatInteraction](ApplicationCommandExtension.md#chatinteraction)
- [commandInteraction](ApplicationCommandExtension.md#commandinteraction)
- [convertArguments](ApplicationCommandExtension.md#convertarguments)
- [interactionCreate](ApplicationCommandExtension.md#interactioncreate)
- [messageInteraction](ApplicationCommandExtension.md#messageinteraction)
- [registerUnmanagedCommand](ApplicationCommandExtension.md#registerunmanagedcommand)
- [sync](ApplicationCommandExtension.md#sync)
- [userInteraction](ApplicationCommandExtension.md#userinteraction)

## Constructors

### constructor

• **new ApplicationCommandExtension**(`config`): [`ApplicationCommandExtension`](ApplicationCommandExtension.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`ApplicationCommandExtensionConfig`](../modules.md#applicationcommandextensionconfig) |

#### Returns

[`ApplicationCommandExtension`](ApplicationCommandExtension.md)

#### Overrides

CTSExtension.constructor

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:37](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L37)

## Properties

### \_logger

• `Protected` `Optional` **\_logger**: `Logger`\<`unknown`\>

#### Inherited from

CTSExtension.\_logger

#### Defined in

[src/core/extensions/Extension.ts:17](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L17)

___

### config

• **config**: [`ApplicationCommandExtensionConfig`](../modules.md#applicationcommandextensionconfig)

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:37](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L37)

___

### unmanagedCommands

• **unmanagedCommands**: \{ `defaultMemberPermissions?`: ``null`` \| `PermissionResolvable` ; `dmPermission?`: `boolean` ; `guilds?`: `string`[] ; `name`: `string` ; `nameLocalizations?`: `Partial`\<`Record`\<``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> ; `nsfw?`: `boolean` ; `type?`: `ChatInput` \| `User` \| `Message`  }[] = `[]`

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:41](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L41)

## Accessors

### client

• `get` **client**(): `Client`\<`boolean`\>

#### Returns

`Client`\<`boolean`\>

#### Inherited from

CTSExtension.client

#### Defined in

[src/core/extensions/Extension.ts:13](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L13)

___

### commandClient

• `get` **commandClient**(): [`CommandClient`](CommandClient.md)

#### Returns

[`CommandClient`](CommandClient.md)

#### Inherited from

CTSExtension.commandClient

#### Defined in

[src/core/extensions/Extension.ts:9](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L9)

___

### logger

• `get` **logger**(): `Logger`\<`unknown`\>

#### Returns

`Logger`\<`unknown`\>

#### Inherited from

CTSExtension.logger

#### Defined in

[src/core/extensions/CTSExtension.ts:5](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/CTSExtension.ts#L5)

## Methods

### chatInteraction

▸ **chatInteraction**(`i`): `Promise`\<`ChatInputCommandInteraction`\<`CacheType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `ChatInputCommandInteraction`\<`CacheType`\> |

#### Returns

`Promise`\<`ChatInputCommandInteraction`\<`CacheType`\>\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:346](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L346)

___

### commandInteraction

▸ **commandInteraction**(`i`): `Promise`\<`UserContextMenuCommandInteraction`\<`CacheType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UserContextMenuCommandInteraction`\<`CacheType`\> |

#### Returns

`Promise`\<`UserContextMenuCommandInteraction`\<`CacheType`\>\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:373](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L373)

___

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

#### Inherited from

CTSExtension.convertArguments

#### Defined in

[src/core/extensions/Extension.ts:24](https://github.com/pikokr/command.ts/blob/7d0f15d/src/core/extensions/Extension.ts#L24)

___

### interactionCreate

▸ **interactionCreate**(`i`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `Interaction` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:49](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L49)

___

### messageInteraction

▸ **messageInteraction**(`i`): `Promise`\<`MessageContextMenuCommandInteraction`\<`CacheType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `MessageContextMenuCommandInteraction`\<`CacheType`\> |

#### Returns

`Promise`\<`MessageContextMenuCommandInteraction`\<`CacheType`\>\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:355](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L355)

___

### registerUnmanagedCommand

▸ **registerUnmanagedCommand**(`command`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `Object` |
| `command.defaultMemberPermissions?` | ``null`` \| `PermissionResolvable` |
| `command.dmPermission?` | `boolean` |
| `command.guilds?` | `string`[] |
| `command.name` | `string` |
| `command.nameLocalizations?` | `Partial`\<`Record`\<``"id"`` \| ``"en-US"`` \| ``"en-GB"`` \| ``"bg"`` \| ``"zh-CN"`` \| ``"zh-TW"`` \| ``"hr"`` \| ``"cs"`` \| ``"da"`` \| ``"nl"`` \| ``"fi"`` \| ``"fr"`` \| ``"de"`` \| ``"el"`` \| ``"hi"`` \| ``"hu"`` \| ``"it"`` \| ``"ja"`` \| ``"ko"`` \| ``"lt"`` \| ``"no"`` \| ``"pl"`` \| ``"pt-BR"`` \| ``"ro"`` \| ``"ru"`` \| ``"es-ES"`` \| ``"sv-SE"`` \| ``"th"`` \| ``"tr"`` \| ``"uk"`` \| ``"vi"``, ``null`` \| `string`\>\> |
| `command.nsfw?` | `boolean` |
| `command.type?` | `ChatInput` \| `User` \| `Message` |

#### Returns

`void`

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:44](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L44)

___

### sync

▸ **sync**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:143](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L143)

___

### userInteraction

▸ **userInteraction**(`i`): `Promise`\<`UserContextMenuCommandInteraction`\<`CacheType`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `i` | `UserContextMenuCommandInteraction`\<`CacheType`\> |

#### Returns

`Promise`\<`UserContextMenuCommandInteraction`\<`CacheType`\>\>

#### Defined in

[src/applicationCommand/ApplicationCommandExtension.ts:364](https://github.com/pikokr/command.ts/blob/7d0f15d/src/applicationCommand/ApplicationCommandExtension.ts#L364)
