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
  title: "ClearFlow Plumbing | When Water Flows Wrong, We Make It Right",
  description: "24/7 emergency plumbing services in Nashville, TN. Licensed & insured plumbers offering drain cleaning, leak repair, water heater service, and sewer line repair. Same-day service guaranteed!",
  keywords: "plumber nashville tn, emergency plumber, drain cleaning nashville, leak repair, water heater repair, sewer line repair",
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
