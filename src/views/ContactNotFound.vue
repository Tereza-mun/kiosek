<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { useFormStore } from '@/stores/formStore'
import BackIconImage from '@/assets/images/icons/arrow-back.svg'

const backIconImage = BackIconImage;

const router = useRouter()

function goBack() {
  router.go(-1)
}

const formStore = useFormStore()
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
        <div class="py-16 md:py-28 max-w-160">
          <h1 class="text-2xl md:text-3xl text-white font-bold mb-8"
            v-html="$t('contactNotFound')" />
          <h2 class="text-xl md:text-2xl text-white font-bold mb-16">
            {{formStore.submittedEmail}}
          </h2>
          <kiosek-button
            tag="router-link"
            :aria="$t('backButtonAria')"
            secondary
            :to="{name: 'home'}">
            {{$t('backToMainPage')}}
          </kiosek-button>
        </div>
      </div>
    </div>
  </kiosek-container>
</template>
