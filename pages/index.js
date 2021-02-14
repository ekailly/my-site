import { Container, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>ekailly.github.io</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Text>Hello</Text>
      </Stack>
    </Container>
  );
};

export default Home;
