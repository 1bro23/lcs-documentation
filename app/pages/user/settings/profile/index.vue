<script setup lang="ts">
const { getUser } = useUser();
const user = await getUser();
</script>

<template>
  <div class="flex w-full flex-col p-3">
    <pre>{{ JSON.stringify(user, null, 2) }}</pre>
  </div>
</template>
