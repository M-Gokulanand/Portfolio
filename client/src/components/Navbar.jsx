import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { HiSun, HiMoon } from 'react-icons/hi2'

const links = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = links.map(l => document.getElementById(l.toLowerCase()))
      sections.forEach(sec => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect()
          if (top <= 100 && bottom >= 100) setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1))
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.span
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold font-poppins gradient-text cursor-pointer"
          onClick={() => scrollTo('home')}
        >
          GM<span className="text-white">.</span>
        </motion.span>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`relative text-sm font-medium transition-colors duration-200 ${
                  active === link ? 'text-primary' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link}
                {active === link && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-lg glass text-gray-300 hover:text-white transition-colors"
          >
            {dark ? <HiSun size={18} /> : <HiMoon size={18} />}
          </motion.button>

          <button
            className="md:hidden p-2 rounded-lg glass text-gray-300"
            onClick={() => setOpen(o => !o)}
          >
            {open ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-800/95 backdrop-blur-xl border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map(link => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className={`text-sm font-medium w-full text-left py-2 transition-colors ${
                      active === link ? 'text-primary' : 'text-gray-400'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
