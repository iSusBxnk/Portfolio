"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'

interface AboutProps {
    addSectionId: (sectionId: string) => void;
}


const SECTION_ID = 'about'
function About ({ addSectionId }: AboutProps) {
    
    useEffect(() => {
        addSectionId(SECTION_ID)
    }, [])

    return (
        <section id={SECTION_ID} className="scroll-m-14">
            <div className="pb-4">
                <p className="text-xl text-white font-bold">About me</p>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    I am a <span className='text-white hover:text-teal-300 cursor-pointer '>Frontend Web Developer</span> who is passionate about creating great experiences that are well-balanced and appropriately designed in every dimension,
                    paying attention to every pixel detail to deliver user interfaces that are accessible and easy to use,
                    while committed to building high-performance websites that follow best development practices to create sustainable solutions that truly serve users' needs.
                </p>
                <p>
                    Currently, I work as a Junior Front-End Developer at <span className='text-white hover:text-teal-300 font-semibold cursor-pointer duration-0'><Link href="https://spacetrax.co/" target="_blank">SPACETRAX CO., LTD.</Link></span> {""}
                    My primary responsibilities include developing and maintaining UI components to align with specified designs, as well as writing code according to systematically designed workflows. I prioritize web accessibility standards and best practices to ensure users receive the most comprehensive and
                    efficient experience from every project we develop.
                </p>

            </div>
        </section>
    )
}

export default About