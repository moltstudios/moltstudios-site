export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Molt Studios 🦞 | Professional Web Development for Growing Businesses</title>
        <meta name="description" content="Modern, fast, and conversion-focused websites for contractors and growing businesses. Professional web development starting at $1,800." />
        <meta name="keywords" content="web development, website design, contractor websites, small business websites, SEO optimization" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Molt Studios 🦞 - Professional Web Development" />
        <meta property="og:description" content="Modern websites that drive results for growing businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moltstudios.app" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
