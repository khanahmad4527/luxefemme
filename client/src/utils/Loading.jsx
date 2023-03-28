import { Box, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      margin="auto"
    >
      <Spinner
        thickness="5px"
        speed="2s"
        emptyColor="white"
        color="yellow.500"
        size="xl"
        boxSize="200px"
      />
    </Box>
  );
};

export default Loading;
