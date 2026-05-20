import type { Metadata } from "next";
import type { ReactNode } from "react";

import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  title: siteConfig.title.en,
  description: siteConfig.description.en,
  keywords: siteConfig.keywords,
  openGraph: {
    title: siteConfig.title.en,
    description: siteConfig.description.en,
    url: "https://example.com",
    siteName: siteConfig.name,
    images: [
      {
        url: "/portrait.jpg",
        width: 1200,
        height: 630,
        alt: "Yixin Xia portfolio preview"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
