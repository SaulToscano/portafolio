<template>
  <div class="lang-group-wrapper">
    <el-button-group>
      <el-button :disabled="locale === 'en'" class="lang-button-color" type="primary" @click="setLocale('en')"><Icon name="flag:um-4x3" /></el-button>
      <el-button :disabled="locale === 'es'" class="lang-button-color" type="primary" @click="setLocale('es')"><Icon name="flag:mx-4x3" /></el-button>
    </el-button-group>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { onMounted } from 'vue'

const { locale } = useI18n()

// Function to set the locale and save it to localStorage
const setLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('preferredLocale', newLocale) // Save to localStorage
}

// Check localStorage for a saved language preference
onMounted(() => {
  const savedLocale = localStorage.getItem('preferredLocale')
  if (savedLocale) {
    locale.value = savedLocale // Load the saved locale if available
  }
})
</script>

<style scoped>
.lang-group-wrapper {
  display: flex;
  justify-content: center;
}
.lang-button-color {
  background: var(--skin-color);
  border-color: var(--skin-color);
  transition: 0.3s all ease-in;
}
.lang-button-color:hover {
  opacity: 0.7;
}
</style>