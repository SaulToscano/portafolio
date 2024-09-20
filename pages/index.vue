<template>
  <section class="home active section" id="home">
				<div class="container">
					<div class="row">

						<div class="home-info padd-15">
							<h3 class="hello">Hello, my name is <span class="name">Saul Toscano</span></h3>
							<h3 class="my-profession">I'm a <span ref="typedElement" class="typing"></span></h3>
							<p>
								Full-stack Developer, I am a serious person, committed to my work, a bit of a perfectionist, 
								I like my work to be of quality, and I always look for continuous improvement, 
								with extensive experience in web development and microservices,
							</p>

							<div class="row">
								<a href="https://www.linkedin.com/in/saul-toscano-110045232/" target="_blank" class="btn">
									<Icon name="ri:linkedin-fill" size="36px" />
								</a>
								<a href="https://github.com/SaulToscano" target="_blank" class="btn">
									<Icon name="mdi:github" size="36px" />	
								</a>
							</div>

							<nuxt-link to="/contact" class="btn hire-me">Contact</nuxt-link>
						</div>

						<div class="home-img padd-15">
							<NuxtImg src="/images/myPhoto1.jpg" alt="profile-picture" />
						</div>
					</div>
					<div class="row">

					</div>
				</div>
			</section>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { onMounted, ref } from 'vue';

const typedElement = ref(null);

onMounted(() => {
  const { $typed } = useNuxtApp();

  $typed(typedElement.value, {
    strings: ["Fullstack Developer"],
    typeSpeed: 65,
    backSpeed: 65,
    loop: true,
  });
});

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
