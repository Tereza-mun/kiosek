<script setup lang="ts">
defineProps({
  iconImage: {
    type: String,
    default: null,
    required: false,
  },
  iconClass: {
    type: String,
    default: null,
    required: false,
  }
})
</script>

<template>
  <div :class="iconClass">
    <img :src="iconImage" alt="">
  </div>
</template>
