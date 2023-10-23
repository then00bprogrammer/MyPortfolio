import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import { Player } from "@lottiefiles/react-lottie-player";
import client from "@/client";
import ProjectCard from "@/components/ProjectCard";
import Social from "@/components/Social";

type Project = {
  title: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
  projectPhoto: string;
  sidePhoto: string;
  color: string;
  id: string;
};

const projects = () => {
  const [data, setData] = useState<Project[]>([]);

  const fetchPost = async () => {
    try {
      const res = await client.fetch(`*[_type == "post"] | order(priority) {
        title,
        description,
        siteLink,
        githubRepoLink,
        "sidePhoto":sidePhoto.asset->url,
        "projectPhoto":projectPhoto.asset->url,
        "color":themeColor,
        "id":_id
      }`);
      setData(res);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <>
    <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
    <VStack
      w="full"
      minHeight={["90vh", "85vh"]}
      marginTop={["10vh", "15vh"]}
      spacing={0}
      bg={useColorModeValue("white", "black")}
    >
      <Flex
        w={`calc(100vw - 12px)`}
        h={["90vh", "85vh"]}
        bgSize="contain"
        bgRepeat="no-repeat"
        bgImage={useColorModeValue("./pencil.jpg", "")}
        flexDir={["column-reverse", "row"]}
      >
        <VStack
          w={["100%", "50%"]}
          h="full"
          color="black"
          justifyContent="center"
          alignItems="center"
          pl="10%"
          pr="10%"
          spacing={0}
        >
          <Heading
            size={["4xl", "7xl"]}
            mb="2.5vh"
            color={useColorModeValue("gray.700", "yellow.100")}
          >
            PROJECTS
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.400")} mb="2.5vh">
            Top projects I've developed so far: Social Media, utility
            extensions, helper websites, etc. Web design, web development.
          </Text>
          <Box fontSize="xl" color="gray.800" fontWeight="medium"></Box>
          <HStack mt="2.5vh">
            <Button
              variant="solid"
              colorScheme={useColorModeValue("red", "gold")}
              borderRadius={0}
              size="lg"
            >
              See Projects
            </Button>
          </HStack>
        </VStack>
        <Flex
          w={["100%", "50%"]}
          h={["50%", "100%"]}
          alignItems="center"
          justifyContent="center"
        >
          <Box w={["100%", "80%"]} h={["100%", "80%"]}>
            <Player
              autoplay
              loop
              src="/animations/projects.json"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
        </Flex>
      </Flex>
      <Social />
      {data &&
        data.map((proj, i) => (
          <ProjectCard project={proj} key={proj.siteLink} />
        ))}
    </VStack>
    </>
  );
};

export default projects;
