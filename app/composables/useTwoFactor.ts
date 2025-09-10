import {
  confirmTwoFactorApi,
  getTwoFactorQrCodeApi,
  verifyTwoFactorApi,
} from "~/infrastructure/apis/twoFactorApi";

export function useTwoFactor() {
  const { $api } = useNuxtApp();
  const auth = useAuthStore();
  const getQrCode = async () => {
    const response = await getTwoFactorQrCodeApi($api);
    return URL.createObjectURL(response);
  };
  const verify = async (payload: { code: string }) => {
    var res = await verifyTwoFactorApi($api, payload);
    if (res.data?.accessToken) auth.setAccessToken(res.data.accessToken);
  };
  const confirm = (payload: { code: string }) =>
    confirmTwoFactorApi($api, payload);
  return { getQrCode, verify, confirm };
}
