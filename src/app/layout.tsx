/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { FooterV0 } from "@/components/footer";
import "./globals.css";
import NavbarV0 from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lappsnet",
  description: "lappsnet website.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full">
      <body className={`${inter.className} flex flex-col min-h-full`}>
        <NextTopLoader />
        <NavbarV0/>
        <main className="flex-grow">{children}</main>
        <FooterV0 />
      </body>
    </html>
  );
}
