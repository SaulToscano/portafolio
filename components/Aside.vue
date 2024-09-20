<template>
  <aside class="aside">
    <div class="logo">
      <nuxt-link to="/"><span>S</span>aul</nuxt-link>
    </div>
    <ul class="nav">
      <li><nuxt-link to="/" active-class="active"><Icon name="ic:round-home" size="1.5em" />Home</nuxt-link></li>
      <li><nuxt-link to="/about" active-class="active"><Icon name="mdi:user" size="1.5em" />About</nuxt-link></li>
      <li><nuxt-link to="/certificates" active-class="active"><Icon name="fa6-solid:award" size="1.5em" />Certificates</nuxt-link></li>
      <li><nuxt-link to="/portfolio" active-class="active"><Icon name="ph:briefcase-fill" size="1.5em" />Portfolio</nuxt-link></li>
      <li><nuxt-link to="/contact" active-class="active"><Icon name="fa6-solid:comments" size="1.5em" />Contact</nuxt-link></li>
    </ul>
  </aside>
</template>