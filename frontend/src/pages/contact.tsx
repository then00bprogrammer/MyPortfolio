"use client";

import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import ShowAlert from "@/utils/ShowAlert";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
  Wrap,
  Center,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import Snowfall from "react-snowfall";
import { useTheme } from "@/ThemeContext";

const confetti = {
  light: {
    primary: "4299E1", // blue.400
    secondary: "BEE3F8", // blue.100
  },

  dark: {
    primary: "1A365D", // blue.900
    secondary: "2A4365", // blue.800
  },
};

type formDataType = {
  name: string;
  email: string;
  messageText: string;
};

type alertType = {
  message: string;
  success: boolean;
};

export default function ContactFormWithSocialButtons() {
  const {
    isThemeOn,
    headingColor,
    buttonColor,
    formInputColor,
    formInputBorder,
    formInputHoverBorder,
    formInputFocusBorder,
    focusTextColor,
  } = useTheme();

  const PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const API_TOKEN = process.env.NEXT_PUBLIC_SANITY_API;

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

  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    messageText: "",
  });

  const handleSubmit = (e: any) => {
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
                  name: formData.name,
                  email: formData.email,
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
        justify="space-between"
        bg={useColorModeValue("white", "black")}
        bgRepeat="no-repeat"
        bgPos="center"
      >
        {isThemeOn && <Snowfall />}
        {isAlertVisible && (
          <ShowAlert
            alertTitle={alertState?.success ? "Success" : "error"}
            message={alertState?.message}
            alertStatus={alertState?.success ? "success" : "error"}
            setIsAlertVisible={setIsAlertVisible}
          />
        )}
        <Box
          borderRadius="lg"
          w={['90%','80%']}
          m='auto'
          maxH={["90svh", "85svh"]}
        >
          <Box>
            <VStack w="100%">
              <Heading
                fontSize={["4xl", "7xl"]}
                fontWeight="extrabold"
                mt="2.5svh"
                mb="2.5svh"
                color={useColorModeValue("gray.700", headingColor)}
              >
                Get in Touch
              </Heading>

              <Stack
                justify="space-evenly"
                w="100%"
                spacing={{ base: 4, md: 8, lg: 20 }}
                direction={{ base: "column", md: "row" }}
              >
                <Stack
                  display={['none','none','none','flex']}
                  align="center"
                  justify="space-around"
                  direction={{ base: "row", md: "column" }}
                >
                  <Tooltip label="Mail me" closeOnClick={false} hasArrow>
                    <Box as="a" href="mailto:nikhilranjan1103@gmail.com">
                      <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        fontSize="3xl"
                        icon={<MdEmail />}
                        _hover={{
                          bg: useColorModeValue("purple.500",'purple.300'),
                          color: useColorModeValue("white", "gray.700"),
                        }}
                        isRound
                      />
                    </Box>
                  </Tooltip>

                  <Box
                    as="a"
                    href="https://github.com/then00bprogrammer"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      fontSize="3xl"
                      icon={<BsGithub />}
                      _hover={{
                        bg: useColorModeValue("purple.500",'purple.300'),
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as="a"
                    href="https://twitter.com/NikhilRanjan02"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="twitter"
                      variant="ghost"
                      size="lg"
                      icon={<BsTwitter size="28px" />}
                      _hover={{
                        bg: useColorModeValue("purple.500",'purple.300'),
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>

                  <Box
                    as="a"
                    href="https://www.linkedin.com/in/nikhil-ranjan-tnp/"
                    target="_blank"
                  >
                    <IconButton
                      aria-label="linkedin"
                      variant="ghost"
                      size="lg"
                      icon={<BsLinkedin size="28px" />}
                      _hover={{
                        bg: useColorModeValue("purple.500",'purple.300'),
                        color: useColorModeValue("white", "gray.700"),
                      }}
                      isRound
                    />
                  </Box>
                </Stack>

                <Box
                  // bg={useColorModeValue('white', 'gray.700')}
                  w={["100%", "40%"]}
                  borderRadius="lg"
                  p={8}
                  color={useColorModeValue("gray.700", "whiteAlpha.900")}
                  shadow="base"
                >
                  <VStack spacing={5}>
                    <FormControl isRequired>
                      <FormLabel>Name</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <BsPerson />
                        </InputLeftElement>
                        <Input
                          type="messageText"
                          name="name"
                          onChange={handleChange}
                          placeholder="Your Name"
                          textAlign="left"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>

                      <InputGroup>
                        <InputLeftElement>
                          <MdOutlineEmail />
                        </InputLeftElement>
                        <Input
                          type="email"
                          name="email"
                          onChange={handleChange}
                          placeholder="Your Email"
                          textAlign="left"
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl isRequired>
                      <FormLabel>Message</FormLabel>

                      <Textarea
                        name="messageText"
                        onChange={handleChange}
                        placeholder="Your Message"
                        // rows={6}
                        resize="none"
                      />
                    </FormControl>

                    <Button
                      colorScheme={useColorModeValue("red", useTheme().buttonColor)}
                      size="lg"
                      width="full"
                      onClick={handleSubmit}
                    >
                      Send Message
                    </Button>
                  </VStack>
                </Box>
                
                <VStack
                  display={['none','none','none','block']}
                  width={["100%", "50%"]}
                  // pl={["0%", "2.5%"]}
                  // pr={["0%", "2.5%"]}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Box width="100%">
                    <Center>
                      <CustomLottiePlayer src="contact" />
                    </Center>
                  </Box>
                </VStack>
              </Stack>
            </VStack>
          </Box>
        </Box>
      </VStack>
    </>
  );
}
