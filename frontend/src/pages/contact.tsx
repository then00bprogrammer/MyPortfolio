import React from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FormControl, FormLabel } from "@chakra-ui/react";

const Contact = () => {
  const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const API_TOKEN2 = process.env.NEXT_PUBLIC_SANITY_API;
  const createSanityDocument = async () => {
    try {
      const response = await fetch(
        `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}`,
        {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN2}`,
          },
          body: JSON.stringify({ mutations: [{ create: {
            _type:'message',
            email:'example@gmail.com',
            subject:'Subject',
            messageText:'exaMPLE text'
          } }] }), 
        }
      );

      if (!response.ok) throw new Error("Failed to create document in Sanity"); // Fixed the quotation marks around the error message
      const data = await response.json();
      console.log("Document created:", data);
    } catch (error) {
      console.error("Error creating document:", error); // Fixed the quotation marks around the error message
    }
  };

  return (
    <VStack w="full" minHeight="100vh">
      <HStack w="80%" m="auto" height="85vh">
        <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
          <Heading
            fontSize="7xl"
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color="gray.700"
          >
            CONTACT ME
          </Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
            <FormLabel>Subject</FormLabel>
            <Input type="text" />
            <FormLabel>Message</FormLabel>
            <Textarea></Textarea>
          </FormControl>
          <Button
            variant="solid"
            colorScheme="blue"
            borderRadius={0}
            size="lg"
            w="10vw"
            h="7.5vh"
            mt="2.5vh"
            onClick={createSanityDocument}
          >
            Send
          </Button>
        </VStack>
        <Box width="50">
          <Player
            autoplay
            loop
            src="/animations/contact.json"
            style={{ height: "80%", width: "80%" }}
          />
        </Box>
      </HStack>
      <HStack>
        <Text letterSpacing="wider" color="gray.600">
          You can also email me at
        </Text>
        <a href="mailto:nikhilranjan1103@gmail.com">
          <Text color="blue" _hover={{ textDecoration: "underline" }}>
            nikhilranjan1103@gmail.com
          </Text>
        </a>
      </HStack>
    </VStack>
  );
};

export default Contact;
