import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import ProblemSetting from "@/components/ProblemSetting";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Writing from "@/components/Writing";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 space-y-12">
        <Hero />
        <Experience />
        <Achievements />
        <Skills />
        <ProblemSetting />
        <Projects />
        <Education />
        <Writing />
        <Contact />
      </div>
    </main>
  );
}