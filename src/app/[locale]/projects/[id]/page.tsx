import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Link } from "next-view-transitions"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import projectsData from "@/app/data/project.json"
import { getTechColor } from "@/app/data/tech-colors"
import { pickLocale, type Project } from "@/app/_partial/ProjectCard"
import { AnimatedBackground } from "@/app/components/background"
import { localizedPath } from "@/app/lib/locale-path"
import initTranslations from "@/i18n"
import i18nConfig from "../../../../../i18nConfig"

const projects = projectsData as Project[]
const i18nNamespaces = ["translation"]

export function generateStaticParams() {
  return i18nConfig.locales.flatMap((locale) =>
    projects.map((p) => ({ locale, id: p.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}): Promise<Metadata> {
  const { locale, id } = await params
  const project = projects.find((p) => p.slug === id)
  if (!project) return {}
  return {
    title: pickLocale(project.title, locale),
    description: pickLocale(project.description, locale),
    openGraph: {
      title: pickLocale(project.title, locale),
      description: pickLocale(project.description, locale),
      images: [project.image],
    },
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>
}) {
  const { locale, id } = await params
  const project = projects.find((p) => p.slug === id)
  if (!project) notFound()

  const { t } = await initTranslations(locale, i18nNamespaces)

  return (
    <AnimatedBackground>
      <div className="mx-auto max-w-4xl px-4 pt-24 pb-24">
        <Link
          href={localizedPath(locale, "/projects")}
          className="group inline-flex items-center gap-2 text-slate-400 hover:text-teal-300 transition-colors mb-8 text-sm"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          {t("projects.backToProjects")}
        </Link>

        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
          {pickLocale(project.year, locale)}
        </p>
        <h1 className="text-3xl lg:text-5xl font-bold text-white mb-6">
          {pickLocale(project.title, locale)}
        </h1>

        <Image
          src={project.image || "https://placehold.co/1200x630"}
          alt={pickLocale(project.title, locale)}
          width={1200}
          height={630}
          style={{ viewTransitionName: `project-${project.slug}` }}
          className="w-full h-auto rounded-xl border border-slate-700 mb-8"
          priority
        />

        <p className="text-slate-300 leading-relaxed mb-8">
          {pickLocale(project.description, locale)}
        </p>

        <div className="mb-10">
          <p className="text-sm font-semibold text-white mb-3">{t("projects.techStack")}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md border border-teal-500/40 bg-teal-500/10 px-5 py-2.5 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-500/20"
          >
            {t("projects.visitSite")}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        )}
      </div>
    </AnimatedBackground>
  )
}
