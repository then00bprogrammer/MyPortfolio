import React from "react";
import { Divider, HStack } from "@chakra-ui/react";

const Spacer = () => {
  return (
    <HStack
      h="20vh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
    >
      <Divider width="1px" height="100vh" bg="black"></Divider>
      <Divider width="1px" height="100vh" bg="black"></Divider>
    </HStack>
  );
};

export default Spacer;
