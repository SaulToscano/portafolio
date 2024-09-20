<template>
  <section class="home active section" id="home">
				<div class="container">
					<div class="row">

						<div class="home-info padd-15">
							<h3 class="hello">{{ $t('pages.home.presentation') }} <span class="name">Saul Toscano</span></h3>
							<h3 class="my-profession">{{ $t('pages.home.im') }} <span ref="typedElement" class="typing"></span></h3>
							<p>{{ $t('pages.home.description') }}</p>

							<div class="row">
								<a href="https://www.linkedin.com/in/saul-toscano-110045232/" target="_blank" class="btn">
									<Icon name="ri:linkedin-fill" size="36px" />
								</a>
								<a href="https://github.com/SaulToscano" target="_blank" class="btn">
									<Icon name="mdi:github" size="36px" />	
								</a>
							</div>

							<nuxt-link to="/contact" class="btn hire-me">{{ $t('pages.home.contact') }}</nuxt-link>
						</div>

						<div class="home-img padd-15">
							<NuxtImg src="/images/myPhoto1.jpg" alt="profile-picture" />
						</div>
					</div>
				</div>
			</section>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const typedElement = ref(null);
let typedInstance = null  // Keep track of Typed.js instance

// Function to initialize Typed.js
const initializeTyped = () => {
  const { $typed } = useNuxtApp()

  // Get the translated strings
  const strings = [
		t('pages.home.typed')
  ]

  // Destroy previous instance if it exists to avoid multiple initializations
  if (typedInstance) {
    typedInstance.destroy()
  }

  // Initialize Typed.js with translated strings
  typedInstance = $typed(typedElement.value, {
    strings: strings,
    typeSpeed: 65,
    backSpeed: 65,
    loop: true
  })
}

onMounted(() => {
  // Initialize Typed.js when component is mounted
  initializeTyped()
})

// Watch for changes in locale and reinitialize Typed.js
watch(locale, () => {
  initializeTyped()
})

useHead({
  title: "Home",
  meta: [
    {
      name: "Home",
      content: "My homepage"
    }
  ]
})
</script>
