<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import { storeToRefs } from 'pinia';

const router = useRouter()

function goBack() {
  router.go(-1)
}

const formStore = useFormStore()
const { meetings } = storeToRefs(formStore);
const { fetchMeetings } = formStore;

fetchMeetings()

console.log(meetings)
</script>

<template>
  <kiosek-container linear>
    <div class="px-6 py-3">
      <kiosek-button
        primary
        back
        aria="klikněte pro přesun o krok zpět"
        icon="back"
        @click="goBack"
      >
        Zpět
      </kiosek-button>
    </div>
    <div class="flex justify-center min-h-128">
      <div class="py-14 max-w-160">
        <h1 class="text-3xl text-white font-bold mb-8">
          Děkujeme za&nbsp;Vaši návštěvu, níže naleznete detail Vaší plánované schůzky:
        </h1>
        <ul class="mb-16">
          <li class="list-none text-2xl text-white">Datum: {{ formStore.dummyMeeting.date }}</li>
          <li class="list-none text-2xl text-white">Čas: {{ formStore.dummyMeeting.time }}</li>
          <li class="list-none text-2xl text-white">Místo: {{ formStore.dummyMeeting.location }}</li>
        </ul>
        <h2 class="text-3xl text-white font-bold mb-6">Brzy Vás vyzvedne Vaše kontaktní osoba:</h2>
        <div class="flex">
          <div class="w-10 mr-4">
            <img src="~@/assets/images/icons/person.svg" alt="">
          </div>
          <span class="text-4xl text-white font-bold">{{ formStore.dummyMeeting.person }}</span>
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
