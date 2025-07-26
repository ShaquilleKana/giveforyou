import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "For My Baby Bocil ❤️",
  description: "A special birthday surprise for Adinda Savira Azzahra",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Pacifico&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-poppins">{children}</body>
    </html>
  )
}
