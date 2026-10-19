import { Github, Monitor } from "lucide-react";
import FadeIn from "./FadeIn";
import { projectsData } from "@/data";

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Projects</h2></FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="border border-slate-200 dark:border-slate-800 rounded-3xl p-8 bg-white dark:bg-slate-900 shadow-sm flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                 {project.type === "OPEN SOURCE" ? <Github size={24} className="text-slate-700 dark:text-slate-300" /> : <Monitor size={24} className="text-slate-700 dark:text-slate-300" />}
                 {project.stars && <span className="text-xs font-semibold bg-yellow-100 text-yellow-700 px-2 py-1 rounded">⭐ {project.stars} stars</span>}
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-6">
                 {project.tags.map(tag => <span key={tag} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{tag}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}