export default defineNuxtConfig({
  devtools: {
    enabled: false,
  },
  srcDir: 'src',
  modules: [
    '@nuxt/ui',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
  ],
  components: [
    { path: '~/components/elements', prefix: 'E' },
    '~/components',
  ],
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
