import * as Yup from "yup";

export const signUpSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .max(50)
    .required("First name is required")
    .matches(/^[a-zA-Z\s]+$/, "First name must contain only alphabets"),

  lastname: Yup.string()
    .min(2)
    .max(50)
    .required("Last name is required")
    .matches(/^[a-zA-Z\s]+$/, "Last name must contain only alphabets"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(128)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),

  confirm_password: Yup.string()
    .required("Confirm password is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});
