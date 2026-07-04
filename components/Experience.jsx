'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

export default function Experience() {
  const { experience } = data

  return (
    <section className="section-padding relative" id="experience">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Featured <span className="gradient-text">Experience</span>
        </motion.h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.company}</h3>
                  <p className="text-[#6C63FF] font-medium">{exp.position}</p>
                </div>
                <span className="glass-effect px-4 py-1 rounded-full text-sm text-gray-700">{exp.period}</span>
              </div>
              <p className="text-gray-600 mt-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="glass-effect px-3 py-1 rounded-full text-xs text-gray-700">{tech}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}