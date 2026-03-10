import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'VieNeu-TTS',
  tagline: 'Vietnamese Text-to-Speech with Instant Voice Cloning',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://lppduy.github.io',
  baseUrl: '/vieneu-tts-docs/',

  organizationName: 'lppduy',
  projectName: 'vieneu-tts-docs',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/lppduy/vieneu-tts-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'VieNeu-TTS',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/pnnbao97/VieNeu-TTS',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://huggingface.co/pnnbao-ump/VieNeu-TTS',
          label: 'HuggingFace',
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
            { label: 'Getting Started', to: '/docs/getting-started/installation' },
            { label: 'SDK Reference', to: '/docs/sdk/overview' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.gg/yJt8kzjzWZ' },
            { label: 'GitHub', href: 'https://github.com/pnnbao97/VieNeu-TTS' },
          ],
        },
        {
          title: 'Models',
          items: [
            { label: '0.5B Model', href: 'https://huggingface.co/pnnbao-ump/VieNeu-TTS' },
            { label: '0.3B Model', href: 'https://huggingface.co/pnnbao-ump/VieNeu-TTS-0.3B' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} VieNeu-TTS Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['python', 'bash', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
