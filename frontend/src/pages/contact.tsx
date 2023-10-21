import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  Text,
  Textarea,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FormControl, FormLabel } from "@chakra-ui/react";

type formDataType = {
  email: string;
  subject: string;
  messageText: string;
};

const Contact = () => {
  const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const API_TOKEN = process.env.NEXT_PUBLIC_SANITY_API;

  const [formData, setFormData] = useState<formDataType>({
    email: "",
    subject: "",
    messageText: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createSanityDocument = async () => {

    try {
      const response = await fetch(
        `https://${PROJECT_ID}.api.sanity.io/v1/data/mutate/${DATASET}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`,
          },
          body: JSON.stringify({
            mutations: [
              {
                create: {
                  _type: "message",
                  email: formData.email,
                  subject: formData.subject,
                  messageText: formData.messageText,
                },
              },
            ],
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to create document in Sanity");
      const data = await response.json();
      console.log("Document created:", data);
    } catch (error) {
      console.error("Error creating document:", error);
    }
  };

  return (
    <VStack w="full" height="85vh" bg={useColorModeValue('white','black')}>
      <HStack w="80%" m="auto" height="85vh">
        <VStack lineHeight="2" letterSpacing="wider" w="50%" pl="5%" pr="5%">
          <Heading
            fontSize="7xl"
            fontWeight="extrabold"
            mt="2.5vh"
            mb="2.5vh"
            color={useColorModeValue('gray.700','gray.100')}
          >
            CONTACT ME
          </Heading>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              isRequired
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              variant='outline'
              borderColor={useColorModeValue('purple.100','purple.200')}
              bg={useColorModeValue('purple.50','purple.100')}
              focusBorderColor={useColorModeValue('purple.300','purple.400')}
            />
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              value={formData.subject}
              name="subject"
              onChange={handleChange}
              variant='outline'
              borderColor={useColorModeValue('purple.100','purple.200')}
              bg={useColorModeValue('purple.50','purple.100')}
              focusBorderColor={useColorModeValue('purple.300','purple.400')}
            />
            <FormLabel>Message</FormLabel>
            <Textarea
              value={formData.messageText}
              name="messageText"
              onChange={handleChange}
              variant='outline'
              borderColor={useColorModeValue('purple.100','purple.200')}
              bg={useColorModeValue('purple.50','purple.100')}
              focusBorderColor={useColorModeValue('purple.300','purple.400')}
            />
          </FormControl>
          <Button
            onClick={createSanityDocument}
            variant="solid"
            colorScheme="purple"
            borderRadius={0}
            size="lg"
            w="10vw"
            h="7.5vh"
            mt="2.5vh"
          >
            Send
          </Button>
        </VStack>
        <VStack>
        <Box width="50">
          <Player
            autoplay
            loop
            src="/animations/contact.json"
            style={{ height: "80%", width: "80%" }}
          />
        </Box>
      <HStack mt='5vh'>
        <Text letterSpacing="wider" color={useColorModeValue("gray.600","gray.400")}>
          You can also email me at
        </Text>
        <a href="mailto:nikhilranjan1103@gmail.com">
          <Text color="purple" _hover={{ textDecoration: "underline" }}>
            nikhilranjan1103@gmail.com
          </Text>
        </a>
      </HStack>

        </VStack>
      </HStack>
    </VStack>
  );
};

export default Contact;
