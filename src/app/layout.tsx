import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/header"; // <-- import your sidebar


export const metadata: Metadata = {
  title: "Muzaffar Portfolio",
  description: "Here you can find info about Muzaffar Abduqodirov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {/* Sidebar */}
         <Sidebar />  
    
        {/* Main Content */}
        <main className="flex-1 p-6 ">
          {children}
        </main>
      </body>
    </html>
  );
}
