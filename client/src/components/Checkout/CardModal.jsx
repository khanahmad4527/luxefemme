import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { cardSchema } from "../../schemas/payment";
import { useState, memo } from "react";

const initialValues = {
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  cardHolderName: "",
};

const CardModal = ({ orderConfirmed }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: cardSchema,
      onSubmit: (values, action) => {
        orderConfirmed();
        action.resetForm();
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <FormControl
          height="90px"
          isInvalid={touched?.cardNumber && errors?.cardNumber}
        >
          <FormLabel>Card Number</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.cardNumber && errors?.cardNumber
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
              touched?.cardNumber && errors?.cardNumber
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
            placeholder="4444-4444-4444-4444"
            name="cardNumber"
            value={values.cardNumber}
            onChange={(e) => {
              let formattedCardNumber = e.target.value
                .replace(/\D/g, "") // remove non-digit characters
                .replace(/(\d{4})/g, "$1 ") // add space after every 4 digits
                .trim(); // remove trailing space
              handleChange({
                target: { name: "cardNumber", value: formattedCardNumber },
              });
            }}
            onBlur={handleBlur}
            maxLength={19}
          />
          {errors?.cardNumber && touched?.cardNumber ? (
            <FormErrorMessage>{errors?.cardNumber}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl
          height="90px"
          isInvalid={touched?.expiryDate && errors?.expiryDate}
        >
          <FormLabel>Expiry Date</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.expiryDate && errors?.expiryDate
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
              touched?.expiryDate && errors?.expiryDate
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
            placeholder="04/23"
            name="expiryDate"
            value={values.expiryDate}
            onChange={(e) => {
              let formattedCardExpiry = e.target.value
                .replace(/\D/g, "") // remove non-digit characters
                .replace(/(\d{2})(\d{2})/, "$1 / $2") // add space between month and year
                .trim(); // remove trailing space
              handleChange({
                target: { name: "expiryDate", value: formattedCardExpiry },
              });
            }}
            onBlur={handleBlur}
            maxLength={5}
          />
          {errors?.expiryDate && touched?.expiryDate ? (
            <FormErrorMessage>{errors?.expiryDate}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl height="90px" isInvalid={touched?.cvv && errors?.cvv}>
          <FormLabel>CVV</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.cvv && errors?.cvv
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
              touched?.cvv && errors?.cvv
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
            placeholder="123"
            name="cvv"
            value={values.cvv}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={4}
          />
          {errors?.cvv && touched?.cvv ? (
            <FormErrorMessage>{errors?.cvv}</FormErrorMessage>
          ) : null}
        </FormControl>
        <FormControl
          height="90px"
          isInvalid={touched?.cardHolderName && errors?.cardHolderName}
        >
          <FormLabel>Cardholder Name</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={
              touched?.cardHolderName && errors?.cardHolderName
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
              touched?.cardHolderName && errors?.cardHolderName
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
            placeholder="Ahmad Khan"
            name="cardHolderName"
            value={values.cardHolderName}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={50}
          />
          {errors?.cardHolderName && touched?.cardHolderName ? (
            <FormErrorMessage>{errors?.cardHolderName}</FormErrorMessage>
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

export default memo(CardModal);
