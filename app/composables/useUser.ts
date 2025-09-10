import type { User } from "~/domain/types/User/User";
import { userDetailApi } from "~/infrastructure/apis/userApi";

export function useUser() {
  const auth = useAuthStore();
  const { $api } = useNuxtApp();
  const getUser = async () => {
    if (!auth.user) {
      const response = await userDetailApi($api);
      auth.setUser(response.data);
    }
    return auth.user as User;
  };
  const refreshUser = async () => {
    auth.user = null;
  };
  return { getUser, refreshUser };
}
