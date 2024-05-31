import { defineConfig } from 'vitepress'
import { getVersion } from '../utils'

export default defineConfig({
  description: '',
  lang: 'en-US',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: getVersion(),
        items: [
          { text: 'Changelog', link: '/other/changelog' },
        ],
      },
    ],
    sidebar: [
      {
        text: 'Other',
        base: '/other',
        collapsed: true,
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'License', link: '/license' },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/hywax/plantuml.space/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium',
      },
    },
    search: {
      provider: 'local',
    },
  },
})
