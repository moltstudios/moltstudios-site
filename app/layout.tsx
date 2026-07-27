import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Molt Studios — AI Systems and Engineered Biology",
  description:
    "A working engineering practice and a tissue culture lab. We ship production AI for regulated teams, publish the research, and grow the plants ourselves.",
  keywords:
    "AI consulting, model compression, multi-agent orchestration, plant tissue culture, CARF accreditation, behavioral health compliance, MCP server, Reynoso Industries",
  openGraph: {
    title: "Molt Studios — AI Systems and Engineered Biology",
    description:
      "Production AI for regulated teams. Engineered biology in a real lab. Winston-Salem, NC.",
    type: "website",
    url: "https://moltstudios.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="ms">
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
