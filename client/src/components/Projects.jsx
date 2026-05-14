import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const projects = [
  {
    title: 'Hotel Room Booking & Management System',
    description:
      'Developed RESTful APIs and implemented full CRUD operations using Spring Boot and MySQL for managing hotel room data, including room creation, availability updates, reservation records, and deletion.',
    tech: ['Spring Boot', 'MySQL', 'REST API'],
    github: 'https://github.com/Gokulanand-M',
    demo: '#',
    gradient: 'from-blue-600/20 to-cyan-600/20',
    emoji: '🏨',
  },
  {
    title: 'Tourist Safety Application',
    description:
      'Built a mobile safety app using React Native for the frontend and Express.js for the backend REST APIs, featuring emergency contact support, real-time location sharing, and secure user authentication.',
    tech: ['React Native', 'Express.js'],
    github: 'https://github.com/Gokulanand-M',
    demo: '#',
    gradient: 'from-violet-600/20 to-purple-600/20',
    emoji: '🗺️',
  },
  {
    title: 'Diginex',
    description:
      'Developed a clean and professional company website using HTML and CSS, with structured layout, responsive design, and styled UI components to represent a modern digital business presence.',
    tech: ['HTML', 'CSS'],
    github: 'https://github.com/Gokulanand-M',
    demo: '#',
    gradient: 'from-emerald-600/20 to-teal-600/20',
    emoji: '🌐',
  },
  {
    title: 'Developer Portfolio',
    description:
      'Personal developer portfolio built with React.js and Vite, with smooth page animations and transitions powered by Framer Motion, featuring dark/light mode and a fully responsive layout.',
    tech: ['React.js', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Gokulanand-M',
    demo: '#',
    gradient: 'from-pink-600/20 to-rose-600/20',
    emoji: '💼',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative group glass rounded-2xl overflow-hidden gradient-border"
    >
      {/* Card top gradient banner */}
      <div className={`h-40 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
        <span className="text-6xl">{project.emoji}</span>
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        {/* Hover overlay with links */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm flex items-center justify-center gap-4"
            >
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.05 }}
                className="p-3 glass rounded-xl text-white hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </motion.a>
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1 }}
                className="p-3 glass rounded-xl text-white hover:text-accent transition-colors"
                aria-label="Live Demo"
              >
                <FiExternalLink size={20} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Card body */}
      <div className="p-6 space-y-4">
        <h3 className="text-lg font-semibold font-poppins text-white group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-2.5 py-1 text-xs rounded-lg bg-white/5 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-primary transition-colors"
          >
            <FiGithub size={14} /> Code
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            <FiExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeader
        label="Projects"
        title="What I've Built"
        subtitle="A selection of projects that showcase my skills and passion for development."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
