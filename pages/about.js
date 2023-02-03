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
      <Text mb="8">
        I'm Eric, a software developer currently working at{" "}
        <Link href="https://www.babbly.co/">Babbly</Link>. Formerly at{" "}
        <Link href="https://www.fobi.ai/">Fobi</Link> and{" "}
        <Link href="https://www.medimap.ca">Medimap</Link>.
      </Text>

      <Heading as="h3" size="lg" textAlign="center" mb="4">
        What I've worked on
      </Heading>
      <Heading as="h4" size="md" textAlign="center" mb="4">
        Fobi
      </Heading>
      <Text mb="8">
        <UnorderedList>
          <ListItem mb="8px">
            I've worked on several features of{" "}
            <Link href="https://www.fobi.ai/passpro?hsLang=en">PassPro</Link>{" "}
            projects, as well as other projects like{" "}
            <Link href="https://www.fobi.ai/checkpoint?hsLang=en">
              CheckPoint
            </Link>
            , <Link href="https://www.fobi.ai/altid?hsLang=en">AltID</Link>, and{" "}
            <Link href="https://www.fobi.ai/checkvax?hsLang=en">CheckVax</Link>.
          </ListItem>
          <ListItem mb="8px">
            For projects like AltId, CheckVax, and CheckPoint, I worked on them
            end-to-end by working on the frontend, backend and setting up AWS
            infrastructure using Terraform and CI/CD pipelines
          </ListItem>
        </UnorderedList>
      </Text>
      <Heading as="h4" size="md" textAlign="center" mb="4">
        Medimap
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
        </UnorderedList>
      </Text>
    </Stack>
  </Container>
);

export default About;
