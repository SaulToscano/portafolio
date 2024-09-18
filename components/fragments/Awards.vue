<template>
  <div>
    <!-- Popup for Awards -->
    <div v-if="popupVisible" class="popup-img">
      <span class="close-btn" @click="closePopup">
        <Icon name="material-symbols:close" />
      </span>
      <NuxtImg :src="currentImage" alt="Certification Image" />
    </div>

    <!-- Awards Content -->
    <div class="awards-content padd-15">
      <div class="row">
        <h3 class="title">Awards</h3>
        <div class="row">
          <div
            v-for="(award, index) in awards"
            :key="index"
            class="certification-item padd-15"
          >
            <div class="certification-item-inner shadow-dark">
              <div class="certification-img" @click="openPopup(award)">
                <NuxtImg :src="award.image" :alt="award.title" />
              </div>
              <div class="certification-info">
                <h4>{{ award.title }}</h4>
                <p>{{ award.date }}</p>
                <p>Project Name: {{ award.projectName }}</p>

                <div class="award-buttons" v-if="award.link">
                  <a :style="{display: 'flex', gap: '5px'}" :href="award.link" class="btn" target="_blank">
                    <Icon name="mdi:github" size="1.5em" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const awards = [
  {
    title: 'Citibanamex Talent Hackathon',
    date: 'July 2021',
    projectName: 'OBIO Shop',
    link: 'https://github.com/Axolotl-Team-mx/OBIO-shop.git',
    image: '/images/awards/award3.png'
  },
  {
    title: 'Tomato Valley Hackathon',
    date: 'May 2021',
    projectName: 'BeeCare',
    link: 'https://github.com/Axolotl-Team-mx/BeeCare',
    image: '/images/awards/award2.jpg'
  },
  {
    title: 'Microsoft Hackaton Hack LATAM',
    date: 'March 2021',
    projectName: 'AxolotlTeam - EF',
    link: 'https://github.com/iscRamirezAbril/Axolotlteam-EF',
    image: '/images/awards/award1.jpg'
  }
]

const popupVisible = ref(false)
const currentImage = ref('')
const currentTitle = ref('')
const currentDate = ref('')
const currentProject = ref('')
const currentLink = ref('')

const openPopup = (award) => {
  currentImage.value = award.image
  currentTitle.value = award.title
  currentDate.value = award.date
  currentProject.value = award.projectName
  currentLink.value = award.link
  popupVisible.value = true
}

const closePopup = () => {
  popupVisible.value = false
}
</script>

<style scoped>
.popup-img {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
}

.popup-img img {
  /* width: 100%; */
  /* height: 100%; */
  object-fit: contain;
}

.popup-award {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
  padding: 20px;
}

.popup-award-content {
  display: flex;
  background-color: white;
  border-radius: 10px;
  max-width: 90vw;
  max-height: 90vh;
  overflow: auto;
}

.popup-award-content img {
  max-width: 50%;
  max-height: 100%;
  object-fit: contain;
}

.popup-award-info {
  padding: 20px;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  cursor: pointer;
  color: white;
  z-index: 2001;
}
</style>
