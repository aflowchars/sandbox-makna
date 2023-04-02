<script setup>
import { Input } from "@/components/atomics";
import { Layout } from "@/components/templates";
</script>

<template>
  <Layout
    title="Makna Sandbox"
    desc="This is page contain several building block component that isolated from main project"
  >
    <form class="flex flex-col gap-6">
      <div class="flex gap-6">
        <Input
          width="w-72 w-full"
          type="text"
          id="name"
          name="name"
          placeholder="Put your name here"
        />

        <Input
          width="w-72 w-full"
          type="email"
          id="email"
          name="email"
          placeholder="Put your name here"
          is-disabled
        />

        <Input
          width="w-72 w-full"
          type="password"
          id="password"
          name="password"
          placeholder="Put your password here"
          is-error
        />
      </div>

      <div class="flex gap-6">
        <Input
          width="w-72 w-full"
          title="Name"
          type="text"
          id="name"
          name="name"
          placeholder="Put your name here"
        />

        <Input
          width="w-72 w-full"
          title="Email"
          type="email"
          id="email"
          name="email"
          placeholder="Put your name here"
          is-disabled
        />

        <Input
          width="w-72 w-full"
          title="Password"
          type="password"
          id="password"
          name="password"
          placeholder="Put your password here"
          is-error
        />
      </div>

      <div class="flex gap-6">
        <Input
          width="w-72 w-full"
          title="Name"
          desc="Put your name right here"
          type="text"
          id="name"
          name="name"
          placeholder="Put your name here"
        />

        <Input
          width="w-72 w-full"
          title="Email"
          desc="Put your email right here"
          type="email"
          id="email"
          name="email"
          placeholder="Put your name here"
          is-disabled
        />

        <Input
          width="w-72 w-full"
          title="Password"
          desc="Put your password right here"
          type="text"
          id="password"
          name="password"
          placeholder="Put your password here"
          is-error
        />
      </div>

      <div class="flex gap-6">
        <Input
          width="w-72 w-full"
          title="Name"
          desc="Put your name right here"
          type="text"
          id="name"
          name="name"
          placeholder="Put your name here"
          is-msg
          message="This is a hint text to help user."
        />

        <Input
          width="w-72 w-full"
          title="Email"
          desc="Put your email right here"
          type="email"
          id="email"
          name="email"
          placeholder="Put your name here"
          is-disabled
          is-msg
          message="This is a hint text to help user."
        />

        <Input
          width="w-72 w-full"
          title="Name"
          desc="Put your name right here"
          type="text"
          id="name"
          name="name"
          placeholder="Put your name here"
          is-error
          message="This is a hint text to help user."
        />
      </div>
    </form>
  </Layout>
</template>
