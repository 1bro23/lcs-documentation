<script lang="ts" setup>
const { logout } = useAuth();
const router = useRouter();

if (await logout()) {
  router.push("/login");
} else router.back();
</script>
<template>
  <div>
    <p>Logging out...</p>
  </div>
</template>
