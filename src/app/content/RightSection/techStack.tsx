"use client"
import Link from 'next/link'
import React, { useEffect } from 'react'
import Teach from '@/app/components/teach'

interface AboutProps {
    addSectionId: (sectionId: string) => void;
}


const SECTION_ID = 'techStack'
function About({ addSectionId }: AboutProps) {

    useEffect(() => {
        addSectionId(SECTION_ID)
    }, [])

    return (
        <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
            <div className="pb-4 text-xl text-white font-bold">
                <p className="text-xl text-white font-pbold">Tech Stack</p>
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <Teach />
            </div>
        </section>
    )
}

export default About