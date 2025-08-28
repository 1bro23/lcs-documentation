import type { FormFields } from "~/types/FormFields";
import type { LoginModel } from "~/types/LoginModel";
import type { RegisterModel } from "~/types/RegisterModel";

export function useLogin(): { item: LoginModel; formFields: FormFields[] } {
  const item = reactive<LoginModel>({
    username: "",
    password: "",
  });
  const formFields = <FormFields[]>[
    { value: item.username, type: "text", label: "Username", required: true },
    {
      value: item.password,
      type: "password",
      label: "Password",
      required: true,
    },
  ];
  return { item, formFields };
}

export function useRegister(): {
  item: RegisterModel;
  formFields: FormFields[];
} {
  const item = reactive<RegisterModel>({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const formFields = <FormFields[]>[
    { value: item.name, type: "text", label: "Name", required: true },
    { value: item.email, type: "text", label: "Email", required: true },
    {
      value: item.username,
      type: "password",
      label: "Username",
      required: true,
    },
    { value: item.password, type: "text", label: "Password", required: true },
  ];
  return { item, formFields };
}
