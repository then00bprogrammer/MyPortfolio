import React, { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import {
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import Frame from "@/utils/Frame";
import SolidButton from "@/utils/SolidButton";
import OutlineButton from "@/utils/OutlineButton";
import ProjectSlider from "@/utils/ProjectSlider";

const Projects: React.FC = () => {
  return (
    <HStack
      h={["90vh", "85vh"]}
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
      id="projects"
    >
      <Flex
        bg={useColorModeValue("red.400", "gold.500")}
        minH={["90vh", "85vh"]}
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
          PROJECTS
        </Text>
      </Flex>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "gold.600")}
        display={["none", "flex"]}
      ></Divider>
      <Stack w={["100%", "85%"]} direction={["column", "row"]}>
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "50%"]}
          pl={["0%", "5%"]}
          pr={["0%", "5%"]}
        >
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color={useColorModeValue("gray.700", "gold.100")}
          >
            PROJECTS
          </Heading>
          <VStack
            w={["100%", "50%"]}
            alignItems="flex-start"
            lineHeight="2"
            letterSpacing="wider"
            position="relative"
            padding={5}
            display={["flex", "none"]}
            marginBottom="2.5vh"
          >
            <Frame />
            <ProjectSlider />
          </VStack>
          <Text mb="2.5vh" color={useColorModeValue("gray.600", "gray.400")}>
            A glimpse of realizations I've developed so far. It doesn't matter
            whether it is about a simple business website or a live complex
            e-commerce webshop. Click the button to see my projects.
          </Text>
          <HStack>
            <Link href="./projects">
              <SolidButton>View Projects</SolidButton>
            </Link>
            <OutlineButton
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Read More
            </OutlineButton>
          </HStack>
        </VStack>
        <VStack
          w={["100%", "50%"]}
          alignItems="flex-start"
          lineHeight="2"
          letterSpacing="wider"
          position="relative"
          padding={5}
          display={["none", "flex"]}
        >
          <Frame />
          <ProjectSlider />
        </VStack>
      </Stack>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "gold.600")}
        display={["none", "flex"]}
      ></Divider>
    </HStack>
  );
};

export default Projects;
