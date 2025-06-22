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
        <section id={SECTION_ID} className="scroll-m-24">
            <div className="pb-4">
                <p className="text-xl text-white font-bold">Experience</p>
            </div>
            <div className="space-y-4">
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 hover:border transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                                2024 — Present
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    Senior Frontend Engineer, Accessibility • Klaviyo
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Build and maintain critical components used to construct Klaviyo's frontend, across the whole product.
                                    Work closely with cross-functional teams, including developers, designers, and product managers to
                                    implement and advocate for best practices in web accessibility.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">React</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Storybook
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                                2018 — 2024
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    Lead Engineer • Upstatement
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Delivered high-quality, robust production code for a diverse array of projects for clients including
                                    Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt
                                    University, The 19th News, and more.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        TypeScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">React</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">Vue</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Node.js
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide lg:w-32 flex-shrink-0">
                                2016 — 2018
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    UI Engineer Co-op • Apple
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Developed and shipped highly interactive web applications for Apple Music using Ember.js. Built and
                                    shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        JavaScript
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Ember.js
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">Ruby</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Handlebars
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