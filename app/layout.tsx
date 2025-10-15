import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Portfolio de Builds no Minecraft – Mwozy",
  description: "Crio mapas e estruturas personalizados dentro do Minecraft. Venha pedir o seu!",
  icons: {
    icon: [{ url: "/favicon-m.png" }, { url: "/favicon-m.png", type: "image/png", sizes: "32x32" }],
    apple: "/favicon-m.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
