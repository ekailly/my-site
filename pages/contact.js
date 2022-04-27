import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "../components";

const Contact = () => (
  <Container>
    <Head>
      <title>Eric Kailly</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stack>
      <Heading style={{ textAlign: "center", marginBottom: "8px" }}>
        Contact
      </Heading>
      <Text>
        If you wanna talk, feel free to{" "}
        <Link href="mailto:eric.jkailly@gmail.com">email me</Link>
      </Text>
      <Text>
        <Link href="https://www.github.com/ekailly">GitHub</Link>
      </Text>
    </Stack>
  </Container>
);

export default Contact;
