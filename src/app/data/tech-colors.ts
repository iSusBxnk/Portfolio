// Tech-badge color classes. Kept as a .ts module (not .json) so Tailwind's
// content scanner picks up these class names and doesn't purge them.
// Keys are normalized (lowercase, no dots/spaces/dashes) so "Next.js",
// "NextJS" and "nextjs" all resolve to the same colour.
const TECH_COLORS: Record<string, string> = {
  nextjs: "bg-neutral-500/20 text-neutral-100 border-neutral-400/30",
  react: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  typescript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  javascript: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
  tailwindcss: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  mui: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  materialui: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  apexchart: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  apexcharts: "bg-violet-500/20 text-violet-300 border-violet-500/30",
  supabase: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
  postgresql: "bg-sky-600/20 text-sky-300 border-sky-600/30",
  golang: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  go: "bg-cyan-400/20 text-cyan-300 border-cyan-400/30",
  aws: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  docker: "bg-sky-500/20 text-sky-300 border-sky-500/30",
  nextauth: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  nodejs: "bg-green-500/20 text-green-300 border-green-500/30",
  redux: "bg-purple-600/20 text-purple-300 border-purple-600/30",
  figma: "bg-pink-500/20 text-pink-300 border-pink-500/30",
}

export const DEFAULT_TECH_COLOR = "bg-gray-500/20 text-gray-300 border-gray-500/30"

const normalize = (tech: string): string => tech.toLowerCase().replace(/[\s._-]/g, "")

export const getTechColor = (tech: string): string =>
  TECH_COLORS[normalize(tech)] ?? DEFAULT_TECH_COLOR
