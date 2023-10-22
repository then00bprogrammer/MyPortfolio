import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import VideoPlayer from "@/components/VideoPlayer";
import client from "@/client";
import Social from "@/components/Social";

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

const Project = () => {
  const router = useRouter();
  const articleId = router.query.id as string;
  console.log(articleId);

  const [data, setData] = useState<Project | null>(null);

  const fetchPost = async () => {
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
      console.log(res);
      setData(res[0]);
    } catch (error) {
      console.error("Error fetching post:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
  if (data)
    return (
      <VStack marginTop='15vh' w="full" minHeight="85vh" spacing={0} bg={useColorModeValue('white','black')}>
        <HStack w="80%" m="auto" height="85vh">
          <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
            <Heading
              fontSize="7xl"
              fontWeight="extrabold"
              mt="2.5vh"
              mb="2.5vh"
              color={useColorModeValue('gray.700','yellow.100')}
            >
              {data?.title}
            </Heading>
            <Text color={useColorModeValue('gray.600','gray.400')} mb="2.5vh">
              {data.description}
            </Text>
            <HStack>
              <a href={data.siteLink} target="_blank">
                <Button
                  variant="solid"
                  colorScheme={useColorModeValue('green','yellow')}
                  borderRadius={0}
                  size="lg"
                  w="15vw"
                  h="7.5vh"
                >
                  Visit Site
                </Button>
              </a>
              <a href={data.githubRepoLink} target="_blank">
                <Button
                  variant="outline"
                  borderRadius={0}
                  size="lg"
                  colorScheme={useColorModeValue('blackAlpha','yellow')}
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </VStack>
          <Box width="50%" padding={5} position="relative">
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <VideoPlayer
              thumbnail={data.projectPhoto}
              videoLink={data.projectVideoLink}
            />
          </Box>
        </HStack>
        <Social/>
        <Features features={data.features} />
        <Technology
          description={data.techStackDescription}
          techStack={data.techStackNames}
        />
      </VStack>
    );
  else return null;
};

export default Project;
