// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'icons',
        dir: './assets/icons'
      }
    ]
  },
  css: [
    '~/assets/style/reset.css',
    '~/assets/style/variables.css',
    '~/assets/style/main.css',
  ]
})
