"use client"

import { useState } from "react"
import projectsData from "@/app/data/project.json"
import type { Project } from "@/app/_partial/ProjectCard"
import { AnimatedBackground } from "../components/background"

export default function ProjectsPage() {
  const projects: Project[] = projectsData
  const [hoveredRow, setHoveredRow] = useState<string | null>(null)

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      "Next.js": "bg-teal-500/20 text-teal-300 border-teal-500/30",
      TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      React: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
      SCSS: "bg-pink-500/20 text-pink-300 border-pink-500/30",
      Contentful: "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Storybook: "bg-purple-500/20 text-purple-300 border-purple-500/30",
      "React Native": "bg-blue-400/20 text-blue-300 border-blue-400/30",
      "Ruby on Rails": "bg-red-500/20 text-red-300 border-red-500/30",
      Firebase: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
      WordPress: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      Timber: "bg-green-600/20 text-green-300 border-green-600/30",
      JavaScript: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
      PHP: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
      "Airtable API": "bg-orange-400/20 text-orange-300 border-orange-400/30",
      "Redux Toolkit": "bg-purple-600/20 text-purple-300 border-purple-600/30",
      Stripe: "bg-blue-500/20 text-blue-300 border-blue-500/30",
      Algolia: "bg-blue-400/20 text-blue-300 border-blue-400/30",
      "Firebase Auth": "bg-orange-500/20 text-orange-300 border-orange-500/30",
      Formik: "bg-blue-600/20 text-blue-300 border-blue-600/30",
      Vercel: "bg-gray-500/20 text-gray-300 border-gray-500/30",
      "Stats Perform API": "bg-green-500/20 text-green-300 border-green-500/30",
      Twig: "bg-green-600/20 text-green-300 border-green-600/30",
      Puppy: "bg-pink-400/20 text-pink-300 border-pink-400/30",
    }
    return colors[tech] || "bg-gray-500/20 text-gray-300 border-gray-500/30"
  }

  return (
    <AnimatedBackground>
      <div className="mx-auto max-w-7xl px-4 pt-24">
        {/* Title */}
        <h1 className="text-5xl font-bold text-white mb-12">All Projects</h1>

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
                  <th className="text-left py-4 px-0 text-sm font-bold text-white w-32">Year</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-52">Project</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-80">Description</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-64">Technology</th>
                  <th className="text-left py-4 px-4 text-sm font-bold text-white w-48">Link</th>
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
                    <td className="py-6 px-0 text-xs text-slate-400 align-top">{project.year}</td>
                    <td className="py-6 px-4 align-top">
                      <div className="text-sm font-medium text-teal-400 truncate pr-2">{project.title}</div>
                    </td>
                    <td className="py-6 px-4 text-sm text-slate-400 align-top">
                      <div className="line-clamp-3 pr-2">{project.description}</div>
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
