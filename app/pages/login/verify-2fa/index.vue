<script setup lang="ts">
import { FetchError } from "ofetch";
import type { ApiResponse } from "~/shared/types/ApiResponse";

definePageMeta({
  middleware: ["two-factor-verify"],
});

const { verify } = useTwoFactor();

const code = ref<string[]>([]);
const isError = ref(false);
const errorMessage = ref<string | undefined>("");

const handleVerify = async () => {
  const codeString = code.value.join("");
  try {
    await verify({ code: codeString });
    navigateTo("/");
  } catch (error) {
    const err = error as FetchError<ApiResponse>;
    errorMessage.value = err.data?.message;
    isError.value = true;
  }
};
const clearError = () => {
  isError.value = false;
};
</script>
<template>
  <div class="flex h-full items-center justify-center pt-16 text-center">
    <UCard>
      <template #header> <p>Verify 2FA Code</p></template>
      <div class="flex flex-col gap-3">
        <span>Put your code from authenticator app here</span>
        <UPinInput
          v-model="code"
          length="6"
          class="m-auto"
          @complete="handleVerify()"
          @change="clearError()"
          :ui="{
            base: isError ? 'ring ring-error' : '',
          }"
        />
        <span v-if="isError" class="text-error">{{ errorMessage }}</span>
        <UButton @click="handleVerify()">Verify</UButton>
      </div>
    </UCard>
  </div>
</template>
