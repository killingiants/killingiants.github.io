// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
  ],

  devtools: { enabled: true },

  eslint: {
    lintOnStart: false,
  }
})
