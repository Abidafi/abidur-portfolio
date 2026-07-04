'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

export default function Skills() {
  const { skills } = data

  const skillCategories = [
    { name: 'Frontend', skills: skills.frontend, color: '#6C63FF' },
    { name: 'Backend & Database', skills: skills.backend, color: '#FF6B6B' },
    { name: 'Tools & DevOps', skills: skills.tools, color: '#4ECDC4' },
  ]

  const skillLevels = {
    'React.js': 90, 'Next.js': 85, 'TypeScript': 80, 'Tailwind CSS': 85,
    'Framer Motion': 75, 'Node.js': 80, 'Express.js': 75, 'Python': 70,
    'REST APIs': 85, 'MongoDB': 75, 'Git & GitHub': 90, 'Docker': 70,
    'AWS': 65, 'CI/CD': 70
  }

  return (
    <section className="section-padding relative" id="skills">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-4" style={{ color: category.color }}>{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const level = skillLevels[skill] || 70
                  return (
                    <div key={skill}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-700">{skill}</span>
                        <span className="text-gray-500">{level}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}aa)`, width: `${level}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}