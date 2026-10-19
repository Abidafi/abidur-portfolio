import { Calendar, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";
import { experienceData } from "@/data";

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 py-20 space-y-8">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Work Experience</h2>
      </FadeIn>
      <div className="space-y-8">
        {experienceData.map((company, index) => (
          <FadeIn key={index} delay={index * 0.2}>
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col md:flex-row">
              <div className="bg-slate-50/50 dark:bg-slate-950/50 p-8 md:w-1/3 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800 flex flex-col items-start">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center text-2xl font-bold mb-4">
                  {company.logoText}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{company.company}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mb-6">{company.role}</p>
                <div className="space-y-3 text-sm text-slate-500 mt-auto">
                  <div className="flex items-center gap-2"><Calendar size={16}/> {company.period}</div>
                  <div className="flex items-center gap-2"><MapPin size={16}/> {company.location}</div>
                </div>
              </div>
              <div className="p-8 md:w-2/3 space-y-8">
                {company.jobs.map((job, jobIdx) => (
                  <div key={jobIdx} className={jobIdx !== 0 ? "pt-6 border-t border-slate-100 dark:border-slate-800" : ""}>
                    <div className="flex flex-col md:flex-row md:justify-between items-start mb-4 gap-2">
                      <h4 className="text-xl font-semibold text-slate-900 dark:text-white">{job.title}</h4>
                      <span className="text-sm text-slate-500 whitespace-nowrap">{job.period}</span>
                    </div>
                    {job.project && (
                       <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full mb-4">{job.project}</span>
                    )}
                    <ul className="list-disc list-outside ml-5 space-y-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {job.points.map((point, pIdx) => <li key={pIdx}>{point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}