// ProjectCard.tsx
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export interface Project {
    id: string
    title: string
    description: string
    image: string
    technologies: string[]
    link?: string
}

interface ProjectCardProps {
    project: Project
    isHovered: boolean
    onHover: () => void
    onLeave: () => void
    isDimmed: boolean
}

export function ProjectCard({ project, isHovered, onHover, onLeave, isDimmed }: ProjectCardProps) {
    return (
        <div 
            className={`group rounded-lg hover:bg-white/5 transition-all duration-500 ease-in-out hover:shadow-md hover:backdrop-blur-md cursor-pointer ${
                isDimmed ? 'opacity-20 blur-sm scale-100' : 'opacity-100 blur-none scale-100'
            }`}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
            <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className="w-50 h-40 flex items-start justify-start">
                        <img
                            src={project.image || "https://placehold.co/600x400"}
                            alt="Project Image"
                            width={600}
                            height={400}
                            className="w-40 h-auto object-cover rounded-lg border border-slate-700"
                        />
                    </div>
                    <div className="flex-1 space-y-3">
                        <h3 className="text-white font-medium group-hover:text-amber-400 transition-colors flex items-center">
                            {project.title}
                            <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="px-3 py-1 text-xs font-medium bg-white/10 text-amber-400 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}