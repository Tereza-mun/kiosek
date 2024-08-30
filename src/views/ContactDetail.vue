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
      <div class="px-6 md:px-0 py-8 md:py-14 max-w-160">
        <h1
          class="text-2xl md:text-3xl text-white font-bold mb-4 md:mb-8"
          v-html="$t('detail.textContact')" />
        <ul
          v-for="meeting in meetings"
          :key="meeting.id"
          class="mb-8 md:mb-16">
          <li
            v-if="meeting.name"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.name') }}:</strong> &nbsp;&nbsp; {{meeting.name}}
          </li>
          <li
            v-if="meeting.phone"
            class="list-none text-xl md:text-2xl text-white">
            <strong>{{ $t('detail.phone') }}:</strong> &nbsp;&nbsp; {{meeting.phone}}
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
      </div>
    </div>
  </kiosek-container>
</template>
