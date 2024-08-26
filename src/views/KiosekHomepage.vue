<script setup lang="ts">
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import KiosekContainer from '@/components/other/KiosekContainer.vue'

const options = [
  {
    buttonText: 'Mám schůzku',
    buttonPath: 'meetingSearch',
    icon: 'meeting'
  },
  {
    buttonText: 'Chci koupit vůz',
    buttonPath: 'home',
    icon: 'buyCar'
  },
  {
    buttonText: 'Prodám svůj vůz',
    buttonPath: 'home',
    icon: 'sellCar'
  },
  {
    buttonText: 'Reklamace',
    buttonPath: 'home',
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
        <div class="pl-36 pr-20 py-8 -skew-x-20">
          <h1 class="text-3xl font-bold text-blue-dark skew-x-20 mb-8">Se kterou službou Vám dnes můžeme pomoci?</h1>
          <div
            v-for="(item, index) in options"
            :key="index"
            class="skew-x-20 mb-3">
            <kiosek-button
              tag="router-link"
              :to="{ name: item.buttonPath }"
              primary
              navigation
              :icon="item.icon">
              {{ item.buttonText }}
            </kiosek-button>
          </div>
        </div>
        <div class="flex flex-col justify-end">
          <kiosek-button>
            <div class="flex items-center pb-2">
              <p class="text-xl text-blue-dark font-bold mr-2">EN</p>
              <img
                src="~@/assets/images/icons/en-flag.png"
                alt="ikona anglická vlajka"
                class="w-10 h-8">
            </div>
          </kiosek-button>
        </div>

      </div>

    </kiosek-container>
  </main>
</template>
