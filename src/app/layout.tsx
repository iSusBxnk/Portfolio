import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/app/providers/theme-provider"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Resume",
  description: "Chayakorn Phukhiao's Resume",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full bg-slate-900 no-scrollbar">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased  h-full`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
