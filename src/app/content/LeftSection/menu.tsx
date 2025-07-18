"use client"
import { useState, useEffect } from "react"

interface MenuItemProps {
  menuItems: { id: string; label: string }[]
  currentSection: string
}

export default function Menu({ menuItems, currentSection }: MenuItemProps) {
  const [bounceClass, setBounceClass] = useState("")
  const [isMouseEnter, setIsMouseEnter] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    const handleBounce = (event: CustomEvent) => {
      const direction = event.detail.direction
      setBounceClass(direction === "top" ? "bounce-down" : "bounce-up")
      setTimeout(() => setBounceClass(""), 300)
    }
    window.addEventListener("content-bounce", handleBounce as EventListener)
    return () => {
      window.removeEventListener("content-bounce", handleBounce as EventListener)
    }
  }, [])

  const handleMenuClick = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="hidden lg:flex flex-col gap-3 font-semibold mt-20">
      {menuItems.map((item, index) => (
        <button
          key={`menu-${index}-${item.id}`}
          onClick={() => handleMenuClick(item.id)}
          onMouseEnter={() => setIsMouseEnter({ [item.id]: true })}
          onMouseLeave={() => setIsMouseEnter({ [item.id]: false })}
          className={`w-fit group flex items-center space-x-4 ${
            currentSection === item.id ? "text-teal-300" : isMouseEnter[item.id] ? "text-slate-200" : "text-slate-400"
          } transition-colors duration-200 ${bounceClass}`}
        >
          <div
            className={`h-px ${
              currentSection === item.id
                ? "bg-slate-200 w-16"
                : isMouseEnter[item.id]
                  ? "bg-slate-200 w-16"
                  : "bg-slate-400 w-8"
            } transition-all duration-200`}
          ></div>
          <span className="text-sm font-bold uppercase tracking-widest">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
