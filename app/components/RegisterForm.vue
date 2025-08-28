<script setup lang="ts">
const { item, formFields } = useRegister();
</script>
<template>
  <Form :state="formFields" submit-label="Register" />
</template>
