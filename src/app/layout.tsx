import type { ReactNode } from "react"

// Passthrough root layout. The real <html>/<body> live in [locale]/layout.tsx
// (locale-aware lang) and in not-found.tsx / global-error.tsx (rendered outside
// the [locale] segment). See nextjs.org/docs/messages/missing-root-layout-tags
export default function RootLayout({ children }: { children: ReactNode }) {
  return children
}
