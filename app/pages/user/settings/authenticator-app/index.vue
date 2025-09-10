<script setup lang="ts">
import type { ApiResponse } from "~/shared/types/ApiResponse";
import { FetchError } from "ofetch";

definePageMeta({
  middleware: ["two-factor-checker"],
});

const { getQrCode, confirm } = useTwoFactor();
const { refreshUser } = useUser();

const qrCode = ref<string>();
const code = ref([]);
const pending = ref(false);
const isError = ref(false);
const errorMessage = ref<string | undefined>();

const handleCancel = () => navigateTo("/user/settings/password-authentication");
const handleActivate = async () => {
  const item = code.value.join("");
  try {
    pending.value = true;
    await confirm({ code: item });
    await refreshUser();
    navigateTo("/user/settings");
  } catch (error) {
    console.log(error);
    var err = error as FetchError<ApiResponse>;
    errorMessage.value = err.data?.message;
    isError.value = true;
  } finally {
    pending.value = false;
  }
};
const clearError = () => {
  isError.value = false;
};

onMounted(async () => {
  qrCode.value = await getQrCode();
});
const test = async () => {
  await refreshUser();
  navigateTo("/user/settings");
};
</script>
<template>
  <UCard class="w-full">
    <template #header>
      <span class="text-lg">Authenticator app</span>
    </template>
    <div class="flex flex-col items-center gap-3">
      <span>Scan the QR code</span>
      <div
        class="bg-elevated grid aspect-square w-48 place-items-center justify-center rounded-lg"
      >
        <UIcon v-if="!qrCode" name="i-lucide-image" class="text-9xl" />
        <NuxtImg v-else :src="qrCode" alt="Two Factor Qr Code" />
      </div>
      <div class="flex flex-col gap-3">
        <span>Verify the code from the app</span>
        <UPinInput
          v-model="code"
          length="6"
          otp
          v-on:complete="handleActivate()"
          :ui="{
            base: isError ? 'ring-red-500' : '',
          }"
          v-on:change="clearError()"
        />
        <div class="text-error flex justify-center text-sm">
          <UIcon
            v-if="pending"
            name="i-lucide-loader-circle"
            class="animate-spin"
          />
          <span v-if="isError">{{ errorMessage }}</span>
        </div>
        <div class="flex justify-center gap-3">
          <UButton @click="handleActivate()">Activate</UButton>
          <UButton
            class="bg-accented text-default hover:text-inverted"
            @click="handleCancel()"
            >Cancel</UButton
          >
        </div>
      </div>
    </div>
  </UCard>
</template>
