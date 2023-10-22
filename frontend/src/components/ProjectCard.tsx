import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
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

const blueDark = {
  theme: "#1A1A2E",
  buttonColor: "blue",
  frameColor: "#16213E",
  borderColor: "#0F3460",
};
const blueLight = {
  theme: "blue.50",
  buttonColor: "blue",
  frameColor: "blue.100",
  borderColor: "blue",
};

const grayLight = {
  theme: "gray.100",
  buttonColor: "blackAlpha",
  frameColor: "blackAlpha.200",
  borderColor: "black",
};
const grayDark = {
  theme: "#333456",
  buttonColor: "purple",
  frameColor: "blackAlpha.200",
  borderColor: "black",
};

const orangeLight = {
  theme: "orange.50",
  buttonColor: "orange",
  frameColor: "orange.100",
  borderColor: "orange",
};
const orangeDark = {
  theme: "#2F2519",
  buttonColor: "orange",
  frameColor: "#4A3F35",
  borderColor: "#2F2519",
};

const colorMap = {
  gray: [grayLight, grayDark],
  orange: [orangeLight, orangeDark],
  blue: [blueLight, blueDark],
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
        h={['90vh','85vh']}
        w="full"
        pl="7.5vw"
        pr="7.5vw"
        justifyContent="space-between"
        color="black"
        position="relative"
        bg={useColorModeValue(
          colorMap[projectData.color as keyof typeof colorMap][0].theme,
          colorMap[projectData.color as keyof typeof colorMap][1].theme
        )}
        className="projectCard"
      >
        <Flex
          bgImage={projectData.sidePhoto}
          bgSize="cover"
          h={['90vh','85vh']}
          w="15vw"
          position="absolute"
          left={0}
          zIndex={1}
          alignItems="center"
          justifyContent="center"
          filter="blur(1px)"
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
            {projectData.title}
          </Text>
        </Flex>
        <Divider
          width="1px"
          height={['85vh','90vh']}
          bg="black"
          display={["none", "flex"]}
        ></Divider>
        <Stack width="100%" direction={["column", "row"]}>
          <VStack
            lineHeight="2"
            letterSpacing="wider"
            w={["100%", "50%"]}
            pl={["0%", "15%"]}
            pr={["0%", "5%"]}
          >
            <motion.div
              ref={ref}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div variants={headingVariants}>
                <Heading
                  fontSize={["4xl", "7xl"]}
                  fontWeight="extrabold"
                  mt="2.5vh"
                  mb="2.5vh"
                  color={useColorModeValue("gray.700", "gray.100")}
                >
                  {projectData.title}
                </Heading>
              </motion.div>
            </motion.div>
            <Box
              display={["flex", "none"]}
              mb='2.5vh'
              width={["100%", "50%"]}
              padding={5}
              position="relative"
              bg={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .frameColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .frameColor
              )}
            >
              <Divider
                borderRadius={10}
                bg={useColorModeValue(
                  colorMap[projectData.color as keyof typeof colorMap][0]
                    .borderColor,
                  colorMap[projectData.color as keyof typeof colorMap][1]
                    .borderColor
                )}
                width="10px"
                h="100px"
                position="absolute"
                top={0}
                left={0}
              ></Divider>
              <Divider
                borderRadius={10}
                bg={useColorModeValue(
                  colorMap[projectData.color as keyof typeof colorMap][0]
                    .borderColor,
                  colorMap[projectData.color as keyof typeof colorMap][1]
                    .borderColor
                )}
                h="10px"
                w="100px"
                position="absolute"
                top={0}
                left={0}
              ></Divider>
              <Divider
                borderRadius={10}
                bg={useColorModeValue(
                  colorMap[projectData.color as keyof typeof colorMap][0]
                    .borderColor,
                  colorMap[projectData.color as keyof typeof colorMap][1]
                    .borderColor
                )}
                width="10px"
                h="100px"
                position="absolute"
                bottom={0}
                right={0}
              ></Divider>
              <Divider
                borderRadius={10}
                bg={useColorModeValue(
                  colorMap[projectData.color as keyof typeof colorMap][0]
                    .borderColor,
                  colorMap[projectData.color as keyof typeof colorMap][1]
                    .borderColor
                )}
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
            <Text
              color={useColorModeValue("gray.600", "gray.400")}
              mb="2.5vh"
            >
              {projectData.description}
            </Text>
            <HStack>
              <Link href={`./project/${projectData.id}`}>
                <Button
                  variant="solid"
                  colorScheme={useColorModeValue(
                    colorMap[projectData.color as keyof typeof colorMap][0]
                      .buttonColor,
                    colorMap[projectData.color as keyof typeof colorMap][1]
                      .buttonColor
                  )}
                  borderRadius={0}
                  size={["md", "lg"]}
                >
                  View Project
                </Button>
              </Link>
              <Link href={projectData.githubRepoLink}>
                <Button
                  variant="outline"
                  colorScheme={useColorModeValue(
                    colorMap[projectData.color as keyof typeof colorMap][0]
                      .buttonColor,
                    colorMap[projectData.color as keyof typeof colorMap][1]
                      .buttonColor
                  )}
                  borderRadius={0}
                  size={["md", "lg"]}
                >
                  Source Code
                </Button>
              </Link>
            </HStack>
          </VStack>
          <Box
            display={["none", "flex"]}
            width={["100%", "50%"]}
            padding={5}
            position="relative"
            bg={useColorModeValue(
              colorMap[projectData.color as keyof typeof colorMap][0]
                .frameColor,
              colorMap[projectData.color as keyof typeof colorMap][1].frameColor
            )}
          >
            <Divider
              borderRadius={10}
              bg={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .borderColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .borderColor
              )}
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .borderColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .borderColor
              )}
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .borderColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .borderColor
              )}
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue(
                colorMap[projectData.color as keyof typeof colorMap][0]
                  .borderColor,
                colorMap[projectData.color as keyof typeof colorMap][1]
                  .borderColor
              )}
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
        </Stack>
        <Divider
          display={["none", "flex"]}
          width="1px"
          height={['85vh','90vh']}
          bg={useColorModeValue(
            "black",
            colorMap[projectData.color as keyof typeof colorMap][1].buttonColor
          )}
        ></Divider>
      </HStack>
    );
  else return null;
};

export default ProjectCard;
