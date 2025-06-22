import { ChevronDown, FileText, Github, Link, Linkedin } from "lucide-react"

export default function Contact() {

    return (
        <div className="flex items-end gap-4 text-2xl">
            <Github className="hover:scale-125 hover:text-primary transition-all cursor-pointer" />
            <Linkedin className="hover:scale-125 hover:text-primary transition-all cursor-pointer" />
            <FileText className="hover:scale-125 hover:text-primary transition-all cursor-pointer" />
        </div>
    )
}
