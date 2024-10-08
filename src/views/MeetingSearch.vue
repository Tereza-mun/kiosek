<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import * as validators from '@vuelidate/validators'
import { useFormStore } from '@/stores/formStore';
import {useI18n} from 'vue-i18n';
import BackIconImage from '@/assets/images/icons/arrow-back.svg'

const backIconImage = BackIconImage;

const i18n = useI18n();
const router = useRouter()
function goBack() {
  router.go(-1)
}

const state = reactive({
  phone: '',
})

const vRequired = validators.helpers.withMessage(i18n.t('errors.required'), validators.required)
const vPhone = validators.helpers.withMessage(i18n.t('errors.badFormat'), validators.helpers.regex(/^((\+ ?|00)[0-9]{1,3} ?)?[0-9 -]{9,14}(?:x.+)?$/))

const rules = {
  phone: {vRequired, vPhone},
}

const v$ = useVuelidate(rules, state)

const formStore = useFormStore()

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  const data = {
    ...state
  }

  await formStore.fetchMeetings(data)

  if (state.phone === formStore.dummyMeeting.phone) {
    await router.push({ name: 'meetingDetail' })
  } else {
    await router.push({ name: 'meetingNotFound'})
  }
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
    </div>
      <div class="flex justify-center min-h-101 md:min-h-128">
        <form
          id="form"
          name="form"
          :aria="$t('search.ariaForm')"
          class="flex flex-col justify-between px-6 md:px-0 py-20 md:py-36 max-w-140"
          autocomplete="on"
          @submit.prevent="onSubmit"
        >
          <div
            class="block mx-auto">
            <label
              class="text-3xl text-white font-bold"
              for="phone">
              {{$t('search.instructions')}}
            </label>

            <input
              id="phone"
              v-model="state.phone"
              type="tel"
              name="phone"
              class="block mx-auto w-full max-w-101 rounded-sm px-4 py-2 text-3xl text-blue-dark font-bold mt-4 caret-transparent"
              :class="v$.phone.$error ? 'border-4 border-red' : 'border-4 border-transparent'"
              @blur="v$.phone.$touch"/>

            <div
              v-if="v$.phone.$error"
              class="bg-red block mx-auto max-w-101 py-3 px-4 mt-2 relative after:content-triangle-red after:absolute after:-top-4 after:left-1/5 after:-ml-56">
              <span
                v-for="error of v$.phone.$errors"
                :key="error.$uid"
                class="text-white font-bold"
                v-html="error.$message"
              />
            </div>
          </div>
          <div class="flex justify-center">
            <kiosek-button
              type="submit"
              secondary
              :aria="$t('search.submitAria')"
            >
              {{$t('search.submitButton')}}
            </kiosek-button>
          </div>
        </form>
      </div>
  </kiosek-container>
</template>
