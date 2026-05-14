import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiAward, FiDownload } from 'react-icons/fi'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const stats = [
  { icon: FiCode, value: '4', label: 'Projects Built' },
  { icon: FiCpu, value: '8+', label: 'Technologies' },
  { icon: FiAward, value: '8.2', label: 'CGPA' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeader
        label="About Me"
        title="Who I Am"
        subtitle="A passionate developer who loves building impactful digital experiences."
      />

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Avatar + floating badge */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />
            {/* Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-xl" />
            {/* Avatar */}
            <div className="absolute inset-6 rounded-full overflow-hidden">
              <img
                src="/profile.jpg"
                alt="Gokulanand M"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 glass rounded-2xl px-4 py-2 text-sm font-semibold text-accent border border-accent/20"
            >
              🚀 Open to Work
            </motion.div>
          </div>
        </motion.div>

        {/* Right — Bio */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <p className="text-gray-300 leading-relaxed text-lg">
            I'm <span className="text-white font-semibold">Gokulanand M</span>, a B.Tech Information
            Technology student at Sri Krishna College of Engineering and Technology, Coimbatore
            (Anna University), with a CGPA of 8.2/10.
          </p>
          <p className="text-gray-400 leading-relaxed">
            I specialize in Full-Stack Web Development, Database Management, and Cloud Deployment basics.
            Proficient in C++, Java, and SQL — familiar with React.js, Spring Boot, HTML, and CSS.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Outside academics, I'm a member of the Techie Club (IT Dept), participated in Smart India
            Hackathon 2024, and attended workshops on Power BI and Data Analytics.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {['React.js', 'Spring Boot', 'MySQL', 'Java', 'C++', 'SQL'].map(tag => (
              <span key={tag} className="px-3 py-1 glass rounded-lg text-sm text-primary border border-primary/20">
                {tag}
              </span>
            ))}
          </div>

          <motion.a
            href="/Gokulanand_Resume.pdf"
            download="Gokulanand_M_Resume.pdf"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary inline-flex items-center gap-2 mt-2"
          >
            <FiDownload size={16} /> Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-20">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="card text-center gradient-border"
          >
            <Icon className="mx-auto mb-3 text-primary" size={28} />
            <div className="text-3xl font-bold gradient-text font-poppins">{value}</div>
            <div className="text-gray-400 text-sm mt-1">{label}</div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
