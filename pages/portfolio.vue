<template>
  <section class="portfolio active section" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>Portfolio</h2>
        </div>
      </div>

      <div class="row">
        <FragmentsProyects />
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
  title: "Portfolio",
  meta: [
    {
      name: "Portfolio",
      content: "My developer portfolio"
    }
  ]
})
</script>