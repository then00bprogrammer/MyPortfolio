import React from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typing from "./Typing";
import OutlineButton from "./OutlineButton";
import SolidButton from "./SolidButton";

const Banner:React.FC = () => {
  return (
    <Flex
      w={`calc(100vw - 12px)`}
      h="85vh"
      flexDirection={["column-reverse", "row"]}
      marginTop="15vh"
    >
      <VStack
        w={["100%", "50%"]}
        h={["50%", "100%"]}
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size={["2xl", "3xl"]}
          color={useColorModeValue("gray.700", "yellow.100")}
        >
          Hi there,
        </Heading>
        <Heading
          size={["2xl", "3xl"]}
          color={useColorModeValue("gray.700", "yellow.100")}
          mb="2.5vh"
        >
          I'm Nikhil Ranjan
        </Heading>
        <Box
          fontSize={["xs", "xl"]}
          color={useColorModeValue("gray.800", "yellow.100")}
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
      <Box w={["100%", "50%"]} h={["50%", "100%"]}>
        <Player
          autoplay
          loop
          src="/animations/coder.json"
          style={{ height: "80%", width: "80%" }}
        />
      </Box>
    </Flex>
  );
};

export default Banner;
