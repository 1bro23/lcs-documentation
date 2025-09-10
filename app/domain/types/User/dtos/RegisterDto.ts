import Joi from "joi";
import type { FormFields } from "~/shared/types/FormFields";

export interface RegisterDto {
  name: string;
  email: string;
  username: string;
  password: string;
}

export const createRegister = () => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    username: Joi.string().required(),
    password: Joi.string().min(8).alphanum().required(),
  });
  const item = reactive<RegisterDto>({
    name: "",
    email: "",
    username: "",
    password: "",
  });
  const formFields = <FormFields[]>[
    {
      value: toRef(item, "name"),
      type: "text",
      label: "Name",
      required: true,
    },
    {
      value: toRef(item, "email"),
      type: "text",
      label: "Email",
      required: true,
    },
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
