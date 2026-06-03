"use client"
import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import TextReveal from "@/app/components/typography/text-reveal"

export default function Header() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-4xl lg:text-5xl font-bold text-white tracking-tight">
        <Link
          href="#about"
          style={{
            textShadow: "3px 3px 6px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.2)",
          }}
        >
          <TextReveal text={t("header.name")} />
        </Link>
      </h1>
      <div className="text-xl lg:text-2xl font-medium  text-slate-200">
        <TextReveal text={t("header.position")} />
      </div>
      <div className="text-slate-400 text-md leading-relaxed md:hidden block">
        <TextReveal text={t("header.description")} />
      </div>
    </div>
  )
}
