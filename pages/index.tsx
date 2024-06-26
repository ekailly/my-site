import {
  Box,
  Container,
  Heading,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Head from "next/head";
import { Link } from "../components";

const Home = () => {
  return (
    <Container>
      <Head>
        <title>Eric Kailly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Text style={{ marginBottom: 16 }}>
          Hi, I'm Eric, I work as a software engineer at{" "}
          <Link href="https://www.ev.com/">EV.com</Link>. I consider myself a
          generalist, but I mainly have experience with TypeScript, Node.js,
          React, and React Native. Formerly at{" "}
          <Link href="https://www.babbly.co/">Babbly</Link>,{" "}
          <Link href="https://www.fobi.ai/">Fobi</Link> and{" "}
          <Link href="https://www.medimap.ca">Medimap</Link>.
        </Text>
        <Heading
          as="h3"
          size="lg"
          textAlign="center"
          style={{ marginBottom: 16 }}
        >
          What I've worked on
        </Heading>
        <Box mb="8">
          <Heading as="h4" size="md" textAlign="center" mb="4">
            EV.com
          </Heading>
          <UnorderedList mb="8">
            <ListItem mb="4">
              I've shipped a couple of features at EV.com, such as the new UI
              for the vehicle cards for{" "}
              <Link href="https://ev.com/search">the search page</Link>,{" "}
              <Link href="https://ev.com/partner">dealer onboarding</Link>,
              saving vehicles with the heart button you see on the search page,
              and more!
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mb="8">
          <Heading as="h4" size="md" textAlign="center" mb="4">
            Babbly
          </Heading>
          <UnorderedList mb="8">
            <ListItem mb="4">
              I've worked with engineers previously at{" "}
              <Link href="https://alexa.amazon.com/">Alexa</Link> on Babbly's{" "}
              <Link href="https://apps.apple.com/ca/app/babbly-baby-speech-tracker/id1513738981">
                iOS
              </Link>{" "}
              and{" "}
              <Link href="https://play.google.com/store/apps/details?id=babbly.app&hl=en_CA&gl=US&pli=1">
                Android
              </Link>{" "}
              app, which allows parents to monitor their child's speech
              development through Babbly's AI. I've built out features like a
              new onboarding flow, in-app YouTube videos and more.
            </ListItem>
            <ListItem>
              I also built out an unannounced React Native web project while at
              Babbly and had it ready for real users in 4 weeks.
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mb="8">
          <Heading as="h4" size="md" textAlign="center" mb="4">
            Fobi
          </Heading>
          <UnorderedList mb="8">
            <ListItem mb="8px">
              I've worked on several features of{" "}
              <Link href="https://www.fobi.ai/passpro?hsLang=en">PassPro</Link>{" "}
              projects, as well as other projects like{" "}
              <Link href="https://www.fobi.ai/checkpoint?hsLang=en">
                CheckPoint
              </Link>
              , <Link href="https://www.fobi.ai/altid?hsLang=en">AltID</Link>,
              and{" "}
              <Link href="https://www.fobi.ai/checkvax?hsLang=en">
                CheckVax
              </Link>
              .
            </ListItem>
            <ListItem mb="8px">
              The web app behind{" "}
              <Link href="https://www.pulseir.com/">PulseIR</Link>, a{" "}
              <Link href="https://www.fobi.ai/press/fobi-announces-pulseir-subsidiary">
                subsidiary of Fobi
              </Link>
              , was built and shipped end-to-end by myself.
            </ListItem>
            <ListItem mb="8px">
              For projects like AltId, CheckVax, and CheckPoint, I worked on
              them end-to-end by working on the frontend, backend and setting up
              AWS infrastructure using Terraform and GitLab CI/CD pipelines
            </ListItem>
          </UnorderedList>
        </Box>
        <Box mb="8">
          <Heading as="h4" size="md" textAlign="center" mb="4">
            Medimap
          </Heading>
          <UnorderedList mb="8">
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
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
