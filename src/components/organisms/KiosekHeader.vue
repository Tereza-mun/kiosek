<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
</script>

<template>
  <header>
    <kiosek-container>
      <div class="flex justify-between">
        <div
          class="flex items-center bg-blue-dark pl-6 pr-4 py-3 h-full w-56 relative z-20 after:content-empty after:absolute after:block after:w-12 after:h-full after:top-0 after:-right-8 after:-z-10 after:bg-blue-dark after:border-b-0 after:border-r-0 after:-skew-x-20"
        >
          <kiosek-button
            tag="router-link"
            aria="klikněte pro přesun na úvodní stranu"
            :to="{ name: 'home' }"
          >
            <img
              src="~@/assets/images/logos/nejlepsi-auta.svg"
              alt="logo nejlepší auta"
              class="w-full"
            />
          </kiosek-button>
        </div>
        <kiosek-button
          aria="klikněte pro změnu jazyka na angličtinu"
        >
          <div class="flex items-center pb-2 pr-1">
            <p class="text-xl text-blue-dark font-bold mr-2">EN</p>
            <img
              src="~@/assets/images/icons/en-flag.png"
              alt="ikona anglická vlajka"
              class="w-10 h-8"
            />
          </div>
        </kiosek-button>
      </div>
    </kiosek-container>
  </header>
</template>
