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
      <div className="fixed inset-0 bg-black pointer-events-none z-0" />

      {/* Art.gif background layer */}
       {/* <div 
        className="fixed inset-0 pointer-events-none z-[0.1] opacity-[0.07]"
        style={{
          backgroundImage: 'url(/Art.gif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />  */}

      {/* Dashed Grid background */}
      <div 
        className="fixed inset-0 pointer-events-none z-[0.5] opacity-20"
        style={{
          backgroundImage: `
            url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='grid' width='200' height='200' patternUnits='userSpaceOnUse'%3e%3cpath d='M 200 0 L 0 0 0 200' fill='none' stroke='%233b82f6' stroke-width='1' stroke-dasharray='10,10' opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='200' height='200' fill='url(%23grid)'/%3e%3c/svg%3e")
          `,
          backgroundSize: '200px 200px'
        }}
      />

      {/* Base gray grid */}
      {/* <div 
        className="fixed inset-0 pointer-events-none z-[0.5] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(128, 128, 128, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(128, 128, 128, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      /> */}

        <div 
          className="fixed inset-0 pointer-events-none z-[0]"
          style={{
            backgroundImage: `
              url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cdefs%3e%3cpattern id='dashedGrid' width='200' height='200' patternUnits='userSpaceOnUse'%3e%3cpath d='M 200 0 L 0 0 0 200' fill='none' stroke='%23ffffff' stroke-width='1' stroke-dasharray='10,10' opacity='0.1'/%3e%3c/pattern%3e%3c/defs%3e%3crect width='200' height='200' fill='url(%23dashedGrid)'/%3e%3c/svg%3e")
            `,
            backgroundSize: '200px 200px',
            mask: 'linear-gradient(135deg, transparent 0%, black 10%, black 30%, transparent 100%)',
            maskSize: '600% 600%',
            animation: 'gridFlowDiagonal 15s ease-in-out infinite'
          }}
        />

      <style jsx>{`
        @keyframes gridFlowDiagonal {
          100% {
            mask-position: -300% -300%;
          }
          0% {
            mask-position: 300% 300%;
          }
        }
      `}</style>

      {/* พื้นหลัง on mouse */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-700 hidden md:block"
        style={{
          background: `
            radial-gradient(
              1000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(0, 0, 0, 0.1),
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

      {/* Mobile responsive background overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-700 md:hidden"
        style={{
          background: `
            radial-gradient(
              6000px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
              rgba(0, 0, 0, 0.1),
              transparent 60%
            ),
            radial-gradient(
              400px circle at calc(var(--mouse-x, 50%) + 80px) calc(var(--mouse-y, 50%) + 100px),
              rgba(59, 130, 246, 0.1),
              transparent 60%
            ),
            radial-gradient(
              400px circle at 25% 30%,
              rgba(6, 182, 212, 0.30),
              transparent 70%
            ),
            radial-gradient(
              400px circle at 70% 80%,
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
