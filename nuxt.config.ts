// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n"
  ],

  app: {
    head: {
      title: import.meta.env.VITE_APP_NAME
    }
  },

  devtools: { enabled: true },

  eslint: {
    lintOnStart: false
  }
})
