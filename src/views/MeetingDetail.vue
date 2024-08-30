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
      <div class="px-6 md:px-0 py-4 md:py-8 max-w-160">
        <h1
          class="text-2xl md:text-3xl text-white font-bold mb-4 md:mb-8"
          v-html="$t('detail.text')" />
        <ul
          class="mb-4 md:mb-10"
          v-for="meeting in meetings"
          :key="meeting.id">
          <li
            v-if="meeting.name"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.name') }}:</strong> &nbsp;&nbsp; {{meeting.name}}
          </li>
          <li
            v-if="meeting.username"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.username') }}:</strong> &nbsp;&nbsp; {{meeting.username}}
          </li>
          <li
            v-if="meeting.address.street"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.street') }}:</strong> &nbsp;&nbsp; {{meeting.address.street}}
          </li>
          <li
            v-if="meeting.address.city"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.city') }}:</strong> &nbsp;&nbsp; {{meeting.address.city}}
          </li>
          <li
            v-if="meeting.address.zipcode"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.zipcode') }}:</strong> &nbsp;&nbsp; {{meeting.address.zipcode}}
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
