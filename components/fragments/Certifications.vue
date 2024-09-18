<template>
  <div>
    <!-- Popup Image -->
    <div v-if="popupVisible" class="popup-img">
      <span class="close-btn" @click="closePopup">
        <Icon name="material-symbols:close" />
      </span>
      <NuxtImg :src="currentImage" alt="Certification Image" />
    </div>

    <!-- Certifications Content -->
    <div class="certifications-content padd-15">
      <div class="row">
        <h3 class="title">Certifications</h3>
        <div class="row">
          <div v-for="(cert, index) in certifications" :key="index" class="certification-item padd-15" @click="openPopup(cert.image)">
            <div class="certification-item-inner shadow-dark">
              <div class="certification-img">
                <NuxtImg :src="cert.image" :alt="cert.title" />
              </div>
              <div class="certification-info">
                <h4>{{ cert.title }}</h4>
                <p>Institution: {{ cert.institution }}</p>
                <p>{{ cert.dates }}</p>
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

const certifications = [
  {
    title: 'Figma UI/UX Design Advanced',
    institution: 'Udemy',
    dates: 'Jul 24 - Aug 1, 2024',
    image: '/images/certifications/certificate5.jpg'
  },
  {
    title: 'Figma UI/UX Design Essentials',
    institution: 'Udemy',
    dates: 'Jul 03 - Jul 24, 2024',
    image: '/images/certifications/certificate4.jpg'
  },
  {
    title: 'The Web Developer Bootcamp',
    institution: 'Udemy',
    dates: 'Jan 17 - Jul 23, 2024',
    image: '/images/certifications/certificate3.jpg'
  },
  {
    title: 'English: Level II',
    institution: 'Lang-Lab',
    dates: 'Sep 10 - Dec 12, 2022',
    image: '/images/certifications/certificate2.jpg'
  },
  {
    title: 'English: Level I',
    institution: 'Lang-Lab',
    dates: 'May 14 - Aug 15, 2022',
    image: '/images/certifications/certificate1.jpg'
  }
]

const popupVisible = ref(false)
const currentImage = ref('')

const openPopup = (image) => {
  currentImage.value = image
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
