import React from "react";
import Link from "next/link";
import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";

const ContactMe = () => {
  return (
    <Flex
      style={{
        height: "70vh",
        width: `calc(100vw - 12px)`,
        clipPath: "polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)",
      }}
      bgImage="https://img.freepik.com/free-vector/contact-us-icons-sketch_98292-4689.jpg"
    >
      <VStack
        style={{
          height: "70vh",
          width: `calc(100vw - 12px)`,
          clipPath: "polygon(0% 40%, 0% 100%, 100% 100%, 100% 0%)",
        }}
        color="white"
        paddingTop="35vh"
        backgroundColor="blackAlpha.800"
        id="contact"
      >
        <Heading size="2xl" mb="2.5vh">
          CONTACT
        </Heading>
        <Text lineHeight={2} letterSpacing="wider" mb="2.5vh">
          Any questions or need a website, logo design or something else? Don't
          hesitate to contact me.
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
  );
};

export default ContactMe;
