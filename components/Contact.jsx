'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'

export default function Contact() {
  const { personal } = data

  return (
    <section className="section-padding relative" id="contact">
      <div className="container-custom max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Reach Out & <span className="gradient-text">Let's Collaborate</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-effect rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">{personal.name}</h3>
              <p className="text-gray-400 mb-6">{personal.title}</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3"><span>📍</span><span className="text-gray-400">{personal.location}</span></p>
                <p className="flex items-center gap-3"><span>📧</span><a href={`mailto:${personal.email}`} className="text-[#6C63FF] hover:underline">{personal.email}</a></p>
                <p className="flex items-center gap-3"><span>📱</span><a href={`tel:${personal.phone}`} className="text-[#6C63FF] hover:underline">{personal.phone}</a></p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-3 rounded-full transition-all"><span>🐙</span></a>
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-3 rounded-full transition-all"><span>🔗</span></a>
                <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-3 rounded-full transition-all"><span>🐦</span></a>
              </div>
            </div>

            <div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full glass-effect glass-hover px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all" />
                <input type="email" placeholder="Your Email" className="w-full glass-effect glass-hover px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all" />
                <textarea placeholder="Your Message" rows={4} className="w-full glass-effect glass-hover px-4 py-3 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6C63FF] transition-all resize-none"></textarea>
                <button type="submit" className="w-full bg-[#6C63FF] hover:bg-[#6C63FF]/80 px-8 py-3 rounded-full text-white font-medium transition-all">Send Message 🚀</button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}