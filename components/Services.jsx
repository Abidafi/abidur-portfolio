'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

const icons = { code: '💻', speed: '⚡', '3d': '🎨', cloud: '☁️' }

export default function Services() {
  const { services } = data

  return (
    <section className="section-padding relative" id="services">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Services & What I Bring <span className="gradient-text">To The Table</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center hover:scale-[1.05] transition-all duration-300"
            >
              <div className="text-4xl mb-4">{icons[service.icon] || '🚀'}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}