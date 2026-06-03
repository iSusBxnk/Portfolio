// Tech-badge color classes. Kept as a .ts module (not .json) so Tailwind's
// content scanner picks up these class names and doesn't purge them.
export const TECH_COLORS: Record<string, string> = {
  "Next.js": "bg-teal-500/20 text-teal-300 border-teal-500/30",
  TypeScript: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  React: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  SCSS: "bg-pink-500/20 text-pink-300 border-pink-500/30",
  Contentful: "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Storybook: "bg-purple-500/20 text-purple-300 border-purple-500/30",
  "React Native": "bg-blue-400/20 text-blue-300 border-blue-400/30",
  "Ruby on Rails": "bg-red-500/20 text-red-300 border-red-500/30",
  Firebase: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  WordPress: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  Timber: "bg-green-600/20 text-green-300 border-green-600/30",
  JavaScript: "bg-yellow-400/20 text-yellow-300 border-yellow-400/30",
  PHP: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  "Airtable API": "bg-orange-400/20 text-orange-300 border-orange-400/30",
  "Redux Toolkit": "bg-purple-600/20 text-purple-300 border-purple-600/30",
  Stripe: "bg-blue-500/20 text-blue-300 border-blue-500/30",
  Algolia: "bg-blue-400/20 text-blue-300 border-blue-400/30",
  "Firebase Auth": "bg-orange-500/20 text-orange-300 border-orange-500/30",
  Formik: "bg-blue-600/20 text-blue-300 border-blue-600/30",
  Vercel: "bg-gray-500/20 text-gray-300 border-gray-500/30",
  "Stats Perform API": "bg-green-500/20 text-green-300 border-green-500/30",
  Twig: "bg-green-600/20 text-green-300 border-green-600/30",
  Puppy: "bg-pink-400/20 text-pink-300 border-pink-400/30",
}

export const DEFAULT_TECH_COLOR = "bg-gray-500/20 text-gray-300 border-gray-500/30"

export const getTechColor = (tech: string): string =>
  TECH_COLORS[tech] ?? DEFAULT_TECH_COLOR
