<script setup lang="ts">
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import KiosekContainer from '@/components/other/KiosekContainer.vue'

const options = [
  {
    buttonText: 'Mám schůzku',
    buttonPath: 'meetingSearch',
    ariaLabel: 'klikněte zde pokud s námi máte domluvenou schůzku',
    icon: 'meeting'
  },
  {
    buttonText: 'Chci koupit vůz',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pokud chcete koupit vůz',
    icon: 'buyCar'
  },
  {
    buttonText: 'Prodám svůj vůz',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pokud prodáváte vůz',
    icon: 'sellCar'
  },
  {
    buttonText: 'Reklamace',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pro vyřízení reklamace',
    icon: 'claim'
  },
]
</script>

<template>
  <main>
    <kiosek-container>
      <div class="flex overflow-hidden">
        <div class="overflow-hidden relative -ml-24 -skew-x-20 max-w-140">
          <img
            src="~@/assets/images/layout/car-dealer.png"
            alt="schůzka v autoprodejně"
            class="skew-x-20 origin-top-right">
        </div>
        <div class="pl-52 pr-20 py-16 -skew-x-20">
          <h1 class="text-3xl font-bold text-blue-dark skew-x-20 mb-8">Jak Vám dnes můžeme pomoci?</h1>
          <div
            v-for="(item, index) in options"
            :key="index"
            class="skew-x-20 mb-3">
            <kiosek-button
              tag="router-link"
              :to="{ name: item.buttonPath }"
              :aria="item.ariaLabel"
              primary
              navigation
              :icon="item.icon">
              {{ item.buttonText }}
            </kiosek-button>
          </div>
        </div>
      </div>
    </kiosek-container>
  </main>
</template>
