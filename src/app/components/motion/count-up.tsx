"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, useReducedMotion } from "motion/react"

interface CountUpProps {
  value: number
  decimals?: number
  durationMs?: number
  className?: string
}

export default function CountUp({ value, decimals = 0, durationMs = 1200, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" })
  const reduced = useReducedMotion()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduced) {
      setDisplay(value)
      return
    }
    let raf = 0
    let startTs: number | null = null
    const step = (ts: number) => {
      if (startTs === null) startTs = ts
      const p = Math.min(1, (ts - startTs) / durationMs)
      const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
      setDisplay(value * eased)
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, durationMs, reduced])

  return (
    <span ref={ref} className={className}>
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
    </span>
  )
}
