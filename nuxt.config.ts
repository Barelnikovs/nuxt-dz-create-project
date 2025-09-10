// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/icon', '@pinia/nuxt', 'pinia-plugin-persistedstate/nuxt'],
  runtimeConfig: {
    public: {
      APIURL: ''
    }
  },
  app: {
    pageTransition: {
      name: 'global-transition',
      mode: 'out-in'
    }
  },
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
  ],
  piniaPluginPersistedstate: {
    key: 'nuxtDZ_%id_store'
  }
})