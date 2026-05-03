import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BrightStar Electric - Licensed Master Electrician | [Your City]",
  description: "Expert electrical services including panel upgrades, EV charger installation, emergency repairs, and smart home systems. Licensed & insured. Serving [City] since [Year].",
  keywords: "electrician [City], electrical services [City], panel upgrade [City], EV charger installation [City], emergency electrician [City], smart home electrician [City]",
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
