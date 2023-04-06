<script setup>
import { ref } from "vue";
import VueTailwindDatePicker from "vue-tailwind-datepicker";

import { Layout } from "@/components/templates";

const dateValue = ref("");
</script>

<template>
  <Layout>
    <VueTailwindDatePicker class="bg-white" v-model="dateValue" />
  </Layout>
</template>
