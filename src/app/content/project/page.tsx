// project/page.tsx
"use client"
import { useState } from "react"
import { ProjectCard } from "@/app/_partial/ProjectCard"
import type { Project } from "@/app/_partial/ProjectCard"
import projectsData from "@/app/data/project.json" // data

function ProjectsPage() {
  const projects: Project[] = projectsData
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null)

  const handleProjectHover = (projectId: string) => {
    setHoveredProjectId(projectId)
  }

  const handleProjectLeave = () => {
    setHoveredProjectId(null)
  }

  return (
    <section id="projects" className="space-y-8">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          isHovered={hoveredProjectId === project.id}
          onHover={() => handleProjectHover(project.id)}
          onLeave={handleProjectLeave}
          isDimmed={hoveredProjectId !== null && hoveredProjectId !== project.id}
        />
      ))}
    </section>
  )
}

export default ProjectsPage