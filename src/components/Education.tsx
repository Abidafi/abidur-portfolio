import { Calendar, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

export default function Education() {
  const educationData = [
    { degree: "M.Sc.", institution: "Brandenburg University of Technology - BTU Cottbus", major: "M.Sc. in Environmental Resources Management (Study Leave)", period: "October 2021 - February 2025", location: "Cottbus, Germany" },
    { degree: "B.Sc.", institution: "International University of Business Agriculture & Technology", major: "Civil Engineering", period: "January 2010 - August 2013", location: "Dhaka, Bangladesh" }
  ];

  return (
    <section id="education" className="max-w-5xl mx-auto px-6 py-20">
      <FadeIn><h2 className="text-4xl font-bold tracking-tight mb-10 text-slate-900 dark:text-white">Education</h2></FadeIn>
      <div className="space-y-4">
        {educationData.map((edu, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center">
              <div className="w-16 h-16 bg-slate-50 dark:bg-slate-800 rounded-2xl flex-shrink-0 flex items-center justify-center border border-slate-100 dark:border-slate-700">
                 <span className="text-xs font-bold text-slate-400">{edu.degree}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium mt-1">{edu.major}</p>
                <div className="flex flex-wrap gap-4 text-sm text-slate-500 mt-3">
                  <span className="flex items-center gap-1.5"><Calendar size={14}/> {edu.period}</span>
                  <span className="flex items-center gap-1.5"><MapPin size={14}/> {edu.location}</span>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}