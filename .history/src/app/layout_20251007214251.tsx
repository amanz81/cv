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
  title: "Assaf Manzur | Tech Lead DevOps Engineer",
  description: "Experienced DevOps professional with 14+ years of expertise in cloud architecture, automation, and team leadership. Specializing in Kubernetes, AWS, and scalable infrastructure solutions.",
  keywords: "DevOps Engineer, Tech Lead, Kubernetes, AWS, Cloud Architecture, Infrastructure Automation, Salesforce",
  authors: [{ name: "Assaf Manzur" }],
  openGraph: {
    title: "Assaf Manzur | Tech Lead DevOps Engineer",
    description: "Experienced DevOps professional with 14+ years of expertise in cloud architecture, automation, and team leadership.",
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
