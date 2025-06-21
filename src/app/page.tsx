import { AnimatedBackground } from "@/app/components/background"
import ProfileSidebar from "./content/profile/page"
import  {ContentSection}  from "./content/page"
import Toggle from "./components/theme-toggle"

export default function Home() {
  return (
    <AnimatedBackground>
      <div className="md:container md:mx-auto px-4 md:px-20 min-h-screen flex flex-col md:flex-row gap-6 py-20">
        <div className="w-full md:sticky top-20 md:w-1/2 lg:w-full h-full md:pl-20">
          <ProfileSidebar />
          {/* <Toggle />  */}
        </div>

        <div className="w-full md:w-1/2 lg:w-full md:pr-20">
          <ContentSection />
        </div>
      </div>
    </AnimatedBackground>
  )
}
