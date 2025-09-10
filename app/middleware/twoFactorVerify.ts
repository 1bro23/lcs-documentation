export default defineNuxtRouteMiddleware((to) => {
  const { accessToken } = useAuthStore();

  if (to.path === "/login/verify-2fa" && accessToken) return navigateTo("/");
});
