import React from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import SolidButton from "@/utils/SolidButton";
import { useTheme } from "@/ThemeContext";

const Banner: React.FC = () => {
  const { headingColor } = useTheme();
  return (
    <Flex
      w={`calc(100vw - 12px)`}
      h={["90svh", "85svh"]}
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
          fontSize={["4xl", "7xl"]}
          fontWeight="extrabold"
          mb="2.5svh"
          color={useColorModeValue("gray.700", headingColor)}
        >
          PROJECTS
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} mb="2.5svh">
          Top projects I've developed so far: Social Media, utility extensions,
          helper websites, etc. Web design, web development.
        </Text>
        <HStack mt="2.5svh">
          <SolidButton
            onClick={() => {
              const section = document.getElementsByClassName("projectCard")[0];
              section?.scrollIntoView({ behavior: "smooth", block: "end" });
            }}
          >
            See Projects
          </SolidButton>
        </HStack>
      </VStack>
      <Flex
        w={["100%", "50%"]}
        h={["50%", "100%"]}
        alignItems="center"
        justifyContent="center"
      >
        <Box w={["100%", "80%"]} h={["100%", "80%"]}>
          <Center>
            <CustomLottiePlayer src="projects" />
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
