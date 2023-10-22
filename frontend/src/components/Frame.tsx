import { Divider, useColorModeValue } from "@chakra-ui/react";
import React from "react";

const Frame = () => {
  return (
    <>
      <Divider
        borderRadius={10}
        bg={useColorModeValue("red", "#735F32")}
        width="10px"
        h="100px"
        position="absolute"
        top={0}
        left={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={useColorModeValue("red", "#735F32")}
        h="10px"
        w="100px"
        position="absolute"
        top={0}
        left={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={useColorModeValue("red", "#735F32")}
        width="10px"
        h="100px"
        position="absolute"
        bottom={0}
        right={0}
      ></Divider>
      <Divider
        borderRadius={10}
        bg={useColorModeValue("red", "#735F32")}
        width="100px"
        h="10px"
        position="absolute"
        bottom={0}
        right={0}
      ></Divider>
    </>
  );
};

export default Frame;
