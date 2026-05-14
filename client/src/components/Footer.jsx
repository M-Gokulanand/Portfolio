import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi'

const socials = [
  { icon: FiGithub, href: 'https://github.com/Gokulanand-M', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/gokulanand-m', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:gokulanandm12@gmail.com', label: 'Email' },
]

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Footer() {
  const scrollTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative border-t border-white/5 bg-dark-800/50">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold font-poppins gradient-text cursor-pointer"
            onClick={() => scrollTo('home')}
          >
            GM<span className="text-white">.</span>
          </motion.span>

          {/* Nav links */}
          <ul className="flex flex-wrap justify-center gap-6">
            {navLinks.map(link => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className="text-sm text-gray-500 hover:text-primary transition-colors"
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>

          {/* Socials */}
          <div className="flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2, y: -2 }}
                className="p-2 text-gray-500 hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-gray-600 text-sm flex items-center justify-center gap-1.5">
            Built with <FiHeart className="text-primary" size={14} /> by{' '}
            <span className="text-gray-400 font-medium">Gokulanand M</span>
            <span className="mx-1">·</span>
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
