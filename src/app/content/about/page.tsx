import React from 'react'

function page() {
    return (
        <section id="about" className="space-y-6">
            <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                    I'm a developer passionate about crafting accessible, pixel-perfect user interfaces that blend thoughtful
                    design with robust engineering. My favorite work lies at the intersection of design and development,
                    creating experiences that not only look great but are meticulously built for performance and usability.
                </p>
                <p>
                    Currently, I'm a Senior Front-End Engineer at{" "}
                    <span className="text-teal-300 hover:text-teal-200 transition-colors cursor-pointer">Klaviyo</span>,
                    specializing in accessibility. I contribute to the creation and maintenance of UI components that power
                    Klaviyo's frontend, ensuring our platform meets web accessibility standards and best practices to deliver an
                    inclusive user experience.
                </p>
                <p>
                    In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
                    <span className="text-teal-300">advertising agencies</span> and{" "}
                    <span className="text-teal-300">large corporations</span> to{" "}
                    <span className="text-teal-300">start-ups</span> and{" "}
                    <span className="text-teal-300">small digital product studios</span>. Additionally, I also released a{" "}
                    <span className="text-teal-300">comprehensive video course</span> a few years ago, guiding learners through
                    building a web app with the Spotify API.
                </p>
                <p>
                    In my spare time, I'm usually climbing, reading, hanging out with my wife and two cats, or running around
                    Hyrule searching for <span className="text-teal-300">Korok seeds</span>.
                </p>
            </div>
        </section>
    )
}

export default page