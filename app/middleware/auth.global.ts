import type { UserSession } from "~/domain/types/UserSession/UserSession";
import type { ApiResponse } from "~/shared/types/ApiResponse";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const auth = useAuthStore();
  const { $api } = useNuxtApp();

  if (!auth.isChecked) {
    console.log(`Get user info [${to.path}]`);
    try {
      const session = await $api<ApiResponse<UserSession>>("auth/me", {
        method: "GET",
        credentials: "include",
        headers: useRequestHeaders(["cookie"]),
      });
      if (session.data?.accessToken)
        auth.setAccessToken(session.data.accessToken);
    } catch (err) {
      if (to.path !== "/login") return navigateTo("/login");
    } finally {
      auth.checked();
    }
  }
  if (
    !auth.accessToken &&
    to.path !== "/login" &&
    to.path !== "/login/verify-2fa"
  ) {
    return navigateTo("/login");
  }
});
