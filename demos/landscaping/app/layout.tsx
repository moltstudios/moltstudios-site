import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "GreenScape Outdoor Living - Professional Landscaping Services",
  description: "Expert landscaping, hardscaping, irrigation, and outdoor living design. Spring clean-up specials available. Free design consultations.",
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>
}
