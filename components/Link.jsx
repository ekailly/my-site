import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = (props) => {
  const { children, href } = props;

  return (
    <ChakraLink href={href} color="#46acc2" fontWeight="500">
      {children}
    </ChakraLink>
  );
};
