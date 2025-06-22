import React from 'react'
import Project from "./project/page"
import About from "./about/page"
import Experience from "./experience/page"

interface RightSectionProps {
  addSectionId: (sectionId: string) => void;
}
export default function RightSection({addSectionId}: RightSectionProps) {
    return (
        <div className="space-y-16 lg:space-y-24 mb-14">
          <About addSectionId={addSectionId}/>
          <Experience addSectionId={addSectionId}/>
          <Project addSectionId={addSectionId}/>
        </div>
  )
}
