import React from "react"
import { DocsThemeConfig } from "nextra-theme-docs"

const config: DocsThemeConfig = {
	logo: <b>Command.TS</b>,
	project: {
		link: "https://github.com/pikokr/command.ts",
	},
	chat: {
		link: "https://discord.gg/EkFHRG4TZZ",
	},
	docsRepositoryBase: "https://github.com/pikokr/command.ts-docs/edit/dev",
	footer: {
		text: "Command.TS",
	},
	search: {
		placeholder: "문서 검색하기...",
	},
	sidebar: {
		toggleButton: true,
	},
	useNextSeoProps: () => ({
		titleTemplate: "%s - Command.TS",
		description: "A simple framework for discord.js typescript",
	}),
}

export default config
