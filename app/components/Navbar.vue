<script setup lang="ts"></script>
<template>
  <div class="flex justify-center">
    <div
      class="bg-accented my-12 mt-4 flex w-fit items-center justify-between gap-12 rounded-2xl px-6 py-1 *:select-none"
    >
      <div class="text-xl font-bold">
        <NuxtLink to="/">Home</NuxtLink>
      </div>
      <div class="flex items-center gap-4 font-semibold">
        <NuxtLink to="/docs">Documentation</NuxtLink>
      </div>
      <ColorModeToggle />
    </div>
  </div>
</template>
