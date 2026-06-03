import React from 'react'
import Project from "./project"
import About from "./about"
import Experience from "./experience"
import Education from "./education"
import TechStack from "./tech-stack"
import GitlabActivity from "@/app/components/gitlab-activity"
import Reveal from "@/app/components/motion/reveal"

interface RightSectionProps {
  addSectionId: (sectionId: string) => void;
}
export default function RightSection({addSectionId}: RightSectionProps) {
    return (
        <div className="space-y-16 lg:space-y-24 mb-24">
          <Reveal><About addSectionId={addSectionId}/></Reveal>
          <Reveal><Education addSectionId={addSectionId}/></Reveal>
          <Reveal><Experience addSectionId={addSectionId}/></Reveal>
          <Reveal><TechStack addSectionId={addSectionId}/></Reveal>
          <Reveal><GitlabActivity addSectionId={addSectionId}/></Reveal>
          <Reveal><Project addSectionId={addSectionId}/></Reveal>
        </div>
  )
}
