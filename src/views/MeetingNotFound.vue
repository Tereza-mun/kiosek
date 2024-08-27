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
      <div class="flex justify-center px-6 py-3 min-h-128">
        <div class="py-28 max-w-160">
          <h1 class="text-3xl text-white font-bold mb-8"
            v-html="$t('meetingNotFound')" />
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
