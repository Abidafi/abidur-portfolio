import FadeIn from "./FadeIn";

export default function Skills() {
  const skillGroups = [
    { title: "Languages", items: ["C++", "Python", "JavaScript", "TypeScript", "C"] },
    { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Chakra UI", "HTML", "CSS"] },
    { title: "Backend & DB", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "REST API"] }
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Skills</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm h-full">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-3 py-1 text-sm rounded-md">{skill}</span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}