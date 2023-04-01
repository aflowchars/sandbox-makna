<script setup>
import { ref } from 'vue'

import { Button } from '@/components/atomics'
import { Modal } from '@/components/moleculs'
import { Layout } from '@/components/templates'

const modalRef = ref(false)

function openModal() {
  modalRef.value = true
}

function closeModal() {
  modalRef.value = false
}
</script>

<template>
  <Layout title="Modal" desc="Ini adalah komponen dasar dari modal">
    <Button hierarcy="primary" :on-click="openModal"> Open Modal </Button>

    <Modal
      :modal-ref="modalRef"
      :close-modal="closeModal"
      title="User Profile"
      :with-actions="true"
    >
      <form>
        <div class="space-y-3">
          <label for="apenk" class="space-y-1">
            <h5 class="text_base font-medium">Name</h5>

            <span class="text_2xs text-neutral-600"
              >Description right here</span
            >
          </label>

          <input
            name="apenk"
            id="apenk"
            placeholder="Your placeholder goes here"
            class="text_sm w-full rounded-md border border-neutral-300 py-2.5 px-3.5 font-normal tracking-wide text-neutral-800 ring-2 ring-transparent transition-all duration-300 ease-in-out placeholder:text-neutral-400 focus-within:ring-2 focus-within:ring-primary-surface focus:outline-none"
          />

          <p class="text_sm text-neutral-600">
            This is a hint text to help user.
          </p>
        </div>
      </form>
    </Modal>
  </Layout>
</template>
