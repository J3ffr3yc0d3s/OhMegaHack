import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ICSD Hackathon",
  description: "Electronics Hackathon 2025",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icsd-logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icsd-logo.png",
        sizes: "16x16",
        type: "image/png",
      }
    ],
    apple: {
      url: "/icsd-logo.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
