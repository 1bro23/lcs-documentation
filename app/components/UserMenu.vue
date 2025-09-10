<script lang="ts" setup>
import type { DropdownMenuItem } from "@nuxt/ui";
const { getUser } = useUser();
const user = await getUser();
const items = ref<DropdownMenuItem[]>([
  {
    icon: "i-lucide-settings",
    label: "Settings",
    to: "/user/settings",
  },
  {
    icon: "i-lucide-log-out",
    label: "Sign out",
    to: "/logout",
  },
]);
</script>
<template>
  <UDropdownMenu
    :items="items"
    class="hover:cursor-pointer"
    :ui="{ content: 'px-2' }"
  >
    <div>
      <UAvatar icon="i-lucide-user" />
    </div>
    <template #content-top>
      <div class="my-2 flex items-center justify-center gap-2">
        <UAvatar icon="i-lucide-user" class="row-span-2 h-10 w-10" />
        <div class="flex flex-col">
          <span>{{ user?.username ?? "Username" }}</span>
          <span class="text-dimmed text-sm">{{ user?.name ?? "Name" }}</span>
        </div>
      </div>
      <USeparator />
    </template>
  </UDropdownMenu>
</template>
