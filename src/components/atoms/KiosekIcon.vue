<script setup lang="ts">
defineProps({
  iconImage: {
    type: String,
    default: null,
  },
  iconClass: {
    type: String,
    default: null,
  }
})
</script>

<template>
  <div :class="iconClass">
    <img :src="iconImage" alt="">
  </div>
</template>
