"use client"

import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import ResumeFile from './smeprofile.png';

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
      <div className="flex flex-col justify-between gap-64">
        <div className="">
          <div className="flex flex-col space-y-4 mb-20">
            <Link href="#about" className="text-4xl lg:text-5xl font-bold text-amber-400 tracking-tight">Chayakorn Phukhiao</Link>
            <h2 className="text-xl lg:text-2xl font-medium text-slate-200">Front End Developer</h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
              A passionate front-end developer dedicated to crafting exceptional digital experiences.
            </p>
            <Link
              href={"#"}
              className="flex items-center text-white bg-amber-400/40 rounded-md px-4 py-2 w-fit"
            >
              View Resume
              <span className="inline-block rotate-90">
                <ChevronDown size={20} className="animate-bounce " />
              </span>
            </Link>
          </div>
          <div className="min-h-full hidden md:block space-y-4">
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
        </div>


        <div className="flex space-x-2">
          <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
            <Github className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
            <Linkedin className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
            <Mail className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-slate-200 transition-colors duration-200">
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>



    </>
  )
}
