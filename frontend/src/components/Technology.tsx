import React, { useRef } from "react";
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
import { Player } from "@lottiefiles/react-lottie-player";
// import { Variants } from "framer-motion";
import { motion, Variants } from "framer-motion";

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
      <Divider
        width="1px"
        h={["90vh", "85vh"]}
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
      <Stack
        w={["100%", "85%"]}
        textAlign="left"
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "50%"]}
          pl={["0%", "5%"]}
          pr={["0%", "5%"]}
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
          <Box w={["100%", "50%"]} display={['flex','none']} p={['0%','5%']}>
          <Player
            autoplay
            loop
            src="/animations/Technology.json"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            {description}
          </Text>
          <Wrap
            spacing="2"
            mt="2.5vh"
            pr={["0%", "30%"]}
            color={useColorModeValue("gray.800", "#4477CE")}
          >
            {techStack.map((tech, index) => (
              <WrapItem key={index}>
                <Icon
                  as={iconMap[tech as keyof typeof iconMap]}
                  boxSize="16"
                  p={2}
                ></Icon>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
        <Box w={["100%", "50%"]} p={['0%','5%']} display={['none','flex']}>
          <Player
            autoplay
            loop
            src="/animations/Technology.json"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
      </Stack>
      <Divider
        width="1px"
        h={["90vh", "85vh"]}
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
    </Stack>
  );
};

export default Technology;
