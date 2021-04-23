/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'React Native Boilerplate',
  tagline: 'Ready to use react native architecture based on Separation of Concerns.',
  url: 'https://thecodingmachine.github.io',
  baseUrl: '/react-native-boilerplate/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'thecodingmachine',
  projectName: 'react-native-boilerplate',
  themeConfig: {
    algolia: {
      apiKey: '870ae81ec981530781f32849c55a593f',
      indexName: 'rnboilerplate',
      contextualSearch: true,
    },
    navbar: {
      title: 'RNBoilerplate',
      logo: {
        alt: 'React Native Boilerplate',
        src: 'img/TOM-small.png',
      },
      items: [
        {
          to: 'docs/Introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/thecodingmachine/react-native-boilerplate',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/TOM.png',
      },
      copyright: `Copyright © ${new Date().getFullYear()} TheCodingMachine, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/thecodingmachine/react-native-boilerplate/edit/master/website-documentation/blog',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
