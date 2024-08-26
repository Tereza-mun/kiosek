<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
</script>

<template>
  <header>
    <kiosek-container>
      <kiosek-button
        tag="router-link"
        :to="{name: 'home'}"
      >
        <div class="bg-blue-dark pl-6 pr-4 py-3 w-56 relative z-20 after:content-empty after:absolute after:block after:w-12 after:h-full after:top-0 after:-right-8 after:-z-10 after:bg-blue-dark after:border-b-0 after:border-r-0 after:-skew-x-20">
          <img
            src="~@/assets/images/logos/nejlepsi-auta.svg"
            alt="logo nejlepší auta"
            class="w-full" />
        </div>
      </kiosek-button>
    </kiosek-container>
  </header>
</template>