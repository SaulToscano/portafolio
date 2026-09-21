<template>
  <div v-for="(proyect, index) in proyects" :key="index" class="portfolio-item padd-15">
    <div class="portfolio-item-inner shadow-dark">
      <div class="portfolio-img">
        <img :src="proyect.image" :alt="proyect.title" height="200px" />
      </div>
      <div class="portfolio-info">
        <div class="portfolio-title-date">
          <h4>{{ proyect.title }}</h4>
          <div v-if="proyect.date !== ''" class="portfolio-date">
            <Icon name="ant-design:calendar-filled" /> {{ proyect.date }}
          </div>
        </div>
        
        <div class="portfolio-tags">
          <span v-for="(tech, i) in proyect.technologies" :key="i" class="tech-tag">
            <Icon v-if="tech.icon" :name="tech.icon" class="tech-icon" />
            {{ tech.name }}
          </span>
        </div>

        <div class="portfolio-buttons">
          <a :href="proyect.demo" target="_blank" class="btn">
            <Icon name="mdi:play" /> Demo
          </a>
          
          <a v-if="proyect.code" :href="proyect.code" target="_blank" class="btn">
            <Icon name="mdi:github" /> Code
          </a>

          <a v-if="proyect.codeFront" :href="proyect.codeFront" target="_blank" class="btn">
            <Icon name="mdi:github" /> Front Code
          </a>
          <a v-if="proyect.codeBack" :href="proyect.codeBack" target="_blank" class="btn">
            <Icon name="mdi:github" /> Back Code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const proyects = [
  {
    title: "ERP Project",
    technologies: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "PrimeNG", icon: "prime:prime" }, 
      { name: "Java", icon: "logos:java" },
      { name: "Spring Boot", icon: "logos:spring-icon" }
    ],
    date: "",
    image: "/images/projects/project_9.jpg",
    demo: "https://erp.saul-toscano.fyi/",
    codeFront: "https://github.com/SaulToscano/inventory-system-frontend",
    codeBack: "https://github.com/SaulToscano/inventory-system-backend"
  },
  {
    title: "Admin Dashboard",
    technologies: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "PrimeNG", icon: "prime:prime" }
    ],
    date: "",
    image: "/images/projects/project_8.jpg",
    demo: "https://admin-dashboard-mu-peach-76.vercel.app/",
    codeFront: "https://github.com/SaulToscano/admin-dashboard",
  },
  {
    title: "Weather app",
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "JS", icon: "logos:javascript" }
    ],
    date: "",
    image: "/images/projects/project_6.jpg",
    demo: "https://saultoscano.github.io/WeatherApp/",
    code: "https://github.com/SaulToscano/WeatherApp"
  },
]
</script>

<style scoped>
.portfolio-item {
  display: flex;
}

.portfolio-item-inner {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.portfolio-img {
  flex-shrink: 0;
}

.portfolio-info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.portfolio-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 12px 0 20px 0;
}

.tech-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 13px;
  font-weight: 500;
  background-color: var(--bg-black-50);
  color: var(--text-black-900);
  border: 1px solid var(--bg-black-100);
  transition: all 0.3s ease;
}

.tech-icon {
  font-size: 16px;
}

.portfolio-buttons {
  margin-top: auto;
  display: flex;
  gap: 5px;
  flex-wrap: nowrap;
  overflow-x: auto;
  scrollbar-width: none; 
}

.portfolio-buttons::-webkit-scrollbar {
  display: none;
}

.portfolio-buttons .btn {
  font-size: 13px;
  padding: 8px 10px;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>