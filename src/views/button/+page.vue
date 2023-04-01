<script setup>
import { Button } from '@/components/atomics'
import { TableProps } from '@/components/organisms'
import { Layout } from '@/components/templates'

const tableButton = [
  {
    props: 'hierarcy',
    value: 'primary, secondary-color, secondary-gray'
  },
  {
    props: 'size',
    value: 'sm, md, lg'
  },
  {
    props: 'on-click',
    value: `console.log('halo')`
  }
]

const testClick = () => {
  console.log('Halo')
}
</script>

<template>
  <Layout title="Button" desc="List buat props dari button">
    <TableProps :table-data="tableButton" />

    <section class="flex flex-wrap gap-8 pt-10">
      <div class="flex gap-4">
        <Button :on-click="testClick" size="sm" hierarcy="primary">
          Button
        </Button>
        <Button size="md" hierarcy="primary">Button</Button>
        <Button size="lg" hierarcy="primary">Button</Button>
      </div>

      <div class="flex gap-4">
        <Button size="sm" hierarcy="secondary-color">Button</Button>
        <Button size="md" hierarcy="secondary-color">Button</Button>
        <Button size="lg" hierarcy="secondary-color">Button</Button>
      </div>

      <div class="flex gap-4">
        <Button size="sm" hierarcy="secondary-gray">Button</Button>
        <Button size="md" hierarcy="secondary-gray">Button</Button>
        <Button size="lg" hierarcy="secondary-gray">Button</Button>
      </div>
    </section>
  </Layout>
</template>
