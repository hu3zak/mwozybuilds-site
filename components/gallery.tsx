"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const builds = [
  {
    title: "Templo da Selva",
    description: "Um templo da selva com uma estrutura de pedra e plantas.",
    image: "/templo-minecraft.png",
  },
  {
    title: "Cidade Futuristica",
    description: "Cidade futuristica colorida e com vários delathes.",
    image: "/cidade-futuristica-pos-ap.png",
  },
  {
    title: "Paraiso e Inferno",
    description: "Uma mapa de duels onde um dos lados é o paraiso e o outro é o inferno.",
    image: "/paraiso-inferno.png",
  },
  {
    title: "Acidente de Trem",
    description: "Acidente de trem em uma trilho no deserto.",
    image: "/acidente-trem.png",
  },
  {
    title: "Planice Bonita",
    description: "Planice bonita com arvores e água.",
    image: "/planice-bonita.png",
  },
  {
    title: "Ilha das Cerejeiras",
    description: "Ilha das cerejeiras com decorações ocidentais.",
    image: "/ilha-das-cerejeiras.png",
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="gallery" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Portfólio
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos meus projetos mais recentes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {builds.map((build, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass border-border/50 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105 hover:border-primary/50">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={build.image || "/placeholder.svg"}
                    alt={build.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {build.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{build.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
