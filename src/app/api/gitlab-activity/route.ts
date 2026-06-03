import { NextResponse } from "next/server"

const GITLAB_USERNAME = "Chayakorn_po65"
const CALENDAR_URL = `https://gitlab.com/users/${GITLAB_USERNAME}/calendar.json`

// Re-fetch from GitLab at most once an hour.
export const revalidate = 3600

export async function GET() {
  try {
    const res = await fetch(CALENDAR_URL, {
      headers: { Accept: "application/json" },
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      return NextResponse.json({}, { status: 200 })
    }

    const data: Record<string, number> = await res.json()
    return NextResponse.json(data, {
      headers: { "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400" },
    })
  } catch {
    return NextResponse.json({}, { status: 200 })
  }
}
