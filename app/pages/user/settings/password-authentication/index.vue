<script setup lang="ts">
const { getUser } = useUser();
const user = await getUser();
</script>
<template>
  <UCard class="w-full">
    <template #header>
      <span class="text-lg">Two-factor Authentication</span>
    </template>
    <div class="flex flex-col gap-3">
      <div class="flex justify-between">
        <span>Status</span>
        <UBadge :color="user?.twoFactorEnabled ? 'primary' : 'error'">{{
          user?.twoFactorEnabled ? "enabled" : "disabled"
        }}</UBadge>
      </div>
      <USeparator />
      <div class="flex items-center justify-between">
        <span>Authenticator app</span>
        <UButton
          :to="
            user.twoFactorEnabled ? 'authenticator-app' : 'authenticator-app'
          "
          >{{ user?.twoFactorEnabled ? "edit" : "add" }}</UButton
        >
      </div>
    </div>
  </UCard>
</template>
