import {
  Box,
  Flex,
  Spacer,
  Text,
  ButtonGroup,
  Heading,
  HStack,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mt={10}>
      <Box p="2">
        <Heading size="md">Jorge Contreras</Heading>
      </Box>
      <Spacer />
      <HStack gap="8">
        <Text as="b" cursor="pointer">
          About
        </Text>
        <Text as="b" cursor="pointer">
          Projects
        </Text>
        <Text as="b" cursor="pointer">
          Contact Me
        </Text>
        <Text as="b" cursor="pointer">
          Resume
        </Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
