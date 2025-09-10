export default defineNuxtRouteMiddleware(async (to) => {
  const auth = useAuthStore();
  if (auth.accessToken && to.path == "/login") return navigateTo("/");
});
