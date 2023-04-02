import * as Yup from "yup";

export const cardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .required("Card number is required")
    .matches(/^[0-9]{4}([ -]?[0-9]{4}){3}$/, "Invalid card number format")
    .max(19, "Card number must be at most 19 characters"),

  expiryDate: Yup.string()
    .required("Expiry date is required")
    .matches(
      /^(0[1-9]|1[0-2]) \/ \d{2}$/,
      "Expiry date is invalid. Must be in MM / YY format"
    )
    .test("valid-date", "Expiry date must be in the future", function (value) {
      const [month, year] = value.split(" / ");
      const now = new Date();
      const expiry = new Date(`20${year}`, month - 1);
      return expiry > now;
    }),

  cvv: Yup.string()
    .required("CVV is required")
    .matches(/^\d{3,4}$/, "Invalid CVV format"),

  cardHolderName: Yup.string()
    .min(2, "Cardholder name must be at least 2 characters")
    .max(50, "Cardholder name must be at most 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Cardholder name must contain only alphabets")
    .required("Cardholder name is required"),
});

export const netBankingSchema = Yup.object().shape({
  bankName: Yup.string().required("Bank name is required"),

  accountNumber: Yup.string()
    .min(10, "Account number must be at least 10 characters")
    .max(20, "Account number must be at most 20 characters")
    .matches(/^[0-9]+$/, "Account number can only contain numbers")
    .required("Account number is required"),

  ifscCode: Yup.string()
    .matches(/^[A-Za-z]{4}[a-zA-Z0-9]{7}$/, "Invalid IFSC code format")
    .max(11, "IFSC code must be at most 11 characters")
    .required("IFSC code is required"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .required("Password is required"),
});
