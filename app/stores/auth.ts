import type { User } from "~/domain/types/User/User";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    accessToken: null as string | null,
    user: null as User | null | undefined,
    twoFactorEnabled: false,
    isChecked: false,
  }),
  actions: {
    getAccessToken() {
      return new Promise<string | null>((resolve) => {
        if (this.accessToken) resolve(this.accessToken);
        const stop = watch(
          () => this.isChecked,
          (token) => {
            if (token) {
              stop();
              resolve(this.accessToken);
            }
          },
        );
      });
    },
    setTwoFactorStatus(status: boolean) {
      this.twoFactorEnabled = status;
    },
    setAccessToken(token: string) {
      this.accessToken = token;
    },
    checked() {
      this.isChecked = true;
    },
    setUser(user: User | null | undefined) {
      this.user = user;
    },
    logout() {
      this.accessToken = null;
      this.user = null;
      this.twoFactorEnabled = false;
    },
  },
});
