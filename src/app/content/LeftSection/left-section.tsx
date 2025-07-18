import Menu from "./menu"
import Header from "./header"
import Contact from "./contact"

interface LeftSectionProps {
  menuItems: string[]
  currentSection: string
}

export default function LeftSection({ menuItems, currentSection }: LeftSectionProps) {
  return (
    <div>
      <div className="sticky top-24 grid lg:grid-rows-[35%_45%_20%] lg:h-[87vh] gap-4 lg:gap-0 mb-16 lg:mb-0">
        <Header />
        <Menu menuItems={menuItems.map((item) => ({ id: item, label: item }))} currentSection={currentSection} />
        <Contact />
      </div>
    </div>
  )
}
