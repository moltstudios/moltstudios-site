import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {title:"Boundary Pro Fencing - Professional Fence Installation & Repair",description:"Expert fence installation: wood, vinyl, chain link, ornamental iron, and privacy fences. Instant quotes available. Serving Raleigh-Durham area."}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body className={inter.className}>{children}</body></html>}
