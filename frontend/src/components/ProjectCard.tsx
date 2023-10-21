import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const headingVariants: Variants = {
  offscreen: {
    y: 20,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      mass: 2,
    },
  },
};

const colorMap = {
  gray: {
    theme: "gray.100",
    buttonColor: "blackAlpha",
    frameColor: "blackAlpha.200",
    borderColor: "black",
  },
  orange: {
    theme: "orange.50",
    buttonColor: "orange",
    frameColor: "orange.100",
    borderColor: "orange",
  },
  blue: {
    theme: "blue.50",
    buttonColor: "blue",
    frameColor: "blue.100",
    borderColor: "blue",
  },
};

type Project = {
  title: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
  color: string;
  projectPhoto: string;
  sidePhoto: any;
  id: string;
};

const ProjectCard = (data: { project: Project }) => {
  const ref = useRef(null);
  const [projectData, setprojectData] = useState<Project | null>();
  useEffect(() => {
    setprojectData(data.project);
  }, [data]);

  if (projectData)
    return (
      <HStack
        h="100vh"
        w="full"
        pl="7.5vw"
        pr="7.5vw"
        justifyContent="space-between"
        color="black"
        position="relative"
        bg={colorMap[projectData.color as keyof typeof colorMap].theme}
        className="projectCard"
      >
        <Flex
          bgImage={projectData.sidePhoto}
          bgSize="cover"
          h="100vh"
          w="15vw"
          position="absolute"
          left={0}
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          filter="blur(1px)"
        >
          <Text
            transform="rotate(180deg)"
            style={{ writingMode: "vertical-rl" }}
            fontSize="6xl"
            fontWeight="bold"
            color="white"
            margin="auto"
          >
            {projectData.title}
          </Text>
        </Flex>
        <Divider width="1px" height="100vh" bg="black"></Divider>
        <HStack width="85%">
          <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
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
                >
                  {projectData.title}
                </Heading>
              </motion.div>
            </motion.div>
            <Text color="gray.600" mb="2.5vh">
              {projectData.description}
            </Text>
            <HStack>
              <Link href={`./project/${projectData.id}`}>
                <Button
                  variant="solid"
                  colorScheme={
                    colorMap[projectData.color as keyof typeof colorMap]
                      .buttonColor
                  }
                  borderRadius={0}
                  size="lg"
                  w="15vw"
                  h="7.5vh"
                >
                  View Project
                </Button>
              </Link>
              <Link href={projectData.githubRepoLink}>
                <Button
                  variant="outline"
                  colorScheme={
                    colorMap[projectData.color as keyof typeof colorMap]
                      .buttonColor
                  }
                  borderRadius={0}
                  size="lg"
                  color="black"
                >
                  Source Code
                </Button>
              </Link>
            </HStack>
          </VStack>
          <Box
            width="50%"
            padding={5}
            position="relative"
            bgColor={
              colorMap[projectData.color as keyof typeof colorMap].frameColor
            }
          >
            <Divider
              borderRadius={10}
              bg={
                colorMap[projectData.color as keyof typeof colorMap].borderColor
              }
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={
                colorMap[projectData.color as keyof typeof colorMap].borderColor
              }
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={
                colorMap[projectData.color as keyof typeof colorMap].borderColor
              }
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={
                colorMap[projectData.color as keyof typeof colorMap].borderColor
              }
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Image
              width="full"
              objectFit="contain"
              src={projectData.projectPhoto}
            ></Image>
          </Box>
        </HStack>
        <Divider width="1px" height="100vh" bg="black"></Divider>
      </HStack>
    );
  else return null;
};

export default ProjectCard;
