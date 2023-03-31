import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  Icon,
  Divider,
  Square,
} from "@chakra-ui/react";
import { BsInstagram, BsPinterest, BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <Box fontSize={"13px"} fontWeight={400}>
      <Container as={Stack} maxW={"6xl"} py={10} gap="40px">
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
          <Stack>
            <Link>
              <Flex
                color={"lf.teal"}
                _hover={{ color: "lf.black" }}
                alignItems="center"
                gap="10px"
              >
                <Icon boxSize="5" as={GoLocation} color={"lf.teal"} />
                Store Location
              </Flex>
            </Link>

            <Link>
              <Flex
                color={"lf.teal"}
                _hover={{ color: "lf.black" }}
                alignItems="center"
                gap="10px"
              >
                <Icon boxSize="5" as={TfiEmail} color={"lf.teal"} />
                Get Email
              </Flex>
            </Link>
          </Stack>
        </SimpleGrid>

        <Flex
          align={"flex-start"}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          gap="20px"
        >
          <Icon boxSize="5" as={BsPinterest} color={"lf.teal"} />
          <Icon boxSize="5" as={BsInstagram} color={"lf.teal"} />
          <Icon boxSize="5" as={FaFacebookSquare} color={"lf.teal"} />
          <Icon boxSize="5" as={BsTwitter} color={"lf.teal"} />
        </Flex>

        <Flex
          align={"flex-start"}
          direction="row"
          justifyContent={"center"}
          alignItems="center"
          gap="10px"
        >
          <Link>US</Link>
          <Divider h="2" color={"#F7F6F2"} orientation="vertical" />
          <Link>France</Link>
          <Divider h="2" color={"#F7F6F2"} orientation="vertical" />
          <Link>Germany</Link>
          <Divider h="2" color={"#F7F6F2"} orientation="vertical" />
          <Link>Italy</Link>
          <Divider h="2" color={"#F7F6F2"} orientation="vertical" />
          <Link>Spain</Link>
          <Divider h="2" color={"#F7F6F2"} orientation="vertical" />
          <Link>UK</Link>
        </Flex>
      </Container>
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
