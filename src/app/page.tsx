import { AnimatedBackground } from "@/app/components/animated-background"
import ProfileSidebar from "./content/profile/page"
import  {ContentSection}  from "./content/page"
import Toggle from "./components/theme-toggle"

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="container mx-auto min-h-screen flex gap-4 px-6 md:px-20 py-8 md:py-20">
        <div className="sticky top-20 w-1/2 lg:w-full h-full">
          <ProfileSidebar />
          <Toggle /> 
        </div>

        <div className="w-1/2 lg:w-full">
          <ContentSection />
        </div>
      </div>
    </AnimatedBackground>
  )
}
