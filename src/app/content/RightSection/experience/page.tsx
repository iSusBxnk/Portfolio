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
    }, [addSectionId])

    return (
        <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
            <div className="pb-4">
                <p className="text-xl text-white font-bold">Experience</p>
            </div>
            <div className="space-y-4">
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 hover:border transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                                2025 — Present
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    Junior Frontend Developer • Sme Profile
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At rerum mollitia facere fuga doloribus distinctio est, ab nulla neque? Consectetur a,
                                    excepturi asperiores praesentium omnis aut nemo qui eveniet impedit.
                                </p>
                                <div className="flex flex-wrap gap-2">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Experience