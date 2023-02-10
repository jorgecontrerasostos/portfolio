import {
  Box,
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Navbar = () => {
  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" mt="14">
      <Box p="2">
        <Heading size="md">Chakra App</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap="2">
        <Button colorScheme="teal">Sign Up</Button>
        <Button colorScheme="teal">Log in</Button>
      </ButtonGroup>
    </Flex>
  );
};

export default Navbar;
