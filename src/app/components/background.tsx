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

      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      const xPercent = (e.clientX / viewportWidth) * 100
      const yPercent = (e.clientY / viewportHeight) * 100

      const clampedX = Math.max(0, Math.min(100, xPercent))
      const clampedY = Math.max(0, Math.min(100, yPercent))

      backgroundRef.current.style.setProperty("--mouse-x", `${clampedX}%`)
      backgroundRef.current.style.setProperty("--mouse-y", `${clampedY}%`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={backgroundRef}
      className={`min-h-screen w-full relative  ${className}`}
    >
      {/* พื้นหลัง layer 1 */}
      <div className="fixed inset-0 bg-slate-900 pointer-events-none z-0" />

      {/* พื้นหลัง on mouse */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-700"
        style={{
          background: `
            radial-gradient(
              1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(30, 64, 175, 0.1),
              transparent 60%
            ),
            radial-gradient(
              1000px circle at calc(var(--mouse-x, 50%) + 80px) calc(var(--mouse-y, 50%) + 100px),
              rgba(59, 130, 246, 0.1),
              transparent 60%
            ),
            radial-gradient(
              800px circle at 25% 30%,
              rgba(6, 182, 212, 0.30),
              transparent 70%
            ),
            radial-gradient(
              900px circle at 70% 80%,
              rgba(0, 255, 128, 0.05),
              transparent 80%
            )
          `,
        }}
      />
      

      <div className="relative z-10">{children}</div>
    </div>
  )
}
