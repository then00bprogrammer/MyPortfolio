import React from "react";
import Head from "next/head";

import { Stack, useColorModeValue } from "@chakra-ui/react";

import Banner from "@/components/Banner";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";

import Social from "@/utils/Social";
import Spacer from "@/utils/Spacer";


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
