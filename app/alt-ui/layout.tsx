import "@/app/globals.css";

import type { Metadata } from "next";
import { Archivo_Black, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@wrksz/themes";
import Header from "../test-ui/_components/header";
import { Separator } from "@/components/ui/separator";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-head",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Traverce",
  description: "Indoor Campus Traversal for BMSCE",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <Header />
      <Separator className={"mt-4 mb-4"} />
      {children}
    </>
  );
}
