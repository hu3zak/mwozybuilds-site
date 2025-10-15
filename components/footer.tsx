"use client"

import { motion } from "framer-motion"
import { Youtube, Twitter } from "lucide-react"

const socialLinks = [
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@mwozy" },
  { icon: Twitter, label: "Twitter/X", href: "https://x.com/mwozybuilds" },
]

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Portfólio", href: "#gallery" },
  { label: "Contato", href: "#commissions" },
]

export default function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-6"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg glass hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
                aria-label={link.label}
              >
                <link.icon className="h-6 w-6 text-primary" />
              </motion.a>
            ))}
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-8"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-center"
          >
            © 2025 mwozy – Minecraft Builder
          </motion.p>
        </div>
      </div>
    </footer>
  )
}
