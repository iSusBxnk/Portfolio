"use client"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
export default function ProfileSidebar() {
  const [bounceClass, setBounceClass] = useState("")

  useEffect(() => {
    const handleBounce = (event: CustomEvent) => {
      const direction = event.detail.direction
      setBounceClass(direction === "top" ? "bounce-down" : "bounce-up")

      // Remove bounce class after animation
      setTimeout(() => setBounceClass(""), 300)
    }

    window.addEventListener("content-bounce", handleBounce as EventListener)

    return () => {
      window.removeEventListener("content-bounce", handleBounce as EventListener)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <div className="space-y-8">
        <div className="space-y-4">
          <Link href="#about" className="text-4xl lg:text-5xl font-bold text-amber-400 tracking-tight">Chayakorn Phukhiao</Link>
          <h2 className="text-xl lg:text-2xl font-medium text-slate-200">Front End Engineer</h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        <nav className="space-y-4">
          <button
            onClick={() => scrollToSection("about")}
            className="group flex items-center space-x-4 text-slate-500 hover:text-slate-200 transition-colors duration-200"
          >
            <div className="h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-200"></div>
            <span className="text-xs font-bold uppercase tracking-widest">About</span>
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className="group flex items-center space-x-4 text-slate-500 hover:text-slate-200 transition-colors duration-200"
          >
            <div className="h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-200"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Experience</span>
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="group flex items-center space-x-4 text-slate-500 hover:text-slate-200 transition-colors duration-200"
          >
            <div className="h-px w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200 transition-all duration-200"></div>
            <span className="text-xs font-bold uppercase tracking-widest">Projects</span>
          </button>
        </nav>
      </div>

      <div className="flex space-x-6">
        <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
          <Github className="h-6 w-6" />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
          <Linkedin className="h-6 w-6" />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
          <Mail className="h-6 w-6" />
        </button>
        <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
          <ExternalLink className="h-6 w-6" />
        </button>
      </div>
    </>
  )
}
