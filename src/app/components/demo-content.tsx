"use client"

import { useTheme } from "@/app/providers/theme-provider"

export function DemoContent() {
  const { theme } = useTheme()

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-300 bg-clip-text text-transparent">
          Animated Background
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          เคลื่อนไหวเมาส์ของคุณเพื่อดูพื้นหลังที่เปลี่ยนแปลงตามตำแหน่ง cursor
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Light Theme</h3>
            <p className="text-gray-600 dark:text-gray-400">พื้นหลังสีอ่อนที่นุ่มนวลและสบายตา เหมาะสำหรับการใช้งานในเวลากลางวัน</p>
          </div>

          <div className="p-8 rounded-2xl bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Dark Theme</h3>
            <p className="text-gray-600 dark:text-gray-400">
              พื้นหลังสีเข้มที่ช่วยลดความเมื่อยล้าของสายตา เหมาะสำหรับการใช้งานในเวลากลางคืน
            </p>
          </div>
        </div>

        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-white/20 to-white/10 dark:from-gray-800/20 dark:to-gray-800/10 backdrop-blur-sm border border-white/20 dark:border-gray-700/20">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Current Theme: {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">คลิกปุ่มสลับธีมที่มุมขวาบนเพื่อเปลี่ยนระหว่าง Light และ Dark mode</p>
        </div>
      </div>
    </div>
  )
}
