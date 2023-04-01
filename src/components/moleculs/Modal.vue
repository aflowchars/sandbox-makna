<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle
} from '@headlessui/vue'

import { Button } from '@/components/atomics'

import { CloseXLinear } from '@/assets/icons'

defineProps({
  modalRef: {
    /**
     * The ref of the modal
     * @values true, false
     */
    type: Boolean,
    default: false
  },
  /**
   * The function to close modal
   * @values function
   */
  closeModal: {
    type: Function
  },
  /**
   * The title of the modal
   * @values abcdefg
   */
  title: {
    type: String,
    default: 'Title goes here'
  },
  /**
   * The action of the modal
   * @values true, false
   */
  withActions: {
    type: Boolean,
    default: true
  }
})
</script>

<template>
  <TransitionRoot appear :show="modalRef" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-neutral-900 bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-neutral-50 p-6 text-left align-middle shadow-xl transition-all"
            >
              <DialogTitle as="div" class="flex items-center justify-between">
                <h3 class="text_xl font-semibold">{{ title }}</h3>

                <button @click="closeModal">
                  <CloseXLinear class="h-5 w-5 stroke-neutral-900 stroke-2" />
                </button>
              </DialogTitle>

              <main class="my-6">
                <slot />
              </main>

              <footer v-if="withActions" class="mt-4 flex justify-end gap-3">
                <Button :on-click="closeModal" hierarcy="secondary-color">
                  Cancel
                </Button>

                <Button :on-click="closeModal" hierarcy="primary">
                  Submit
                </Button>
              </footer>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
