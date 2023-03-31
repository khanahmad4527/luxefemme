import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link>Overview</Link>
            <Link>Features</Link>
            <Link>Tutorials</Link>
            <Link>Pricing</Link>
            <Link>Releases</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link>About Us</Link>
            <Link>Press</Link>
            <Link>Careers</Link>
            <Link>Contact Us</Link>
            <Link>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link>Cookies Policy</Link>
            <Link>Privacy Policy</Link>
            <Link>Terms of Service</Link>
            <Link>Law Enforcement</Link>
            <Link>Status</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
            <Link>Dribbble</Link>
            <Link>Instagram</Link>
            <Link>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",

            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",

            flexGrow: 1,
            ml: 8,
          }}
        >
          {/* <Logo /> */}
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 Chakra Templates. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};
