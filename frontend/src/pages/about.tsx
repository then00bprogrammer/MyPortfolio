import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import client from "@/client";
import Banner from "@/components/About/Banner";
import { useTheme } from "@/ThemeContext";
import Snowfall from "react-snowfall";
import ChangeTheme from "@/components/ChangeTheme";

const About = () => {
  const { isThemeOn } = useTheme();
  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>
      <VStack
        w="full"
        minHeight={["90svh", "85svh"]}
        marginTop={["10svh", "15svh"]}
        spacing={0}
        bg={useColorModeValue("white", "black")}
      >
        <Box position="fixed" zIndex={9999} right={`calc(7.5vw - 2em)`} bottom="2.5vw" display={['none',useColorModeValue('none','block')]}>
          <ChangeTheme />
        </Box>
        { isThemeOn && <Snowfall/>}
        <Banner />
      </VStack>
    </>
  );
};

export default About;
