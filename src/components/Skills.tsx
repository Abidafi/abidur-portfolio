import FadeIn from "./FadeIn";
import {
  Layout,
  Server,
  Database,
  Cpu,
  Cloud,
  PenTool
} from "lucide-react";

export default function Skills() {
  const columns = [
    {
      groups: [
        {
          title: "Frontend",
          icon: Layout,
          items: ["Javascript", "React", "Next.js", "Tailwind CSS", "shadCN", "DaisyUI", "HTML5", "CSS3"],
        },
        {
          title: "Backend",
          icon: Server,
          items: ["Node.js", "Express.js", "MongoDB", "Mongoose", "PostgreSQL", "REST API", "Prisma"],
        },
      ],
    },
    {
      groups: [
        {
          title: "Forms / Data",
          icon: Database,
          items: ["Fetch API", "React Hook Form", "React Toastify", "Role-based UI"],
        },
        {
          title: "UI / Styling",
          icon: PenTool,
          items: ["Tailwind CSS", "Daisy UI", "Framer Motion", "Recharts", "Responsive Design"],
        },
      ],
    },
    {
      groups: [
        {
          title: "DevOps & Cloud",
          icon: Cloud,
          items: ["Docker", "Nginx", "CI/CD Pipelines", "AWS"],
        },
        {
          title: "AI",
          icon: Cpu,
          items: ["RAG Pipelines", "Vector Databases", "Prompt Engineering"],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-20 bg-slate-100/50 dark:bg-slate-900/50 rounded-3xl">
      <FadeIn>
        <h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">
          Skills
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {columns.map((col, colIdx) => (
          <FadeIn key={colIdx} delay={colIdx * 0.1}>
            <div className="bg-slate-100/70 dark:bg-slate-900/60 p-5 rounded-3xl border border-slate-200/60 dark:border-slate-800/60 space-y-5 h-full">
              {col.groups.map((group, groupIdx) => {
                const Icon = group.icon;
                return (
                  <div
                    key={groupIdx}
                    className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-4 text-slate-800 dark:text-slate-200">
                      <Icon size={18} className="text-slate-500 dark:text-slate-400" />
                      <h3 className="text-sm font-semibold tracking-wide">
                        {group.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium px-3 py-1.5 text-xs rounded-xl border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}