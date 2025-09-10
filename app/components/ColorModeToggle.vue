<script setup lang="ts">
const colorMode = useColorMode();
const toggleTheme = () => {
  colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
};
</script>
<template>
  <UButton
    @click="toggleTheme"
    class="bg-accented hover:bg-elevated rounded-full p-1 font-bold select-none"
  >
    <UIcon name="i-lucide-sun" class="h-6 w-6 dark:hidden" />
    <UIcon
      name="i-lucide-moon"
      class="hidden h-6 w-6 text-amber-100 dark:block"
    />
  </UButton>
</template>
