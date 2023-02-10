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
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      mt={10}
      bg="red.300"
    >
      <Box p="2">
        <Heading size="md">Jorge Contreras</Heading>
      </Box>
      <Spacer />
      <HStack gap="8">
        <Text>About</Text>
        <Text>Projects</Text>
        <Text>Contact Me</Text>
        <Text>Resume</Text>
      </HStack>
    </Flex>
  );
};

export default Navbar;
