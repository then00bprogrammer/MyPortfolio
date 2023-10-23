import React from "react";
import Head from "next/head";
import Banner from "@/components/Banner";
import Social from "@/components/Social";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Spacer from "@/components/Spacer";
import ContactMe from "@/components/ContactMe";
import { Flex, Stack, VStack, useColorModeValue } from "@chakra-ui/react";

const index = () => {
  return (
    <>
      <Head>
        <title>Nikhil's Portfolio</title>
      </Head>

      <Stack bg={useColorModeValue("white", "black")} spacing={0}>
        <Banner />
        <Social />
        <Services />
        <Spacer />
        <Projects />
        <ContactMe />
      </Stack>
    </>
  );
};

export default index;
