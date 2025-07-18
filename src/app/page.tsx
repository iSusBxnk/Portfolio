"use client"
import { AnimatedBackground } from "@/app/components/background"
import LeftSection from "./content/LeftSection/page"
import RightSection from "./content/RightSection/page"
import { useEffect, useState, useCallback } from "react"
import MobileMenu from "./components/mobile-menu"
export default function Home() {
  const [sectionIds, setSectionIds] = useState<string[]>([])
  const [sectionOneId, setSectionOneId] = useState<string | null>(null)
  const [menuItems, setMenuItems] = useState<{ id: string | null; label: string }[]>([])
  const [currentSection, setCurrentSection] = useState("")

  const addSectionId = (sectionId: string) => {
    const ID = document.getElementById(sectionId)
    if (ID) {
      const ElementId = ID.id
      setSectionOneId(ElementId)
      setSectionIds((prev) => [...new Set([...prev, ElementId])])
    }

    const LABEL = document.getElementById(sectionId)
    if (LABEL) {
      const ElementLabel = LABEL.id
      const obj = { id: sectionOneId, label: ElementLabel }
      setMenuItems((prev) => {
        if (prev.findIndex((item) => item.label === obj.label) < 0) {
          return [...prev, obj]
        }
        return prev
      })
    }
  }

  const handleScroll = useCallback(() => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index]
      const rect = document.getElementById(element)?.getClientRects()[0]
      if (!rect) continue

      const ElementOfsetTop = rect.y
      const Height = rect.height
      const viewHeight = window.innerHeight * 0.3 // 30% of the viewport height

      if (ElementOfsetTop <= 0 && ElementOfsetTop + Height > viewHeight) {
        setCurrentSection(element)
      } else if (ElementOfsetTop >= 0 && ElementOfsetTop < viewHeight) {
        setCurrentSection(element)
      }
    }
  }, [sectionIds])

  useEffect(() => {
    if (sectionIds?.length > 0) {
      setCurrentSection(sectionIds[0])
    }
  }, [sectionIds])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [handleScroll])

  return (
    <>
      {/* <div className="min-h-screen"> */}
      {/* Top Parallax Section - Independent background */}
      {/* <TopSection /> */}
      {/* <Cloud /> */}
      <MobileMenu menuItems={menuItems.map((item) => item.label)} currentSection={currentSection} />
      <AnimatedBackground>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[50%_50%] lg:gap-4 px-4 pt-24">
          <LeftSection menuItems={menuItems.map((item) => item.label)} currentSection={currentSection} />
          <RightSection addSectionId={addSectionId} />
        </div>
      </AnimatedBackground>
      {/* </div> */}
    </>
  )
}
