<template>
  <div>
    <!-- Popup Image -->
    <div v-if="popupVisible && !currentPdf" class="popup-img">
      <span class="close-btn" @click="closePopup">
        <Icon name="material-symbols:close" />
      </span>
      <NuxtImg :src="currentImage" alt="Certification Image" />
    </div>

    <!-- Certifications Content -->
    <div class="certifications-content padd-15">
      <div class="row">
        <h3 class="title" v-t="'pages.certificates.certifications'" />
        <div class="row cert-grid">
          <div
            v-for="(cert, index) in certifications"
            :key="index"
            class="certification-item padd-15"
            @click="handleClick(cert)"
          >
            <div class="certification-item-inner shadow-dark">
              <div class="certification-img">
                <NuxtImg :src="cert.image" :alt="cert.title" />
              </div>
              <div class="certification-info">
                <h4>{{ cert.title }}</h4>
                <p>{{ $t('pages.certificates.institution') }}: {{ cert.institution }}</p>
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
    title: 'HTML',
    institution: 'Programming hub',
    dates: 'June 2022',
    image: '/images/certifications/certificate_1.jpg'
  },
  {
    title: 'Javascript',
    institution: 'Programming hub',
    dates: 'June 2022',
    image: '/images/certifications/certificate_2.jpg'
  },
  {
    title: 'PHP',
    institution: 'Programming hub',
    dates: 'June 2022',
    image: '/images/certifications/certificate_3.jpg'
  },
  {
    title: "Backend development & API's",
    institution: 'Freecode camp',
    dates: 'June 2022',
    image: '/images/certifications/certificate_4.jpg'
  },
  {
    title: 'Responsive web design',
    institution: 'Freecode camp',
    dates: 'June 2022',
    image: '/images/certifications/certificate_5.jpg'
  },
  {
    title: 'English level',
    institution: 'EF SET',
    dates: 'October 2024',
    image: '/images/certifications/certificate_6.jpg',
    pdf: '/documents/certifications/efset_certificate.pdf'
  }
]

const popupVisible = ref(false)
const currentImage = ref('')
const currentPdf = ref('')

const handleClick = (cert) => {
  if (cert.pdf) {
    window.open(cert.pdf, '_blank')
  } else {
    currentImage.value = cert.image
    currentPdf.value = ''
    popupVisible.value = true
  }
}

const closePopup = () => {
  popupVisible.value = false
}
</script>

<style scoped>
.cert-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.certification-item {
  flex: 1 1 calc(33.333% - 1rem);
  box-sizing: border-box;
}
.certification-item-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.certification-img {
  width: 100%;
  height: 250px;
  overflow: hidden;
}
.certification-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.certification-info {
  flex: 1;
  padding: 0.5rem;
}

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
  object-fit: contain;
  max-width: 90%;
  max-height: 90%;
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
