<template>
  <div class="skill-item padd-15">
    <h5>{{ props.name }}</h5>
    <div class="progress">
      <div class="progress-in" :style="`width: ${props.percentage}%;`"></div>
      <div class="skill-percent">{{ props.percentage }}%</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  percentage: {
    type: String,
    required: true
  }
})
</script>