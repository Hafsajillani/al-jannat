import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/utils/CustomCursor";

import LeafButton from "@/components/shared/LeafButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Al Jannat | Professional Printing & Scanning Lahore",
  description: "Premium Digital & Offset Printing, Wide Format Scanning, and Thesis Binding services in Garden Town, Lahore.",
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
        <CustomCursor />
        <LeafButton />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}