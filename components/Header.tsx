import { Flex, Heading, Link, Text } from "@chakra-ui/react";

const LINKS = [{ label: "contact", path: "/contact" }];

export const Header = () => (
  <Flex direction="row" justify="center" align="center" padding="1.5rem">
    <Flex align="center" mr={5}>
      <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
        <Link href="/">eric kailly</Link>
      </Heading>
    </Flex>
    <Flex alignItems="center" direction="row">
      {LINKS.map(({ label, path }) => (
        <Text mr={6} display="block" key={label}>
          <Link href={path}>{label}</Link>
        </Text>
      ))}
    </Flex>
  </Flex>
);
