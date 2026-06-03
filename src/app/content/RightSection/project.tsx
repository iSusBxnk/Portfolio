"use client"

import { useEffect, useState } from "react"
import { ProjectCard } from "@/app/_partial/ProjectCard"
import type { Project } from "@/app/_partial/ProjectCard"
import projectsData from "@/app/data/project.json" // data
import { useTransitionRouter } from "next-view-transitions"
import { useCurrentLocale } from "next-i18n-router/client"
import { useTranslation } from "react-i18next"
import { ArrowUpRight } from "lucide-react"
import i18nConfig from "../../../../i18nConfig"
import { localizedPath } from "@/app/lib/locale-path"

interface ProjectProps {
  addSectionId: (sectionId: string) => void
}

const SECTION_ID = "projects"
const PROJECT_LIMIT = 5

function ProjectsPage({ addSectionId }: ProjectProps) {
  const router = useTransitionRouter()
  const { t } = useTranslation()
  const locale = useCurrentLocale(i18nConfig) ?? i18nConfig.defaultLocale
  const projects: Project[] = projectsData
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null)

  // Always limit to 5 projects
  const displayedProjects = projects.slice(0, PROJECT_LIMIT)

  useEffect(() => {
    addSectionId(SECTION_ID)
  }, [addSectionId])

  const handleProjectHover = (projectId: string) => {
    setHoveredProjectId(projectId)
  }

  const handleProjectLeave = () => {
    setHoveredProjectId(null)
  }

  const handleViewFullArchive = () => {
    router.push(localizedPath(locale, "/projects"))
  }

  return (
    <section id={SECTION_ID} className="space-y-2 scroll-mt-8 lg:scroll-m-24">
      <div className="pb-4">
        <p className="text-2xl text-white font-bold">{t("projects.title")}</p>
      </div>

      {displayedProjects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          locale={locale}
          isHovered={hoveredProjectId === project.id}
          onHover={() => handleProjectHover(project.id)}
          onLeave={handleProjectLeave}
          isDimmed={hoveredProjectId !== null && hoveredProjectId !== project.id}
        />
      ))}

      {/* Always show View Full Project Archive button */}
      <div className="flex justify-start pt-8">
        <button
          onClick={handleViewFullArchive}
          className="group text-slate-400 hover:text-white underline-offset-4 duration-300 flex items-center hover:underline"
        >
          {t("projects.viewArchive")}
          <span className="ml-2 inline-block group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
            <ArrowUpRight />
          </span>
        </button>
      </div>
    </section>
  )
}

export default ProjectsPage
