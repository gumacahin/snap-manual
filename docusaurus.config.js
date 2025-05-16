/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SNAP Hydroponics Manual',
  tagline: 'Safe, easy to use and low-cost hydroponics system that is ideal for household level and small-scale commercial vegetable production.',
  url: 'https://snap-hydroponics.web.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fil'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      fil: {
        label: 'Filipino',
        direction: 'ltr',
      },
    },
  },
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'gumacahin', // Usually your GitHub org/user name.
  projectName: 'snap-manual', // Usually your repo name.
  themeConfig: {
    algolia: {
      apiKey: '4030104f9c6138fe6eee1b34cc1aeafd',
      indexName: 'snaphydroponics',
      appId: 'snaphydroponics',
    },
    navbar: {
      hideOnScroll: true,
      title: 'SNAP Hydroponics',
      logo: {
        alt: 'SNAP Hydroponics',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg'
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Manual',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Manual',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Frequently Asked Questions',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Happy Grower’s Channel',
              href: 'https://youtube.com/happygrower',
            },
            {
              label: 'SNAP Hydroponics Growers',
              href: 'https://facebook.com/groups/snap.hydroponics.growers',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Unofficial SNAP Hydroponics Website',
              href: 'https://snaphydro.wordpress.com/',
            },
            {
              label: 'SNAP Hydroponics Official Facebook Page',
              href: 'https://facebook.com/uplbipbsnap/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gumacahin/snap-manual',
            },
          ],
        },
      ],
      copyright: `Lovingly made by <a href="https://alviar.me">Marco Enrico Alviar</a>. Built with Docusaurus.`,
    },
    image: 'img/snap.png',
    metadata: [
      {
        name: 'theme-color',
        content: '#228d0d'
      },
      {
        property: 'og:image',
        content: '/img/snap-manual-soc.png'
      },
    ],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gumacahin/snap-manual/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gumacahin/snap-manual/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        size: 1000
      }
    ],
    [
      '@docusaurus/plugin-pwa',
      {
        debug: true,
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/snap.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(34,141,13)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: '/img/snap.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: '/img/snap.svg',
            color: 'rgb(34, 141, 13)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: '/img/snap.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ],
  ],
};
