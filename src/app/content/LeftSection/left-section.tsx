"use client"
import type { ReactNode } from "react"
import { useTranslation } from "react-i18next"
import Entrance from "@/app/components/motion/entrance"
import Menu from "./menu"
import Header from "./header"
import Profile from "./contactCard"
import { Download, Mail, User, Instagram } from "lucide-react"
import profileData from "@/app/data/profile.json"

interface LeftSectionProps {
  menuItems: string[]
  currentSection: string
}

// Map serializable icon keys from profile.json to lucide components.
const ICONS: Record<string, ReactNode> = {
  download: <Download className="h-4 w-4" />,
  mail: <Mail className="h-4 w-4" />,
  instagram: <Instagram className="h-4 w-4" />,
  user: <User className="h-4 w-4 text-white" />,
}

// Map icon keys to translation keys for the button labels.
const LABEL_KEYS: Record<string, string> = {
  download: "profile.downloadCv",
  mail: "profile.email",
  instagram: "profile.instagram",
}

export default function LeftSection({ menuItems, currentSection }: LeftSectionProps) {
  const { t } = useTranslation()

  const profile = {
    ...profileData,
    title: t("profile.title"),
    name: t("header.name"),
    position: t("header.position"),
    icon: ICONS.user,
    buttons: profileData.buttons.map((button) => ({
      label: t(LABEL_KEYS[button.icon] ?? button.label),
      link: button.link,
      icon: ICONS[button.icon],
    })),
  }

  return (
    <div>
      <div className="sticky top-14 grid lg:grid-rows-[35%_45%_20%] lg:h-[87vh] gap-4 lg:gap-0 mb-16 lg:mb-0">
       <div className="space-y-4 ">
       <Header />
       <Entrance delay={0.2} className="md:ml-16 pt-6 md:pt-0 md:block flex justify-center items-center">
       <Profile
          image={profile.image}
          title={profile.title}
          name={profile.name}
          position={profile.position}
          pitch={profile.pitch}
          buttons={profile.buttons}
          icon={profile.icon}
        />
       </Entrance>
       </div>
        <Menu menuItems={menuItems.map((item) => ({ id: item, label: item }))} currentSection={currentSection} />
      </div>
    </div>
  )
}
