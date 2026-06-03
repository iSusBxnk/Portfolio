"use client"

import { useRouter, usePathname } from "next/navigation"
import { useCurrentLocale } from "next-i18n-router/client"
import i18nConfig from "../../../i18nConfig"

const LABELS: Record<string, string> = { th: "ไทย", en: "EN" }

export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useCurrentLocale(i18nConfig) ?? i18nConfig.defaultLocale

  const switchTo = (newLocale: string) => {
    if (newLocale === currentLocale) return

    // Persist choice for next-i18n-router.
    const days = 30
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString()
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`

    const isDefault = currentLocale === i18nConfig.defaultLocale
    const newIsDefault = newLocale === i18nConfig.defaultLocale

    // scroll: false keeps the reader where they are instead of jumping to top.
    if (isDefault) {
      // current path has no prefix → add one (unless switching to default)
      router.push(newIsDefault ? pathname : `/${newLocale}${pathname}`, { scroll: false })
    } else {
      // current path is prefixed with /<currentLocale> → swap or strip it
      const stripped = pathname.replace(`/${currentLocale}`, "") || "/"
      router.push(newIsDefault ? stripped : `/${newLocale}${stripped}`, { scroll: false })
    }
    router.refresh()
  }

  return (
    <div className={`flex items-center gap-1 text-sm font-semibold ${className}`}>
      {i18nConfig.locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-slate-600">/</span>}
          <button
            type="button"
            onClick={() => switchTo(locale)}
            aria-label={`Switch language to ${locale}`}
            aria-current={currentLocale === locale}
            className={`transition-colors duration-200 ${
              currentLocale === locale ? "text-teal-300" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {LABELS[locale] ?? locale.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  )
}
