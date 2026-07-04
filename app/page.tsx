import ThreeBackground from '@/components/ThreeBackground'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Contact />
        <Footer />
      </main>
    </>
  )
}