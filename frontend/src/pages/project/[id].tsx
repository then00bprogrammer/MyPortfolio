import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import VideoPlayer from "@/components/VideoPlayer";
import client from "@/client";
import Social from "@/components/Social";
import Frame from "@/components/Frame";
import Head from "next/head";
import SolidButton from "@/components/SolidButton";
import OutlineButton from "@/components/OutlineButton";

type Project = {
  title: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
  projectPhoto: string;
  sidePhoto: string;
  color: string;
  techStackNames: string[];
  features: string[];
  techStackDescription: string;
  projectVideoLink: string;
};

export const config = {
  runtime: "experimental-edge",
};

const Project = () => {
  const router = useRouter();
  const [data, setData] = useState<Project | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const articleId = router.query.id;
      try {
        const res = await client.fetch(
          `*[_type == "post" && _id == $articleId]{
              title,
              "projectPhoto":projectPhoto.asset->url,
              projectVideoLink,
              description,
              siteLink,
              githubRepoLink,
              features,
              techStackDescription,
              techStackNames,
              projectVideoLink
            }`,
          { articleId }
        );
        setData(res[0]);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [router.query.id]);
  
  if (data)
    return (
      <>
        <Head>
          <title>Nikhil's Portfolio</title>
        </Head>
        <VStack
          w="full"
          minH={["90vh", "85vh"]}
          spacing={0}
          bg={useColorModeValue("white", "black")}
          marginTop={["10vh", "15vh"]}
        >
          <Stack
            direction={["column", "row"]}
            w="80%"
            minH={["90vh", "85vh"]}
            alignItems="center"
            justifyContent="center"
          >
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
                {data?.title}
              </Heading>
              <Box padding={5} position="relative" display={["flex", "none"]}>
                <Frame />
                <VideoPlayer
                  thumbnail={data.projectPhoto}
                  videoLink={data.projectVideoLink}
                />
              </Box>
              <Text
                color={useColorModeValue("gray.600", "gray.400")}
                mb="2.5vh"
              >
                {data.description}
              </Text>
              <HStack>
                <a href={data.siteLink} target="_blank">
                  <SolidButton>Visit Site</SolidButton>
                </a>
                <a href={data.githubRepoLink} target="_blank">
                  <OutlineButton>Source Code</OutlineButton>
                </a>
              </HStack>
            </VStack>
            <Box
              w="50%"
              padding={5}
              position="relative"
              display={["none", "flex"]}
            >
              <Frame />
              <VideoPlayer
                thumbnail={data.projectPhoto}
                videoLink={data.projectVideoLink}
              />
            </Box>
          </Stack>
          <Social />
          <Features features={data.features} />
          <Technology
            description={data.techStackDescription}
            techStack={data.techStackNames}
          />
        </VStack>
      </>
    );
  else return null;
};

export default Project;
