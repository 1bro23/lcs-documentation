<script setup lang="ts">
import { defineProps } from "vue";
import type { FormFields } from "~/types/FormFields";
defineProps<{
  state: FormFields[];
  submitLabel: string;
}>();
</script>
<template>
  <UForm :state="state" class="flex flex-col gap-3 px-3 py-2">
    <UFormField
      v-for="(field, key) in state"
      :key="key"
      :label="field.label"
      :required="field.required"
    >
      <UInput
        v-model="field.value"
        class="w-full"
        :type="field.type || 'text'"
        :required="field.required"
        variant="subtle"
        color="primary"
      />
    </UFormField>
    <UButton :label="submitLabel" />
  </UForm>
</template>
