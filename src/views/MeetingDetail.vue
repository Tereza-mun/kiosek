<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
import KiosekButton from '@/components/atoms/KiosekButton.vue'
import { useRouter } from 'vue-router'
import {ref, reactive} from 'vue'
import { useVuelidate } from '@vuelidate/core'
import * as validators from '@vuelidate/validators'

const complete = ref<Boolean>(false)

const state = reactive({
  phone: '',
})

const vRequired = validators.helpers.withMessage('Bez této položky se neobejdeme', validators.required)
const vPhone = validators.helpers.withMessage('Telefonní číslo je ve&nbsp;špatném formátu', validators.helpers.regex(/^((\+ ?|00)[0-9]{1,3} ?)?[0-9 -]{9,14}(?:x.+)?$/))

const rules = {
  phone: {vRequired, vPhone},
}

const v$ = useVuelidate(rules, state)

const success = ref<Boolean>(false)

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate()
  if (!isFormCorrect) return

  const data = {
    ...state,
  }
  delete data['error']

  const pricingFormStore = usePricingFormStore()
  await pricingFormStore.sendOrderToApi(data)

  success.value = true
}

const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <kiosek-container
    :background-class="'bg-blue-dark'">
    <div class="px-6 py-3">
      <kiosek-button
        primary
        back
        :icon="'back'"
        @click="goBack"
      >
        Zpět
      </kiosek-button>
      <div class="flex justify-center">
        <form
          name="form"
          class="py-28 max-w-96"
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
              class="block w-full rounded-sm px-4 py-2 text-3xl text-blue-dark font-bold mt-4"
              @blur="v$.phone.$touch"/>

            <div
              v-if="v$.phone.$error"
              class="bg-red-500 py-3 px-4 mt-2 relative after:content-empty after:absolute after:w-4 after:h-4 after:border-3 after:border-transparent after:border-b-red-500 after:border-t-0 after:-top-2 after:left-1/5 after:-ml-5">
              <span
                v-for="error of v$.phone.$errors"
                :key="error.$uid"
                class="text-white font-bold"
                v-html="error.$message"
              />
            </div>

          </div>
          <kiosek-button
            type="submit"
            secondary
          >
            Potvrdit
          </kiosek-button>
        </form>
      </div>
    </div>
  </kiosek-container>
</template>
