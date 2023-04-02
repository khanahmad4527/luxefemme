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
  useColorModeValue,
  InputGroup,
  InputRightElement,
  useToast,
  Text,
  Divider,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { existingUser, login } from "../../redux/auth/auth.action";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const [isButton, setIsButton] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      } else {
        navigate(location.state?.data || "/", { replace: true });
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
    setEmail("");
    setPassword("");
  };

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} color="sm.sparkle">
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"22px"} fontWeight={400} color="lf.black">
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
              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
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
                  value={email}
                  autoComplete="on"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl isRequired>
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
