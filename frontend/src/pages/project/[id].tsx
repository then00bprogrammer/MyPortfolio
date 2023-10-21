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
} from "@chakra-ui/react";
import Features from "@/components/Features";
import Technology from "@/components/Technology";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";
import { SiCodeforces, SiLeetcode } from "react-icons/si";
import VideoPlayer from "@/components/VideoPlayer";
import client from "@/client";

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
      <VStack w="full" minHeight="100vh">
        <HStack w="80%" m="auto" height="85vh">
          <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
            <Heading
              fontSize="7xl"
              fontWeight="extrabold"
              mt="2.5vh"
              mb="2.5vh"
              color="gray.700"
            >
              {data?.title}
            </Heading>
            <Text color="gray.600" mb="2.5vh">
              {data.description}
            </Text>
            <HStack>
              <a href={data.siteLink} target="_blank">
                <Button
                  variant="solid"
                  colorScheme="green"
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
                  colorScheme="blackAlpha"
                  borderRadius={0}
                  size="lg"
                  color="black"
                >
                  Source Code
                </Button>
              </a>
            </HStack>
          </VStack>
          <Box width="50%" padding={5} position="relative">
            <Divider
              borderRadius={10}
              bg="black"
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg="black"
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg="black"
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg="black"
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            {/* <Image
                width="full"
                height="60vh"
                objectFit="cover"
                src="./intcover.png"
              ></Image> */}
            <VideoPlayer
              thumbnail={data.projectPhoto}
              videoLink={data.projectVideoLink}
            />
          </Box>
        </HStack>
        <HStack
          mr="auto"
          h="5vh"
          w="70%"
          justifyContent="center"
          alignItems="center"
          marginTop="5vh"
          marginBottom="25vh"
        >
          <Divider bg="black" orientation="horizontal" height="1px"></Divider>
          <HStack
            color="gray.800"
            marginLeft="30px"
            marginRight="30px"
            spacing={5}
          >
            <Icon as={FaGithub} cursor="pointer" boxSize="10"></Icon>
            <Icon as={FaLinkedin} cursor="pointer" boxSize="10"></Icon>
            <Icon as={SiLeetcode} cursor="pointer" boxSize="10"></Icon>
            <Icon as={SiCodeforces} cursor="pointer" boxSize="10"></Icon>
            <Icon as={FaTwitter} cursor="pointer" boxSize="10"></Icon>
            <Icon as={FaEnvelope} cursor="pointer" boxSize="10"></Icon>
          </HStack>
          <Divider bg="black" orientation="horizontal" height="1px"></Divider>
        </HStack>
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
