import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://portfolio-delta-two-34ayi36biv.vercel.app/sitemap.xml",
  }
}
