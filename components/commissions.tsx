"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Sparkles } from "lucide-react"

export default function Commissions() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="commissions" className="py-24 px-4 relative" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-3xl p-12 text-center relative overflow-hidden"
        >
          {/* Animated glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 animate-pulse" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Quer um projeto personalizado?</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Estou aceitando comissões! Entre em contato no Discord para discutir seu projeto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Button
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground neon-purple text-xl px-12 py-7 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://discord.com/users/983796100580388884" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Solicitar seu próprio mapa no Discord
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
