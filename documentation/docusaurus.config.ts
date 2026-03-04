import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';

import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  baseUrl: '/react-native-boilerplate/',
  favicon: 'img/TOM-small.webp',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'thecodingmachine',
  plugins: [
    function myPlugin() {
      return {
        configurePostCss(postcssOptions) {
          // eslint-disable-next-line @typescript-eslint/no-require-imports
          postcssOptions.plugins = [require('@tailwindcss/postcss')];
          return postcssOptions;
        },
        name: 'docusaurus-tailwindcss',
      };
    },
  ],
  presets: [
    [
      'classic',
      {
        blog: {
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/blog',
          showReadingTime: true,
        },
        docs: {
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/main/website-documentation/docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],
  projectName: 'react-native-boilerplate',
  tagline: 'Simple, Lightweight and Scalable.',
  themeConfig: {
    algolia: {
      apiKey: '983439b6ebef49ed3394ecfa290f1c6a',
      appId: '9PEYN0H12D',
      contextualSearch: true,
      indexName: 'rnboilerplate',
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} React Native Boilerplate, by TheCodingMachine. Built with Docusaurus.`,
      links: [
        {
          items: [
            {
              label: 'Javascript or TypeScript ? You choose !',
              to: '/docs/installation#using-the-boilerplate',
            },
            {
              label: 'Navigation',
              to: '/docs/navigate',
            },
            {
              label: 'Data fetching',
              to: '/docs/data-fetching',
            },
            {
              label: 'Internationalization',
              to: '/docs/internationalization',
            },
            {
              label: 'Multi theming',
              to: '/docs/theming/how-to-use',
            },
          ],
          title: 'Features',
        },
        {
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/thecodingmachine/react-native-boilerplate',
            },
          ],
          title: 'More',
        },
      ],
      style: 'dark',
    },
    navbar: {
      items: [
        {
          docId: 'getting-started',
          label: 'Docs',
          position: 'left',
          type: 'doc',
        },
        { label: 'Blog', position: 'left', to: '/blog' },
        {
          className: 'header-github-link group',
          label: ' ',
          position: 'right',
          to: 'https://github.com/thecodingmachine/react-native-boilerplate',
        },
      ],
      logo: {
        alt: 'octopus tentacle logo',
        src: 'img/TOM-small.webp',
      },
      title: 'React Native Boilerplate',
    },
    prism: {
      darkTheme: prismThemes.dracula,
      theme: prismThemes.github,
    },
  },
  title: 'The React Native Boilerplate',

  url: 'https://thecodingmachine.github.io',
};

export default config;
