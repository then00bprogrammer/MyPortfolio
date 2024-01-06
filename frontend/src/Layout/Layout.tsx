import React from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import ChangeTheme from "@/utils/ChangeTheme";
import { Box, useColorModeValue } from "@chakra-ui/react";

type Props = {};

const Layout = ({ children }: React.PropsWithChildren<Props>) => {
  return (
    <>
      <Head>Nikhil's Portfolio</Head>
      <Navbar />
      <Box
        position="fixed"
        zIndex={9999}
        right={`calc(7.5vw - 2em)`}
        bottom="2.5vw"
        display={["none", useColorModeValue("none", "block")]}
      >
        <ChangeTheme />
      </Box>
      {children}
    </>
  );
};

export default Layout;
