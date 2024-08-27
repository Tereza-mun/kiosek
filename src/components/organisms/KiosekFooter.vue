<script setup lang="ts">
import KiosekContainer from '@/components/other/KiosekContainer.vue'
</script>

<template>
  <footer>
    <kiosek-container dark-blue>
      <div class="px-6 py-3">
        <p class="text-md md:text-xl text-white font-bold">
          {{$t('footer.text')}}
          <strong>{{$t('footer.phone')}}</strong>
        </p>
      </div>
    </kiosek-container>
  </footer>
</template>