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
import { DotLottiePlayer } from "@dotlottie/react-player";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import SideBanner from "@/utils/SideBanner";
import { BlockSchemaType } from "@sanity/types";
import { PortableText } from "@portabletext/react";
import { PortableTextComponents } from "@portabletext/react";

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
          target='_blank'
          color={useColorModeValue('teal','gold.600')}
          _hover={{textDecoration:'underline'}}
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
  console.log(description);
  const ref = useRef(null);
  return (
    <Stack
      direction={["column", "row"]}
      minH={["90vh", "85vh"]}
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
        bgColor={useColorModeValue("red.400", "gold.500")}
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
                mt="2.5vh"
                mb="2.5vh"
                color={useColorModeValue("gray.800", "gray.100")}
              >
                Technology
              </Heading>
            </motion.div>
          </motion.div>
          {/* Smaller Devices */}
          <Box w="100%" display={["flex", "none"]} h="45vh">
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
            mt="2.5vh"
            pr={["0%", "30%"]}
            color={useColorModeValue("gray.800", "gold.600")}
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
              src={useColorModeValue("technology", "technology-dark")}
            />
          </Center>
        </Box>
      </Stack>
      <Divider
        width="1px"
        height={["90vh", "85vh"]}
        display={["none", "flex"]}
        position="absolute"
        left="7.5vw"
        h="85vh"
        bg={useColorModeValue("black", "#735F32")}
      ></Divider>
    </Stack>
  );
};

export default Technology;
