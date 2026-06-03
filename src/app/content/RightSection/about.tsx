"use client"
import Link from "next/link"
import React, { useEffect } from "react"
import { Trans, useTranslation } from "react-i18next"

interface AboutProps {
  addSectionId: (sectionId: string) => void
}

const SECTION_ID = "about"
function About({ addSectionId }: AboutProps) {
  const { t } = useTranslation()

  useEffect(() => {
    addSectionId(SECTION_ID)
  }, [addSectionId])

  return (
    <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
      <div className="pb-4 text-xl text-white font-bold">
        <h2 className="text-xl text-white font-pbold">{t("about.title")}</h2>
      </div>
      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          <Trans
            i18nKey="about.p1"
            components={{
              1: <span className="text-white hover:text-teal-300 cursor-pointer" />,
            }}
          />
        </p>
        <p>
          <Trans
            i18nKey="about.p2"
            components={{
              1: (
                <Link
                  href="https://spacetrax.co/"
                  target="_blank"
                  className="text-white hover:text-teal-300 font-semibold cursor-pointer duration-0"
                />
              ),
            }}
          />
        </p>
      </div>
    </section>
  )
}

export default About
