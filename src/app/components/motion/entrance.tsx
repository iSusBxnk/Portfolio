"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

interface EntranceProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

// Plays once on mount — for above-the-fold content (entrance "when you land").
export default function Entrance({ children, className, delay = 0, y = 16 }: EntranceProps) {
  const reduced = useReducedMotion()

  if (reduced) return <div className={className}>{children}</div>

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}
