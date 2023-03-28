import React from "react";
import { Heading, Text, Button, Box, Square } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Navbar />
      <Square w="100%" h="100vh">
        <Box textAlign="center" color={"lf.black"} py={10} px={6}>
          <Heading display="inline-block" as="h2" size="2xl">
            404
          </Heading>
          <Text fontSize="18px" mt={3} mb={2}>
            Page Not Found
          </Text>
          <Text mb={6}>The page you're looking for does not seem to exist</Text>

          <Button
            color={"lf.black"}
            colorScheme="teal"
            bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            variant="solid"
            onClick={() => navigate("/")}
          >
            Go to Home
          </Button>
        </Box>
      </Square>
      <Footer />
    </Box>
  );
};

export default PageNotFound;
