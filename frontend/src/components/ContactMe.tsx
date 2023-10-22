import React from "react";
import Link from "next/link";
import {
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <HStack height="85vh" width={`calc(100vw - 12px)`} position='relative'>
      <Divider
        width="1px"
        height="85vh"
        bg={useColorModeValue("black", "#735F32")}
        zIndex='1'
        position='absolute'
        left='7.5vw'
      ></Divider>
      <Flex
      zIndex='2'
        style={{
          height: "85vh",
          width: `calc(100vw - 12px)`,
          clipPath: "polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)",
        }}
        bgImage="https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg"
      >
        <VStack
          style={{
            height: "85vh",
            width: `calc(100vw - 12px)`,
            clipPath: "polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)",
          }}
          color="white"
          paddingTop="40vh"
          backgroundColor={useColorModeValue(
            "blackAlpha.800",
            "blackAlpha.900"
          )}
          id="contact"
        >
          <Heading size="2xl" mb="2.5vh">
            CONTACT
          </Heading>
          <Text lineHeight={2} letterSpacing="wider" mb="2.5vh">
            Any questions or need a website, logo design or something else?
            Don't hesitate to contact me.
          </Text>
          <Link href="http://localhost:3000/contact">
            <Button
              variant="solid"
              colorScheme="green"
              borderRadius={0}
              size="lg"
              w="15vw"
              h="7.5vh"
            >
              {" "}
              Contact Me{" "}
            </Button>
          </Link>
        </VStack>
      </Flex>
      <Divider
        width="1px"
        height="85vh"
        bg={useColorModeValue("black", "#735F32")}
        zIndex='1'
        position='absolute'
        right='7.5vw'
      ></Divider>
    </HStack>
  );
};

export default ContactMe;
