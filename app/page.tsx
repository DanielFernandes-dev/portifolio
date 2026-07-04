"use client"

import { useEffect } from "react"
import { initAnalytics } from "@/lib/firebase"
import Navbar from "@/app/components/Navbar"
import Hero from "@/app/components/Hero"
import AboutStats from "@/app/components/AboutStats"
import TechStack from "@/app/components/TechStack"
import Projects from "@/app/components/Projects"
import Timeline from "@/app/components/Timeline"
import Contact from "@/app/components/Contact"
import Footer from "@/app/components/Footer"

export default function Home() {
  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    const handleClick = (e: MouseEvent) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      e.preventDefault()
      const target = document.querySelector(anchor.getAttribute("href")!)
      if (target) {
        target.scrollIntoView({ behavior: "smooth" })
      }
    }
    anchors.forEach((a) => a.addEventListener("click", handleClick))
    return () => anchors.forEach((a) => a.removeEventListener("click", handleClick))
  }, [])

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <Hero />
        <AboutStats />
        <TechStack />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
