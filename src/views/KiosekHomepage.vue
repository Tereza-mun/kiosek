<script setup lang="ts">
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import KiosekContainer from '@/components/other/KiosekContainer.vue'

import MeetingIconImage from "@/assets/images/icons/meeting.svg";
import BuyIconImage from "@/assets/images/icons/buy-car.svg";
import SellIconImage from "@/assets/images/icons/sell-car.svg";
import ClaimIconImage from "@/assets/images/icons/claim.svg";

const meetingIconImage = MeetingIconImage;
const buyCarIconImage = BuyIconImage;
const sellCarIconImage = SellIconImage;
const claimIconImage = ClaimIconImage;

const options = [
  {
    buttonText: 'Mám schůzku',
    buttonPath: 'meetingSearch',
    ariaLabel: 'klikněte zde pokud s námi máte domluvenou schůzku',
    iconImage: meetingIconImage
  },
  {
    buttonText: 'Chci koupit vůz',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pokud chcete koupit vůz',
    iconImage: buyCarIconImage
  },
  {
    buttonText: 'Prodám svůj vůz',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pokud prodáváte váš vůz',
    iconImage: sellCarIconImage
  },
  {
    buttonText: 'Reklamace',
    buttonPath: 'home',
    ariaLabel: 'klikněte zde pro vyřízení reklamace',
    iconImage: claimIconImage
  },
]
</script>

<template>
  <main>
    <kiosek-container>
      <div class="flex overflow-hidden">
        <div class="overflow-hidden relative -ml-24 -skew-x-20 max-w-140">
          <img
            src="~@/assets/images/layout/car-dealership.png"
            alt="schůzka v autoprodejně"
            class="skew-x-20 w-full origin-top-right h-full object-cover">
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
              :icon-class="'icon--nav'"
              :icon-image="item.iconImage">
              {{ item.buttonText }}
            </kiosek-button>
          </div>
        </div>
      </div>
    </kiosek-container>
  </main>
</template>
