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
  UnorderedList,
  OrderedList,
  ListItem,
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
    link: ({ value, children }) => (
      <Link
        href={value?.href}
        target="_blank"
        color={useColorModeValue("teal", useTheme().focusTextColor)}
        _hover={{ textDecoration: "underline" }}
      >
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <UnorderedList
        spacing={1}
        styleType="disc"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {children}
      </UnorderedList>
    ),
    number: ({ children }) => (
      <OrderedList
        spacing={1}
        styleType="decimal"
        color={useColorModeValue("gray.600", "gray.400")}
      >
        {children}
      </OrderedList>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <ListItem>
        <Text as="span" color={useColorModeValue("gray.600", "gray.400")}>{children}</Text>
      </ListItem>
    ),
    number: ({ children }) => (
      <ListItem>
        <Text as="span" color={useColorModeValue("gray.600", "gray.400")}>{children}</Text>
      </ListItem>
    ),
  },
};

const Banner: React.FC = () => {
  const { headingColor } = useTheme();
  const [aboutData, setAboutData] = useState({
    heading: "",
    subheading: "",
    about: [],
    lottieSrc: "puzzles",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await client.fetch(
          `*[_type == "codingProfile"][0]{
            heading,
            subheading,
            about,
            lottieSrc
          }`
        );
        setAboutData({
          heading: res.heading || "ABOUT ME",
          subheading: res.subheading || "I'm a pre-final year student at IIITL.",
          about: res.about || [],
          lottieSrc: res.lottieSrc || "puzzles",
        });
      } catch (error) {
        console.error("Error fetching About section:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <Flex
      w={`calc(100vw - 12px)`}
      minH={["90svh", "85svh"]}
      flexDir={["column-reverse", "row"]}
      pl={["4vw", "7.5vw"]}
      pr={["4vw", "7.5vw"]}
      alignItems="center"
      pb="2.5vh"
      borderRadius="2xl"
      mt={6}
    >
      <VStack
        w={["100%", "50%"]}
        h="full"
        color="black"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}
        px={[0, 8]}
      >
        <Heading
          fontSize={["4xl", "7xl"]}
          fontWeight="extrabold"
          mb="2.5svh"
          color={useColorModeValue("gray.700", headingColor)}
          letterSpacing="tight"
        >
          {aboutData.heading}
        </Heading>
        <Text
          fontSize={["lg", "2xl"]}
          color={useColorModeValue("gray.600", "gray.400")}
          mb={2}
          fontWeight="medium"
        >
          {aboutData.subheading}
        </Text>
        <Box>
          <PortableText value={aboutData.about} components={customComponent} />
        </Box>
        <HStack mt={2}>
          <Link href="./contact" aria-label="Contact Me">
            <SolidButton>Contact Me</SolidButton>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Qh2ncrzAanj-v0wsHkjgF-V4r6kP-uSb/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My Resume"
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
            <CustomLottiePlayer src={aboutData.lottieSrc} />
          </Center>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Banner;
