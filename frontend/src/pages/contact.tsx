import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  FormErrorMessage,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import ShowAlert from "@/components/ShowAlert";
import Head from "next/head";
import { DotLottiePlayer } from "@dotlottie/react-player";

type formDataType = {
  email: string;
  subject: string;
  messageText: string;
};

type alertType = {
  message: string;
  success: boolean;
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

  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);
  const [alertState, setAlert] = useState<alertType>({
    message: "",
    success: false,
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createSanityDocument();
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

      setAlert({ message: "Your Message was sent", success: true });
      setIsAlertVisible(true);
      if (!response.ok) throw new Error("Failed to create document in Sanity");
      const data = await response.json();
      console.log("Document created:", data);
    } catch (error) {
      setAlert({ message: "Internal Server Error", success: false });
      setIsAlertVisible(true);
      console.error("Error creating document:", error);
    }
  };

  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
      <VStack
        w="full"
        minH={["90vh", "85vh"]}
        marginTop={["10vh", "15vh"]}
        bg={useColorModeValue("white", "black")}
      >
        {isAlertVisible && (
          <ShowAlert
            message={alertState?.message}
            success={alertState?.success}
            setIsAlertVisible={setIsAlertVisible}
          />
        )}

        <Stack
          direction={["column", "row"]}
          w="80%"
          m="auto"
          minH={["90vh", "85vh"]}
        >
          <VStack
            lineHeight="2"
            letterSpacing="wider"
            w={["100%", "50%"]}
            pl={["0%", "5%"]}
            pr={["0%", "5%"]}
          >
            <Heading
              fontSize={["4xl", "7xl"]}
              fontWeight="extrabold"
              mt="2.5vh"
              mb="2.5vh"
              color={useColorModeValue("gray.700", "gold.100")}
            >
              CONTACT ME
            </Heading>
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <FormLabel color={useColorModeValue("gray.800", "gray.400")}>
                Email address
              </FormLabel>
              <Input
                isRequired
                type="email"
                value={formData.email}
                name="email"
                onChange={handleChange}
                variant="outline"
                color="black"
                borderColor={useColorModeValue("purple.100", "gold.200")}
                bg={useColorModeValue("purple.50", "gold.100")}
                focusBorderColor={useColorModeValue("purple.300", "gold.400")}
                _hover={{
                  borderColor: useColorModeValue("purple.200", "gold.300"),
                }}
                colorScheme="gold"
                errorBorderColor="red"
              />
              <FormLabel color={useColorModeValue("gray.800", "gray.400")}>
                Subject
              </FormLabel>
              <Input
                type="text"
                value={formData.subject}
                name="subject"
                onChange={handleChange}
                variant="outline"
                color="black"
                borderColor={useColorModeValue("purple.100", "gold.200")}
                bg={useColorModeValue("purple.50", "gold.100")}
                _hover={{
                  borderColor: useColorModeValue("purple.200", "gold.300"),
                }}
                focusBorderColor={useColorModeValue("purple.300", "gold.400")}
              />
              <FormLabel color={useColorModeValue("gray.800", "gray.400")}>
                Message
              </FormLabel>
              <Textarea
                value={formData.messageText}
                name="messageText"
                onChange={handleChange}
                variant="outline"
                color="black"
                borderColor={useColorModeValue("purple.100", "gold.200")}
                bg={useColorModeValue("purple.50", "gold.100")}
                _hover={{
                  borderColor: useColorModeValue("purple.200", "gold.300"),
                }}
                focusBorderColor={useColorModeValue("purple.300", "gold.400")}
              />
              <Button
                type="submit"
                variant="solid"
                colorScheme={useColorModeValue("purple", "gold")}
                borderRadius={0}
                size="lg"
                mt="2.5vh"
              >
                Send
              </Button>
            </form>
          </VStack>
          <VStack
            width={["100%", "50%"]}
            pl={["0%", "5%"]}
            pr={["0%", "5%"]}
            justifyContent="center"
            alignItems="center"
          >
            <Box width="100%">
              <Center>
                <DotLottiePlayer
                  autoplay
                  loop
                  src="/animations/contact.lottie"
                  style={{ width: "100%" }}
                />
              </Center>
            </Box>
            <Wrap mt="5vh" mb="2.5vh">
              <Text
                letterSpacing="wider"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                You can also email me at
              </Text>
              <a href="mailto:nikhilranjan1103@gmail.com">
                <Text
                  color={useColorModeValue("purple", "gold.600")}
                  _hover={{ textDecoration: "underline" }}
                >
                  nikhilranjan1103@gmail.com
                </Text>
              </a>
            </Wrap>
          </VStack>
        </Stack>
      </VStack>
    </>
  );
};

export default Contact;
