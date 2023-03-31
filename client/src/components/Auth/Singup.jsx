import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  FormErrorMessage,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { useEffect, useReducer, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import { isEmailAvailable } from "../../redux/auth/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const reducerForm = (state, { type, payload }) => {
  switch (type) {
    case "firstname": {
      return {
        ...state,
        firstname: payload,
      };
    }

    case "lastname": {
      return {
        ...state,
        lastname: payload,
      };
    }

    case "email": {
      return {
        ...state,
        email: payload,
      };
    }

    case "password": {
      return {
        ...state,
        password: payload,
      };
    }

    case "reset": {
      return initialForm;
    }

    default: {
      return state;
    }
  }
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useReducer(reducerForm, initialForm);
  const toast = useToast();
  const [isButton, setIsButton] = useState(false);

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      password: initialForm.password,
    },
    validationSchema: Yup.object().shape({
      password: Yup.string()
        .min(8, "Password should be at least 8 characters long")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]*$/,
          "Password should include at least one uppercase letter, one lowercase letter, one number, and one special character (@, #, $, %, ^, &, *, or !)"
        )
        .required("Password is required"),
    }),
    onSubmit: async (values, { setSubmitting, setFieldValue }) => {
      // form submission logic

      const user_data = {
        ...form,
        ...values,
      };

      setIsButton(true);
      const status = await isEmailAvailable(user_data);
      if (status === 409) {
        toast({
          title: "Email address already in use",
          description: "Email address already associated with an account",
          status: "warning",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setIsButton(false);
      } else if (status === 201) {
        toast({
          title: "Account created successfully",
          description: "You can now login with your email and password",
          status: "success",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setIsButton(false);
        navigate("/login");
      } else {
        toast({
          title: "Server Error",
          description:
            "An unexpected error occurred on the server. Please try again later.",
          status: "error",
          duration: 3000,
          position: "top",
          isClosable: true,
        });
        setIsButton(false);
      }
      setFieldValue("password", "");
      setForm({ type: "reset" });
      setSubmitting(false);
      formik.resetForm();
    },
  });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="sm.sparkle">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            fontSize={"22px"}
            fontWeight={400}
            color="lf.black"
            textAlign={"center"}
          >
            Sign up
          </Heading>
        </Stack>
        <Divider />
        <Text textAlign={"center"} fontSize="13px" fontWeight={400}>
          Welcome! It's quick and easy to set up an account
        </Text>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
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
                      value={form.firstname}
                      onChange={(e) =>
                        setForm({ type: "firstname", payload: e.target.value })
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
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
                      value={form.lastname}
                      onChange={(e) =>
                        setForm({ type: "lastname", payload: e.target.value })
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
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
                  type="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ type: "email", payload: e.target.value })
                  }
                />
              </FormControl>
              <FormControl
                isRequired
                isInvalid={formik.touched.password && formik.errors.password}
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
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
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setForm({ type: "password", payload: e.target.value });
                    }}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  isLoading={isButton}
                  loadingText="Checking"
                  size="lg"
                  bg="lf.button"
                  color="white"
                  _hover={{
                    color: "lf.black",
                    bg: "teal.500",
                  }}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link color={"teal.500"} href="/login">
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
