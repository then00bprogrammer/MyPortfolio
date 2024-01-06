import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Box, VStack, useColorModeValue } from "@chakra-ui/react";
import client from "@/client";
import Banner from "@/components/About/Banner";
import { useTheme } from "@/ThemeContext";
import Snowfall from "react-snowfall";
import ChangeTheme from "@/utils/ChangeTheme";

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
        { isThemeOn && <Snowfall/>}
        <Banner />
      </VStack>
    </>
  );
};

export default About;
