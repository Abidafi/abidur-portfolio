import data from '@/data/portfolioData.json'

export default function Footer() {
  const { personal } = data
  const currentYear = new Date().getFullYear()

  return (
    <footer className="glass-effect border-t border-gray-200 section-padding">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-3">{personal.name}</h3>
            <p className="text-gray-600 text-sm">{personal.title}</p>
          </div>
          <div className="text-center">
            <h4 className="font-bold mb-2 text-gray-900">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <a href="#home" className="hover:text-[#6C63FF] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#6C63FF] transition-colors">About</a>
              <a href="#projects" className="hover:text-[#6C63FF] transition-colors">Projects</a>
              <a href="#contact" className="hover:text-[#6C63FF] transition-colors">Contact</a>
            </div>
          </div>
          <div className="text-right">
            <h4 className="font-bold mb-2 text-gray-900">Connect</h4>
            <div className="flex justify-end gap-3">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-2 rounded-full transition-all">🐙</a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-2 rounded-full transition-all">🔗</a>
              <a href={personal.social.twitter} target="_blank" rel="noopener noreferrer" className="glass-effect glass-hover p-2 rounded-full transition-all">🐦</a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-8 pt-8 border-t border-gray-200">
          © {currentYear} {personal.name}. All rights reserved.
        </div>
      </div>
    </footer>
  )
}