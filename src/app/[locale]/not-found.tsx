"use client"

import { Link } from "next-view-transitions"
import { useTranslation } from "react-i18next"
import { useCurrentLocale } from "next-i18n-router/client"
import { localizedPath } from "@/app/lib/locale-path"
import i18nConfig from "../../../i18nConfig"

export default function NotFound() {
  const { t } = useTranslation()
  const locale = useCurrentLocale(i18nConfig) ?? i18nConfig.defaultLocale

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 text-center">
      <p className="text-6xl font-bold text-teal-300">404</p>
      <h2 className="text-2xl font-bold text-white">{t("notFound.title")}</h2>
      <p className="max-w-md text-sm text-slate-400">{t("notFound.description")}</p>
      <Link
        href={localizedPath(locale, "/")}
        className="mt-2 rounded-md border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-500/20"
      >
        {t("notFound.home")}
      </Link>
    </div>
  )
}
