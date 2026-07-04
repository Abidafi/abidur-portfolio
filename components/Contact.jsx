'use client'

import { motion } from 'framer-motion'
import data from '@/data/portfolioData.json'
import { useState } from 'react'

export default function Contact() {
  const { personal } = data
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please fill in all fields.'
      })
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Please enter a valid email address.'
      })
      return
    }

    setStatus({
      loading: true,
      success: false,
      error: false,
      message: 'Sending your message...'
    })

    try {
      const mailtoLink = `mailto:${personal.email}?subject=Message from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Try to open email client
      window.location.href = mailtoLink

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: '✅ Your message has been sent! I\'ll get back to you soon.'
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, message: '' }))
      }, 5000)

    } 
    catch (error) {
      console.error('Error sending message:', error)
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: '❌ Failed to send message. Please try again or contact me directly via email.'
      })
    }
  }

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
          className="text-gray-600 text-center max-w-2xl mx-auto mb-12"
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{personal.name}</h3>
              <p className="text-gray-600 mb-6">{personal.title}</p>
              <div className="space-y-3">
                <p className="flex items-center gap-3">
                  <span>📍</span>
                  <span className="text-gray-600">{personal.location}</span>
                </p>
                <p className="flex items-center gap-3">
                  <span>📧</span>
                  <a href={`mailto:${personal.email}`} className="text-[#6C63FF] hover:underline">
                    {personal.email}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span>📱</span>
                  <a href={`tel:${personal.phone}`} className="text-[#6C63FF] hover:underline">
                    {personal.phone}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span>💬</span>
                  <a href={personal.social.whatsapp} target="_blank" rel="noopener noreferrer" className="text-[#6C63FF] hover:underline">
                    WhatsApp
                  </a>
                </p>
              </div>
              <div className="flex gap-4 mt-6">
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-3 rounded-full transition-all">
                  <span>🐙</span>
                </a>
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-3 rounded-full transition-all">
                  <span>🔗</span>
                </a>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-style"
                    disabled={status.loading}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="input-style"
                    disabled={status.loading}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={4}
                    className="input-style resize-none"
                    disabled={status.loading}
                    required
                  />
                </div>

                {/* Status Messages */}
                {status.message && (
                  <div className={`p-3 rounded-lg text-sm ${
                    status.success ? 'bg-green-50 text-green-700 border border-green-200' :
                    status.error ? 'bg-red-50 text-red-700 border border-red-200' :
                    'bg-blue-50 text-blue-700 border border-blue-200'
                  }`}>
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className={`w-full px-8 py-3 rounded-full text-white font-medium transition-all ${
                    status.loading 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-[#6C63FF] hover:bg-[#6C63FF]/80'
                  }`}
                >
                  {status.loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message 🚀'
                  )}
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}