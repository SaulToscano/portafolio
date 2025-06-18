<template>
  <section class="certificates active section" id="certificates">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2 v-t="'pages.certificates.certificates'" />
        </div>
      </div>

      <FragmentsCertifications />
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports';

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
