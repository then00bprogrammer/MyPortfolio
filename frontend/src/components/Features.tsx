import React, { useEffect, useRef } from "react";
import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { FaHashtag } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Player } from "@lottiefiles/react-lottie-player";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "framer-motion";
import { motion, Variants } from "framer-motion";

interface FeaturesProps {
  features: string[];
}

const headingVariants: Variants = {
  offscreen: {
    y: 20,
    rotate: 15,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 10,
      mass: 2,
    },
  },
};

const Features: React.FC<FeaturesProps> = ({ features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <HStack
      minH={["90vh", "85vh"]}
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
    >
      <Flex
        bg={useColorModeValue("red.400", "#C69749")}
        h={["full", "85vh"]}
        w="15vw"
        position="absolute"
        left={0}
        zIndex={1}
        alignItems="center"
        justifyContent="center"
        display={["none", "flex"]}
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

      <Stack
        width="100%"
        textAlign="left"
        direction={["column", "row"]}
        spacing={0}
      >
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "46.25vw"]}
          ml={["0%", "7.5vw"]}
          pl={["0%", "4.25vw"]}
          pr={["0%", "2.125vw"]}
          textAlign="left"
          color="gray.600"
          justifyContent="center"
        >
          <motion.div
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={headingVariants}>
              <Heading
                fontSize={["4xl", "7xl"]}
                fontWeight="extrabold"
                mt="2.5vh"
                mb="2.5vh"
                color={useColorModeValue("gray.800", "gray.100")}
              >
                Features
              </Heading>
            </motion.div>
          </motion.div>
          <Box w={["100%", "50%"]} p={["0", "5%"]} display={["flex", "none"]}>
            <Player
              autoplay
              loop
              src="/animations/features.json"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          {features.map((feature, index) => (
            <HStack
              spacing={2}
              mr="auto"
              key={index}
              color={useColorModeValue("gray.600", "gray.400")}
            >
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
        <Box display={["none", "flex"]} w="38.75vw" mr="4.25vw" ml="2.125vw">
          <Player
            autoplay
            loop
            src="/animations/features.json"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Stack>
      <Divider
        width="1px"
        height={["90vh", "85vh"]}
        display={["none", "flex"]}
        position="absolute"
        right="7.5vw"
        h="85vh"
        bg={useColorModeValue("black", "#735F32")}
      ></Divider>
    </HStack>
  );
};

export default Features;
