<script setup>
defineProps({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  name: {
    type: String,
    default: "name",
  },
  id: {
    type: String,
    default: "id",
  },
  placeholder: {
    type: String,
    default: "Placeholder goes here",
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Event,
  },
  message: {
    type: String,
  },
  isMsg: {
    type: Boolean,
    default: false,
  },
  isError: {
    type: Boolean,
    default: false,
  },
  isDisabled: {
    type: Boolean,
    default: false,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  width: {
    type: String,
    default: "max-w-xs",
  },
});
</script>

<template>
  <div class="space-y-3" :class="width">
    <label :for="id" class="space-y-1">
      <h5 v-if="title" class="text_base font-medium">{{ title }}</h5>

      <span v-if="desc" class="text_2xs text-neutral-600">
        {{ desc }}
      </span>
    </label>

    <input
      class="text_sm w-full rounded-md border py-2.5 px-3.5 font-normal tracking-wide text-neutral-800 ring-2 ring-transparent transition-all duration-300 ease-in-out placeholder:text-neutral-400 focus-within:ring-2 focus:outline-none"
      :class="{
        'bg-[#F9FAFB] border-neutral-300': isDisabled,
        ' focus-within:ring-primary-surface border-neutral-300': !isError,
        'border-error-main focus-within:ring-error-surface': isError,
      }"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
      :type="type"
      :id="name"
      :name="name"
      :placeholder="placeholder"
      :disabled="isDisabled ? 1 : 0"
      :required="isRequired ? 1 : 0"
    />

    <p v-if="isError" class="text_sm text-error-main">
      {{ message }}
    </p>

    <p v-if="isMsg" class="text_sm text-neutral-500">
      {{ message }}
    </p>
  </div>
</template>
