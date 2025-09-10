<script setup lang="ts">
const { createRegister, register } = useAuth();
const { schema, item, formFields } = createRegister();
const handleSubmit = async (done: () => void) => {
  await register(item);
  done();
};
</script>
<template>
  <Form
    :state="item"
    :fields="formFields"
    :schema="schema"
    submit-label="Register"
    @submit="handleSubmit"
  />
</template>
