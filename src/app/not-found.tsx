import "./globals.css"
import Link from "next/link"

// Global not-found for routes outside the [locale] segment. It renders its own
// <html>/<body> because there is no root layout (the [locale] layout is the
// only one that provides them). See nextjs.org/docs/messages/missing-root-layout-tags
export default function GlobalNotFound() {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 text-center">
          <p className="text-6xl font-bold text-teal-300">404</p>
          <h1 className="text-2xl font-bold text-white">Page not found · ไม่พบหน้านี้</h1>
          <p className="max-w-md text-sm text-slate-400">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/"
            className="mt-2 rounded-md border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-500/20"
          >
            Back to home · กลับหน้าแรก
          </Link>
        </div>
      </body>
    </html>
  )
}
