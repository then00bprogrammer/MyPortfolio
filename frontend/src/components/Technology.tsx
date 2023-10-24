import React, { useRef } from "react";
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
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiNeo4J,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiChakraui,
  SiRedis,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, Variants } from "framer-motion";
import { DotLottiePlayer } from "@dotlottie/react-player";

const iconMap = {
  React: SiReact,
  Next: TbBrandNextjs,
  ChakraUI: SiChakraui,
  Typescript: SiTypescript,
  Javascript: SiJavascript,
  CSS: SiCss3,
  NodeJS: SiNodedotjs,
  Python: SiPython,
  MongoDB: SiMongodb,
  Neo4j: SiNeo4J,
  Redis: SiRedis,
  Scikit: SiScikitlearn,
};

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

const Technology = ({
  description,
  techStack,
}: {
  description: string;
  techStack: string[];
}) => {
  const ref = useRef(null);
  return (
    <Stack
      direction={["column", "row"]}
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
        h={["90vh", "full"]}
        w="15vw"
        position="absolute"
        right={0}
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
          Technology
        </Text>
      </Flex>
      <Stack
        w={["100%", "100%"]}
        textAlign="left"
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "38.75vw"]}
          ml={["0", "4.25vw"]}
          mr={["0", "2.125vw"]}
          textAlign="left"
          color="gray.600"
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
                Technology
              </Heading>
            </motion.div>
          </motion.div>
          <Box w='100%' display={["flex", "none"]} h='45vh'>
            <Center>
            <DotLottiePlayer
              autoplay
              loop
              src={useColorModeValue(
                "/animations/technology.lottie",
                "/animations/technology-dark.lottie"
              )}
              style={{ height: "100%", width: "100%" }}
            />
            </Center>
          </Box>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            {description}
          </Text>
          <Wrap
            spacing="2"
            mt="2.5vh"
            pr={["0%", "30%"]}
            color={useColorModeValue("gray.800", "gold.600")}
          >
            {techStack.map((tech, index) => (
              <WrapItem key={index}>
                <Icon
                  as={iconMap[tech as keyof typeof iconMap]}
                  boxSize={['12','16']}
                  p={2}
                ></Icon>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
        <Box
          w='46.25vw'
          mr='7.5vw'
          pr='4.25vw'
          pl='2.125vw'
          display={["none", "flex"]}
        >
          <Center>
          <DotLottiePlayer
            autoplay
            loop
            src={useColorModeValue(
              "/animations/technology.lottie",
              "/animations/technology-dark.lottie"
            )}
            style={{ height: "100%", width: "100%" }}
          />
          </Center>
        </Box>
      </Stack>
      <Divider
        width="1px"
        height={["90vh", "85vh"]}
        display={["none", "flex"]}
        position="absolute"
        left="7.5vw"
        h="85vh"
        bg={useColorModeValue("black", "#735F32")}
      ></Divider>
    </Stack>
  );
};

export default Technology;
