import { AnimatedBackground } from "@/app/components/background"
import { ContentSection } from "./content/page"
import Toggle from "./components/theme-toggle"
import { ArrowDown, ChevronDown, Download, FileText, Github, Linkedin } from "lucide-react"
import LeftSection from './content/Profile/page'
import About from "./content/about/page"
import Project from "./content/project/page"
export default function Home() {
  return (
    <AnimatedBackground>
      <div className="mt-14 mx-auto max-w-5xl grid grid-cols-[50%_50%]">
       
           <LeftSection/>
        
        <div>
          <div className=""><About /></div>
          <div className=""><Project/></div>
        </div>
      </div>
    </AnimatedBackground>
  )
}
