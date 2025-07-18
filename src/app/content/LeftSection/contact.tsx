import { Instagram, Facebook } from "lucide-react";
import socialLinks from "@/app/data/contact.json";

const icons: { [key: string]: React.ElementType } = {
  instagram: Instagram,
  facebook: Facebook
};

export default function Contact() {
  return (
    <div className="flex items-end gap-4 text-2xl lg:mb-24">
      {socialLinks.map((social) => {
        const Icon = icons[social.id];
        if (!Icon) return null;

        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <Icon className="text-white hover:text-teal-300 hover:scale-125 hover:text-primary transition-all cursor-pointer" />
          </a>
        );
      })}
    </div>
  );
}
