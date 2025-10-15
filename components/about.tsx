"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Sobre mim</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Olá! Sou o <span className="text-foreground font-semibold">Mwozy</span>. Jogo Minecraft desde 2018 e comecei a construir em meados de 2024. Atualmente, vendo meus mapas para jogadores e donos de servidores. Além de construir, também gosto muito de jogar PvP! Meu objetivo é entregar mapas que juntem beleza, jogabilidade e desempenho, oferecendo a melhor experiência possível dentro do jogo.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass rounded-2xl p-8 neon-cyan">
              <div className="relative h-64 md:h-80 rounded-xl overflow-hidden">
                <Image src="/mwozy-logo-nick.png" alt="Minecraft Build my Nick" fill className="object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
