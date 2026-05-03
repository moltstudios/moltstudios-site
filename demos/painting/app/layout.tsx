import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Prime Coat Painters - Professional Painting Services | [Your City]",
  description: "Expert interior and exterior painting services, cabinet refinishing, and commercial painting. Free color consultations. Serving [City] since [Year].",
  keywords: "painter [City], painting services [City], interior painter [City], exterior painting [City], cabinet refinishing [City], commercial painting [City]",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
