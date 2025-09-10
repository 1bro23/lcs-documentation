import { useRouter } from "vue-router";
import type { UserSession } from "~/domain/types/UserSession/UserSession";
import type { ApiResponse } from "~/shared/types/ApiResponse";

// export default defineNuxtPlugin(async () => {
//   const auth = useAuthStore();
//   const { $api } = useNuxtApp();

//   try {
//     const session = await $api<ApiResponse<UserSession>>("auth/me", {
//       method: "GET",
//       credentials: "include",
//     });
//     if (session.data?.accessToken)
//       auth.setAccessToken(session.data.accessToken);
//   } catch (err) {
//   } finally {
//     auth.checked();
//   }
// });
