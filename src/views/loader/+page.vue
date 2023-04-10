<script setup>
import { Loader } from '@/components/atomics'
import { Layout } from '@/components/templates'
</script>
<template>
  <Layout title="Loader" desc="Ini adalah loading dari halaman">
    <div class="flex flex-col items-center gap-16">
      <Loader variant="icon-only" />
      <div class="flex min-h-screen items-center justify-center">
        <Loader variant="icon-text" />
      </div>
    </div>
  </Layout>
</template>
