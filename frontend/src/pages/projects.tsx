import React, { useState, useEffect } from "react";
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
    <VStack w="full" minHeight="100vh"  spacing={0}>
      <Flex w={`calc(100vw - 12px)`} h="85vh" bgImage='./pencil.jpg' bgSize='contain' bgRepeat='no-repeat'>
        <VStack
          w="50%"
          h="full"
          color="black"
          justifyContent="center"
          alignItems="center"
          pl="10%"
          pr="10%"
          spacing={0}
        >
          <Heading size="3xl" color="gray.700" mb="2.5vh">
            PROJECTS
          </Heading>
          <Text fontSize="xl" color="gray.600" mb="2.5vh">
            Top projects I've developed so far: e-commerce, business websites,
            real time administration apps, etc. Web design, web development,
            logo design.
          </Text>
          <Box fontSize="xl" color="gray.800" fontWeight="medium"></Box>
          <HStack mt="2.5vh">
            <Button
              variant="solid"
              colorScheme="red"
              borderRadius={0}
              size="lg"
              w="15vw"
              h="7.5vh"
            >
              See Projects
            </Button>
          </HStack>
        </VStack>
        <Flex w="50%" h="full" alignItems="center" justifyContent="center">
          <Player
            autoplay
            loop
            src="/animations/projects.json"
            style={{ height: "80%", width: "80%" }}
          />
        </Flex>
      </Flex>
      <Social/>
      { data && data.map((proj,i) => <ProjectCard project={proj} key={proj.siteLink} />)}
    </VStack>
  );
};

export default projects;
