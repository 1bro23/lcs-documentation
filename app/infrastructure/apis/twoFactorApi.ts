import type { UserSession } from "~/domain/types/UserSession/UserSession";
import type { ApiResponse } from "~/shared/types/ApiResponse";

export const getTwoFactorQrCodeApi = (
  api: ReturnType<typeof $fetch.create>,
) => {
  return api<Blob>("auth/2fa/generate-qr");
};
export const verifyTwoFactorApi = (
  api: ReturnType<typeof $fetch.create>,
  payload: { code: string },
) => {
  return api<ApiResponse<UserSession>>("auth/2fa/verify", {
    body: payload,
    method: "POST",
    credentials: "include",
  });
};

export const confirmTwoFactorApi = (
  api: ReturnType<typeof $fetch.create>,
  payload: { code: string },
) => {
  return api<ApiResponse>("auth/2fa/confirm-enable", {
    body: payload,
    method: "POST",
  });
};
