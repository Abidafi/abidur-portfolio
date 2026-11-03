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
              <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 flex-grow">{project.desc}</p>
              <div className="flex flex-wrap gap-2 text-xs text-slate-500 mb-6">
                 {project.tags.map(tag => <span key={tag} className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">{tag}</span>)}
              </div>
              {project.link && project.link !== "#" && (
                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 font-medium inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    Live Link ↗
                  </a>
                </div>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}