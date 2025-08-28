<script setup lang="ts">
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
<template>
  <UButton
    @click="toggleTheme"
    class="bg-accented hover:bg-surface rounded-full p-1 font-bold text-amber-400"
  >
    <UIcon name="i-lucide-sun" class="h-6 w-6 text-yellow-400 dark:hidden" />
    <UIcon
      name="i-lucide-moon"
      class="hidden h-6 w-6 text-yellow-300 dark:block"
    />
  </UButton>
</template>
