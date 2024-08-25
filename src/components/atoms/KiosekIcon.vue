<script setup lang="ts">
defineProps({
  iconImage: {
    type: String,
    default: null,
    required: true
  },
  iconClass: {
    type: String,
    default: null,
    required: true
  }
})
</script>

<template>
  <div :class="iconClass">
    <img :src="iconImage" alt="">
  </div>
</template>
