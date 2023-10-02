import { Flex, Heading, Spinner } from "@chakra-ui/react";

const Error = () => {
  return (
    <Flex
      width="100%"
      alignItems="center"
      justifyContent="center"
      margin="auto"
      flexDir={"column"}
      gap={"10px"}
      textAlign={"center"}
    >
      <Spinner
        thickness="5px"
        speed="2s"
        emptyColor="white"
        color="red.500"
        size="xl"
        boxSize="200px"
      />
      <Heading>FREE PLAN can't handle much load, Please refresh the page Sorry!</Heading>
    </Flex>
  );
};

export default Error;
