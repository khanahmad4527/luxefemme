import * as Yup from "yup";

export const addressSchema = Yup.object({
  country: Yup.string().required("Country is required"),
  firstname: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be at most 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "First name must contain only alphabets")
    .required("First name is required"),

  lastname: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be at most 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Last name must contain only alphabets")
    .required("Last name is required"),

  mobile: Yup.string()
    .matches(/^\d{10}$/, "Mobile number is not valid")
    .required("Mobile number is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  address: Yup.object().shape({
    street_address: Yup.string()
      .max(100, "Street address must be at most 100 characters")
      .required("Street address is required"),

    apartment: Yup.string()
      .max(20, "Apartment must be at most 20 characters")
      .required("Apartment is required"),

    city: Yup.string()
      .max(50, "City must be at most 50 characters")
      .required("City is required"),

    state: Yup.string()
      .max(50, "State must be at most 50 characters")
      .required("State is required"),

    pincode: Yup.string()
      .matches(/^\d{6}$/, "Pincode is not valid")
      .required("Pincode is required"),
  }),
});
