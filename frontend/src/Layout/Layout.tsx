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
      {children}
    </>
  );
};

export default Layout;
