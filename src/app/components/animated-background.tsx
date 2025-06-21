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

      // ใช้ตำแหน่งเมาส์จาก viewport โดยตรง (clientX, clientY)
      // ไม่ต้องคำนวณสัมพันธ์กับ element เพราะเราต้องการให้ทำงานตาม viewport
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight
      
      // แปลงตำแหน่งเมาส์เป็นเปอร์เซ็นต์ของ viewport
      const xPercent = (e.clientX / viewportWidth) * 100
      const yPercent = (e.clientY / viewportHeight) * 100

      // จำกัดค่าให้อยู่ในช่วง 0-100%
      const clampedX = Math.max(0, Math.min(100, xPercent))
      const clampedY = Math.max(0, Math.min(100, yPercent))

      // Update CSS custom properties
      backgroundRef.current.style.setProperty("--mouse-x", `${clampedX}%`)
      backgroundRef.current.style.setProperty("--mouse-y", `${clampedY}%`)
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={backgroundRef}
      className={`
        min-h-screen w-full relative
        ${className}
      `}
    >
      {/* <div 
        className="fixed inset-0 pointer-events-none z-0"
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
      /> */}

      <div className="fixed inset-0 bg-gray-900/0 bg-[#0c0e1c] transition-all duration-500 pointer-events-none z-[1]" />
      <div
        className="fixed inset-0 opacity-0 dark:opacity-100 transition-opacity duration-500 pointer-events-none z-[2]"
        style={{
          background: `
            radial-gradient(
              3000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(15,23,42, 0.15),
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

      <div className="relative z-10">{children}</div>
    </div>
  )
}