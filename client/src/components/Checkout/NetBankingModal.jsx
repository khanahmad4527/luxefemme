import React, { memo } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { netBankingSchema } from "../../schemas/payment";

const initialValues = {
  bankName: "",
  accountNumber: "",
  ifscCode: "",
  password: "",
};

const NetBankingModal = ({ orderConfirmed }) => {
  const bankOptions = [
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "IndusInd Bank",
    "Kotak Mahindra Bank",
    "Yes Bank",
    "IDFC First Bank",
    "Federal Bank",
    "Oriental Bank of Commerce",
    "Central Bank of India",
    "Indian Overseas Bank",
  ];

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: netBankingSchema,
      onSubmit: async (values, action) => {
        orderConfirmed();
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl
          height="90px"
          isInvalid={touched?.bankName && errors?.bankName}
        >
          <FormLabel>Bank Name</FormLabel>
          <Select
            name="bankName"
            value={values.bankName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Select bank name"
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.bankName && errors?.bankName
                ? {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            _hover={
              touched?.bankName && errors?.bankName
                ? {
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
          >
            {bankOptions.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </Select>
          {errors?.bankName && touched?.bankName ? (
            <FormErrorMessage>{errors?.bankName}</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl
          height="90px"
          isInvalid={touched?.accountNumber && errors?.accountNumber}
        >
          <FormLabel>Account Number</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.accountNumber && errors?.accountNumber
                ? {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            _hover={
              touched?.accountNumber && errors?.accountNumber
                ? {
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            type="text"
            placeholder="Enter account number"
            name="accountNumber"
            value={values.accountNumber}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={20}
          />
          {errors?.accountNumber && touched?.accountNumber ? (
            <FormErrorMessage>{errors?.accountNumber}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl
          height="90px"
          isInvalid={touched?.ifscCode && errors?.ifscCode}
        >
          <FormLabel>IFSC Code</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.ifscCode && errors?.ifscCode
                ? {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            _hover={
              touched?.ifscCode && errors?.ifscCode
                ? {
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            type="text"
            placeholder="Enter IFSC code"
            name="ifscCode"
            value={values.ifscCode}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={11}
          />
          {errors?.ifscCode && touched?.ifscCode ? (
            <FormErrorMessage>{errors?.ifscCode}</FormErrorMessage>
          ) : null}
        </FormControl>

        <FormControl
          height="90px"
          isInvalid={touched?.password && errors?.password}
        >
          <FormLabel>Password</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.password && errors?.password
                ? {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    boxShadow: "none",
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            _hover={
              touched?.password && errors?.password
                ? {
                    border: "2px solid",
                    borderColor: "red.500",
                  }
                : {
                    border: "2px solid",
                    borderColor: "teal.500",
                  }
            }
            type="password"
            placeholder="Enter password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={20}
          />
          {errors?.password && touched?.password ? (
            <FormErrorMessage>{errors?.password}</FormErrorMessage>
          ) : null}
        </FormControl>

        <Button
          type="submit"
          textTransform={"uppercase"}
          bg="lf.button"
          color="white"
          _hover={{
            color: "lf.black",
            bg: "teal.500",
          }}
        >
          Pay Now
        </Button>
      </Stack>
    </form>
  );
};

export default memo(NetBankingModal);
