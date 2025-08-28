<script setup lang="ts">
import type { TabsItem } from "@nuxt/ui";

const items = <TabsItem[]>[
  {
    label: "Login",
    icon: "i-lucide-user",
    slot: "login" as const,
  },
  {
    label: "Register",
    icon: "i-lucide-user",
    slot: "register" as const,
  },
];
</script>
<template>
  <UContainer class="flex h-full items-center justify-center">
    <UCard class="w-full max-w-96 min-w-48">
      <UTabs :items="items">
        <template #login>
          <OAuthButton />
          <USeparator class="text-sm" label="or" />
          <LoginForm />
        </template>
        <template #register>
          <RegisterForm />
        </template>
      </UTabs>
    </UCard>
  </UContainer>
</template>
