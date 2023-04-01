<script setup>
/**
 * The data properties for TableProps
 * @values props, value
 */
defineProps({
  tableData: Array
})
</script>

<template>
  <table class="mb-10">
    <thead class="text-left">
      <tr>
        <th
          class="text_md border-neutral-300 bg-primary-surface px-8 py-4 font-medium"
        >
          Props
        </th>
        <th
          class="text_md border-neutral-300 bg-primary-surface px-8 py-4 font-medium last:border-r-0"
        >
          Value
        </th>
      </tr>
    </thead>

    <tbody class="text-left font-medium text-neutral-600">
      <tr
        v-for="data in tableData"
        class="border-b border-neutral-300 last:border-b-0"
      >
        <td class="bg-neutral-100 py-4 px-8">
          {{ data.props }}
        </td>
        <td class="bg-neutral-100 py-4 px-8">
          {{ data.value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>
