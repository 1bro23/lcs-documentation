import type { Router } from "vue-router";
import type { UserSession } from "~/domain/types/UserSession/UserSession";
import type { ApiResponse } from "~/shared/types/ApiResponse";
import { useAuthStore } from "~/stores/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const auth = useAuthStore();
  const router = nuxtApp.$router as Router;
  const baseURL = useRuntimeConfig().public.apiSettings.base + "/api";
  const api = $fetch.create({
    baseURL: baseURL,
    async onRequest({ options }) {
      if (auth.accessToken) {
        options.headers.append("Authorization", `Bearer ${auth.accessToken}`);
      }
    },
    async onResponseError({ response, request, options }) {
      if (response.status === 401) {
        try {
          const response = await $fetch<ApiResponse<UserSession>>(
            baseURL + "/api/auth/refresh-token",
            {
              method: "POST",
              credentials: "include",
            },
          );
          auth.setAccessToken(response.data?.accessToken!);

          await $fetch(request, {
            ...options,
            method: options.method as
              | "GET"
              | "POST"
              | "PUT"
              | "DELETE"
              | "PATCH"
              | "OPTIONS"
              | "HEAD"
              | undefined,
          });
        } catch (error) {
          auth.logout();
          router.push("/login");
        }
      }
    },
  });
  return {
    provide: { api },
  };
});
