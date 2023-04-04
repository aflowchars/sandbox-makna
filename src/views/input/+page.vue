<script setup>
import { Input } from "@/components/atomics";
import { TableProps } from "@/components/organisms";
import { Layout } from "@/components/templates";

const tableInput = [
  {
    props: "title",
    value: "Title goes here (String)",
  },
  {
    props: "desc",
    value: "Description goes here (String)",
  },
  {
    props: "type",
    value: `text, number, email, file`,
  },
  {
    props: "name",
    value: `Name for the input (String)`,
  },
  {
    props: "id",
    value: `Id for the input (String)`,
  },
  {
    props: "placeholder",
    value: `Placeholder goes here (String)`,
  },
  {
    props: "is-disabled",
    value: `true, false (Boolean)`,
  },
  {
    props: "modelValue",
    value: `Model value for the input, use to track value (Any)`,
  },
  {
    props: "message",
    value: `Message for hint text (default gray & red for error) (String)`,
  },
  {
    props: "is-msg",
    value: `true, false (Boolean) (checker for hint text with default gray color)`,
  },
  {
    props: "is-error",
    value: `true, false (Boolean) (checker for hint error text with red color)`,
  },
  {
    props: "is-disabled",
    value: `true, false (Boolean) (checker for disabled input with gray color)`,
  },
  {
    props: "is-required",
    value: `true, false (Boolean) (checker for required input with focus)`,
  },
  {
    props: "width",
    value: `max-w-xs, max-w-sm, .... (String) (use tailwind default value/arbitary)`,
  },
];
</script>

<template>
  <Layout title="Input" desc="List dari beberapa property">
    <TableProps :table-data="tableInput" />

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
          placeholder="Put your email here"
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
          id="name-2"
          name="name-2"
          placeholder="Put your name here"
        />

        <Input
          width="w-72 w-full"
          title="Email"
          type="email"
          id="email-2"
          name="email-2"
          placeholder="Put your email here"
          is-disabled
        />

        <Input
          width="w-72 w-full"
          title="Password"
          type="password"
          id="password-2"
          name="password-2"
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
          id="name-3"
          name="name-3"
          placeholder="Put your name here"
        />

        <Input
          width="w-72 w-full"
          title="Email"
          desc="Put your email right here"
          type="email"
          id="email-3"
          name="email-3"
          placeholder="Put your email here"
          is-disabled
        />

        <Input
          width="w-72 w-full"
          title="Password"
          desc="Put your password right here"
          type="text"
          id="password-3"
          name="password-3"
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
          id="name-4"
          name="name-4"
          placeholder="Put your name here"
          is-msg
          message="This is a hint text to help user."
        />

        <Input
          width="w-72 w-full"
          title="Email"
          desc="Put your email right here"
          type="email"
          id="email-4"
          name="email-4"
          placeholder="Put your email here"
          is-disabled
          is-msg
          message="This is a hint text to help user."
        />

        <Input
          width="w-72 w-full"
          title="Password"
          desc="Put your password right here"
          type="text"
          id="password-4"
          name="password-4"
          placeholder="Put your password here"
          is-error
          message="This is a hint text to help user."
        />
      </div>
    </form>
  </Layout>
</template>
