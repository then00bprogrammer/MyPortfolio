import React, { useRef } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiNeo4J,
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiChakraui,
  SiRedis,
  SiScikitlearn,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion, Variants } from "framer-motion";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import SideBanner from "@/utils/SideBanner";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";
import { useTheme } from "@/ThemeContext";

const iconMap = {
  React: SiReact,
  Next: TbBrandNextjs,
  ChakraUI: SiChakraui,
  Typescript: SiTypescript,
  Javascript: SiJavascript,
  CSS: SiCss3,
  NodeJS: SiNodedotjs,
  Python: SiPython,
  MongoDB: SiMongodb,
  Neo4j: SiNeo4J,
  Redis: SiRedis,
  Scikit: SiScikitlearn,
};

const headingVariants: Variants = {
  offscreen: {
    y: 20,
    rotate: 15,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 10,
      mass: 2,
    },
  },
};

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
};

const Technology: React.FC<{
  description: any[];
  techStack: string[];
}> = ({ description, techStack }) => {
  const { sidebarColor, iconColor, sidelineColor, techLottie } = useTheme();
  
  const ref = useRef(null);
  return (
    <Stack
      direction={["column", "row"]}
      minH={["90svh", "85svh"]}
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
      position="relative"
    >
      <SideBanner
        title="Technology"
        isBlurred={false}
        isLeftAligned={false}
        bgColor={useColorModeValue("red.400", sidebarColor)}
      />
      <Stack
        w={["100%", "100%"]}
        textAlign="left"
        direction={["column", "row"]}
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <VStack
          lineHeight="2"
          letterSpacing="wider"
          w={["100%", "38.75vw"]}
          ml={["0", "4.25vw"]}
          mr={["0", "2.125vw"]}
          textAlign="left"
          color="gray.600"
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
                mt="2.5svh"
                mb="2.5svh"
                color={useColorModeValue("gray.800", "gray.100")}
              >
                Technology
              </Heading>
            </motion.div>
          </motion.div>
          {/* Smaller Devices */}
          <Box w="100%" display={["flex", "none"]} h="45svh">
            <Center>
              <CustomLottiePlayer
                src={useColorModeValue("technology", "technology-dark")}
              />
            </Center>
          </Box>
          <Text color={useColorModeValue("gray.600", "gray.400")}>
            <PortableText components={customComponent} value={description} />
          </Text>

          <Wrap
            spacing="2"
            mt="2.5svh"
            pr={["0%", "30%"]}
            color={useColorModeValue("gray.800", iconColor)}
          >
            {techStack.map((tech, index) => (
              <WrapItem key={index}>
                <Icon
                  as={iconMap[tech as keyof typeof iconMap]}
                  boxSize={["12", "16"]}
                  p={2}
                ></Icon>
              </WrapItem>
            ))}
          </Wrap>
        </VStack>
        {/* Larger Devices */}
        <Box
          w="46.25vw"
          mr="7.5vw"
          pr="4.25vw"
          pl="2.125vw"
          display={["none", "flex"]}
        >
          <Center>
            <CustomLottiePlayer
              src={techLottie}
            />
          </Center>
        </Box>
      </Stack>
      <Divider
        width="1px"
        height={["90svh", "85svh"]}
        display={["none", "flex"]}
        position="absolute"
        left="7.5vw"
        h="85svh"
        bg={useColorModeValue("black", sidelineColor)}
      ></Divider>
    </Stack>
  );
};

export default Technology;
