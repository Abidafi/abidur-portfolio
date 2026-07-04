'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import data from '@/data/portfolioData.json'

export default function Projects() {
  const featuredProjects = data.projects.filter(p => p.featured)

  return (
    <section className="section-padding relative" id="projects">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          A curated collection of robust full-stack systems, performance engineering, and immersive 3D spatial web experiences.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-br from-[#6C63FF]/20 to-[#FF6B6B]/20 flex items-center justify-center relative">
                <span className="text-6xl">🚀</span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link href={`/projects/${project.id}`} className="bg-[#6C63FF] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#6C63FF]/80 transition-colors text-white">
                    View Details
                  </Link>
                </div>
                <span className="absolute top-3 right-3 glass-effect text-xs px-3 py-1 rounded-full text-gray-700">Featured</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="glass-effect px-2 py-1 rounded-full text-xs text-gray-700">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="glass-effect px-2 py-1 rounded-full text-xs text-gray-500">+{project.technologies.length - 3}</span>
                  )}
                </div>
                <div className="flex gap-3 mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6C63FF] transition-colors">GitHub →</a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#6C63FF] transition-colors">Demo →</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}