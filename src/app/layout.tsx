import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Styles from "./globals.module.css";
import Header from "@/components/header/page";
import FooterComp from "@/components/footer/page";

// Optimized Google Font
const inter = Inter({ subsets: ["latin"], display: "swap" });

// Enhanced SEO metadata
export const metadata: Metadata = {
  title: "Muzaffar Kadirov | Minimalistic Portfolio & Projects",
  description:
    "Portfolio of Muzaffar Kadirov – showcasing web development projects, skills in React, Next.js, TypeScript, and Node.js with a minimalistic design.",
  keywords: [
    "Muzaffar Kadirov",
    "portfolio",
    "web developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "frontend",
    "minimalistic design"
  ],
  authors: [{ name: "Muzaffar Kadirov" }],
  openGraph: {
    title: "Muzaffar Kadirov | Minimalistic Portfolio",
    description:
      "Explore the work of Muzaffar Kadirov, a frontend developer specializing in React, Next.js, and TypeScript.",
    url: "https://m-kadirov.uz", // Replace with your domain
    siteName: "Muzaffar Kadirov Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Place your Open Graph image in /public
        width: 1200,
        height: 630,
        alt: "Muzaffar Kadirov Portfolio Screenshot"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Muzaffar Kadirov | Minimalistic Portfolio",
    description:
      "Discover Muzaffar Kadirov's web development projects and skills in React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"]
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={Styles.html}>
      <head>
        {/* Charset & Viewport */}
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />

        {/* Preload Fonts */}
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          as="style"
        />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Muzaffar Kadirov",
              url: "https://m-kadirov.uz",
              sameAs: [
                "https://github.com/mrkadirov2005",
                "https://www.linkedin.com/in/muzaffar-abduqodirov-0a8b42248/"
              ],
              jobTitle: "JS || PYTHON FULL STACK DEVELOPER",
              worksFor: {
                "@type": "Organization",
                name: "Freelance"
              }
            })
          }}
        />
      </head>
      <body className={`${Styles.body} ${inter.className}`}>
        <Header />
        {children}
        <FooterComp />
      </body>
    </html>
  );
}
