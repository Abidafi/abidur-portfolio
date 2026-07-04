'use client'

import { motion } from 'framer-motion'

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Dhaka',
      period: '2020 - 2024',
      cgpa: '3.80',
      details: 'Major in Software Engineering with focus on Web Technologies and AI.'
    },
    {
      id: 2,
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka College',
      period: '2018 - 2020',
      gpa: '5.00',
      details: 'Science Group with major in Physics, Chemistry, and Mathematics.'
    },
    {
      id: 3,
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ideal School & College',
      period: '2016 - 2018',
      gpa: '5.00',
      details: 'Science Group with distinction in Mathematics and Physics.'
    }
  ]

  return (
    <section className="section-padding relative" id="education">
      <div className="container-custom">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          Educational <span className="gradient-text">Qualification</span>
        </motion.h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
            >
              <div className="flex flex-wrap justify-between items-start gap-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <p className="text-[#6C63FF] font-medium">{edu.institution}</p>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="glass-effect px-4 py-1 rounded-full text-sm text-gray-300">{edu.period}</span>
                  {edu.cgpa && (
                    <span className="text-sm text-gray-400">CGPA: <span className="text-[#6C63FF] font-bold">{edu.cgpa}</span></span>
                  )}
                  {edu.gpa && (
                    <span className="text-sm text-gray-400">GPA: <span className="text-[#6C63FF] font-bold">{edu.gpa}</span></span>
                  )}
                </div>
              </div>
              <p className="text-gray-400 mt-3">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}