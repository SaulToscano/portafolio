<template>
  <!-- portfolio item start -->
  <div v-for="(proyect, index) in proyects" :key="index" class="portfolio-item padd-15">
    <div class="portfolio-item-inner shadow-dark">
      <div class="portfolio-img">
        <NuxtImg :src="proyect.image" :alt="proyect.title" height="200px" />
      </div>
      <div class="portfolio-info">
        <div class="portfolio-title-date">
          <h4>{{ proyect.title }}</h4>
          <div v-if="proyect.date !== ''" class="portfolio-date">
            <Icon name="ant-design:calendar-filled" /> {{ proyect.date }}
          </div>
        </div>
        <p>{{ proyect.technologies }}</p>

        <div class="portfolio-buttons">
          <a :href="proyect.demo" target="_blank" class="btn">
            <Icon name="mdi:play" /> Demo
          </a>
          <a v-if="proyect.code !== ''" :href="proyect.code" target="_blank" class="btn">
            <Icon name="mdi:github" /> Code
          </a>
        </div>
      </div>
    </div>
  </div>
  <!-- portfolio item end -->
</template>

<script setup>
const proyects = [
  {
    title: "Ecommerce Webpage",
    technologies: "Next, JS, TS, React",
    date: "",
    image: "/images/projects/project_1.jpg",
    demo: "https://ecommerce-frontend-l9ns.onrender.com",
    code: ""
  },
  /* {
    title: "Ecommerce Dashboard",
    technologies: "Nuxt, js, Vue",
    date: "",
    image: "/images/projects/project_2.jpg",
    demo: "https://dashboard.stoscano.com/",
    code: ""
  }, */
  {
    title: "Pokedex",
    technologies: "JS, Vue",
    date: "",
    image: "/images/projects/project_4.jpg",
    demo: "https://saultoscano.github.io/pokedex_vue/",
    code: ""
  },
  {
    title: "Commentary System",
    technologies: "HTML, CSS, JS",
    date: "",
    image: "/images/projects/project_5.jpg",
    demo: "https://saultoscano.github.io/Comentary-System/",
    code: ""
  },
  {
    title: "Weather app",
    technologies: "React, JS",
    date: "",
    image: "/images/projects/project_6.jpg",
    demo: "https://saultoscano.github.io/WeatherApp/",
    code: ""
  },
  {
    title: "JSON To CSV",
    technologies: "HTML, CSS, JS",
    date: "",
    image: "/images/projects/project_7.jpg",
    demo: "https://saultoscano.github.io/JSON-to-CSV/",
    code: ""
  }
]
</script>