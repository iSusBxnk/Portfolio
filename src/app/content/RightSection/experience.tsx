"use client"
import { ArrowUpRight } from "lucide-react"
import React, { useEffect } from "react"
import { useTranslation } from "react-i18next"

interface ExperienceProps {
  addSectionId: (sectionId: string) => void
}
const SECTION_ID = "experience"

function Experience({ addSectionId }: ExperienceProps) {
  const { t } = useTranslation()

  useEffect(() => {
    addSectionId(SECTION_ID)
  }, [addSectionId])

  return (
    <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
      <div className="pb-4">
        <p className="text-xl text-white font-bold">{t("experience.title")}</p>
      </div>
      <div className="space-y-4">
        <div className="hover:backdrop-blur-sm rounded-lg bg-gradient-to-b from-black/5 to-neutral-900/20 border-2 border-neutral-100/10  transition-all duration-300 hover:shadow-lg hover:shadow-slate-700/20 cursor-pointer">
          <div className="p-6">
            <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                {t("experience.period")}
              </div>
              <div className="flex-1 space-y-3">
                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                  <span className="md:max-w-full max-w-[250px] truncate"> {t("experience.role")}</span>
                  <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t("experience.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
