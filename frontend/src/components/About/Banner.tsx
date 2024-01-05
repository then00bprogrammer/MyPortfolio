import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  HStack,
  Heading,
  Link,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import SolidButton from "@/utils/SolidButton";
import { PortableText } from "@portabletext/react";
import client from "@/client";
import { PortableTextComponents } from "@portabletext/react";
import OutlineButton from "@/utils/OutlineButton";
import { useTheme } from "@/ThemeContext";

const customComponent: PortableTextComponents = {
  marks: {
    link: ({ value, children }) => {
      return (
        <Link
          href={value?.href}
          target="_blank"
          color={useColorModeValue("teal", useTheme().focusTextColor)}
          _hover={{ textDecoration: "underline" }}
        >
          {children}
        </Link>
      );
    },
  },
  // Add list style modifications here
  list: ({ children }) => {
    return (
      <VStack alignItems="flex-start" spacing={2}>
        {children}
      </VStack>
    );
  },
};

const Banner: React.FC = () => {
  const { headingColor } = useTheme();
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "codingProfile"]{
              about,
            }`
        );
        console.log(res[0].about);
        setData(res[0].about);
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Flex
      w={`calc(100vw - 12px)`}
      minH={["90svh", "85svh"]}
      flexDir={["column-reverse", "row"]}
      pl="7.5vw"
      pr="7.5vw"
      alignItems="center"
      pb="2.5vh"
    >
      <VStack
        w={["100%", "50%"]}
        h="full"
        color="black"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Heading
          fontSize={["4xl", "7xl"]}
          fontWeight="extrabold"
          mb="2.5svh"
          color={useColorModeValue("gray.700", headingColor)}
        >
          ABOUT ME
        </Heading>
        <Text
          fontSize={["md", "xl"]}
          color={useColorModeValue("gray.600", "gray.400")}
        >
          <Heading
            mb="2.5svh"
            fontSize={["2xl", "4xl"]}
            color={useColorModeValue("gray.700", headingColor)}
          >
            I'm a pre-final year student at IIITL.
          </Heading>
          <PortableText value={data} components={customComponent} />
        </Text>
        <HStack mt="5svh">
          <Link href="./contact">
            <SolidButton>Contact Me</SolidButton>
          </Link>
          <a
            href="https://drive.google.com/file/d/1SDVnrflvVNHmly7Bdt3C1dnJ7EuPnzY4/view?usp=share_link"
            target="_blank"
          >
            <OutlineButton>My Resume</OutlineButton>
          </a>
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
            <CustomLottiePlayer src="puzzles" />
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
