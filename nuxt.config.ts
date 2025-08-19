// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon'
  ],
  css: [
    '~/assets/style/reset.css',
    '~/assets/style/variables.css',
    '~/assets/style/main.css',
  ]
})
