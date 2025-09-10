<script setup lang="ts">
definePageMeta({
  middleware: ["login"],
});

import type { TabsItem } from "@nuxt/ui";
const auth = useAuthStore();
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
    <UCard class="w-full max-w-96 min-w-48" v-if="auth.isChecked">
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
    <UCard class="w-full max-w-96 min-w-48" v-else>
      <template #header>
        <div class="flex gap-3">
          <USkeleton class="h-12 w-12 rounded-full" />
          <USkeleton class="h-12 flex-1" />
        </div>
      </template>
      <div class="flex flex-col gap-3">
        <div class="flex w-full items-center gap-3">
          <USkeleton class="h-12 w-12 rounded-full" />
          <USkeleton class="h-6 flex-1" />
        </div>
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
        <USkeleton class="h-6 w-full" />
      </div>
    </UCard>
  </UContainer>
</template>
