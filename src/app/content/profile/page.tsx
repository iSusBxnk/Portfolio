import React from 'react'
import Header from "./_header"
import Menu from "./_menu"
import Contact from "./_contact"

export default function LeftSection() {
    return (
        <div>
            <div className="sticky top-14 grid grid-rows-[35%_45%_20%] h-[87vh]">
                <Header />
                <Menu />
                <Contact />
            </div>
        </div>
  )
}
