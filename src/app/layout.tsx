import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://assafmanzur.com";
const title = "Assaf Manzur | Senior Platform and DevOps Tech Lead";
const description =
  "Senior platform and DevOps leader with 14+ years of experience in cloud infrastructure, automation, reliability, and engineering leadership.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords:
    "Platform Engineering, DevOps Tech Lead, Kubernetes, AWS, Cloud Infrastructure, Reliability Engineering, Infrastructure Automation, Salesforce",
  authors: [{ name: "Assaf Manzur" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Assaf Manzur",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
