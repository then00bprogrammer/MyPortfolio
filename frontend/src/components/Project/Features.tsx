import React, { useEffect, useRef } from "react";
import {
  Box,
  Center,
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "framer-motion";
import { motion, Variants } from "framer-motion";

import { FaHashtag } from "react-icons/fa6";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import SideBanner from "@/utils/SideBanner";

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

const Features: React.FC<{
  features: string[];
}> = ({ features }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

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
      <SideBanner
        title="Features"
        isBlurred={false}
        isLeftAligned={true}
        bgColor={useColorModeValue("red.400", "gold.500")}
      />

      <Stack
        w='100%'
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
            <Center>
              <CustomLottiePlayer src="features" />
            </Center>
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
          <CustomLottiePlayer src="features" />
        </Box>
      </Stack>
      <Divider
        width="1px"
        height={["90vh", "85vh"]}
        display={["none", "flex"]}
        position="absolute"
        right="7.5vw"
        h="85vh"
        bg={useColorModeValue("black", "gold.600")}
      ></Divider>
    </HStack>
  );
};

export default Features;
