<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import { storeToRefs } from 'pinia'

import BackIconImage from '@/assets/images/icons/arrow-back.svg'

const backIconImage = BackIconImage

const router = useRouter()

function goBack() {
  router.go(-1)
}

const formStore = useFormStore()
const { meetings } = storeToRefs(formStore)
const { fetchMeetings } = formStore

fetchMeetings()

console.log(meetings)
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
        {{ $t('backButtonText') }}
      </kiosek-button>
    </div>
    <div class="flex justify-center min-h-101 md:min-h-128">
      <div class="px-6 md:px-0 py-8 md:py-14 max-w-160">
        <h1
          class="text-2xl md:text-3xl text-white font-bold mb-4 md:mb-8"
          v-html="$t('detail.text')" />
        <ul class="mb-8 md:mb-16">
          <li class="list-none text-xl md:text-2xl text-white">
            {{ $t('detail.date') }}: {{ formStore.dummyMeeting.date }}
          </li>
          <li class="list-none text-xl md:text-2xl text-white">
            {{ $t('detail.time') }}: {{ formStore.dummyMeeting.time }}
          </li>
          <li class="list-none text-xl md:text-2xl text-white">
            {{ $t('detail.location') }}: {{ formStore.dummyMeeting.location }}
          </li>
        </ul>
        <h2 class="text-2xl md:text-3xl text-white font-bold mb-4 md:mb-6">{{ $t('detail.pickUp') }}</h2>
        <div class="flex">
          <div class="w-6 md:w-10 mr-4">
            <img src="~@/assets/images/icons/person.svg" alt="" />
          </div>
          <span class="text-2xl md:text-3xl text-white font-bold">{{ formStore.dummyMeeting.person }}</span>
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
