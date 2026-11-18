import NextLink from "next/link";
import { PropsWithChildren } from "react";

export const Link: React.FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const linkClasses = "font-medium text-accent hover:opacity-80";
  
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={linkClasses}>
        {children}
      </a>
    );
  }
  
  return (
    <NextLink href={href} className={linkClasses}>
      {children}
    </NextLink>
  );
};
