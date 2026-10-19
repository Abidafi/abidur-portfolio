import { Users, FileCode2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ProblemSetting() {
  return (
    <section id="problem-setting" className="max-w-5xl mx-auto px-6 py-20">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Problem Setting</h2>
      </FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <FadeIn delay={0.1} className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm h-full flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">International Mathematical Olympiad</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow">Honored to be the first Bangladeshi to have a problem shortlisted for the IMO, with Problem A3 selected in 2021.</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            <div><div className="text-3xl font-bold text-slate-900 dark:text-white">130+</div><div className="text-xs text-slate-500 mt-1">original problems authored</div></div>
            <div className="sm:pl-6 pt-4 sm:pt-0"><div className="text-3xl font-bold text-slate-900 dark:text-white">6</div><div className="text-xs text-slate-500 mt-1">Codeforces contests</div></div>
            <div className="sm:pl-6 pt-4 sm:pt-0"><div className="text-3xl font-bold text-slate-900 dark:text-white">40+</div><div className="text-xs text-slate-500 mt-1">setters led</div></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4"><Users size={14} /> CONTEST LEADERSHIP</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Coordinator of 7+ National Contests</h4>
            </div>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-4"><FileCode2 size={14} /> PROBLEM SETTER</div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Codeforces Contest Author</h4>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}