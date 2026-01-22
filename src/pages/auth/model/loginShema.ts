import * as yup from "yup";

export const loginSchema = yup.object({
  identifier: yup
    .string()
    .required("Email or phone is required")
    .min(3, "Too short"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Minimum 6 characters"),
  remember: yup.boolean().required(),
});
