import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import Commissions from "@/components/commissions"
import Footer from "@/components/footer"

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
