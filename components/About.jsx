'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

export default function About() {
  const { personal, skills } = data

  return (
    <section className="section-padding relative" id="about">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="gradient-text">Abidur</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Engineering Digital Experiences</h3>
            <p className="text-gray-600 leading-relaxed mb-6">{personal.bio}</p>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect rounded-xl p-4">
                <div className="text-[#6C63FF] font-bold">React & Next.js</div>
                <div className="text-sm text-gray-500">Frontend Specialist</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-[#6C63FF] font-bold">MERN Stack</div>
                <div className="text-sm text-gray-500">Full Stack Developer</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-[#6C63FF] font-bold">Three.js / XR</div>
                <div className="text-sm text-gray-500">3D & Immersive</div>
              </div>
              <div className="glass-effect rounded-xl p-4">
                <div className="text-[#6C63FF] font-bold">DevOps</div>
                <div className="text-sm text-gray-500">Cloud & CI/CD</div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="glass-effect rounded-2xl p-6">
            <h4 className="text-xl font-bold mb-4 text-gray-900">Core Technology Expertise</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-[#6C63FF] font-medium mb-2">Frontend</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill) => (
                    <span key={skill} className="glass-effect px-3 py-1 rounded-full text-sm text-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-[#6C63FF] font-medium mb-2">Backend & Database</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill) => (
                    <span key={skill} className="glass-effect px-3 py-1 rounded-full text-sm text-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-[#6C63FF] font-medium mb-2">Tools & DevOps</h5>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="glass-effect px-3 py-1 rounded-full text-sm text-gray-700">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}