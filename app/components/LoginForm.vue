<script setup lang="ts">
import { useAuth } from "../composables/useAuth";

const { createLogin, login } = useAuth();
const { schema, item, formFields } = createLogin();
const handleSubmit = async (done: () => void) => {
  var response = await login(item);
  done();
  if (response?.data?.twoFactorRequired) {
    return navigateTo("/login/verify-2fa");
  }
  return navigateTo("/");
};
</script>
<template>
  <Form
    :state="item"
    :fields="formFields"
    :schema="schema"
    submit-label="Login"
    @submit="handleSubmit"
  />
</template>
