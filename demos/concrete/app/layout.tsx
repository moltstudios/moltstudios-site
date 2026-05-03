import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {title:"Solid Foundation Concrete - Professional Concrete & Paving Services",description:"Expert concrete contractors for driveways, patios, walkways, stamped concrete, and foundations. Built to last, designed to impress."}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.className}>{children}</body></html>}
