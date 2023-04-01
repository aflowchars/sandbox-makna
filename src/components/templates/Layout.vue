<script setup>
defineProps(['title', 'desc'])
</script>

<template>
  <header class="py-8">
    <div class="container mx-auto max-w-screen-xl">
      <!-- Brand -->
      <figure class="mb-4">
        <RouterLink to="/">
          <img
            class="brands_makna w-40"
            src="/brands/logo-makna-color.png"
            alt="Makna Logo color variant"
          />
        </RouterLink>
      </figure>

      <header class="mb-8 space-y-1">
        <h1 class="text_2xl font-semibold">
          {{ title ?? 'Makna Sandbox' }}
        </h1>
        <p class="text-neutral-600">
          {{
            desc ??
            'This is page contain several building block component that isolated from main project'
          }}
        </p>
      </header>
    </div>

    <main class="py-8">
      <div class="container mx-auto max-w-screen-xl">
        <slot />
      </div>
    </main>
  </header>
</template>
