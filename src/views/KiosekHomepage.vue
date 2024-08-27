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
    buttonText: 'homepage.meeting',
    buttonPath: 'meetingSearch',
    ariaLabel: 'homepage.ariaLabelMeeting',
    iconImage: meetingIconImage
  },
  {
    buttonText: 'homepage.buyCar',
    buttonPath: 'home',
    ariaLabel: 'homepage.ariaLabelBuyCar',
    iconImage: buyCarIconImage
  },
  {
    buttonText: 'homepage.sellCar',
    buttonPath: 'home',
    ariaLabel: 'homepage.ariaLabelSellCar',
    iconImage: sellCarIconImage
  },
  {
    buttonText: 'homepage.claim',
    buttonPath: 'home',
    ariaLabel: 'homepage.ariaLabelClaim',
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
          <h1
            class="text-3xl font-bold text-blue-dark skew-x-20 mb-8"
            v-html="$t('homepage.headline')" />
          <div
            v-for="(item, index) in options"
            :key="index"
            class="skew-x-20 mb-3">
            <kiosek-button
              tag="router-link"
              :to="{ name: item.buttonPath }"
              :aria="$t(item.ariaLabel)"
              primary
              navigation
              :icon-class="'icon--nav'"
              :icon-image="item.iconImage">
              {{ $t(item.buttonText) }}
            </kiosek-button>
          </div>
        </div>
      </div>
    </kiosek-container>
  </main>
</template>
