<script setup lang="ts">
const { getUser } = useUser();
const user = await getUser();
</script>
<template>
  <UContainer class="flex items-center justify-center gap-1 py-3">
    <UAvatar icon="i-lucide-image" class="text-3xl" />
    <span>{{ user?.name }}</span>
    <span class="text-dimmed">({{ user?.username }})</span>
  </UContainer>
  <div class="mx-4 flex lg:mx-12">
    <UserSettingsNavigation class="mr-3 w-32 md:w-48 lg:mr-6 lg:w-fit" />
    <NuxtPage />
  </div>
</template>
