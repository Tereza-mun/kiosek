<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'

const router = useRouter()

function goBack() {
  router.go(-1)
}
</script>

<template>
  <kiosek-container linear>
    <div class="px-6 py-3">
      <kiosek-button primary back :icon="'back'" @click="goBack"> Zpět </kiosek-button>
      <div class="flex justify-center px-6 py-3 min-h-128">
        <div class="py-28 max-w-160">
          <h1 class="text-3xl text-white font-bold mb-8">
            Děkujeme za&nbsp;Vaši návštěvu, bohužel se&nbsp;nám nepovedlo nalézt detaily Vaší
            schůzky, ale víme o&nbsp;Vás a&nbsp;brzy se Vám bude někdo z&nbsp;našich pracovníků
            věnovat.
          </h1>
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
