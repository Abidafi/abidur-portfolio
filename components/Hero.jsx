'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

export default function Hero() {
  const { personal } = data

  const handleDownloadResume = () => {
    alert('Resume download will be available once your resume is ready!')
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative section-padding" id="home">
      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-6 py-2 rounded-full glass-effect mb-6"
        >
          <span className="text-[#6C63FF] text-sm font-medium">✨ Open to Opportunities</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6C63FF] to-[#FF6B6B] p-[2px]">
            <div className="w-full h-full rounded-full bg-[#0A0A0F] flex items-center justify-center overflow-hidden text-6xl">
              👨‍💻
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
        >
          <span className="gradient-text">{personal.name}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-8"
        >
          {personal.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={handleDownloadResume}
            className="bg-[#6C63FF] hover:bg-[#6C63FF]/80 px-8 py-3 rounded-full text-white font-medium transition-all flex items-center gap-2"
          >
            📄 Download Resume
          </button>
          <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover px-8 py-3 rounded-full text-white font-medium transition-all">
            View Work
          </a>
          <a href={personal.social.whatsapp} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover px-8 py-3 rounded-full text-white font-medium transition-all">
            💬 Let's Talk
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-8 justify-center"
        >
          <div>
            <div className="text-3xl font-bold gradient-text">{personal.experience.split(' ')[0]}</div>
            <div className="text-sm text-gray-400">Years of Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">{data.projects.length}+</div>
            <div className="text-sm text-gray-400">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-gray-400">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}