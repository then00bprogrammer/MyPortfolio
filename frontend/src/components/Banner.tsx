import React from "react";
import Link from "next/link";
import { Flex, Box, Heading, VStack, HStack, Button } from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Typing from "./Typing";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Flex w={`calc(100vw - 12px)`} h="85vh">
      <VStack
        w="50%"
        h="full"
        color="black"
        justifyContent="center"
        alignItems="center"
      >
        <Heading size="3xl" color='gray.700'>Hi there,</Heading>
        <Heading size="3xl" color='gray.700' mb='2.5vh'>I'm Nikhil Ranjan</Heading>
        <Box fontSize="xl" color='gray.800' fontWeight='medium'>
          <Typing />
        </Box>
        <HStack mt='2.5vh'>
          <Link href='./contact'>
          <Button variant='solid' colorScheme='red' borderRadius={0} size='lg' w='15vw' h='7.5vh'> Contact Me </Button>
          </Link>
          <a href='https://drive.google.com/file/d/1SDVnrflvVNHmly7Bdt3C1dnJ7EuPnzY4/view?usp=share_link' target="_blank">
          <Button variant='outline' colorScheme='blackAlpha' borderRadius={0} size='lg' color='black'> My Resume </Button>
          </a>
        </HStack>
      </VStack>
      <Box w="50%" h="full">
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
