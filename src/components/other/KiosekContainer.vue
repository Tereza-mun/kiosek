<script setup lang="ts">
defineProps({
  darkBlue: Boolean,
  linear: Boolean
})
</script>

<template>
  <section
    class="max-w-7xl block mx-auto"
    :class="{
    'bg-blue-dark': darkBlue,
    'bg-gradient-to-r from-blue-dark to-blue-light': linear,
    }">
    <slot />
  </section>
</template>
