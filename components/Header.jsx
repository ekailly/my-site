import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Text,
  useColorMode,
} from "@chakra-ui/react";

const LINKS = [
  { label: "about", path: "/about" },
  { label: "contact", path: "/contact" },
];

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex direction="row" justify="center" align="center" padding="1.5rem">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          <Link href="/">eric kailly</Link>
        </Heading>
      </Flex>
      <Box alignItems="center" display="flex" direction="row">
        {LINKS.map(({ label, path }) => (
          <Text mr={6} display="block" key={label}>
            <Link href={path}>{label}</Link>
          </Text>
        ))}
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "🌜" : "🌞"}
        </Button>
      </Box>
    </Flex>
  );
};
