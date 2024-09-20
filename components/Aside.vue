<template>
  <aside class="aside">
    <div class="logo">
      <nuxt-link to="/"><span>S</span>aul</nuxt-link>
    </div>
    <ul class="nav">
      <li><nuxt-link to="/" active-class="active"><Icon name="ic:round-home" size="1.5em" />{{ $t('aside.home') }}</nuxt-link></li>
      <li><nuxt-link to="/about" active-class="active"><Icon name="mdi:user" size="1.5em" />{{ $t('aside.about') }}</nuxt-link></li>
      <li><nuxt-link to="/certificates" active-class="active"><Icon name="fa6-solid:award" size="1.5em" />{{ $t('aside.certificates') }}</nuxt-link></li>
      <li><nuxt-link to="/portfolio" active-class="active"><Icon name="ph:briefcase-fill" size="1.5em" />{{ $t('aside.portfolio') }}</nuxt-link></li>
      <li><nuxt-link to="/contact" active-class="active"><Icon name="fa6-solid:comments" size="1.5em" />{{ $t('aside.contact') }}</nuxt-link></li>
      <li><LanguageSwitcher /></li>
    </ul>
  </aside>
</template>