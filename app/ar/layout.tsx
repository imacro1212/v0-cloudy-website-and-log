import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "../globals.css"
import { Almarai } from "next/font/google"

const almarai = Almarai({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-almarai",
  weight: ["300", "400", "700", "800"],
})

export const metadata: Metadata = {
  title: "كلاودي - خدمات سحابية احترافية",
  description: "خدمات استضافة سحابية ونطاقات احترافية. حلول سحابية موثوقة وقابلة للتوسع وآمنة لعملك.",
  generator: "v0.app",
  keywords: "استضافة سحابية, تسجيل نطاقات, استضافة مواقع, خدمات سحابية, استضافة VPS",
  authors: [{ name: "كلاودي" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "كلاودي - خدمات سحابية احترافية",
    description: "خدمات استضافة سحابية ونطاقات احترافية. حلول سحابية موثوقة وقابلة للتوسع وآمنة لعملك.",
    type: "website",
    images: ["/logo.png"],
  },
}

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" className="rtl">
      <body className={`${almarai.className} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
