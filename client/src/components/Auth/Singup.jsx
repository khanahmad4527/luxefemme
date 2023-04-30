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
  Link,
  FormErrorMessage,
  useToast,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { isEmailAvailable } from "../../redux/auth/auth.action";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../schemas/auth";

const initialForm = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialForm,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        const { firstname, lastname, email, password } = values;

        const user_data = {
          firstname,
          lastname,
          email,
          password,
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
        action.resetForm();
      },
    });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="lf.black">
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
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl
                    height="90px"
                    isInvalid={touched.firstname && errors.firstname}
                  >
                    <FormLabel>First Name</FormLabel>
                    <Input
                      border="2px solid"
                      borderColor={"teal.500"}
                      _focus={
                        touched.firstname && errors.firstname
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
                        touched.firstname && errors.firstname
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
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.firstname && touched.firstname ? (
                      <FormErrorMessage>{errors.firstname}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Box>

                <Box>
                  <FormControl
                    height="90px"
                    isInvalid={touched.lastname && errors.lastname}
                  >
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      border="2px solid"
                      borderColor={"teal.500"}
                      _focus={
                        touched.lastname && errors.lastname
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
                        touched.lastname && errors.lastname
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
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.lastname && touched.lastname ? (
                      <FormErrorMessage>{errors.lastname}</FormErrorMessage>
                    ) : null}
                  </FormControl>
                </Box>
              </HStack>

              <FormControl
                height="90px"
                isInvalid={touched.email && errors.email}
              >
                <FormLabel>Email address</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched.email && errors.email
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
                    touched.email && errors.email
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email ? (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={touched.password && errors.password}
              >
                <FormLabel>Password</FormLabel>
                <Input
                  border="2px solid"
                  borderColor={"teal.500"}
                  _focus={
                    touched.password && errors.password
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
                    touched.password && errors.password
                      ? {
                          border: "2px solid",
                          borderColor: "red.500",
                        }
                      : {
                          border: "2px solid",
                          borderColor: "teal.500",
                        }
                  }
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password && touched.password ? (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                ) : null}
              </FormControl>

              <FormControl
                height="90px"
                isInvalid={touched.confirm_password && errors.confirm_password}
              >
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input
                    border="2px solid"
                    borderColor={"teal.500"}
                    _focus={
                      touched.confirm_password && errors.confirm_password
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
                      touched.confirm_password && errors.confirm_password
                        ? {
                            border: "2px solid",
                            borderColor: "red.500",
                          }
                        : {
                            border: "2px solid",
                            borderColor: "teal.500",
                          }
                    }
                    type={showPassword ? "text" : "password"}
                    id="confirm_password"
                    name="confirm_password"
                    value={values.confirm_password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      bg="none"
                      _hover={{ bg: "none" }}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                {errors.confirm_password && touched.confirm_password ? (
                  <FormErrorMessage>{errors.confirm_password}</FormErrorMessage>
                ) : null}
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
