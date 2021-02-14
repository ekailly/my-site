import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

import { Header } from "../components";

const App = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Eric Kailly</title>
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
