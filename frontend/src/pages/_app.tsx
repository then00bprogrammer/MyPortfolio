import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "../chakra/theme";
import Layout from "../Layout/Layout";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import '../styles/button.css'
import '../styles/container.css'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout;
  if (getLayout === undefined) {
    return (
      <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </>
    );
  } else
    return getLayout(
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    );
}
