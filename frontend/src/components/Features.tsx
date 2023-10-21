import React from "react";
import {
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FaHashtag } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Player } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from "react-type-animation";

interface FeaturesProps {
  features: string[]; 
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
  return (
    <HStack
      h="100vh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
    >
      <Flex
        bg="red.400"
        h="100vh"
        w="15vw"
        position="absolute"
        left={0}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          transform="rotate(180deg)"
          style={{ writingMode: "vertical-rl" }}
          fontSize="6xl"
          fontWeight="bold"
          color="white"
          margin="auto"
        >
          Features
        </Text>
      </Flex>
      <Divider width="1px" height="100vh" bg="black"></Divider>

      <HStack width="85%" textAlign="left">
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w="50%"
          pl="5%"
          pr="5%"
          textAlign="left"
          color="gray.600"
        >
          <Heading
            fontSize="7xl"
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color="gray.800"
          >
            Features
          </Heading>
          {features.map((feature, index) => (
            <HStack spacing={2} pl="15%" mr="auto" key={index}>
              <Icon as={FaHashtag}></Icon>
              <TypeAnimation
                sequence={[1000, feature]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "mb", display: "inline-block" }}
                repeat={1}
                cursor={false}
              />
            </HStack>
          ))}
        </VStack>
        <VStack
          w="50%"
          alignItems="flex-start"
          lineHeight="2"
          letterSpacing="wider"
        >
          <Player
            autoplay
            loop
            src="/animations/features.json"
            style={{ height: "80%", width: "80%" }}
          />
        </VStack>
      </HStack>
      <Divider width="1px" height="100vh" bg="black"></Divider>
    </HStack>
  );
};

export default Features;
