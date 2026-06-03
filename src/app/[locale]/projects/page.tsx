"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { useCurrentLocale } from "next-i18n-router/client"
import { Link } from "next-view-transitions"
import { ArrowLeft } from "lucide-react"
import projectsData from "@/app/data/project.json"
import { getTechColor } from "@/app/data/tech-colors"
import { pickLocale, type Project } from "@/app/_partial/ProjectCard"
import { AnimatedBackground } from "@/app/components/background"
import { localizedPath } from "@/app/lib/locale-path"
import i18nConfig from "../../../../i18nConfig"

export default function ProjectsPage() {
  const { t } = useTranslation()
  const locale = useCurrentLocale(i18nConfig) ?? i18nConfig.defaultLocale
  const projects: Project[] = projectsData
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  return (
    <AnimatedBackground>
      <div className="mx-auto max-w-7xl px-4 pt-24">
        <Link
          href={localizedPath(locale, "/")}
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors mb-6 text-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("projects.back")}
        </Link>
        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-12">{t("projects.allTitle")}</h1>

        {/* Table Container with Horizontal Scroll */}
        <div className="overflow-x-auto">
          <div className="min-w-[1200px]">
            {" "}
            {/* Set minimum width to ensure table doesn't shrink */}
            <table className="w-full table-fixed">
              {" "}
              {/* Use table-fixed for consistent column widths */}
              <thead>
                <tr className="">
                  <th className="text-left py-4 px-0 text-sm font-bold text-white w-32">{t("projects.table.year")}</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-52">{t("projects.table.project")}</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-80">{t("projects.table.description")}</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-64">{t("projects.table.technology")}</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-48">{t("projects.table.link")}</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className={`border-b border-slate-600 transition-colors duration-200 ${
                      hoveredRow === project.id ? "bg-slate-800/30" : "hover:bg-slate-800/20"
                    }`}
                    onMouseEnter={() => setHoveredRow(project.id)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td className="py-6 px-0 text-xs text-slate-400 align-top">{pickLocale(project.year, locale)}</td>
                    <td className="py-6 px-4 align-top">
                      <div className="text-sm font-medium text-teal-400 truncate pr-2">{pickLocale(project.title, locale)}</div>
                    </td>
                    <td className="py-6 px-4 text-sm text-slate-400 align-top">
                      <div className="line-clamp-3 pr-2">{pickLocale(project.description, locale)}</div>
                    </td>
                    <td className="py-6 px-4 align-top">
                      <div className="flex flex-wrap gap-2 pr-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-6 px-4 align-top">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-slate-400 hover:text-teal-300 transition-colors text-sm truncate"
                      >
                        <span className="truncate max-w-[180px]">
                          {project.link}
                        </span>
                        <svg
                          className="w-3 h-3 ml-1 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  )
}
