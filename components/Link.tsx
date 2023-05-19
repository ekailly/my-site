import { Link as ChakraLink } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export const Link: React.FC<PropsWithChildren<{ href: string }>> = (props) => {
  const { children, href } = props;

  return (
    <ChakraLink href={href} color="#46acc2" fontWeight="500">
      {children}
    </ChakraLink>
  );
};
