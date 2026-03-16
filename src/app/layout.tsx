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

export const metadata: Metadata = {
  title: "Assaf Manzur | Senior Platform and DevOps Tech Lead",
  description:
    "Senior platform and DevOps leader with 14+ years of experience in cloud infrastructure, automation, reliability, and engineering leadership.",
  keywords:
    "Platform Engineering, DevOps Tech Lead, Kubernetes, AWS, Cloud Infrastructure, Reliability Engineering, Infrastructure Automation, Salesforce",
  authors: [{ name: "Assaf Manzur" }],
  openGraph: {
    title: "Assaf Manzur | Senior Platform and DevOps Tech Lead",
    description:
      "Senior platform and DevOps leader with 14+ years of experience in cloud infrastructure, automation, reliability, and engineering leadership.",
    type: "website",
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
