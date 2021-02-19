import {
  Container,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";

import { Link } from "../components";

const About = () => (
  <Container>
    <Head>
      <title>Eric Kailly</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Stack>
      <Heading textAlign="center">About</Heading>
      <Text>
        I'm Eric, computer engineering graduate currently working at{" "}
        <Link href="https://www.medimap.ca">Medimap</Link>.
      </Text>
      <Text mb="16px">
        I've been working full time since May 2019 as a JavaScript developer,
        mainly working with React, React Native, and serverless backends.
      </Text>

      <Heading as="h2" textAlign="center">
        What I've worked on
      </Heading>
      <Text>
        <UnorderedList>
          <ListItem mb="8px">
            I've helped build out{" "}
            <Link href="https://medimap.ca/VirtualCare">
              Medimap's telemedicine service
            </Link>
            , which allows Canadians in British Columbia, Alberta,
            Saskatechewan, Manitoba and Ontario to see a doctor online!
          </ListItem>
          <ListItem mb="8px">
            I've also built out several full stack features for Medimap's{" "}
            <Link href="https://medimap.ca/ForClinics">facility portal</Link>,
            which is used by over 1200 medical clinics across Canada.
          </ListItem>
          <ListItem>
            I've worked on Medimap's mobile app, which is available on{" "}
            <Link href="https://play.google.com/store/apps/details?id=com.medimap.nativeapp&hl=en_CA&gl=US">
              Google Play
            </Link>{" "}
            and the{" "}
            <Link href="https://apps.apple.com/ca/app/medimap/id1460566431">
              App Store
            </Link>
            .
          </ListItem>
        </UnorderedList>
      </Text>
    </Stack>
  </Container>
);

export default About;
