<script setup>
import ApexChart from 'vue3-apexcharts'

import { Layout } from '@/components/templates'

const options = {
  series: [90, 10],
  labels: ['Apple', 'Mango'],
  colors: ['#6DC7FF', '#FF3366']
}
</script>

<template>
  <Layout>
    <div class="py-10">
      <ApexChart
        width="500"
        type="donut"
        :options="options"
        :series="options.series"
      ></ApexChart>
    </div>
  </Layout>
</template>

<style></style>
