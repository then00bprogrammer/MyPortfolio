import React from "react";
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

const Technology = ({
  description,
  techStack,
}: {
  description: string;
  techStack: string[];
}) => {
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
          <Heading
            fontSize="7xl"
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color="gray.800"
          >
            Technology
          </Heading>
          <Text>{description}</Text>
          <Wrap spacing="2" mt="2.5vh" pr='30%'>
            {techStack.map((tech, index) => (
              <WrapItem key={index}>
                <Icon
                  as={iconMap[tech as keyof typeof iconMap]}
                  boxSize="16"
                  p={2}
                  color="black"
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
