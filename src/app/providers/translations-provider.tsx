"use client"

import { I18nextProvider } from "react-i18next"
import { createInstance, type Resource } from "i18next"
import { type ReactNode } from "react"
import initTranslations from "@/i18n"

interface TranslationsProviderProps {
  children: ReactNode
  locale: string
  namespaces: string[]
  resources: Resource
}

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}: TranslationsProviderProps) {
  const i18n = createInstance()

  // Synchronous init with the resources already fetched on the server, so
  // client components have translations on first render (no flash / fallback).
  initTranslations(locale, namespaces, i18n, resources)

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
