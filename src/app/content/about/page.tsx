import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <section id="about" className="space-y-2">
        <div className="">
            <p className="text-xl text-white font-bold">About me</p>
        </div>
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    I am a <span className='text-amber-400 '>Frontend Web Developer</span> who is passionate about creating great experiences that are well-balanced and appropriately designed in every dimension,
                     paying attention to every pixel detail to deliver user interfaces that are accessible and easy to use,
                     while committed to building high-performance websites that follow best development practices to create sustainable solutions that truly serve users' needs.
                </p>
                <p>
                   Currently, I work as a Junior Front-End Developer at <span className='text-amber-400 font-semibold'><Link href="https://spacetrax.co/" target="_blank">SPACETRAX CO., LTD.</Link></span><br/>
                    My primary responsibilities include developing and maintaining UI components to align with specified designs, as well as writing code according to systematically designed workflows. I prioritize web accessibility standards and best practices to ensure users receive the most comprehensive and 
                   efficient experience from every project we develop.
                </p>
              
            </div>
        </section>
    )
}

export default page