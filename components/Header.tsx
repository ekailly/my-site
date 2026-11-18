import NextLink from "next/link";

const LINKS = [
  { label: "about", path: "/about" },
  { label: "contact", path: "/contact" },
];

export const Header = () => (
  <header className="flex items-center justify-center p-6">
    <div className="mr-5 flex items-center">
      <h1 className="text-2xl font-bold tracking-tight">
        <NextLink
          href="/"
          className="hover:opacity-80"
        >
          eric kailly
        </NextLink>
      </h1>
    </div>
    <nav className="flex items-center">
      {LINKS.map(({ label, path }) => (
        <span className="mr-6" key={label}>
          <NextLink
            href={path}
            className="hover:opacity-80"
          >
            {label}
          </NextLink>
        </span>
      ))}
    </nav>
  </header>
);
