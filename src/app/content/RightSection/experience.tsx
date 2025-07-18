"use client"
import { ArrowUpRight } from 'lucide-react'
import React, { useEffect } from 'react'

interface ExperienceProps {
    addSectionId: (sectionId: string) => void;
}
const SECTION_ID = 'experience'

function Experience({ addSectionId }: ExperienceProps) {
    useEffect(() => {
        addSectionId(SECTION_ID)
    }, [])

    return (
        <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
            <div className="pb-4">
                <p className="text-xl text-white font-bold">Experience</p>
            </div>
            <div className="space-y-4">
                <div className="group bg-slate-600/10 border border-slate-700 rounded-lg hover:bg-slate-800/80 hover:border transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                                2025 — Present
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                   <span className='md:max-w-full max-w-[250px] truncate'> Junior Frontend Developer • Sme Profile</span>
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                   My main responsibilities include creating the user-facing web pages, connecting to backend APIs to fetch and send data, and implementing Figma designs into functional websites. Daily, I write TypeScript, Tailwind CSS, Material-UI, Next.js, and React code to build responsive user interfaces, work with REST APIs to display dynamic content, and ensure the final output precisely matches the designers vision.
                                </p>
                                {/* <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        NextJs
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        TailwindCss
                                    </span>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Experience