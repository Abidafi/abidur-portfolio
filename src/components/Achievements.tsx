import { Trophy, Star, Code2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Achievements() {
  return (
    <section id="achievements" className="max-w-5xl mx-auto px-6 py-20">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Achievements</h2>
      </FadeIn>
      <div className="space-y-6">
        <FadeIn delay={0.1}>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-12 shadow-sm flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-32 h-32 bg-slate-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-700">
              <Trophy size={48} className="text-blue-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">2x ICPC World Finalist</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Qualified for the ICPC World Finals twice in 2021 and 2024 with my team, ranked 50th and 51st globally.</p>
              <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">ICPC Profile ↗</a>
            </div>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "IMO 2021 Problem Setter", icon: Star, color: "text-yellow-500", desc: "First from Bangladesh to have a problem shortlisted for the IMO." },
            { title: "Codeforces Grandmaster", icon: Code2, color: "text-blue-500", desc: "Peak rating 2412, ranking top 0.05% globally." },
            { title: "3,000+ GitHub Stars", icon: Star, color: "text-yellow-500", desc: "Created 'Code Library' - a comprehensive algorithmic repository." }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={0.2 + (idx * 0.1)}>
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm h-full flex flex-col">
                 <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center mb-4 shadow-sm border border-slate-100 dark:border-slate-700">
                   <item.icon size={24} className={item.color} />
                 </div>
                 <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                 <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}