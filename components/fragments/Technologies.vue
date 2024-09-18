<template>
  <el-tooltip class="box-item" effect="dark" :content="props.tooltip" placement="top">
    <div class="tool-item padd-15">
      <Icon :name="props.name" :style="props.color ? { color: props.color } : ''" />
    </div>
  </el-tooltip>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  tooltip: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: false
  }
})
</script>