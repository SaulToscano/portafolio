<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import '~/assets/style.css'
import '~/assets/skins/color-4.css'

useSeoMeta({
  title: 'Portafolio',
  description: 'portafolio en mantenimiento'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>