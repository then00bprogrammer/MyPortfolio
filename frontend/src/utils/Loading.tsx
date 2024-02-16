import {
  Box,
  Flex,
  Heading,
  VStack,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import React from "react";
import CustomLottiePlayer from "./CustomLottiePlayer";
import { useBreakpointValue } from "@chakra-ui/react";

const Loading = () => {
  const { headingColor } = useTheme();
  return (
    <Flex
      direction='column'
      w="full"
      h={["90svh", "85svh"]}
      mt="15svh"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue("white", "black")}
    >
        <CustomLottiePlayer src={useColorModeValue('loading','loading-dark')} width={useBreakpointValue({ base: "70vw", sm: "70vw", lg: "30vw" })}/>
      <Heading size='xl'color={useColorModeValue("gray.700", headingColor)}>LOADING ...</Heading>
    </Flex>
  );
};

export default Loading;
