<script setup>
defineProps({
  /**
   * The size of the button
   * @values primary, secondary-color, secondary-gray
   */
  hierarcy: {
    type: String,
    default: 'primary'
  },
  /**
   * The size of the button
   * @values sm, md, lg
   */
  size: {
    type: String,
    default: 'md'
  },
  /**
   * Gets called when the user clicks on the button
   */
  onClick: {
    type: Function
  }
})
</script>

<template>
  <button
    @click="onClick"
    class="btn"
    :class="{
      btn_primary: hierarcy == 'primary',
      'btn_secondary-color': hierarcy == 'secondary-color',
      'btn_secondary-gray': hierarcy == 'secondary-gray',
      btn_sm: size == 'sm',
      btn_md: size == 'md',
      btn_lg: size == 'lg'
    }"
  >
    <slot />
  </button>
</template>

<style lang="postcss">
.btn {
  @apply rounded-lg font-semibold transition-all duration-150 ease-in focus-within:outline-none;

  /** Hierarcy */
  &_primary {
    @apply hover:bg-primary-darker bg-primary-main text-neutral-50 focus-within:ring-4 focus-within:ring-primary-surface;
  }

  &_secondary {
    &-color {
      @apply border border-primary-main bg-neutral-50 text-primary-main focus-within:ring-4 focus-within:ring-primary-surface hover:bg-primary-surface;
    }

    &-gray {
      @apply border border-neutral-300 bg-neutral-50 text-neutral-700 focus-within:ring-4 focus-within:ring-neutral-200 hover:bg-neutral-100;
    }
  }

  /** Size */
  &_sm {
    @apply px-3.5 py-2 text-sm leading-[1.43];
  }

  &_md {
    @apply px-4 py-2.5 text-sm leading-[1.43];
  }

  &_lg {
    @apply px-[1.125rem] py-2.5 text-base leading-normal;
  }
}
</style>
