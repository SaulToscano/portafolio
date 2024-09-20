<template>
  <section class="certificates active section" id="certificates">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2>Certificates</h2>
        </div>
      </div>

      <FragmentsCertifications />
    </div>
  </section>
</template>

<script setup>
import { useHead } from 'nuxt/app';

useHead({
  title: "Certificates",
  meta: [
    {
      name: "Certificates",
      content: "My developer certificates"
    }
  ]
})
</script>
