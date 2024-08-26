<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import * as validators from '@vuelidate/validators'
import { useFormStore } from '@/stores/formStore';
import BackIconImage from '@/assets/images/icons/arrow-back.svg'

const backIconImage = BackIconImage;

const router = useRouter()
function goBack() {
  router.go(-1)
}

const state = reactive({
  phone: '',
})

const vRequired = validators.helpers.withMessage('Bez telefonního čísla se neobejdeme', validators.required)
const vPhone = validators.helpers.withMessage('Telefonní číslo je ve&nbsp;špatném formátu', validators.helpers.regex(/^((\+ ?|00)[0-9]{1,3} ?)?[0-9 -]{9,14}(?:x.+)?$/))

const rules = {
  phone: {vRequired, vPhone},
}

const v$ = useVuelidate(rules, state)

const formStore = useFormStore()

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  const data = {
    ...state,
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
        aria="klikněte pro přesun o krok zpět"
        :icon-class="'icon--arrow'"
        :icon-image="backIconImage"
        @click="goBack"
      >
        Zpět
      </kiosek-button>
    </div>
      <div class="flex justify-center min-h-128">
        <form
          id="form"
          name="form"
          aria-label="zadejte své telefonní číslo"
          class="py-28 max-w-140"
          autocomplete="on"
          @submit.prevent="onSubmit"
        >
          <div
            class="block mx-auto my-4">
            <label
              class="text-3xl text-white font-bold"
              for="phone">
              Zadejte, prosím, své telefonní číslo
            </label>

            <input
              id="phone"
              v-model="state.phone"
              type="tel"
              name="phone"
              class="block w-full rounded-sm px-4 py-2 text-3xl text-blue-dark font-bold mt-4"
              :class="v$.phone.$error ? 'border-4 border-red' : ''"
              @blur="v$.phone.$touch"/>

            <div
              v-if="v$.phone.$error"
              class="bg-red py-3 px-4 mt-2 relative after:content-triangle-red after:absolute after:-top-4 after:left-1/5 after:-ml-56">
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
              aria="klikněte pro odeslání formuláře"
            >
              Potvrdit
            </kiosek-button>
          </div>
        </form>
      </div>
  </kiosek-container>
</template>
