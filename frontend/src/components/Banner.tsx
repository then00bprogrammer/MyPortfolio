import React from "react";
import Link from "next/link";
import {
  Flex,
  Box,
  Heading,
  VStack,
  HStack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typing from "./Typing";

const Banner = () => {
  return (
    <Flex
      w="{`calc(100vw - 12px)`}"
      h="85vh"
      marginTop="15vh"
      direction={["column-reverse", "column-reverse", "row", "row"]}
    >
      <VStack
        w={["100%", "100%", "50%", "50%"]}
        h={["50%", "50%", "100%", "100%"]}
        color="black"
        justifyContent="center"
        alignItems="center"
      >
        <Heading
          size={["2xl", "2xl", "3xl", "3xl"]}
          color={useColorModeValue("gray.700", "yellow.100")}
        >
          Hi there,
        </Heading>
        <Heading
          size={["2xl", "2xl", "3xl", "3xl"]}
          color={useColorModeValue("gray.700", "yellow.100")}
          mb="2.5vh"
        >
          I'm Nikhil Ranjan
        </Heading>
        <Box
          fontSize={["sm", "sm", "xl", "xl"]}
          color={useColorModeValue("gray.800", "yellow.100")}
          fontWeight="medium"
        >
          <Typing />
        </Box>
        <HStack mt="2.5vh">
          <Link href="./contact">
            <Button
              variant="solid"
              colorScheme={useColorModeValue("red", "gold")}
              borderRadius={0}
              size="lg"
              w={["40vw", "40vw", "15vw", "15vw"]}
              h="7.5vh"
            >
              Contact Me
            </Button>
          </Link>
          <a
            href="https://drive.google.com/file/d/1SDVnrflvVNHmly7Bdt3C1dnJ7EuPnzY4/view?usp=share_link"
            target="_blank"
          >
            <Button
              variant="outline"
              colorScheme={useColorModeValue("blackAlpha", "yellow")}
              borderRadius={0}
              size="lg"
              color={useColorModeValue("black", "white")}
            >
              {" "}
              My Resume{" "}
            </Button>
          </a>
        </HStack>
      </VStack>
      <Box
        w={["100%", "100%", "50%", "50%"]}
        h={["50%", "50%", "100%", "100%"]}
      >
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
