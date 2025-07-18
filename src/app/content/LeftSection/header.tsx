import { ChevronDown } from "lucide-react"
import Link from "next/link"
import data from "@/app/data/header.json"


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
                {headerData.name}
            </Link>
            <p className="text-xl lg:text-2xl font-medium  text-slate-200">{headerData.position}</p>
            <p className="text-slate-400 text-lg leading-relaxed ">
                {headerData.description}
            </p>
            <div className="">
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
            </div>
        </div>
    )
}
