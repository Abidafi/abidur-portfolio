import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-10 space-y-12">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </main>
  );
}