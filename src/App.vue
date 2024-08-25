<script setup lang="ts">
import { RouterView } from 'vue-router'
import KiosekFooter from '@/components/organisms/KiosekFooter.vue'
import KiosekHeader from '@/components/organisms/KiosekHeader.vue'

</script>

<template>
  <div>
    <kiosek-header />

    <RouterView />

    <kiosek-footer />
  </div>

</template>

<style scoped>
</style>
