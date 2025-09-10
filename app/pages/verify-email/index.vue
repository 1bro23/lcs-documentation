import { UCard } from '../../.nuxt/components';
<script lang="ts" setup>
const route = useRoute();
const router = useRouter();
const message = route.query.message;
const isSuccess = route.query.isSuccess == "true";
const progress = ref();
const duration = 2000;
const interval = 33;

onMounted(() => {
  const start = Date.now();
  const timer = setInterval(() => {
    const elapsed = Date.now() - start;
    progress.value = Math.min((elapsed / duration) * 100, 100);
    if (progress.value >= 100) {
      clearInterval(timer);
      router.push("/");
    }
  }, interval);
});
</script>
<template>
  <div class="grid h-full place-items-center">
    <UContainer class="w-fit">
      <UBadge
        :icon="isSuccess ? 'i-lucide-check-circle' : 'i-lucide-x-circle'"
        size="xl"
        :class="isSuccess ? '' : 'bg-error'"
        >{{ message }}</UBadge
      >
      <UProgress
        v-model="progress"
        class="mb-1"
        :color="isSuccess ? 'primary' : 'error'"
      />
    </UContainer>
  </div>
</template>
