"use client"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { GalleryHorizontalEnd, LayoutGrid } from "lucide-react"

interface TechStackProps {
  addSectionId: (sectionId: string) => void
}

const SECTION_ID = "techstack"

type View = "marquee" | "grid"

// Logos live in /public/logos. Order is the marquee order.
const TECHS = [
  { name: "Next.js", logo: "/logos/nextdotjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "Redux", logo: "/logos/redux.svg" },
  { name: "Material UI", logo: "/logos/mui.svg" },
  { name: "ApexCharts", logo: "/logos/apexcharts.svg" },
  { name: "NextAuth.js", logo: "/logos/nextauth.png" },
  { name: "Node.js", logo: "/logos/nodedotjs.svg" },
  { name: "PWA", logo: "/logos/pwa.svg" },
  { name: "HTML5", logo: "/logos/html5.svg" },
  { name: "CSS3", logo: "/logos/css3.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "GitLab", logo: "/logos/gitlab.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Warp", logo: "/logos/warp.svg" },
]

function TechItem({ name, logo, className = "" }: { name: string; logo: string; className?: string }) {
  return (
    <div
      className={`group flex items-center justify-center gap-3 rounded-xl border-2 border-neutral-100/10 bg-black/5 px-5 py-3 shadow-lg transition-colors hover:border-teal-300/40 ${className}`}
    >
      <Image
        src={logo}
        alt={name}
        width={28}
        height={28}
        unoptimized
        className="size-7 shrink-0 object-contain opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="whitespace-nowrap text-sm font-semibold text-slate-400 transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  )
}

function ViewToggle({ view, onChange }: { view: View; onChange: (v: View) => void }) {
  const OPTIONS: { value: View; icon: typeof LayoutGrid; label: string }[] = [
    { value: "marquee", icon: GalleryHorizontalEnd, label: "Marquee" },
    { value: "grid", icon: LayoutGrid, label: "Grid" },
  ]
  return (
    <div className="inline-flex items-center rounded-full border border-slate-700 bg-slate-800/40 p-1">
      {OPTIONS.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          type="button"
          onClick={() => onChange(value)}
          aria-label={`Show as ${label}`}
          aria-pressed={view === value}
          className={`grid size-8 place-items-center rounded-full transition-colors duration-200 ${
            view === value ? "bg-teal-400/15 text-teal-300" : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Icon className="size-4" />
        </button>
      ))}
    </div>
  )
}

function TechStack({ addSectionId }: TechStackProps) {
  const { t } = useTranslation()
  const [view, setView] = useState<View>("marquee")

  useEffect(() => {
    addSectionId(SECTION_ID)
  }, [addSectionId])

  return (
    <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
      <div className="flex items-start justify-between gap-4 pb-4">
        <div>
          <h2 className="text-xl text-white font-pbold">{t("techStack.title")}</h2>
          <p className="pt-2 leading-relaxed text-slate-400">{t("techStack.subtitle")}</p>
        </div>
        <ViewToggle view={view} onChange={setView} />
      </div>

      {view === "marquee" ? (
        <div className="marquee overflow-hidden py-2">
          {/* Two identical copies → -50% translate loops seamlessly. */}
          <div className="marquee-track">
            {TECHS.map((tech) => (
              <TechItem key={`a-${tech.name}`} {...tech} className="mx-3 shrink-0" />
            ))}
            {TECHS.map((tech) => (
              <TechItem key={`b-${tech.name}`} {...tech} className="mx-3 shrink-0" />
            ))}
          </div>
        </div>
      ) : (
        // Grid: items keep their natural width but `grow` stretches each row to
        // fill the full width, so every row is flush on the left and right edges.
        <div className="flex flex-wrap gap-3 py-2">
          {TECHS.map((tech) => (
            <TechItem key={tech.name} {...tech} className="grow basis-auto" />
          ))}
        </div>
      )}
    </section>
  )
}

export default TechStack
