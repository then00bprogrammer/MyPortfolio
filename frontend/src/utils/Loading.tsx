import { Box, Flex, Heading, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import CustomLottiePlayer from "./CustomLottiePlayer";

const Loading = () => {
  return (
    <Flex w="full" h={["90vh", "85vh"]} mt="15vh" justifyContent='center' alignItems='center' bg={useColorModeValue('white','black')}>
      <VStack w={['80vw','40vw']} maxH='full'>
        <CustomLottiePlayer src="loading" />
        <Heading>Loading...</Heading>
      </VStack>
    </Flex>
  );
};

export default Loading;
