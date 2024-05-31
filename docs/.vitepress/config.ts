import { defineConfig } from 'vitepress'
import en from './locales/en'
import ru from './locales/ru'

export default defineConfig({
  title: 'PlantUML Space',
  themeConfig: {
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hywax/plantuml.space' },
    ],
  },
  ignoreDeadLinks: [
    (url) => {
      return !url.toLowerCase().includes('_parts')
    },
  ],
  locales: {
    root: { label: 'English', ...en },
    ru: { label: 'Русский', ...ru },
  },
})
