import { AnimatedBackground } from "@/app/components/animated-background"
import ProfileSidebar from "./content/profile/page"
import  {ContentSection}  from "./content/page"
import Toggle from "./components/theme-toggle"

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="container mx-auto px-20 min-h-screen flex gap-6 py-8 md:py-20">
        <div className="sticky top-20 w-1/2 lg:w-full h-full pl-20">
          <ProfileSidebar />
          {/* <Toggle />  */}
        </div>

        <div className="w-1/2 lg:w-full pr-20">
          <ContentSection />
        </div>
      </div>
    </AnimatedBackground>
  )
}
