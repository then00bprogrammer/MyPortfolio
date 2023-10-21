import React, {useRef} from "react";
import {
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
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
    rotate:15,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 10,
      mass: 2
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
  const ref=useRef(null);
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
        bg={useColorModeValue('red.400','#C69749')}
        h="100vh"
        w="15vw"
        position="absolute"
        right={0}
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
          Technology
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
          <motion.div
            ref={ref}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div variants={headingVariants}>
              <Heading
                fontSize="7xl"
                fontWeight="extrabold"
                mt="2.5vh"
                mb="2.5vh"
                color={useColorModeValue('gray.800','gray.100')}
              >
                Technology
              </Heading>

            </motion.div>
          </motion.div>
          <Text color={useColorModeValue('gray.600','gray.400')}>{description}</Text>
          <Wrap spacing="2" mt="2.5vh" pr='30%' color={useColorModeValue('gray.800','#0F3460')}>
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
        <VStack
          w="50%"
          alignItems="flex-start"
          lineHeight="2"
          letterSpacing="wider"
        >
          <Player
            autoplay
            loop
            src="/animations/Technology.json"
            style={{ height: "80%", width: "80%" }}
          />
        </VStack>
      </HStack>
      <Divider width="1px" height="100vh" bg="black"></Divider>
    </HStack>
  );
};

export default Technology;
