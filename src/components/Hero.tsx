import Image from "next/image";
import { Mail } from "lucide-react";
import { Github, Linkedin, Facebook } from "./BrandIcons";
import FadeIn from "./FadeIn";
import { heroData } from "@/data";

export default function Hero() {
  const socialLinks = [
    { Icon: Github, href: "https://github.com/Abidafi", label: "GitHub" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/abidrahman91/", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:abid19918february@gmail.com", label: "Email" },
    { Icon: Facebook, href: "https://www.facebook.com/abidur.rahman.712", label: "Facebook" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <FadeIn delay={0.1}>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {heroData.name}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            {heroData.roles}
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="h-px w-16 bg-slate-200 dark:bg-slate-700 my-6"></div>
          <p className="text-slate-600 dark:text-slate-400 font-medium">{heroData.achievements}</p>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex gap-3 pt-4">
            {socialLinks.map(({ Icon, href, label }, idx) => (
              <a
                key={idx}
                href={href}
                aria-label={label}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="p-3 bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white hover:shadow-md hover:-translate-y-1 transition-all"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
      <FadeIn delay={0.3} className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-slate-800">
        <Image src={heroData.image} alt={heroData.name} fill className="object-cover" priority />
      </FadeIn>
    </section>
  );
}