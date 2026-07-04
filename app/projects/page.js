'use client'

import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import data from '@/data/portfolioData.json'
import ThreeBackground from '@/components/ThreeBackground'

export default function ProjectDetail() {
  const params = useParams()
  const projectId = parseInt(params.id)
  const project = data.projects.find(p => p.id === projectId)

  const projectDetails = {
    1: {
      challenges: 'Implementing real-time data processing and optimizing database queries for millions of records was challenging. Had to implement caching strategies and WebSocket connections for live updates.',
      improvements: 'Add more AI features, implement predictive analytics, and create a mobile app version with React Native.',
      techStack: 'React, Node.js, Python, D3.js, TensorFlow.js, WebSocket, Redis, PostgreSQL'
    },
    2: {
      challenges: 'Integrating blockchain for carbon credits verification required understanding Solidity and smart contract development. Managing gas fees and transaction speeds was also challenging.',
      improvements: 'Implement more gamification features, partner with more NGOs, and add social sharing features for achievements.',
      techStack: 'Next.js, TypeScript, Tailwind CSS, Web3.js, Solidity, IPFS, Smart Contracts'
    },
    3: {
      challenges: 'Optimizing 3D models for web browsers without losing quality was challenging. Implementing wallet integration and ensuring security for NFT transactions.',
      improvements: 'Add VR support, implement bidding system for auctions, and create a mobile-first experience.',
      techStack: 'React, Three.js, Tailwind CSS, Ethereum, IPFS, Web3.js, Material-UI'
    }
  }

  const details = projectDetails[projectId] || {
    challenges: 'Challenge details not available.',
    improvements: 'Future improvements planned.',
    techStack: project?.technologies?.join(', ') || 'Various technologies'
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="glass-effect rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Project Not Found</h2>
          <Link href="/" className="text-[#6C63FF] hover:underline">← Back to Home</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <ThreeBackground />
      <main className="relative z-10 min-h-screen section-padding">
        <div className="container-custom max-w-4xl">
          <Link href="/#projects" className="text-[#6C63FF] hover:underline mb-6 inline-block">← Back to Projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-effect rounded-2xl p-8 md:p-12">
            <div className="w-full h-64 md:h-96 bg-gradient-to-br from-[#6C63FF]/20 to-[#FF6B6B]/20 rounded-2xl flex items-center justify-center mb-8">
              <span className="text-8xl">🚀</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{project.title}</h1>
            <p className="text-gray-600 text-lg mb-6">{project.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">🛠️ Technology Stack</h3>
              <div className="flex flex-wrap gap-2">
                {details.techStack.split(', ').map((tech) => (
                  <span key={tech} className="glass-effect px-3 py-1 rounded-full text-sm text-gray-700">{tech}</span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bg-[#6C63FF] hover:bg-[#6C63FF]/80 px-6 py-2 rounded-full text-white font-medium transition-all">🌐 Live Demo</a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover px-6 py-2 rounded-full text-gray-700 font-medium transition-all">📂 GitHub Repository</a>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">⚠️ Challenges Faced</h3>
              <p className="text-gray-600 leading-relaxed">{details.challenges}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">🚀 Future Improvements</h3>
              <p className="text-gray-600 leading-relaxed">{details.improvements}</p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}