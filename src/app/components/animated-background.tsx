"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedBackground({ children, className = "" }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!backgroundRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      // Convert mouse position to percentage
      const xPercent = (clientX / innerWidth) * 100
      const yPercent = (clientY / innerHeight) * 100

      // Update CSS custom properties
      backgroundRef.current.style.setProperty("--mouse-x", `${xPercent}%`)
      backgroundRef.current.style.setProperty("--mouse-y", `${yPercent}%`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={backgroundRef}
      className={`
        min-h-screen w-full relative overflow-hidden
        bg-gradient-to-br from-blue-50 via-white to-purple-50
        dark:from-gray-900 dark:via-gray-800 dark:to-purple-900
        transition-colors duration-500
        ${className}
      `}
      style={{
        background: `
          radial-gradient(
            3000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
           rgba(60, 0, 255, 0.3),
            transparent 40%
          ),
          radial-gradient(
            1000px circle at calc(var(--mouse-x, 50%) + 100px) calc(var(--mouse-y, 50%) + 100px),
              rgba(0, 136, 255, 0.2),
            transparent 40%
          ),
          linear-gradient(
            135deg,
            rgba(239, 246, 255) 0%,
            rgba(255, 255, 255) 50%,
            rgba(250, 245, 255) 100%
          )
        `,
      }}
    >
      {/* Dark mode overlay */}
      <div className="absolute inset-0 bg-gray-900/0 dark:bg-[#0f172a] transition-all duration-500 pointer-events-none" />

      {/* Animated gradient overlay for dark mode */}
      <div
        className="absolute inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `
            radial-gradient(
              3000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              
              transparent 40%
            ),
            radial-gradient(
              1000px circle at calc(var(--mouse-x, 50%) + 100px) calc(var(--mouse-y, 50%) + 100px),
              rgba(0, 136, 255, 0.15),
              transparent 40%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
