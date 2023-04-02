<script setup>
import Layout from "@/components/templates/Layout.vue";
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
    </section>
  </Layout>
</template>
