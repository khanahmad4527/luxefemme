import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
  Icon,
  Grid,
  Circle,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  useToast,
  Text,
  Square,
  Spinner,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import alphaLogo from "../../assets/LuxeFemme-alpha.png";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cart.actions";
import { logout } from "../../redux/auth/auth.action";
import { BsBag } from "react-icons/bs";

const Navbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const categories = [
    { name: "dress", displayName: "New!" },
    { name: "dress", displayName: "Top-Rated" },
    { name: "dress", displayName: "Dresses" },
    { name: "dress", displayName: "Clothing" },
    { name: "shoes", displayName: "Shoes" },
    { name: "jewellery", displayName: "Accessories" },
    { name: "dress", displayName: "Weddings" },
    { name: "furniture", displayName: "Home & Furniture" },
    { name: "beauty", displayName: "Beauty & Wellness" },
    { name: "candles", displayName: "Gifts & Candles" },
    { name: "dress", displayName: "Sale" },
  ];

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const { isAuth } = useSelector((store) => store.auth);

  const { cartGetIsLoading, cartData } = useSelector((store) => store.cart);

  const { firstname, lastname } =
    JSON.parse(localStorage.getItem("lfUserData")) || {};

  const handleLogout = () => {
    toast({
      title: "Logout Successful",
      description: "We've logout you successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
    dispatch(logout());
  };

  useEffect(() => {
    /**********    page will always loads at top position   ******************/
    window.scrollTo(0, 0);

    if (isAuth && cartData.length === 0) {
      dispatch(getCartData());
    }
  }, [cartData.length, dispatch, isAuth]);

  return (
    <>
      {isAuth && (
        <Flex
          position="relative"
          zIndex={1000}
          display={{ base: "none", lg: "flex" }}
          bgColor={"#F7F6F2"}
          color="lf.teal"
          justifyContent="right"
          alignItems={"center"}
          p={{ base: "0px 10px 20px 10px", lg: "0px 20px 0px 10px" }}
        >
          <Box>
            <Menu>
              <MenuButton
                as={Button}
                leftIcon={<BiUserCircle size="30px" />}
                variant="unstyled"
                display="flex"
                alignItems="center"
                px="10px"
                fontWeight={400}
              >
                My Account
              </MenuButton>
              <MenuList position={"relative"} zIndex={10}>
                <MenuGroup title="Profile">
                  <MenuItem>Name: {`${firstname} ${lastname}`}</MenuItem>
                  <MenuItem onClick={() => navigate("/orders")}>
                    Orders
                  </MenuItem>
                </MenuGroup>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      )}

      {!isAuth && (
        <Flex
          display={{ base: "none", lg: "flex" }}
          bgColor={"#F7F6F2"}
          color="lf.teal"
          justifyContent="right"
          alignItems={"center"}
          p="15px 15px 15px 0px"
        >
          <Link color="teal" cursor="pointer" href="/login">
            Sign In / Sign Up
          </Link>
        </Flex>
      )}

      <Grid
        bgColor={"#FDFDF9"}
        justifyContent={"space-between"}
        alignItems="center"
        gap="10px"
        templateColumns="repeat(1,1fr)"
        alignSelf={"center"}
        position="sticky"
        top="0"
        width="100%"
        zIndex={100}
      >
        {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Mobile logo 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

        <Box display={{ base: "block", lg: "none" }} m="auto">
          <Image
            src={alphaLogo}
            h="100px"
            alt="luxeFemme"
            cursor="pointer"
            onClick={() => navigate("/")}
          />
        </Box>

        {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Mobile logo 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          gap="10px"
          p={{ base: "0px 10px 20px 10px", lg: "0px 50px 0px 10px" }}
        >
          {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Mobile Logout Login My Account 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

          <Box display={{ base: "block", lg: "none" }}>
            <Icon boxSize="8" as={HamburgerIcon} onClick={onOpen} />
            <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent style={{ width: "200px" }}>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px" color="lf.black">
                  luxeFemme
                </DrawerHeader>
                <DrawerBody>
                  <Flex flexDirection="column" gap="10px">
                    {isAuth && (
                      <Menu>
                        <MenuButton
                          as={Button}
                          bg="lf.button"
                          color="white"
                          _hover={{
                            color: "lf.black",
                            bg: "teal.500",
                          }}
                          leftIcon={<BiUserCircle size="30px" />}
                          variant="unstyled"
                          display="flex"
                          alignItems="center"
                          px="10px"
                        >
                          My Account
                        </MenuButton>
                        <MenuList position={"relative"} zIndex={10}>
                          <MenuGroup title="Profile">
                            <MenuItem>
                              Name: {`${firstname} ${lastname}`}
                            </MenuItem>
                          </MenuGroup>
                        </MenuList>
                      </Menu>
                    )}

                    {isAuth && (
                      <Box>
                        <Button
                          bg="lf.button"
                          color="white"
                          _hover={{
                            color: "lf.black",
                            bg: "teal.500",
                          }}
                          variant="unstyled"
                          px="10px"
                          onClick={() => navigate("/orders")}
                        >
                          Orders
                        </Button>
                      </Box>
                    )}

                    {!isAuth && (
                      <Box>
                        <Button
                          bg="lf.button"
                          color="white"
                          _hover={{
                            color: "lf.black",
                            bg: "teal.500",
                          }}
                          variant="unstyled"
                          px="10px"
                          onClick={() => navigate("/login")}
                        >
                          Login
                        </Button>
                      </Box>
                    )}

                    {isAuth && (
                      <Box>
                        <Button
                          bg="lf.button"
                          color="white"
                          _hover={{
                            color: "lf.black",
                            bg: "teal.500",
                          }}
                          variant="unstyled"
                          px="10px"
                          onClick={handleLogout}
                        >
                          Logout
                        </Button>
                      </Box>
                    )}
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>

          {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Mobile Logout Login My Account 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

          {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Laptop Logout Login My Account 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

          <Box display={{ base: "none", lg: "block" }}>
            <Image
              src={alphaLogo}
              h="80px"
              alt="luxeFemme"
              cursor="pointer"
              onClick={() => navigate("/")}
            />
          </Box>

          <Flex justifyContent={"space-between"} alignItems="center" gap="20px">
            {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Search Bar 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

            <Box>
              <InputGroup
                outline="1px solid"
                borderRadius={"5"}
                outlineColor={"lf.teal"}
              >
                <Input
                  placeholder="Search luxefemme"
                  _focus={{ boxShadow: "none" }}
                  _placeholder={{ color: "lf.teal" }}
                  transition="0.2s ease-in-out"
                  w={{ base: "100%", lg: isInputFocused ? "300px" : "200px" }}
                  m="auto"
                  border="none"
                  alignSelf="center"
                  onClick={handleInputFocus}
                  onBlur={handleInputBlur}
                />
                <InputRightAddon
                  border="none"
                  borderRightRadius={"5"}
                  cursor="pointer"
                  color={isInputFocused ? "white" : "lf.teal"}
                  bgColor={isInputFocused ? "lf.teal" : "transparent"}
                >
                  <Icon boxSize="5" as={SearchIcon} />
                </InputRightAddon>
              </InputGroup>
            </Box>

            {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Search Bar 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

            {isAuth && (
              <Square
                onClick={() => navigate("/cart")}
                cursor="pointer"
                position="relative"
              >
                <Icon boxSize={8} as={BsBag} color="lf.teal" />
                {cartGetIsLoading ? (
                  <Spinner
                    position="absolute"
                    top={-2}
                    right={-2}
                    thickness="2px"
                    speed="0.65s"
                    color="teal.500"
                    boxSize="25px"
                  />
                ) : (
                  <Circle
                    borderRadius="50%"
                    size="25px"
                    bg="lf.teal"
                    color="white"
                    position="absolute"
                    top={-2}
                    right={-2}
                  >
                    {cartData && cartData.length}
                  </Circle>
                )}
              </Square>
            )}
          </Flex>

          {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Laptop Logout Login My Account 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}
        </Flex>

        <Divider color={"#F7F6F2"} display={{ base: "none", lg: "block" }} />

        <Flex
          alignItems={"center"}
          display={{ base: "none", lg: "flex" }}
          p={"0px 0px 0px 20px"}
        >
          {categories.map((category) => {
            return (
              <Square
                key={Date() + Math.random()}
                p={"15px 10px"}
                border="1px solid transparent"
                _hover={{
                  color: "lf.teal",
                  borderBottom: "1px solid",
                  borderBottomColor: "lf.teal",
                  cursor: "pointer",
                }}
                onClick={() => navigate(`/products?category=${category.name}`)}
              >
                <Text fontSize={"13px"} fontWeight={400}>
                  {category.displayName}
                </Text>
              </Square>
            );
          })}
        </Flex>

        <Divider color={"#F7F6F2"} display={{ base: "none", lg: "block" }} />
      </Grid>
    </>
  );
};

export default Navbar;
