<script setup lang="ts">
defineProps({
  backgroundClass: {
    type: String,
    required: false,
    default: 'bg-white',
  },
})
</script>

<template>
  <section
    class="max-w-7xl block mx-auto"
    :class="backgroundClass">
    <slot />
  </section>
</template>
