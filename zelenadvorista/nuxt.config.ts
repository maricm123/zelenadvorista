// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/a11y',
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/hints',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-icon',
    'nuxt-schema-org',
    'nuxt-simple-sitemap',
    'nuxt-swagger-ui',
    'nuxt-vite-cache',
  ],

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "http://localhost:3000",
  },

  robots: {
    rules: [{ userAgent: "*", allow: "/" }],
  },
})