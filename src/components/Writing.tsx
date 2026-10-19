import { ArrowUpRight } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Writing() {
  const articles = [
    { title: "A Dream I had Last Night", desc: "Do you know what I have dreamt of last night? I saw a dazzling star." },
    { title: "A Letter to You as I have Just Died", desc: "Don't cry, human. I know it may have hurt you a little." },
    { title: "Happy Personal Competitive Programming Day", desc: "It was October 18, 2017. Shohag made a strong determination..." },
  ];

  return (
    <section id="writing" className="max-w-5xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Writing</h2></FadeIn>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <FadeIn delay={0.1} className="lg:col-span-5">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 shadow-sm flex flex-col justify-between h-full min-h-[400px]">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">Life is Unfair</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">You are certain that this is the time. This is the round that will be referred to as "yours."</p>
            </div>
            <div className="flex justify-between items-center mt-8 pt-4 border-t border-slate-100 dark:border-slate-800">
              <span className="text-sm font-semibold text-slate-900 dark:text-white">Read the essay</span>
              <ArrowUpRight size={16} />
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2} className="lg:col-span-7">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm h-full">
            <div className="space-y-6">
               {articles.map((article, i) => (
                 <div key={i} className="group cursor-pointer flex justify-between items-start gap-4">
                    <div>
                      <h4 className="font-semibold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{article.title}</h4>
                      <p className="text-sm text-slate-500 line-clamp-2 mt-1">{article.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}