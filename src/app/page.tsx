"use client"
import { AnimatedBackground } from "@/app/components/background"
import LeftSection from "./content/LeftSection/page"
import RightSection from "./content/RightSection/page"
import TopSection from "./components/top-section"
import { useEffect, useState } from "react"

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

  const handleScroll = () => {
    for (let index = 0; index < sectionIds.length; index++) {
      const element = sectionIds[index]
      const ElementOfsetTop = document.getElementById(element)?.getClientRects()[0].y
      const Height = document.getElementById(element)?.getClientRects()[0].height
      const viewHeight = window.innerHeight * 0.3 // 30% of the viewport height

      if (ElementOfsetTop !== undefined && ElementOfsetTop <= 0 && Height !== undefined) {
        if (ElementOfsetTop + Height > viewHeight) {
          setCurrentSection(element)
        }
      } else if (ElementOfsetTop !== undefined && ElementOfsetTop >= 0 && ElementOfsetTop < viewHeight) {
        setCurrentSection(element)
      }
    }
  }

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
  }, [sectionIds])

  return (
    <>
    <div className="min-h-screen">
      {/* Top Parallax Section - Independent background */}
      <TopSection />

      {/* Main Content Section - With AnimatedBackground effect */}
      <AnimatedBackground>
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[50%_50%] lg:gap-4 px-4 pt-24">
          <LeftSection menuItems={menuItems.map((item) => item.label)} currentSection={currentSection} />
          <RightSection addSectionId={addSectionId} />
        </div>
      </AnimatedBackground>
    </div>
    </>
  )
}
