import { Metadata } from "next";
import { Providers } from "../components/Providers";
import "./globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Eric Kailly",
  description:
    "Software engineer. Shipped product features and performance work at ReadyWhen, EV.com, Babbly, Fobi and Medimap.",
};
