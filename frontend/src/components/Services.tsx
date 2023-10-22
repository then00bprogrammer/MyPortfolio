import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiNeo4J,
} from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Services = () => {
  return (
    <HStack
      minH="100vh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
    >
      <Divider
        width="1px"
        minH="100vh"
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
      <Stack width="full" direction={["column-reverse", "row"]}>
        <VStack
          w={["100%", "70%"]}
          alignItems="flex-start"
          pl="5%"
          pr="5%"
          lineHeight="2"
          letterSpacing="wider"
        >
          <Box p={5} position="relative">
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue("red", "#735F32")}
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Image src="./services.jpg"></Image>
          </Box>
          <Heading
            mt="2.5vh"
            mb="2.5vh"
            fontWeight="medium"
            color={useColorModeValue("gray.800", "gray.100")}
            display={["none", "flex"]}
          >
            {" "}
            WEB DEVELOPER
          </Heading>
          <Wrap
            ml="auto"
            color={useColorModeValue("black", "#735F32")}
            display={["flex", "none"]}
            marginTop={['2.5vh','0']}
            marginBottom={['2.5vh','0']}
          >
            <Icon as={SiReact} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiNodedotjs} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiMongodb} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiPython} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={SiNeo4J} boxSize={["10", "20"]} p={2}></Icon>
            <Icon as={TbBrandCpp} boxSize={["10", "20"]} p={2}></Icon>
          </Wrap>

          <Text
            color={useColorModeValue("gray.600", "gray.400")}
            mb="2.5vh"
            fontSize={["xs", "sm"]}
          >
            As a professional freelancer specialized in web design, SEO and web
            development, I create customized digital solutions with a focus on
            your needs. Examples are: regular business websites, application for
            administrative purposes (e.g. selecting personnel for certain
            tasks), webshops, food delivery web application, CRM's and more. In
            other words: anything that needs to appear on screen to increase
            your business' efficiency and/or attract more users and ultimately
            generate more revenue.
          </Text>
          <HStack>
            <a href="https://www.fiverr.com/nikhil03_" target="_blank">
              <Button
                variant="solid"
                colorScheme={useColorModeValue("red", "gold")}
                borderRadius={0}
                size="lg"
              >
                My Services
              </Button>
            </a>
            <Button
              variant="outline"
              colorScheme={useColorModeValue("blackAlpha", "gold")}
              borderRadius={0}
              size="lg"
              onClick={() => {
                const section = document.querySelector("#projects");
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Read More
            </Button>
          </HStack>
        </VStack>
        <VStack marginBottom={['2.5vh','0']}>
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            color={useColorModeValue("gray.800", "gray.100")}
            // display={['none','flex']}
          >
            SERVICES
          </Heading>
          <Heading
            fontSize={["4xl", "7xl"]}
            fontWeight="extrabold"
            color={useColorModeValue("gray.800", "gray.100")}
            // display={['none','flex']}
          >
            & TECH
          </Heading>
          <VStack
            paddingLeft="30%"
            color={useColorModeValue("black", "#735F32")}
            display={["none", "flex"]}
          >
            <HStack ml="auto">
              <Icon as={SiReact} boxSize="20" p={2}></Icon>
              <Icon as={SiNodedotjs} boxSize="20" p={2}></Icon>
              <Icon as={SiMongodb} boxSize="20" p={2}></Icon>
            </HStack>
            <HStack ml="auto">
              <Icon as={SiPython} boxSize="20" p={2}></Icon>
              <Icon as={SiNeo4J} boxSize="20" p={2}></Icon>
            </HStack>
            <HStack ml="auto">
              <Icon as={TbBrandCpp} boxSize="20" p={2}></Icon>
            </HStack>
          </VStack>
        </VStack>
      </Stack>
      <Divider
        width="1px"
        height="100vh"
        bg={useColorModeValue("black", "#735F32")}
        display={["none", "flex"]}
      ></Divider>
    </HStack>
  );
};

export default Services;
