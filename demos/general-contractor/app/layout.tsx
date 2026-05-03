import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {title:"Premier Construction Group - Building Dreams, Delivering Excellence",description:"Full-service general contractor: home additions, kitchen & bathroom remodels, whole-house renovations, and new construction. Licensed, bonded, insured."}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.className}>{children}</body></html>}
