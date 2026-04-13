import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Miles 2 Miles Off-Road ATV Park | Ride the Wild",
  description: "Premium ATV rentals with 2026 Polaris Sportsman 450 fleet. Experience the thrill of off-road adventure on 50+ miles of diverse trails.",
  keywords: ["ATV rental", "off-road adventure", "ATV park", "Polaris Sportsman 450", "off-road trails"],
  openGraph: {
    title: "Miles 2 Miles Off-Road ATV Park | Ride the Wild",
    description: "Premium ATV rentals with 2026 Polaris Sportsman 450 fleet. Book your adventure today!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
