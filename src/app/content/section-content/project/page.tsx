import { ArrowUpRight } from 'lucide-react'
import React from 'react'

function page() {
  return (
    <section id="projects" className="space-y-8">
                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="lg:w-32 flex-shrink-0">
                                <img
                                    src="/placeholder.svg?height=80&width=120"
                                    alt="Project screenshot"
                                    className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-slate-200/30 w-full h-20 object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    Build a Spotify Connected App
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the
                                    principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">React</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Express
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Spotify API
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Heroku
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="lg:w-32 flex-shrink-0">
                                <img
                                    src="/placeholder.svg?height=80&width=120"
                                    alt="Project screenshot"
                                    className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-slate-200/30 w-full h-20 object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    Integrating Algolia Search with WordPress Multisite
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Building a custom multisite compatible WordPress plugin to build global search with Algolia. The
                                    plugin includes an admin interface built with React and webpack.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Algolia
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        WordPress
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">PHP</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">React</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="group bg-slate-800/50 border border-slate-700 rounded-lg hover:bg-slate-800/80 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 cursor-pointer">
                    <div className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
                            <div className="lg:w-32 flex-shrink-0">
                                <img
                                    src="/placeholder.svg?height=80&width=120"
                                    alt="Project screenshot"
                                    className="rounded border-2 border-slate-200/10 transition-colors group-hover:border-slate-200/30 w-full h-20 object-cover"
                                />
                            </div>
                            <div className="flex-1 space-y-3">
                                <h3 className="text-slate-200 font-medium group-hover:text-teal-300 transition-colors flex items-center">
                                    OctoProfile
                                    <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top
                                    languages, starred repositories, and sort through your top repos by number of stars, forks, and size.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">React</span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        GitHub API
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Chart.js
                                    </span>
                                    <span className="px-3 py-1 text-xs font-medium bg-teal-400/10 text-teal-300 rounded-full">
                                        Styled Components
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default page