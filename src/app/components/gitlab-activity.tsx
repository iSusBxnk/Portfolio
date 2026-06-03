"use client"

import type React from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import { useTranslation } from "react-i18next"
import CountUp from "@/app/components/motion/count-up"

type Calendar = Record<string, number>

interface Day {
  date: string
  count: number
}

// Teal intensity scale that matches the portfolio accent.
const LEVELS = [
  "bg-slate-800/60", // 0
  "bg-teal-900/70", // 1-3
  "bg-teal-700/80", // 4-7
  "bg-teal-500/80", // 8-14
  "bg-teal-300", // 15+
]

function levelFor(count: number): number {
  if (count <= 0) return 0
  if (count <= 3) return 1
  if (count <= 7) return 2
  if (count <= 14) return 3
  return 4
}

// Build ~53 weeks (columns) of 7 days (rows), GitLab-style, ending today.
function buildWeeks(calendar: Calendar): { weeks: Day[][]; total: number; months: { index: number; label: string }[] } {
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const end = new Date(today)
  const start = new Date(today)
  start.setDate(start.getDate() - 364)
  // Back up to the start of that week (Sunday).
  start.setDate(start.getDate() - start.getDay())

  const days: Day[] = []
  let total = 0
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`
    const count = calendar[key] ?? 0
    total += count
    days.push({ date: key, count })
  }

  const weeks: Day[][] = []
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7))
  }

  // Month labels positioned at the week where a new month starts.
  const monthFmt = new Intl.DateTimeFormat("en", { month: "short" })
  const months: { index: number; label: string }[] = []
  let lastMonth = -1
  weeks.forEach((week, i) => {
    const first = week[0]
    if (!first) return
    const m = new Date(first.date).getMonth()
    if (m !== lastMonth) {
      months.push({ index: i, label: monthFmt.format(new Date(first.date)) })
      lastMonth = m
    }
  })

  return { weeks, total, months }
}

const SECTION_ID = "activity"

interface GitlabActivityProps {
  addSectionId?: (sectionId: string) => void
}

interface Tip {
  date: string
  count: string
  x: number
  y: number
}

export default function GitlabActivity({ addSectionId }: GitlabActivityProps) {
  const { t, i18n } = useTranslation()
  const [calendar, setCalendar] = useState<Calendar | null>(null)
  const [failed, setFailed] = useState(false)
  const [tip, setTip] = useState<Tip | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Force Gregorian calendar + Latin digits so Thai shows ค.ศ. like GitLab.
  const dateLocale = i18n.language === "th" ? "th-TH-u-ca-gregory-nu-latn" : "en"
  const dateFmt = useMemo(
    () =>
      new Intl.DateTimeFormat(dateLocale, {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
      }),
    [dateLocale],
  )

  const showTip = (day: Day, e: React.MouseEvent) => {
    const date = dateFmt.format(new Date(day.date))
    const count =
      day.count === 0
        ? t("activity.tooltipNone")
        : t("activity.tooltipCount", { count: day.count })
    setTip({ date, count, x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    addSectionId?.(SECTION_ID)
  }, [addSectionId])

  useEffect(() => {
    let active = true
    fetch("/api/gitlab-activity")
      .then((r) => r.json())
      .then((data) => active && setCalendar(data))
      .catch(() => active && setFailed(true))
    return () => {
      active = false
    }
  }, [])

  const { weeks, total, months } = useMemo(
    () => buildWeeks(calendar ?? {}),
    [calendar],
  )

  // Start scrolled to the right so the most recent days are visible first.
  useEffect(() => {
    if (calendar && scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth
    }
  }, [calendar])

  return (
    <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
      <div className="pb-4">
        <h2 className="text-xl text-white font-bold">{t("activity.title")}</h2>
        <p className="text-slate-400 text-sm">
          <CountUp value={total} className="text-teal-300 font-semibold" /> {t("activity.contributions")}
        </p>
      </div>

      <div className="rounded-lg border-2 border-neutral-100/10 bg-gradient-to-b from-black/5 to-neutral-900/20 p-4">
        {failed ? (
          <p className="text-slate-500 text-sm">{t("activity.error")}</p>
        ) : calendar === null ? (
          <p className="text-slate-500 text-sm">{t("activity.loading")}</p>
        ) : (
          <div>
            {/* Scrollable grid only */}
            <div ref={scrollRef} className="overflow-x-auto no-scrollbar">
              <div className="inline-flex flex-col gap-1 min-w-max">
                {/* Month labels */}
                <div className="flex gap-[3px] pl-1 text-[10px] text-slate-500">
                  {weeks.map((_, i) => {
                    const month = months.find((m) => m.index === i)
                    return (
                      <div key={i} className="w-[11px] shrink-0">
                        {month ? <span className="relative -left-px">{month.label}</span> : ""}
                      </div>
                    )
                  })}
                </div>

                {/* Grid: columns = weeks, rows = days */}
                <div className="flex gap-[3px]">
                  {weeks.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day) => (
                        <div
                          key={day.date}
                          onMouseEnter={(e) => showTip(day, e)}
                          onMouseMove={(e) => showTip(day, e)}
                          onMouseLeave={() => setTip(null)}
                          className={`h-[11px] w-[11px] rounded-[2px] cursor-pointer ring-white/40 hover:ring-1 ${LEVELS[levelFor(day.count)]}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend — outside the scroll container so it never scrolls with the grid */}
            <div className="flex items-center justify-start gap-1 pt-3 text-[10px] text-slate-500">
              <span>{t("activity.less")}</span>
              {LEVELS.map((cls, i) => (
                <div key={i} className={`h-[11px] w-[11px] rounded-[2px] ${cls}`} />
              ))}
              <span>{t("activity.more")}</span>
            </div>
          </div>
        )}
      </div>

      {tip && (
        <div
          className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-full rounded-md border border-neutral-100/10 bg-neutral-900/95 px-2.5 py-1.5 text-xs shadow-lg backdrop-blur-sm whitespace-nowrap text-center"
          style={{ left: tip.x, top: tip.y - 8 }}
        >
          <div className="font-semibold text-white">{tip.date}</div>
          <div className="text-slate-400">{tip.count}</div>
        </div>
      )}
    </section>
  )
}
