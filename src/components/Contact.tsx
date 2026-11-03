import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Contact() {
  const links = [
    { name: "GitHub", url: "https://github.com/Abidafi" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/abidrahman91/" },
    { name: "Facebook", url: "https://www.facebook.com/abidur.rahman.712" }
  ];

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-200 dark:border-slate-800">
      <FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-slate-900 dark:text-white">Contact Me</h2>
            <p className="text-slate-600 dark:text-slate-400">Interested in working together? Feel free to reach out about engineering roles, collaborations, or other questions.</p>
          </div>
          <div className="flex items-center">
            <a href="mailto:abid19918february@gmail.com" className="group flex items-center justify-between w-full border-b border-slate-300 dark:border-slate-700 pb-4 text-xl font-medium text-slate-900 dark:text-white hover:text-blue-600 transition-colors">
              abid19918february@gmail.com
              <div className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center"><ArrowUpRight size={20} /></div>
            </a>
          </div>
        </div>
        
        {/* Links Grid with Centered Text */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          {links.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border-b border-slate-200 dark:border-slate-800 pb-2 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}