import Frame from "@/utils/Frame";
import {
  Box,
  HStack,
  Heading,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import VideoPlayer from "@/utils/VideoPlayer";
import SolidButton from "@/utils/SolidButton";
import OutlineButton from "@/utils/OutlineButton";
import { useTheme } from "@/ThemeContext";

const Banner: React.FC<{
  title: string;
  projectPhoto: string;
  projectVideoLink: string;
  description: string;
  siteLink: string;
  githubRepoLink: string;
}> = ({
  title,
  description,
  siteLink,
  githubRepoLink,
  projectPhoto,
  projectVideoLink,
}) => {
  const { headingColor } = useTheme();
  return (
    <Stack
      direction={["column", "row"]}
      w="80%"
      minH={["90svh", "85svh"]}
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
          mt="2.5svh"
          mb="2.5svh"
          color={useColorModeValue("gray.700", headingColor)}
        >
          {title}
        </Heading>
        <Box padding={5} position="relative" display={["flex", "none"]}>
          <Frame />
          <VideoPlayer thumbnail={projectPhoto} videoLink={projectVideoLink} />
        </Box>
        <Text color={useColorModeValue("gray.600", "gray.400")} mb="2.5svh">
          {description}
        </Text>
        <HStack>
          <a href={siteLink} target="_blank">
            <SolidButton>Visit Site</SolidButton>
          </a>
          <a href={githubRepoLink} target="_blank">
            <OutlineButton>Source Code</OutlineButton>
          </a>
        </HStack>
      </VStack>
      <Box w="50%" padding={5} position="relative" display={["none", "flex"]}>
        <Frame />
        <VideoPlayer thumbnail={projectPhoto} videoLink={projectVideoLink} />
      </Box>
    </Stack>
  );
};

export default Banner;
