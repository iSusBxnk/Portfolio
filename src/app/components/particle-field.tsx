"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  // twinkle
  base: number
  amp: number
  phase: number
  speed: number
  hue: 0 | 1 // 0 = teal, 1 = light cyan/white
}

const TEAL = "45, 212, 191" // teal-400
const LIGHT = "165, 243, 252" // cyan-200

// Interactive twinkling constellation — fits the dark / techy theme.
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    let raf = 0
    let t = 0

    const rand = (min: number, max: number) => min + Math.random() * (max - min)

    const build = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const count = Math.min(90, Math.floor((width * height) / 16000))
      particles = Array.from({ length: count }, () => ({
        x: rand(0, width),
        y: rand(0, height),
        vx: rand(-0.15, 0.15),
        vy: rand(-0.15, 0.15),
        r: rand(0.6, 1.8),
        base: rand(0.15, 0.5),
        amp: rand(0.15, 0.45),
        phase: rand(0, Math.PI * 2),
        speed: rand(0.6, 1.8),
        hue: Math.random() > 0.8 ? 1 : 0,
      }))
    }

    const maxDist = 130
    const mouseDist = 170

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      t += 0.016

      // subtle cursor parallax for the whole field
      const offX = mouse.active ? (mouse.x - width / 2) * 0.012 : 0
      const offY = mouse.active ? (mouse.y - height / 2) * 0.012 : 0

      // connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < maxDist * maxDist) {
            const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.12
            ctx.strokeStyle = `rgba(${TEAL}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x + offX, a.y + offY)
            ctx.lineTo(b.x + offX, b.y + offY)
            ctx.stroke()
          }
        }
      }

      for (const p of particles) {
        if (!reduced) {
          p.x += p.vx
          p.y += p.vy
          if (p.x < 0) p.x = width
          if (p.x > width) p.x = 0
          if (p.y < 0) p.y = height
          if (p.y > height) p.y = 0
        }

        // link to cursor (constellation reaching toward the mouse)
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const d = Math.hypot(dx, dy)
          if (d < mouseDist) {
            const alpha = (1 - d / mouseDist) * 0.35
            ctx.strokeStyle = `rgba(${TEAL}, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(p.x + offX, p.y + offY)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.stroke()
          }
        }

        // twinkle
        const flicker = reduced ? p.base : p.base + p.amp * Math.sin(t * p.speed + p.phase)
        const color = p.hue === 1 ? LIGHT : TEAL
        ctx.fillStyle = `rgba(${color}, ${Math.max(0, flicker)})`
        ctx.beginPath()
        ctx.arc(p.x + offX, p.y + offY, p.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = requestAnimationFrame(draw)
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }
    const onResize = () => build()
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf)
      } else {
        raf = requestAnimationFrame(draw)
      }
    }

    build()
    raf = requestAnimationFrame(draw)
    window.addEventListener("resize", onResize)
    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseout", onLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", onResize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseout", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[5] pointer-events-none"
    />
  )
}
