// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [  "@nuxtjs/tailwindcss", 'nuxt-swiper','@hypernym/nuxt-anime' ],
  anime: {
    provide: true
  }
})