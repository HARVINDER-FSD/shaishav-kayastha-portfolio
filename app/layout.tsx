import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://shaishavkayastha.com"),
  title: {
    default: "Shaishav Kayastha - Business Leader & EdTech Expert",
    template: "%s | Shaishav Kayastha",
  },
  description: "Strategic business leader with 17+ years in EdTech. IIM Ahmedabad alumni. Business consultation, speaking engagements & mentoring.",
  keywords: ["Shaishav Kayastha", "Business Leader", "EdTech Expert", "IIM Ahmedabad", "Business Consultant", "Strategic Planning", "Leadership", "Ahmedabad", "India"],
  authors: [{ name: "Shaishav Kayastha", url: "https://shaishavkayastha.com" }],
  creator: "Shaishav Kayastha",
  publisher: "Shaishav Kayastha",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased pt-16 sm:pt-20`}>{children}</body>
    </html>
  )
}
