export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  srcDir: 'src',
  modules: ['@nuxt/fonts', 'nuxt-primevue'],
  primevue: {
    importTheme: {
      from: '~~/theme.config',
    },
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
    defaults: {
      fallbacks: {
        serif: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica',
          'Arial',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css',
  ],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
