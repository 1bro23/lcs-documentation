<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const auth = useAuthStore();
const { accessToken } = storeToRefs(auth);
const menus = computed<NavigationMenuItem[]>(() => {
  var result = <NavigationMenuItem[]>[];
  if (!accessToken.value) return [...result];
  else return [...result];
});
</script>
<template>
  <div class="flex justify-center">
    <div
      class="flex h-12 w-full items-center justify-between gap-12 px-6 outline-1 *:select-none"
    >
      <UButton
        class="bg-surface hover:bg-elevated text-xl font-bold text-[var(--color-text)]"
        to="/"
        >Home</UButton
      >
      <UNavigationMenu
        v-if="auth.isChecked"
        :items="menus"
        class="w-full justify-center"
      />
      <USkeleton v-else class="h-6 w-36" />
      <div class="flex items-center gap-3">
        <UserMenu v-if="auth.accessToken" />
        <ULink
          v-else
          href="/login"
          as="button"
          class="flex items-center gap-1 whitespace-nowrap"
          ><UIcon name="i-lucide-log-in" class="text-xl" /> Sign in</ULink
        >
        <ColorModeToggle />
      </div>
    </div>
  </div>
</template>
