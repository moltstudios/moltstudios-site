import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: "Bright Smile Dental - Your Comfort, Your Smile, Our Priority",
  description: "Comprehensive dental care: general dentistry, cosmetic, implants, orthodontics & emergency services. New patient special: $99 exam & X-rays. Accepting most insurance.",
}
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}>{children}</body></html>
}
