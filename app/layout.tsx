import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Cloudy - Professional Cloud Services",
  description:
    "Professional cloud hosting and domain services. Reliable, scalable, and secure cloud solutions for your business.",
  generator: "v0.app",
  keywords: "cloud hosting, domain registration, web hosting, cloud services, VPS hosting",
  authors: [{ name: "Cloudy" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Cloudy - Professional Cloud Services",
    description:
      "Professional cloud hosting and domain services. Reliable, scalable, and secure cloud solutions for your business.",
    type: "website",
    images: ["/logo.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="ltr">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
