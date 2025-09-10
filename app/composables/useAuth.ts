import { createLogin, type LoginDto } from "~/domain/types/User/dtos/LoginDto";
import {
  createRegister,
  type RegisterDto,
} from "~/domain/types/User/dtos/RegisterDto";
import { FetchError } from "ofetch";
import type { ApiResponse } from "~/shared/types/ApiResponse";
import type { Toast } from "@nuxt/ui/runtime/composables/useToast.js";
import {
  loginApi,
  logoutApi,
  registerApi,
} from "~/infrastructure/apis/authApi";
import type { Router } from "vue-router";

export function useAuth() {
  const toast = useToast();
  const router = useRouter();
  const auth = useAuthStore();
  const { $api } = useNuxtApp();

  const login = async (payload: LoginDto) => {
    try {
      var response = await loginApi($api, payload);
      if (response.data?.twoFactorRequired)
        auth.setTwoFactorStatus(response.data.twoFactorRequired);
      if (!response.data?.accessToken) return response;

      auth.setAccessToken(response.data.accessToken);
    } catch (error) {
      handleFetchError("Login failed.", error, toast.add);
    }
  };
  const register = async (payload: RegisterDto) => {
    try {
      var result = await registerApi($api, payload);
      handleRegisterSuccess(router, toast.add);
      return result;
    } catch (error) {
      handleFetchError("Register failed.", error, toast.add);
    }
  };
  const logout = async () => {
    try {
      await logoutApi($api);
      auth.logout();
      return true;
    } catch (error) {
      handleFetchError("Logout failed.", error, toast.add);
    }
  };

  return {
    createLogin,
    createRegister,
    register,
    login,
    logout,
  };
}

function handleFetchError(
  title: string,
  error: unknown,
  add: (toast: Partial<Toast>) => Toast,
) {
  const toastMessage = <Toast>{
    title: title,
    icon: "i-lucide-circle-x",
    description: "Fetch failed.",
  };
  if (error instanceof FetchError) {
    const fetchError = error as FetchError<ApiResponse>;
    toastMessage.description = fetchError.data?.message;
    if (fetchError.statusCode == 500) {
      const match = fetchError.data?.message.match(/id*.'([^']+)'/i);
      if (match) {
        setTimeout(() => {
          toastMessage.actions?.at(0)?.label?.concat("test");
        }, 1000);
        toastMessage.actions = [
          {
            icon: "i-lucide-copy",
            label: "Copy ID",
            onClick: (e) => {
              navigator.clipboard.writeText(match[1]!);
            },
          },
        ];
      }
    }
  }
  add(toastMessage);
}
function handleRegisterSuccess(
  router: Router,
  add: (toast: Partial<Toast>) => Toast,
) {
  const toastMessage = <Toast>{
    title: "Register success.",
    icon: "i-lucide-circle-check",
    description: "Please check your email for verification.",
  };
  add(toastMessage);
  setTimeout(() => {
    router.push("/login");
  }, 5000);
}
