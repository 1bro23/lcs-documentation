import type { LoginDto } from "~/domain/types/User/dtos/LoginDto";
import type { RegisterDto } from "~/domain/types/User/dtos/RegisterDto";
import type { UserSession } from "~/domain/types/UserSession/UserSession";
import type { ApiResponse } from "~/shared/types/ApiResponse";

export const loginApi = async (
  api: ReturnType<typeof $fetch.create>,
  payload: LoginDto,
) =>
  await api<ApiResponse<UserSession>>("auth/login", {
    method: "POST",
    body: payload,
    credentials: "include",
  });
export const registerApi = async (
  api: ReturnType<typeof $fetch.create>,
  payload: RegisterDto,
) =>
  await api<ApiResponse>("auth/register", {
    method: "POST",
    body: payload,
  });
export const logoutApi = async (api: ReturnType<typeof $fetch.create>) =>
  await api<ApiResponse>("auth/logout");
