import React from "react";
import Head from "next/head";

import {
  Divider,
  Stack,
  VStack,
  useColorModeValue,
  Spacer,
  Flex,
  Box,
} from "@chakra-ui/react";
import Snowfall from "react-snowfall";

import Banner from "@/components/Home/Banner";
import Services from "@/components/Home/Services";
import Projects from "@/components/Home/Projects";
import ContactMe from "@/components/Home/ContactMe";

import Social from "@/utils/Social";
import Snowflake from "react-snowfall/lib/Snowflake";
import CustomLottiePlayer from "@/utils/CustomLottiePlayer";
import { useTheme } from "../ThemeContext";
import ChangeTheme from "@/utils/ChangeTheme";

const index = () => {
  const { isThemeOn, sidelineColor } = useTheme();
  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>

      <Stack bg={useColorModeValue("white", "black")} spacing={0}>
        {isThemeOn && <Snowfall snowflakeCount={600} />}
        
        <Banner />
        <Social />
        <VStack position="relative">
          <Divider
            width="1px"
            height="full"
            display={["none", "flex"]}
            position="absolute"
            left="7.5vw"
            bg={useColorModeValue("black", sidelineColor)}
          ></Divider>
          <Services />
          <Flex h={["0", "10svh"]} />
          <Projects />
          <ContactMe />
          <Divider
            width="1px"
            height="full"
            display={["none", "flex"]}
            position="absolute"
            right="7.5vw"
            bg={useColorModeValue("black", sidelineColor)}
          ></Divider>
        </VStack>
      </Stack>
    </>
  );
};

export default index;
