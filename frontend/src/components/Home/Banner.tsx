import React from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  VStack,
  HStack,
  useColorModeValue,
  Center,
} from "@chakra-ui/react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import Typing from "@/utils/Typing";
import OutlineButton from "@/utils/OutlineButton";
import SolidButton from "@/utils/SolidButton";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";

const Banner: React.FC = () => {
  return (
    <Flex
      w={["100vw", `calc(100vw - 12px)`]}
      h="85vh"
      flexDirection={["column-reverse", "row"]}
      marginTop="15vh"
    >
      <VStack
        w={["100%", "50%"]}
        h={["50%", "100%"]}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Heading
          size={["2xl", "3xl"]}
          color={useColorModeValue("gray.700", "gold.100")}
        >
          Hi there,
        </Heading>
        <Heading
          size={["2xl", "3xl"]}
          color={useColorModeValue("gray.700", "gold.100")}
          mb="2.5vh"
        >
          I'm Nikhil Ranjan
        </Heading>
        <Box
          fontSize={["xs", "xl"]}
          color={useColorModeValue("gray.800", "gold.100")}
          fontWeight="medium"
        >
          <Typing />
        </Box>
        <HStack mt="2.5vh">
          <Link href="./contact">
            <SolidButton>Contact Me</SolidButton>
          </Link>
          <a
            href="https://drive.google.com/file/d/1SDVnrflvVNHmly7Bdt3C1dnJ7EuPnzY4/view?usp=share_link"
            target="_blank"
          >
            <OutlineButton>My Resume</OutlineButton>
          </a>
        </HStack>
      </VStack>
      <Flex
        w={["100%", "50%"]}
        minH={["50%", "100%"]}
        justifyContent="center"
        alignItems="center"
        position="relative"
        p={["10%", "5%"]}
      >
        <Center>
          <CustomLottiePlayer src="coder" />
        </Center>
      </Flex>
    </Flex>
  );
};

export default Banner;
