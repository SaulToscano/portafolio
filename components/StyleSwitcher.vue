<template>
  <div :class="{'style-switcher': true, 'open': isSwitcherOpen}">
    <button class="style-switcher-toggler s-icon toggler-button" @click="toggleSwitcher">
      <Icon name="mdi:cog" class="spin-icon" />
    </button>
    <div class="day-night s-icon toggler-button" @click="toggleDayNight">
      <Icon :name="isDarkMode ? 'ph:sun-fill' : 'akar-icons:moon-fill'" />
    </div>
    <h4>Theme Color</h4>
    <div class="colors">
      <span class="color-1" @click="setActiveStyle('color-1')"></span>
      <span class="color-2" @click="setActiveStyle('color-2')"></span>
      <span class="color-3" @click="setActiveStyle('color-3')"></span>
      <span class="color-4" @click="setActiveStyle('color-4')"></span>
      <span class="color-5" @click="setActiveStyle('color-5')"></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDarkMode = ref(false);
const activeTheme = ref('color-4');
const isSwitcherOpen = ref(false);

// Toggle the switcher panel open/closed
const toggleSwitcher = () => {
  isSwitcherOpen.value = !isSwitcherOpen.value;
};

// Toggle light/dark mode
const toggleDayNight = () => {
  isDarkMode.value = !isDarkMode.value;
  document.body.classList.toggle('dark', isDarkMode.value);
	// Store dark mode preference
  localStorage.setItem('darkMode', isDarkMode.value);
};

// Change theme and store the selection
const setActiveStyle = (color) => {
  document.querySelectorAll('.alternate-style').forEach(style => {
    style.disabled = style.getAttribute('title') !== color;
  });
	activeTheme.value = color;
  // Store selected theme
  localStorage.setItem('theme', color);
};

onMounted(() => {
  // Get dark mode preference from localStorage
  const savedDarkMode = localStorage.getItem('darkMode');
  if (savedDarkMode) {
    isDarkMode.value = savedDarkMode === 'true';
    document.body.classList.toggle('dark', isDarkMode.value);
  }

  // Get theme preference from localStorage
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setActiveStyle(savedTheme);
  }

  // Close switcher on scroll
  window.addEventListener('scroll', () => {
    if (isSwitcherOpen.value) {
      isSwitcherOpen.value = false;
    }
  });
});
</script>

<style>
.toggler-button {
	display: flex;
  align-items: center;
  justify-content: center;
}

.spin-icon {
  animation: rotateGear 10s linear infinite;
}

@keyframes rotateGear {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>