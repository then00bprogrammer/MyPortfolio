import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
  VStack,
  Wrap,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormLabel } from "@chakra-ui/react";
import ShowAlert from "@/utils/ShowAlert";
import Head from "next/head";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import { useTheme } from "@/ThemeContext";
import Snowfall from "react-snowfall";
import ChangeTheme from "@/utils/ChangeTheme";

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
  const { isThemeOn, headingColor, buttonColor, formInputColor, formInputBorder, formInputHoverBorder, formInputFocusBorder, focusTextColor } = useTheme();

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
        minH={["90svh", "85svh"]}
        marginTop={["10svh", "15svh"]}
        bg={useColorModeValue("white", "black")}
      >
        { isThemeOn && <Snowfall/>}
        {isAlertVisible && (
          <ShowAlert
            alertTitle={alertState?.success?'Success':'error'}
            message={alertState?.message}
            alertStatus={alertState?.success?'success':'error'}
            setIsAlertVisible={setIsAlertVisible}
          />
        )}

        <Stack
          direction={["column", "row"]}
          w="80%"
          m="auto"
          minH={["90svh", "85svh"]}
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
              mt="2.5svh"
              mb="2.5svh"
              color={useColorModeValue("gray.700", headingColor)}
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
                borderColor={useColorModeValue("purple.100", formInputBorder)}
                bg={useColorModeValue("purple.50", formInputColor)}
                focusBorderColor={useColorModeValue("purple.300", formInputFocusBorder)}
                _hover={{
                  borderColor: useColorModeValue("purple.200", formInputHoverBorder),
                }}
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
                borderColor={useColorModeValue("purple.100", formInputBorder)}
                bg={useColorModeValue("purple.50", formInputColor)}
                _hover={{
                  borderColor: useColorModeValue("purple.200", formInputHoverBorder),
                }}
                focusBorderColor={useColorModeValue("purple.300", formInputFocusBorder)}
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
                borderColor={useColorModeValue("purple.100", formInputBorder)}
                bg={useColorModeValue("purple.50", formInputColor)}
                _hover={{
                  borderColor: useColorModeValue("purple.200", formInputHoverBorder),
                }}
                focusBorderColor={useColorModeValue("purple.300", formInputFocusBorder)}
              />
              <Button
                type="submit"
                variant="solid"
                colorScheme={useColorModeValue("purple", buttonColor)}
                borderRadius={0}
                size="lg"
                mt="2.5svh"
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
                <CustomLottiePlayer src="contact" />
              </Center>
            </Box>
            <Wrap mt="5svh" mb="2.5svh">
              <Text
                letterSpacing="wider"
                color={useColorModeValue("gray.600", "gray.400")}
              >
                You can also email me at
              </Text>
              <a href="mailto:nikhilranjan1103@gmail.com">
                <Text
                  color={useColorModeValue("purple", focusTextColor)}
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
