"use client";

import { PropsWithChildren } from "react";
import { Header } from "./Header";

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
