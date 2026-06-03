"use client"

import "./globals.css"

// Catches errors thrown in the root — must provide its own <html>/<body>.
export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html lang="th" className="h-full bg-black">
      <body className="h-full antialiased">
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-black px-6 text-center">
          <h1 className="text-2xl font-bold text-white">เกิดข้อผิดพลาด · Something went wrong</h1>
          <button
            onClick={reset}
            className="rounded-md border border-teal-500/40 bg-teal-500/10 px-4 py-2 text-sm font-medium text-teal-300 transition-colors hover:bg-teal-500/20"
          >
            ลองใหม่ · Try again
          </button>
        </div>
      </body>
    </html>
  )
}
