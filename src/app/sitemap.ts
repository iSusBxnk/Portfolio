import type { MetadataRoute } from "next"

const SITE_URL = "https://portfolio-delta-two-34ayi36biv.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects"]
  const locales = ["", "/en"] // default (th) has no prefix; en is prefixed

  return locales.flatMap((localePrefix) =>
    paths.map((path) => ({
      url: `${SITE_URL}${localePrefix}${path}` || SITE_URL,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
    })),
  )
}
