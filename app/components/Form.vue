<script setup lang="ts">
import type { ObjectSchema } from "joi";
import type { FormFields } from "~/shared/types/FormFields";
defineProps<{
  state: any;
  fields: FormFields[];
  schema?: ObjectSchema<any>;
  submitLabel: string;
}>();
const emits = defineEmits<{
  (e: "submit", done: () => void): void;
}>();
const submitForm = () =>
  new Promise<void>((resolve) => emits("submit", resolve));
</script>
<template>
  <UForm
    :state="state"
    :schema="schema"
    class="flex flex-col gap-3 px-3 py-2"
    @submit="submitForm"
  >
    <UFormField
      v-for="(field, key) in fields"
      :key="key"
      :label="field.label"
      :name="field.label.toLowerCase()"
    >
      <UInput
        v-model="field.value.value"
        class="w-full"
        :type="field.type || 'text'"
        variant="subtle"
        color="primary"
      />
    </UFormField>
    <UButton loading-auto :label="submitLabel" type="submit" />
  </UForm>
</template>
