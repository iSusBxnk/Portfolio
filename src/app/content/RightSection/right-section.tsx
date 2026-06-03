import React from 'react'
import Project from "./project"
import About from "./about"
import Experience from "./experience"
import Education from "./education"
import GitlabActivity from "@/app/components/gitlab-activity"

interface RightSectionProps {
  addSectionId: (sectionId: string) => void;
}
export default function RightSection({addSectionId}: RightSectionProps) {
    return (
        <div className="space-y-16 lg:space-y-24 mb-24">
          <About addSectionId={addSectionId}/>
          <Education addSectionId={addSectionId}/>
          <Experience addSectionId={addSectionId}/>
          <GitlabActivity addSectionId={addSectionId}/>
          <Project addSectionId={addSectionId}/>
        </div>
  )
}
