"use client"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Menu() {

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
        <div className="flex flex-col gap-3 font-semibold mt-12">
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
        </div>
    )
}
