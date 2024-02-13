import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header/page";
import Link from "next/link";
import styled from "styled-components";
import { GlobalStylesInstance } from "@/DATA/settings/Global";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "m_kadirov | Minimalistic portfolio",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    
      <body className={inter.className}>{children}</body>
    </html>
  );
}
