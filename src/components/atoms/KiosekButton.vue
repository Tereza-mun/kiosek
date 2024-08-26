<script setup lang="ts">
import KiosekIcon from '@/components/atoms/KiosekIcon.vue'

import MeetingIconImage from "@/assets/images/icons/meeting.svg";
import BuyIconImage from "@/assets/images/icons/buy-car.svg";
import SellIconImage from "@/assets/images/icons/sell-car.svg";
import ClaimIconImage from "@/assets/images/icons/claim.svg";
import BackIconImage from "@/assets/images/icons/arrow-back.svg";
import NextIconImage from "@/assets/images/icons/arrow-back.svg";

const navIconClass = 'icon--nav';
const arrowIconClass = 'icon--arrow';

const meetingIconImage = MeetingIconImage;
const buyCarIconImage = BuyIconImage;
const sellCarIconImage = SellIconImage;
const claimIconImage = ClaimIconImage;
const backIconImage = BackIconImage;
const nextIconImage = NextIconImage;

const iconMap = {
  "meeting": {
    iconClass: navIconClass,
    iconImage: meetingIconImage,
  },
  "buyCar": {
    iconClass: navIconClass,
    iconImage: buyCarIconImage,
  },
  "sellCar": {
    iconClass: navIconClass,
    iconImage: sellCarIconImage,
  },
  "claim": {
    iconClass: navIconClass,
    iconImage: claimIconImage,
  },
  "back": {
    iconClass: arrowIconClass,
    iconImage: backIconImage,
  },
  "next": {
    iconClass: arrowIconClass,
    iconImage: nextIconImage,
  },
}

defineProps({
  tag: {
    type: String,
    required: false,
    default: 'button',
    validator: function (value: any) {
      return ['button', 'router-link'].includes(value)
    }
  },
  aria: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  primary: Boolean,
  secondary: Boolean,
  back: Boolean,
  navigation: Boolean,
  icon: {
    type: String,
    default: null,
    required: false,
    validator(value: string) {
      return [
        "meeting",
        "sellCar",
        "buyCar",
        "claim",
        "back",
        "next"
      ].includes(value)
    }
  },
})
</script>

<template>
  <component
    :is="tag"
    class="button"
    :aria-label="aria"
    :disabled="disabled"
    :class="{
      'button--primary': primary,
      'button--secondary': secondary,
      'button--nav': navigation,
      'button--back': back,
    }"
  >
    <kiosek-icon
      v-if="iconMap[icon] ?? false"
      v-bind="iconMap[icon]" />

    <slot />
  </component>
</template>
