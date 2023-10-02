import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  InputGroup,
  InputRightElement,
  useToast,
  Text,
  Divider,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { existingUser, login } from "../../redux/auth/auth.action";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

const initialForm = {
  email: "",
  password: "",
};

/************************ loginSchema *****************************/

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(128)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\[\]!@#\$%\^&\*])/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [isButton, setIsButton] = useState(false);
  const toast = useToast();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { isAuth } = useSelector((store) => store.auth);

  /*********************** formik and yup validation to handle login **********************************/

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialForm,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        const { email, password } = values;

        setIsButton(true);
        const { status, role } = await existingUser(email, password);
        if (status === 200) {
          dispatch(login(email, password));
          toast({
            title: "Login Successful",
            description: "We've login you successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          if (role === "admin" || role === "superadmin") {
            navigate("/admin");
          }
          setIsButton(false);
        } else if (status === 404) {
          toast({
            title: "No results found",
            description: "Please sign up to create an account.",
            status: "warning",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          setIsButton(false);
        } else if (status === 401) {
          toast({
            title: "Incorrect Password",
            description: "Please enter write password.",
            status: "warning",
            duration: 3000,
            position: "top",
            isClosable: true,
          });
          setIsButton(false);
        }

        setIsButton(false);
        action.resetForm();
      },
    });

  useEffect(() => {
    if (isAuth) {
      navigate(location.state?.from || "/", { replace: true });
    }
  }, [isAuth]);

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="lf.black">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading
            fontSize={"36px"}
            fontWeight={400}
            color="lf.black"
            fontStyle={"Courgette"}
          >
            Log In
          </Heading>
        </Stack>
        <Divider />
        <Text textAlign={"center"} fontSize="13px" fontWeight={400}>
          Sign in so you can save items to your wishlists, track your orders,
          and check out faster!
        </Text>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl
                height="90px"
                isInvalid={touched.email && errors.email ? true : undefined}
              >
                <FormLabel>Email</FormLabel>
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
                isInvalid={
                  touched.password && errors.password ? true : undefined
                }
              >
                <FormLabel>Password</FormLabel>
                <InputGroup>
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
                {errors.password && touched.password ? (
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                ) : null}
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox colorScheme={"teal"}>Remember me</Checkbox>
                  <Link>Forgot password?</Link>
                </Stack>

                <Button
                  type="submit"
                  isLoading={isButton}
                  loadingText="Loging"
                  bg="lf.button"
                  color="white"
                  _hover={{
                    color: "lf.black",
                    bg: "teal.500",
                  }}
                >
                  Login
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  No account?{" "}
                  <Link href="/signup" color="teal.500">
                    Create one!
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
