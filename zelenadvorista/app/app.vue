<script setup lang="ts">
const config = useRuntimeConfig()

useHead({
  htmlAttrs: { lang: "en" },
  link: [{ rel: "canonical", href: config.public.siteUrl }],
})

useSeoMeta({
  titleTemplate: (t) => (t ? `${t} · MySite` : "MySite"),
  description: "MySite description (change this).",
  ogType: "website",
  ogSiteName: "MySite",
  twitterCard: "summary_large_image",
})
</script>

<template>
  <NuxtPage />
</template>
