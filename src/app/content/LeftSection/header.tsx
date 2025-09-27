// import { ChevronDown } from "lucide-react"
import React from "react"
import Link from "next/link"
import data from "@/app/data/header.json"
import TextReveal from "@/app/components/typography/text-reveal"

interface HeaderData {
    name: string;
    position: string;
    description: string;
}
export default function Header() {


    const headerData: HeaderData = data as HeaderData;


    return (

        <div className="flex flex-col gap-2">
            <Link
                href="#about"
                className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
                style={{
                    textShadow: "3px 3px 6px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.2)"
                }}>
                    <TextReveal text={headerData.name} />
            </Link>
            <div className="text-xl lg:text-2xl font-medium  text-slate-200">
                <TextReveal text={headerData.position} />
            </div>
            <div className="text-slate-400 text-md leading-relaxed md:hidden block">
                <TextReveal text={headerData.description} />
            </div>
            {/* <div className="">
                <Link
                    href={"/Resume.pdf"}
                    target="_blank"
                    className="flex items-center text-white bg-teal-500 hover:bg-teal-600 rounded-md px-4 py-2 w-fit"
                >
                    View Resume
                    <span className="inline-block rotate-90">
                        <ChevronDown size={20} className="animate-bounce" />
                    </span>
                </Link>
            </div> */}
        </div>
    )
}
