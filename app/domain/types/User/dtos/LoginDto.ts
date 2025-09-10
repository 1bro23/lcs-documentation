import Joi from "joi";
import type { FormFields } from "~/shared/types/FormFields";

export interface LoginDto {
  username: string;
  password: string;
}

export const createLogin = () => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().min(8).alphanum().required(),
  });
  const item = reactive<LoginDto>({
    username: "",
    password: "",
  });
  const formFields = <FormFields[]>[
    {
      value: toRef(item, "username"),
      type: "text",
      label: "Username",
      required: true,
    },
    {
      value: toRef(item, "password"),
      type: "password",
      label: "Password",
      required: true,
    },
  ];
  return { schema, item, formFields };
};
