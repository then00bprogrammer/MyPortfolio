import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiNeo4J,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

import Frame from "@/utils/Frame";
import { useTheme } from "@/ThemeContext";

const Services:React.FC = () => {
  const {
    isThemeOn,
    toggleTheme,
    buttonColor,
    headingColor,
    iconColor,
    sidelineColor,
    frameColor,
    sidebarColor,
    footerBgImage,
  } = useTheme();
  return (
    <HStack
      minH="100svh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
    >
      <Stack width="full" direction={["column-reverse", "row"]}>
        <VStack
          w={["100%", "70%"]}
          alignItems="flex-start"
          pl={["0%", "4.25vw"]}
          pr={["0%", "2.125vw"]}
          lineHeight="2"
          letterSpacing="wider"
        >
          <Box p={5} position="relative">
            <Frame />
            <Image src="./services.jpg"></Image>
          </Box>
          <Heading
            mt="2.5svh"
            mb="2.5svh"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.100")}
            display={["none", "flex"]}
          >
            WEB DEVELOPER
          </Heading>
          <Wrap
            ml="auto"
            color={useColorModeValue("black", iconColor)}
            display={["flex", "none"]}
            marginTop={["2.5svh", "0"]}
            marginBottom={["2.5svh", "0"]}
          >
            <Icon as={SiReact} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiNodedotjs} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiMongodb} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiPython} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiNeo4J} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={TbBrandCpp} boxSize={["10", "20"]} p={2}></Icon>
          </Wrap>

          <Text color={useColorModeValue("gray.600", "gray.400")} mb="2.5svh">
            I specialize in the MERN stack, excelling in MongoDB, Express.js,
            React.js, and Node.js for robust web apps. Next.js ensures top-notch
            user experiences. Python Flask is my go-to for APIs and tailored web
            apps. Neo4j handles intricate data relationships, while Firebase is
            key for mobile and web development. Sanity streamlines content
            management. This skill set enables me to tackle diverse web
            development challenges with innovation.
          </Text>
          <HStack>
            <a href="https://www.fiverr.com/nikhil03_" target="_blank">
              <Button
                variant="solid"
                colorScheme={useColorModeValue("red", buttonColor)}
                borderRadius={0}
                size="lg"
              >
                My Services
              </Button>
            </a>
            <Button
              variant="outline"
              colorScheme={useColorModeValue("black", buttonColor)}
              borderRadius={0}
              size="lg"
              onClick={() => {
                const section = document.querySelector("#projects");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Read More
            </Button>
          </HStack>
        </VStack>
        <VStack marginBottom={["2.5svh", "0"]} pr='4.25vw' pl='2.125vw'>
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            color={useColorModeValue("gray.700", headingColor)}
          >
            SERVICES
          </Heading>
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            color={useColorModeValue("gray.700", headingColor)}
          >
            & TECH
          </Heading>
          <VStack
            paddingLeft="30%"
            color={useColorModeValue("black", iconColor)}
            display={["none", "flex"]}
          >
            <HStack ml="auto">
              <Icon as={SiReact} boxSize="20" p={2}></Icon>
              <Icon as={SiNodedotjs} boxSize="20" p={2}></Icon>
              <Icon as={SiMongodb} boxSize="20" p={2}></Icon>
            </HStack>
            <HStack ml="auto">
              <Icon as={SiPython} boxSize="20" p={2}></Icon>
              <Icon as={SiNeo4J} boxSize="20" p={2}></Icon>
            </HStack>
            <HStack ml="auto">
              <Icon as={TbBrandCpp} boxSize="20" p={2}></Icon>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
    </HStack>
  );
};

export default Services;
