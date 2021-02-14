import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "../components";

const App = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>ekailly.github.io</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider>
        <Header />
        <Component {...pageProps}></Component>
      </ChakraProvider>
    </>
  );
};

export default App;
