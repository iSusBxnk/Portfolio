"use client"
import React, { useEffect } from 'react'
import TextShimmer from '@/app/components/typography/text-shrim'

interface AboutProps {
    addSectionId: (sectionId: string) => void;
}


const SECTION_ID = 'Education'
function About({ addSectionId }: AboutProps) {

    useEffect(() => {
        addSectionId(SECTION_ID)
    }, [ addSectionId ])

    return (
        <section id={SECTION_ID} className="scroll-mt-8 lg:scroll-m-24">
            <div className="pb-4 text-xl text-white font-bold">
                <p className="text-xl text-white font-pbold">Education</p>
                {/* <TextShimmer>About me</TextShimmer> */}
            </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <pre className="overflow-hidden rounded-xl border-2 border-neutral-100/10 text-[13px] shadow-lg hover:shadow-slate-700/20 hover:shadow-lg">
                    <div className="flex flex-row items-center gap-2 border-b-2 bg-black/5 border-neutral-100/10 px-4 py-2">
                        <svg stroke="currentColor"
                            fill="currentColor"
                            stroke-width="0"
                            viewBox="0 0 24 24"
                            className="mr-1 size-4 text-white/40"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.25 12a.75.75 0 0 1-.22.53l-2.75 2.75a.75.75 0 0 1-1.06-1.06L7.44 12 5.22 9.78a.75.75 0 1 1 1.06-1.06l2.75 2.75c.141.14.22.331.22.53Zm2 2a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5h-5Z"></path>
                            <path d="M0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 22.25 21H1.75A1.75 1.75 0 0 1 0 19.25Zm1.75-.25a.25.25 0 0 0-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 0 0 .25-.25V4.75a.25.25 0 0 0-.25-.25Z"></path>
                        </svg>
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="min-h-[200px] bg-gradient-to-b from-black/5 to-neutral-900/10">
                        <div className="grid p-4 gap-2">
                            <div className="flex md:flex-row flex-col gap-[32px]">
                                <div className="text-white font-semibold w-[100px]">
                                    <span className="text-slate-500 uppercase font-semibold text-xs">2022 - 2025</span>
                                </div>
                                <div className="flex flex-col gap-1 w-full text-lg">
                                    <span className="text-white font-semibold text-lg mb-2">Bachelor&apos;s Degree</span>
                                    <span className="text-white font-semibold"><span className='md:block hidden'>University{` `}</span><span className="text-slate-500  font-normal text-ellipsis line-clamp-2">Rajamangala University of Technology Lanna</span></span>
                                    <span className="text-white font-semibold">Major {` `}<span className="text-slate-500  font-normal">InformationTechnology</span></span>
                                    <span className="text-lg mt-6 text-white font-semibold">GPA {` `} <span className="text-slate-500  font-normal">3.75</span></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </pre>
            </div>

        </section>
    )
}

export default About