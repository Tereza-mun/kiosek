<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'

import BackIconImage from '@/assets/images/icons/arrow-back.svg'

const backIconImage = BackIconImage;

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <kiosek-container linear>
    <div class="px-6 py-3">
      <kiosek-button
        primary
        back
        :aria="$t('backButtonAria')"
        :icon-class="'icon--arrow'"
        :icon-image="backIconImage"
        @click="goBack"
      >
        {{$t('backButtonText')}}
      </kiosek-button>
      <div class="flex justify-center md:px-6 py-3 min-h-101 md:min-h-128">
        <div class="py-24 md:py-28 max-w-160">
          <h1 class="text-2xl md:text-3xl text-white font-bold md:mb-8"
            v-html="$t('meetingNotFound')" />
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
