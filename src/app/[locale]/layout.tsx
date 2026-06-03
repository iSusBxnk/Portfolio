import type React from "react"
import type { Metadata } from "next"
import { dir } from "i18next"
import { Geist, Geist_Mono, Kanit } from "next/font/google"
import "../globals.css"
import { ViewTransitions } from "next-view-transitions"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/app/providers/theme-provider"
import TranslationsProvider from "@/app/providers/translations-provider"
import LanguageSwitcher from "@/app/components/language-switcher"
import ScrollToTop from "@/app/components/scroll-to-top"
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const { t } = await initTranslations(locale, i18nNamespaces)
  const title = t("meta.title")
  const description = t("meta.description")

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: title,
      template: "%s · Chayakorn Phukhiao",
    },
    description,
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
    alternates: {
      canonical: locale === i18nConfig.defaultLocale ? "/" : `/${locale}`,
      languages: { th: "/", en: "/en" },
    },
    openGraph: {
      type: "website",
      url: SITE_URL,
      siteName: "Chayakorn Phukhiao",
      locale: locale === "th" ? "th_TH" : "en_US",
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: { index: true, follow: true },
  }
}

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }))
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chayakorn Phukhiao",
  jobTitle: "Frontend Developer",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "SPACETRAX CO., LTD." },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Rajamangala University of Technology Lanna",
  },
  knowsAbout: ["Next.js", "React", "TypeScript", "TailwindCSS", "Frontend Development"],
  sameAs: [
    "https://www.linkedin.com/in/chayakorn-phukhiao-913652276/",
    "https://www.instagram.com/tabxnk_/",
    "https://gitlab.com/Chayakorn_po65",
  ],
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
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
          <TranslationsProvider locale={locale} namespaces={i18nNamespaces} resources={resources}>
            <ThemeProvider>
              <LanguageSwitcher className="hidden lg:flex fixed top-6 right-6 z-50" />
              {children}
              <ScrollToTop />
            </ThemeProvider>
          </TranslationsProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  )
}
