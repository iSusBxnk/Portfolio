import { AnimatedBackground } from "@/app/components/animated-background"
import { ThemeToggle } from "@/app/components/theme-toggle"
// import { DemoContent } from "@/app/components/demo-content"

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="fixed top-6 right-6 z-20">
        <ThemeToggle />
      </div>
    </AnimatedBackground>
  )
}
