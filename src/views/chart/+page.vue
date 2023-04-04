<script setup>
import ApexChart from "vue3-apexcharts";
import { Layout } from "@/components/templates";

const options = {};

const series = [44, 55, 41, 17, 15];
</script>

<template>
  <Layout>
    <div class="py-10">
      <ApexChart
        width="500"
        type="donut"
        :options="options"
        :series="series"
      ></ApexChart>
    </div>
  </Layout>
</template>

<style></style>
