import type { User } from "~/domain/types/User/User";
import type { ApiResponse } from "~/shared/types/ApiResponse";

export const userDetailApi = (api: ReturnType<typeof $fetch.create>) => {
  return api<ApiResponse<User>>("user", {
    method: "GET",
  });
};
