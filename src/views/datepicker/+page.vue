<!-- SFC file -->
<script setup>
import { ref } from 'vue'
import VueTailwindDatepicker from 'vue-tailwind-datepicker'

import { Layout } from '@/components/templates'

const dateValue = ref([])

console.log(dateValue)
</script>

<template>
  <Layout>
    <vue-tailwind-datepicker
      v-model="dateValue"
      class="text-base font-medium text-netral-500 placeholder:text-netral-400"
    />
  </Layout>
</template>
