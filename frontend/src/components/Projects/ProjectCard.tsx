import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import {
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import { motion, Variants } from "framer-motion";

import Frame from "@/utils/Frame";
import SolidButton from "@/utils/SolidButton";
import OutlineButton from "@/utils/OutlineButton";
import colorMap from "@/utils/colorMap";
import SideBanner from "@/utils/SideBanner";

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

const ProjectCard: React.FC<{ project: Project }> = (data) => {
  const ref = useRef(null);
  const [projectData, setprojectData] = useState<Project | null>();
  useEffect(() => {
    setprojectData(data.project);
  }, [data]);

  if (projectData)
    return (
      <HStack
        minH={["90vh", "85vh"]}
        w="full"
        pl="7.5vw"
        pr="7.5vw"
        pt={["7.5vw", "0"]}
        pb={["7.5vw", "0"]}
        justifyContent="space-between"
        color="black"
        position="relative"
        bg={useColorModeValue(
          colorMap[projectData.color as keyof typeof colorMap][0].theme,
          colorMap[projectData.color as keyof typeof colorMap][1].theme
        )}
        className="projectCard"
        spacing={0}
      >
        <SideBanner
          title={projectData.title}
          isBlurred={true}
          isLeftAligned={true}
          bgColor='none'
          sidePhoto={projectData.sidePhoto}
        />
        <Divider
          width="1px"
          height={["90vh", "85vh"]}
          display={["none", "flex"]}
          position="absolute"
          right="7.5vw"
          bg={useColorModeValue(
            "black",
            colorMap[projectData.color as keyof typeof colorMap][1].buttonColor
          )}
        ></Divider>
        <Stack
          width="100%"
          direction={["column", "row"]}
          alignItems="center"
          spacing={0}
        >
          <VStack
            lineHeight="2"
            letterSpacing="wider"
            w={["100%", "46.25vw"]}
            ml={["0%", "7.5vw"]}
            pl={["0%", "4.25vw"]}
            pr={["0%", "2.125vw"]}
          >
            <motion.div
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={headingVariants}>
                <Heading
                  fontSize={["4xl", "5xl"]}
                  fontWeight="extrabold"
                  mt="2.5vh"
                  mb="2.5vh"
                  color={useColorModeValue("gray.700", "gray.100")}
                >
                  {projectData.title}
                </Heading>
              </motion.div>
            </motion.div>
            {/* For smaller screens */}
            <Box
              display={["flex", "none"]}
              mb="2.5vh"
              width={["100%", "50%"]}
              padding={5}
              position="relative"
              backdropFilter="blur(3.5px)"
            >
              <Frame
                frameColor={useColorModeValue(
                  colorMap[projectData.color as keyof typeof colorMap][0]
                    .borderColor,
                  colorMap[projectData.color as keyof typeof colorMap][1]
                    .borderColor
                )}
              />
              <Image
                width="full"
                objectFit="contain"
                src={projectData.projectPhoto}
              ></Image>
            </Box>
            <Text color={useColorModeValue("gray.600", "gray.400")} mb="2.5vh">
              {projectData.description}
            </Text>
            <HStack>
              <Link href={`./project/${projectData.id}`}>
                <SolidButton
                  light={
                    colorMap[projectData.color as keyof typeof colorMap][0]
                      .buttonColor
                  }
                  dark={
                    colorMap[projectData.color as keyof typeof colorMap][1]
                      .buttonColor
                  }
                >
                  View Project
                </SolidButton>
              </Link>
              <Link href={projectData.githubRepoLink}>
                <OutlineButton
                  light={
                    colorMap[projectData.color as keyof typeof colorMap][0]
                      .buttonColor
                  }
                  dark={
                    colorMap[projectData.color as keyof typeof colorMap][1]
                      .buttonColor
                  }
                >
                  Source Code
                </OutlineButton>
              </Link>
            </HStack>
          </VStack>
          {/* For Big Screens */}
          <Box
            display={["none", "flex"]}
            padding={5}
            position="relative"
            height="-webkit-fit-content"
            w="38.75vw"
            mr="4.25vw"
            ml="2.125vw"
          >
            <Frame
              frameColor={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .borderColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .borderColor
              )}
            />
            <Image
              width="full"
              objectFit="contain"
              src={projectData.projectPhoto}
            ></Image>
          </Box>
        </Stack>
      </HStack>
    );
  else return null;
};

export default ProjectCard;
