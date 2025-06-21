// project/page.tsx
"use client"
import { useState } from "react"
import { ProjectCard } from "@/app/_partial/ProjectCard"
import type { Project } from "@/app/_partial/ProjectCard"
import projectsData from "@/app/data/project.json" // data

function ProjectsPage() {
  const projects: Project[] = projectsData
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null)
  const [showAll, setShowAll] = useState<boolean>(false)
  
  const PROJECT_LIMIT = 5
  const displayedProjects = showAll ? projects : projects.slice(0, PROJECT_LIMIT)
  const hasMoreProjects = projects.length > PROJECT_LIMIT

  const handleProjectHover = (projectId: string) => {
    setHoveredProjectId(projectId)
  }

  const handleProjectLeave = () => {
    setHoveredProjectId(null)
  }

  const handleShowMore = () => {
    setShowAll(true)
  }

  const handleShowLess = () => {
    setShowAll(false)
  }

  return (
    <section id="projects" className="space-y-2">
        <div className="py-4">
            <p className="text-2xl text-white font-bold">Project</p>
        </div>
      {displayedProjects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          isHovered={hoveredProjectId === project.id}
          onHover={() => handleProjectHover(project.id)}
          onLeave={handleProjectLeave}
          isDimmed={hoveredProjectId !== null && hoveredProjectId !== project.id}
        />
      ))}
      
      {hasMoreProjects && (
        <div className="flex justify-center pt-8">
          {!showAll ? (
            <button
              onClick={handleShowMore}
              className="group px-6 py-3 text-sm font-medium text-slate-400 hover:text-amber-400 border border-slate-700 hover:border-amber-400/50 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              ดูโปรเจกต์เพิ่มเติม ({projects.length - PROJECT_LIMIT} โปรเจกต์)
              <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
            </button>
          ) : (
            <button
              onClick={handleShowLess}
              className="group px-6 py-3 text-sm font-medium text-slate-400 hover:text-amber-400 border border-slate-700 hover:border-amber-400/50 rounded-lg transition-all duration-300 hover:bg-white/5"
            >
              แสดงน้อยลง
              <span className="ml-2 inline-block group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            </button>
          )}
        </div>
      )}
    </section>
  )
}

export default ProjectsPage