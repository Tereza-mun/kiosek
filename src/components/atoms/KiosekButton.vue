<script setup lang="ts">
import KiosekIcon from '@/components/atoms/KiosekIcon.vue'

defineProps({
  tag: {
    type: String,
    required: false,
    default: 'button',
    validator: function (value: any) {
      return ['button', 'router-link'].includes(value)
    }
  },
  aria: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  primary: Boolean,
  secondary: Boolean,
  back: Boolean,
  navigation: Boolean,
  iconClass: {
    type: String,
    default: null,
    required: false,
  },
  iconImage: {
    type: String,
    default: null,
    required: false,
  }
})
</script>

<template>
  <component
    :is="tag"
    class="button"
    :aria-label="aria"
    :disabled="disabled"
    :class="{
      'button--primary': primary,
      'button--secondary': secondary,
      'button--nav': navigation,
      'button--back': back,
    }"
  >
    <kiosek-icon
      v-if="iconImage"
      :icon-class="iconClass"
      :icon-image="iconImage" />

    <slot />
  </component>
</template>
