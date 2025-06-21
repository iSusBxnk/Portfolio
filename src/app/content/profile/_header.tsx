import { ChevronDown } from "lucide-react"
import Link from "next/link"
export default function Header() {

    return (

        <div className="flex flex-col gap-2">
        <Link href="#about" className="text-4xl lg:text-5xl font-bold text-amber-400 tracking-tight">Chayakorn Phukhiao</Link>
        <p className="text-xl lg:text-2xl font-medium text-slate-200">Front End Developer</p>
        <p className="text-slate-400 text-lg leading-relaxed max-w-xs">
            A passionate front-end developer dedicated to crafting exceptional digital experiences.
        </p>
        <div className="">
            <Link
                href={"#"}
                className="flex items-center text-white bg-amber-400/40 rounded-md px-4 py-2 w-fit"
                >
                View Resume
                <span className="inline-block rotate-90">
                    <ChevronDown size={20} className="animate-bounce " />
                </span>
            </Link>
        </div>
    </div>
            )
}
