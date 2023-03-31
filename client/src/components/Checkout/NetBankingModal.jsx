import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Button,
} from "@chakra-ui/react";

const NetBankingModal = ({ orderConfirmed }) => {
  const handlePayment = (e) => {
    e.preventDefault();
    orderConfirmed();
  };

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

  return (
    <form onSubmit={handlePayment}>
      <Stack spacing={3}>
        <FormControl isRequired>
          <FormLabel>Bank Name</FormLabel>
          <Select
            placeholder="Select bank name"
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
          >
            {bankOptions.map((bank) => (
              <option key={bank} value={bank}>
                {bank}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Account Number</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="text"
            placeholder="Enter account number"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>IFSC Code</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="text"
            placeholder="Enter IFSC code"
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            border="2px solid"
            borderColor={"teal.500"}
            _focus={{
              boxShadow: "none",
              border: "2px solid",
              borderColor: "teal.500",
            }}
            _hover={{
              border: "2px solid",
              borderColor: "teal.500",
            }}
            type="password"
            placeholder="Enter password"
          />
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

export default NetBankingModal;
