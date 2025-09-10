<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = <NavigationMenuItem[]>[
  {
    label: "Profile",
    icon: "i-lucide-user",
    to: "/user/settings/profile",
  },
  {
    label: "Password and authentication",
    icon: "i-lucide-lock",
    to: "/user/settings/password-authentication",
  },
];
</script>
<template>
  <div>
    <UNavigationMenu
      tooltip
      :items="items"
      orientation="vertical"
      class="w-full"
    />
  </div>
</template>
