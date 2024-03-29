import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
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
import React, { useEffect, useState, memo } from "react";
import { SearchIcon, HamburgerIcon } from "@chakra-ui/icons";
import { BiUserCircle } from "react-icons/bi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../../redux/cart/cart.actions";
import { logout } from "../../redux/auth/auth.action";
import { BsBag } from "react-icons/bs";
import Logo from "../../utils/Logo";

const Navbar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
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

  //to remove the flickering effect use setTimeout
  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setTimeout(() => {
      setIsInputFocused(false);
    }, 100);
  };

  /********** handle query search on different pages ******************/

  const handleSearch = () => {
    if (searchParams.has("q")) {
      setSearchParams((prevSearchParams) => {
        const newSearchParams = new URLSearchParams(prevSearchParams);
        newSearchParams.set("q", query);
        newSearchParams.set("_page", 1);
        return newSearchParams;
      });
    } else {
      navigate(`/products?q=${query}`);
    }
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
  }, []);

  useEffect(() => {
    const pathname = window.location.pathname;
    if (isAuth && !cartData.length && pathname !== "/cart") {
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

      {/*** 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 Mobile logo 🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃🢃 ***/}

      <Box display={{ base: "block", lg: "none" }} m="auto">
        <Logo />
      </Box>

      {/*** 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 Mobile logo 🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁🢁 ***/}

      <Grid
        bgColor={"#FDFDF9"}
        justifyContent={"space-between"}
        alignItems="center"
        gap="10px"
        templateColumns="repeat(1,1fr)"
        alignSelf={"center"}
        position="sticky"
        top="0"
        left="0"
        width="100%"
        zIndex={100}
        mt="-1px"
      >
        <Flex
          justifyContent={"space-between"}
          alignItems="center"
          gap="10px"
          p={{ base: "20px 10px", lg: "0px 50px" }}
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
            <Logo />
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
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                  onClick={handleSearch}
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
          pl="20px"
        >
          {categories.map((category, index) => {
            return (
              <Square
                key={"navbar_category" + index}
                p={"15px 10px"}
                border="1px solid transparent"
                _hover={{
                  color: "lf.teal",
                  borderBottom: "1px solid",
                  borderBottomColor: "lf.teal",
                  cursor: "pointer",
                }}
                onClick={() =>
                  navigate(`/products?category=${category.name}&_page=1`)
                }
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

export default memo(Navbar);
