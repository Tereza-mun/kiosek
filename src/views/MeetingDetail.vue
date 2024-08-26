<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import { onMounted } from 'vue'

// const complete = ref<Boolean>(false)

const router = useRouter()

function goBack() {
  router.go(-1)
}

const formStore = useFormStore()
</script>

<template>
  <kiosek-container :background-class="'bg-blue-dark'">
    <div class="px-6 py-3">
      <kiosek-button primary back :icon="'back'" @click="goBack"> Zpět </kiosek-button>
    </div>
    <div class="flex justify-center px-6 py-3">
      <div class="py-14 max-w-160">
        <h1 class="text-3xl text-white font-bold mb-8">
          Děkujeme za&nbsp;Vaši návštěvu, níže naleznete detail Vaší plánované schůzky:
        </h1>
        <ul class="mb-12">
          <li class="list-none text-2xl text-white">Datum: {{ formStore.meeting.date }}</li>
          <li class="list-none text-2xl text-white">Čas: {{ formStore.meeting.time }}</li>
          <li class="list-none text-2xl text-white">Místo: {{ formStore.meeting.location }}</li>
        </ul>
        <h2 class="text-3xl text-white font-bold mb-8">Brzy Vás vyzvedne Vaše kontaktní osoba:</h2>
        <span class="text-4xl text-white font-bold">{{ formStore.meeting.person }}</span>
      </div>
    </div>
  </kiosek-container>
</template>
