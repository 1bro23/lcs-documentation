import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/eslint",
    "@nuxt/ui",
    "@nuxtjs/color-mode",
    "@pinia/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.css"],
  colorMode: {
    classSuffix: "",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  runtimeConfig: {
    public: {
      apiSettings: {
        base: process.env.LCS_DOCUMENTATION_APISETTINGS__BASE,
      },
    },
  },
});