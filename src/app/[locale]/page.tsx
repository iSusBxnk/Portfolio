"use client"
import { AnimatedBackground } from "@/app/components/background"
import LeftSection from "@/app/content/LeftSection/left-section"
import RightSection from "@/app/content/RightSection/right-section"
import { useEffect, useState, useCallback } from "react"
import MobileMenu from "@/app/components/mobile-menu"

export default function Home() {
  const [sectionIds, setSectionIds] = useState<string[]>([])
  const [currentSection, setCurrentSection] = useState("")

  // Sections register themselves on mount; keep insertion order, de-duplicated.
  const addSectionId = useCallback((sectionId: string) => {
    setSectionIds((prev) => (prev.includes(sectionId) ? prev : [...prev, sectionId]))
  }, [])

  // Default the active section to the first registered one.
  useEffect(() => {
    if (sectionIds.length > 0) {
      setCurrentSection((prev) => prev || sectionIds[0])
    }
  }, [sectionIds])

  // Track the visible section with IntersectionObserver instead of a scroll
  // listener — no per-pixel work, no manual rect math.
  useEffect(() => {
    if (sectionIds.length === 0) return

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    const visibility = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        // Pick the most-visible section, preserving registration order on ties.
        let best = ""
        let bestRatio = 0
        for (const id of sectionIds) {
          const ratio = visibility.get(id) ?? 0
          if (ratio > bestRatio) {
            bestRatio = ratio
            best = id
          }
        }
        if (best) setCurrentSection(best)
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <>
      <MobileMenu menuItems={sectionIds} currentSection={currentSection} />
      <AnimatedBackground>
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-[50%_50%] lg:gap-4 px-4 pt-24">
          <LeftSection menuItems={sectionIds} currentSection={currentSection} />
          <RightSection addSectionId={addSectionId} />
        </div>
      </AnimatedBackground>
    </>
  )
}
