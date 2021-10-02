const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Command.TS',
  tagline: 'Discord.JS Command Framework for Typescript',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pikokr', // Usually your GitHub org/user name.
  projectName: 'command.ts-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Command.TS',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        {
          type: 'doc',
          docId: 'tutorial/intro',
          position: 'left',
          label: '튜토리얼',
        },
        {
          label: '애드온',
          type: 'dropdown',
          position: 'left',
          items: [
            {
              label: 'Views',
              type: 'doc',
              docId: 'addons/views/index'
            }
          ]
        },
        {
          label: 'API',
          position: 'left',
          to: 'https://v3-api.cts.pikokr.dev'
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [],
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pikokr/command.ts-v2',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://discord.gg/EEhcPzsGHV',
          label: 'Discord',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '튜토리얼',
              to: '/',
            },
            {
              label: 'API',
              to: 'https://v3-api.cts.pikokr.dev'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: '파랑이 놀이터',
              href: 'https://discord.gg/EkFHRG4TZZ',
            },
            {
              label: 'Command.TS Community',
              href: 'https://discord.gg/EEhcPzsGHV'
            }
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/pikokr/command.ts-v2',
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} © pikokr`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'dark'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/pikokr/command.ts-docs/edit/master/',
          routeBasePath: '/'
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko']
  },
};
