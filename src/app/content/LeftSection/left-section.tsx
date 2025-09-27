import Menu from "./menu"
import Header from "./header"
// import Contact from "./contact"
import Profile from "./contactCard"
import { Download , Mail, User, Instagram } from "lucide-react"
interface LeftSectionProps {
  menuItems: string[]
  currentSection: string
}

const profile = {
  image: "/peeps-avatar.png",
  title: "Profile",
  name: "Chayakorn Phukhiao",
  position: "Front End Developer",
  pitch: "",
  link: "https://www.linkedin.com/in/chayakorn-phukhiao-913652276/",
  icon: <User className="h-4 w-4 text-white" />,
  href:"#about",
  buttons: [
    {
      label: "Download CV",
      icon: <Download className="h-4 w-4" />,
      link: "/Resume.pdf"
    },
    {
      label: "Email",
      icon: <Mail className="h-4 w-4" />,
      link: "mailto:chayakon.code@gmail.com"
    },{
      label: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      link: "https://www.instagram.com/tabxnk_/"
    }
  ]
}

export default function LeftSection({ menuItems, currentSection }: LeftSectionProps) {
  return (
    <div>
      <div className="sticky top-24 grid lg:grid-rows-[35%_45%_20%] lg:h-[87vh] gap-4 lg:gap-0 mb-16 lg:mb-0">
       <div className="space-y-4 ">
       <Header />
       <div className="md:ml-16 pt-6 md:pt-0 md:block flex justify-center items-center">
       <Profile
          image={profile.image}
          title={profile.title}
          name={profile.name}
          position={profile.position}
          pitch={profile.pitch}
          buttons={profile.buttons}
          icon={profile.icon}
          // href={profile.href}
        />
       </div>
       </div>
        <Menu menuItems={menuItems.map((item) => ({ id: item, label: item }))} currentSection={currentSection} />
        {/* <Contact /> */}
      </div>
    </div>
  )
}
