import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  SiReact, SiSpringboot, SiMysql, SiJavascript,
  SiNodedotjs, SiGit, SiCplusplus
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const categories = [
  {
    title: 'Proficient',
    color: 'from-blue-500 to-cyan-400',
    skills: [
      { name: 'C++', icon: SiCplusplus, level: 85, color: '#00599C' },
      { name: 'Java', icon: FaJava, level: 85, color: '#ED8B00' },
      { name: 'SQL', icon: SiMysql, level: 80, color: '#4479A1' },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-violet-500 to-purple-400',
    skills: [
      { name: 'React.js', icon: SiReact, level: 75, color: '#61DAFB' },
      { name: 'HTML & CSS', icon: SiJavascript, level: 80, color: '#F7DF1E' },
    ],
  },
  {
    title: 'Backend & Tools',
    color: 'from-pink-500 to-rose-400',
    skills: [
      { name: 'Spring Boot', icon: SiSpringboot, level: 70, color: '#6DB33F' },
      { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
      { name: 'Git', icon: SiGit, level: 75, color: '#F05032' },
    ],
  },
]

function SkillBar({ name, icon: Icon, level, color }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon size={16} style={{ color }} />
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeader
        label="Skills"
        title="My Tech Stack"
        subtitle="Technologies I work with to build modern, scalable applications."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {categories.map(({ title, color, skills }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -4 }}
            className="card gradient-border space-y-5"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${color}`} />
              <h3 className="font-semibold text-white font-poppins">{title}</h3>
            </div>
            {skills.map(skill => (
              <SkillBar key={skill.name} {...skill} />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Tech icon cloud */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 flex flex-wrap justify-center gap-4"
      >
        {[SiReact, SiSpringboot, FaJava, SiMysql, SiJavascript, SiNodedotjs, SiGit, SiCplusplus].map((Icon, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.3, rotate: 5 }}
            className="p-3 glass rounded-xl text-gray-400 hover:text-primary transition-colors cursor-default"
          >
            <Icon size={24} />
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  )
}
