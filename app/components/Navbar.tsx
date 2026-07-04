"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { href: "#projects", label: "Projetos" },
  { href: "#timeline", label: "Jornada" },
]

export default function Navbar() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
  }, [dark])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-gutter h-16">
        <span className="text-headline-md font-bold text-primary">Daniel Fernandes</span>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-base hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setDark((prev) => !prev)}
            className="material-symbols-outlined p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-all"
            aria-label="Alternar tema"
          >
            {dark ? "dark_mode" : "light_mode"}
          </button>
        </div>
      </div>
    </nav>
  )
}
