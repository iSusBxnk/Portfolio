import type React from "react"
import type { Metadata } from "next"
import { dir } from "i18next"
import { Geist, Geist_Mono, Kanit } from "next/font/google"
import "../globals.css"
import { ViewTransitions } from "next-view-transitions"
import { ThemeProvider } from "@/app/providers/theme-provider"
import TranslationsProvider from "@/app/providers/translations-provider"
import LanguageSwitcher from "@/app/components/language-switcher"
import initTranslations from "@/i18n"
import i18nConfig from "../../../i18nConfig"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// Thai display font — applied only when the active locale is Thai (see globals.css).
const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
})

const SITE_URL = "https://chayakorn-portfolio.vercel.app"

const i18nNamespaces = ["translation"]

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Chayakorn Phukhiao — Frontend Developer",
    template: "%s · Chayakorn Phukhiao",
  },
  description:
    "Portfolio of Chayakorn Phukhiao, a Frontend Developer focused on accessible, high-performance web experiences built with Next.js, React and TypeScript.",
  keywords: [
    "Chayakorn Phukhiao",
    "Frontend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Chayakorn Phukhiao" }],
  creator: "Chayakorn Phukhiao",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Chayakorn Phukhiao",
    title: "Chayakorn Phukhiao — Frontend Developer",
    description:
      "Frontend Developer focused on accessible, high-performance web experiences built with Next.js, React and TypeScript.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chayakorn Phukhiao — Frontend Developer",
    description:
      "Frontend Developer focused on accessible, high-performance web experiences built with Next.js, React and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const { resources } = await initTranslations(locale, i18nNamespaces)

  return (
    <ViewTransitions>
      <html lang={locale} dir={dir(locale)} className="h-full bg-black no-scrollbar">
        <body className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased  h-full`}>
          <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
            <ThemeProvider>
              <LanguageSwitcher className="hidden lg:flex fixed top-6 right-6 z-50" />
              {children}
            </ThemeProvider>
          </TranslationsProvider>
        </body>
      </html>
    </ViewTransitions>
  )
}
