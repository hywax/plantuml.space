export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  srcDir: 'src',
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  components: [
    { path: '~/components/elements', prefix: 'E' },
    '~/components',
  ],
  i18n: {
    langDir: 'locales',
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      alwaysRedirect: true,
    },
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-US.json' },
      { code: 'ru', iso: 'ru-RU', name: 'Русский', file: 'ru-RU.json' },
      // { code: 'zh', iso: 'zh-CN', name: '中文', file: 'zh-CN.json' },
      // { code: 'hi', iso: 'hi-IN', name: 'हिंदी', file: 'hi-IN.json' },
    ],
  },
  runtimeConfig: {
    public: {
      repositoryUrl: 'https://github.com/hywax/plantuml.space',
      boostyUrl: '#',
      authorUrl: 'https://hywax.space',
    },
  },
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  fonts: {
    provider: 'google',
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  css: ['~/assets/css/main.css'],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
