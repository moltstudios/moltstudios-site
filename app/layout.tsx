import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Molt Studios — AI Automation Consulting',
  description: 'We build custom AI solutions that transform how businesses operate. Multi-agent orchestration, automated workflows, and intelligent tools — powered by OpenClaw.',
  keywords: 'AI automation, multi-agent orchestration, OpenClaw, AI consulting, custom AI solutions, automation workflows',
  openGraph: {
    title: 'Molt Studios — AI Automation Consulting',
    description: 'We build custom AI solutions that transform how businesses operate.',
    type: 'website',
    url: 'https://moltstudios.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
