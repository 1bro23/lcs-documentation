<script setup lang="ts">
var { item, formFields } = useLogin();
</script>
<template>
  <Form :state="formFields" submit-label="Login" />
</template>
