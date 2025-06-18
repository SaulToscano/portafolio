<template>
  <section class="contact active section" id="contact">
    <div class="container">
      <div class="row">
        <div class="section-title padd-15">
          <h2 v-t="'pages.contact.title'" />
        </div>
      </div>

      <h3 class="contact-title padd-15" v-t="'pages.contact.question'" />
      <h4 class="contact-sub-title padd-15" v-t="'pages.contact.contact'" />

      <div class="row">
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="mdi:envelope" class="contact-icon" /></div>
          <h4>Email</h4>
          <p>saul.toscano.robles@gmail.com</p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="mdi:github" class="contact-icon" /></div>
          <h4>Github</h4>
          <p>
            <a href="https://github.com/SaulToscano" target="_blank" style="all: unset; cursor: pointer;">github.com/SaulToscano</a>
          </p>
        </div>
        <!-- Contact info item end -->
        <!-- Contact info item start -->
        <div class="contact-info-item padd-15">
          <div class="icon"><Icon name="ri:linkedin-fill" class="contact-icon" /></div>
          <h4 v-t="'pages.contact.connect'" />
          <p>
            <a href="https://www.linkedin.com/in/saul-toscano-110045232/" target="_blank" style="all: unset; cursor: pointer;">
              www.linkedin.com/in/saul-toscano-110045232/
            </a>
          </p>
        </div>
        <!-- Contact info item end -->
      </div>

      <h3 class="contact-title padd-15" v-t="'pages.contact.send'" />
      <h4 class="contact-sub-title padd-15" v-t="'pages.contact.form'" />

      <!-- Contact form start -->
      <Form />
      <!-- Contact form end -->
    </div>
  </section>
</template>

<script setup>
import { useHead } from '#imports';

useHead({
  title: "Contact me",
  meta: [
    {
      name: "Contact me",
      content: "Send me a message!"
    }
  ]
})
</script>
