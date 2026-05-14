import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`py-24 px-6 max-w-6xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionHeader({ label, title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <span className="inline-block px-4 py-1.5 glass rounded-full text-xs font-semibold text-accent uppercase tracking-widest mb-4">
        {label}
      </span>
      <h2 className="section-title gradient-text mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 max-w-xl mx-auto">{subtitle}</p>}
    </div>
  )
}
