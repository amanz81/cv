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
const title = "Assaf Manzur | Platform Architect & DevOps Leader";
const description =
  "Platform architect and DevOps leader with 14+ years across Kubernetes, service mesh, cloud infrastructure, automation, and reliability — designing the paved paths large engineering organizations run on.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords:
    "Platform Architect, Platform Engineering, DevOps, Kubernetes, Service Mesh, Istio, AWS, Cloud Infrastructure, Reliability Engineering, Infrastructure Automation, AI-Assisted DevOps, Salesforce",
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
