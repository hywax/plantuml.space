export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  srcDir: 'src',
  modules: [
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    'nuxt-primevue',
  ],
  primevue: {
    usePrimeVue: true,
    importTheme: {
      from: '~~/theme.config',
    },
  },
  colorMode: {
    classSuffix: '',
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
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    'primeicons/primeicons.css',
    '~/assets/css/main.css',
  ],
  nitro: {
    esbuild: {
      options: {
        target: 'esnext',
      },
    },
  },
})
