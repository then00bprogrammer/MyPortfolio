import React from "react";
import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
  VStack,
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
      h="100vh"
      w="full"
      pl="7.5vw"
      pr="7.5vw"
      justifyContent="space-between"
      color="black"
    >
      <Divider width="1px" height="100vh" bg={useColorModeValue('black','#735F32')}></Divider>
      <HStack width="full">
        <VStack
          w="70%"
          alignItems="flex-start"
          padding="5%"
          lineHeight="2"
          letterSpacing="wider"
        >
          <Box padding={5} position="relative">
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="10px"
              h="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              h="10px"
              w="100px"
              position="absolute"
              top={0}
              left={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="10px"
              h="100px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Divider
              borderRadius={10}
              bg={useColorModeValue('red','#735F32')}
              width="100px"
              h="10px"
              position="absolute"
              bottom={0}
              right={0}
            ></Divider>
            <Image src="./services.jpg"></Image>
          </Box>
          <Heading mt="2.5vh" mb="2.5vh" fontWeight="medium" color={useColorModeValue('gray.800','gray.100')}>
            {" "}
            WEB DEVELOPER
          </Heading>
          <Text color={useColorModeValue('gray.600','gray.400')} mb="2.5vh">
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
                colorScheme={useColorModeValue('red','yellow')}
                borderRadius={0}
                size="lg"
                w="15vw"
                h="7.5vh"
              >
                My Services
              </Button>
            </a>
            <Button
              variant="outline"
              colorScheme={useColorModeValue('blackAlpha','yellow')}
              borderRadius={0}
              size="lg"
              onClick={()=>{
                const section = document.querySelector( '#projects' );
                section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );
              }}    
            >
              Read More
            </Button>
          </HStack>
        </VStack>
        <VStack>
          <Heading fontSize="7xl" fontWeight="extrabold" color={useColorModeValue("gray.800", "gray.100")}>
            SERVICES
          </Heading>
          <Heading fontSize="7xl" fontWeight="extrabold" color={useColorModeValue("gray.800", "gray.100")}>
            & TECH
          </Heading>
          <VStack paddingLeft="30%" color={useColorModeValue('black','#735F32')}>
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
      </HStack>
      <Divider width="1px" height="100vh" bg={useColorModeValue('black','#735F32')}></Divider>
    </HStack>
  );
};

export default Services;
