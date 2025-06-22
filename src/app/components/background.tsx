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

      // Get the bounding rect of the background container
      const rect = backgroundRef.current.getBoundingClientRect()

      // Calculate mouse position relative to the container
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Convert to percentage within the container
      const xPercent = (x / rect.width) * 100
      const yPercent = (y / rect.height) * 100

      // Clamp values between 0 and 100
      const clampedX = Math.max(0, Math.min(100, xPercent))
      const clampedY = Math.max(0, Math.min(100, yPercent))

      backgroundRef.current.style.setProperty("--mouse-x", `${clampedX}%`)
      backgroundRef.current.style.setProperty("--mouse-y", `${clampedY}%`)
    }

    // Add event listener to the specific container instead of document
    const container = backgroundRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
      return () => container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div ref={backgroundRef} className={`relative min-h-screen w-full overflow-hidden ${className}`}>
      {/* Base background layer */}
      <div className="absolute inset-0 bg-slate-900 pointer-events-none z-0" />

      {/* Animated background on mouse move - scoped to this container */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] transition-opacity duration-700"
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
              rgba(6, 182, 212, 0.20),
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

      {/* Content with higher z-index */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
