"use client"

import { useTheme } from "@/app/providers/theme-provider"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative p-3 rounded-full
        bg-white/20 dark:bg-gray-800/20
        backdrop-blur-sm border border-white/30 dark:border-gray-700/30
        hover:bg-white/30 dark:hover:bg-gray-800/30
        transition-all duration-300
        group
        ${className}
      `}
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6">
        <Sun
          className={`
            absolute inset-0 w-6 h-6 text-yellow-500
            transition-all duration-300 transform
            ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}
          `}
        />
        <Moon
          className={`
            absolute inset-0 w-6 h-6 text-blue-400
            transition-all duration-300 transform
            ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}
          `}
        />
      </div>
    </button>
  )
}
