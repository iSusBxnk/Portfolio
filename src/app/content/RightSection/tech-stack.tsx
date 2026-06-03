"use client"
import Image from "next/image"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface TechStackProps {
  addSectionId: (sectionId: string) => void
}

const SECTION_ID = "techstack"

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

function TechItem({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="group mx-3 flex shrink-0 items-center gap-3 rounded-xl border-2 border-neutral-100/10 bg-black/5 px-5 py-3 shadow-lg transition-colors hover:border-teal-300/40">
      <Image
        src={logo}
        alt={name}
        width={28}
        height={28}
        unoptimized
        className="size-7 object-contain opacity-80 transition-opacity group-hover:opacity-100"
      />
      <span className="whitespace-nowrap text-sm font-semibold text-slate-400 transition-colors group-hover:text-white">
        {name}
      </span>
    </div>
  )
}

function TechStack({ addSectionId }: TechStackProps) {
  const { t } = useTranslation()

  useEffect(() => {
    addSectionId(SECTION_ID)
  }, [addSectionId])

  return (
    <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
      <div className="pb-4 text-xl text-white font-bold">
        <h2 className="text-xl text-white font-pbold">{t("techStack.title")}</h2>
      </div>
      <p className="pb-6 leading-relaxed text-slate-400">{t("techStack.subtitle")}</p>

      <div className="marquee overflow-hidden py-2">
        {/* Two identical copies → -50% translate loops seamlessly. */}
        <div className="marquee-track" aria-hidden="false">
          {TECHS.map((tech) => (
            <TechItem key={`a-${tech.name}`} {...tech} />
          ))}
          {TECHS.map((tech) => (
            <TechItem key={`b-${tech.name}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
