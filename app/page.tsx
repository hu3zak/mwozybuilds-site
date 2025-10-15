"use client"

import dynamic from "next/dynamic"
import About from "@/components/about"
import Commissions from "@/components/commissions"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

// Importa Gallery dinamicamente para evitar window no server
const Gallery = dynamic(() => import("@/components/gallery"), { ssr: false })

export default function Home() {
  return (
    <main className="animated-gradient min-h-screen">
      <Hero />
      <About />
      <Gallery />
      <Commissions />
      <Footer />
    </main>
  )
}