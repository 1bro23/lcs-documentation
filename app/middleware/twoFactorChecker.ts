export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter();
  const { user } = useAuthStore();
  if (user?.twoFactorEnabled && to.path === "/user/settings/authenticator-app")
    router.push("/user/settings/password-authentication");
});
