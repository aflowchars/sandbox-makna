<script setup>
import Layout from '@/components/templates/Layout.vue'
</script>

<template>
  <Layout
    title="Makna Sandbox"
    desc="This is page contain several building block component that isolated from main project"
  >
    <section class="flex flex-wrap gap-6">
      <RouterLink
        to="/button"
        class="text_lg font-medium underline underline-offset-8"
      >
        Button
      </RouterLink>

      <RouterLink
        to="/input"
        class="text_lg font-medium underline underline-offset-8"
      >
        Input
      </RouterLink>

      <RouterLink
        to="/modal"
        class="text_lg font-medium underline underline-offset-8"
      >
        Modal
      </RouterLink>

      <RouterLink
        to="/chart"
        class="text_lg font-medium underline underline-offset-8"
      >
        Chart
      </RouterLink>

      <RouterLink
        to="/loader"
        class="text_lg font-medium underline underline-offset-8"
      >
        Loader
      </RouterLink>

      <RouterLink
        to="/loader-full"
        class="text_lg font-medium underline underline-offset-8"
      >
        Loader Full
      </RouterLink>

      <RouterLink
        to="/datepicker"
        class="text_lg font-medium underline underline-offset-8"
      >
        Datepicker
      </RouterLink>

      <RouterLink
        to="/calendar"
        class="text_lg font-medium underline underline-offset-8"
      >
        Calendar
      </RouterLink>
    </section>
  </Layout>
</template>
