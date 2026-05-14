import { motion } from 'framer-motion'
import { FiAward, FiStar, FiCode, FiTrendingUp } from 'react-icons/fi'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const achievements = [
  {
    icon: FiCode,
    title: 'Smart India Hackathon 2024',
    description: 'Represented the department team in SIH 2024, working on real-world problem statements with innovative solutions and collaborative teamwork.',
    badge: 'SIH 2024',
    color: 'text-yellow-400',
    bg: 'from-yellow-500/10 to-orange-500/10',
    border: 'border-yellow-500/20',
  },
  {
    icon: FiAward,
    title: 'Academic Excellence — CGPA 8.2',
    description: 'Maintaining a strong CGPA of 8.2/10 in B.Tech Information Technology at Sri Krishna College of Engineering and Technology, Coimbatore.',
    badge: 'CGPA 8.2',
    color: 'text-primary',
    bg: 'from-primary/10 to-secondary/10',
    border: 'border-primary/20',
  },
  {
    icon: FiStar,
    title: 'Techie Club Member',
    description: 'Active member of the Techie Club, IT Department (Sep 2023 – Sep 2025), contributing to technical events, workshops, and peer learning initiatives.',
    badge: 'Leadership',
    color: 'text-accent',
    bg: 'from-accent/10 to-cyan-500/10',
    border: 'border-accent/20',
  },
  {
    icon: FiTrendingUp,
    title: 'Workshops & Competitions',
    description: 'Attended Power BI and Data Analytics workshops at SKCET. Participated in Jigsaw Coding Competition and Connect IT — a 2-day senior–junior engagement program.',
    badge: 'Workshops',
    color: 'text-green-400',
    bg: 'from-green-500/10 to-emerald-500/10',
    border: 'border-green-500/20',
  },
]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <SectionHeader
        label="Achievements"
        title="Milestones & Recognition"
        subtitle="Key accomplishments that reflect my dedication and growth as a developer."
      />

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map(({ icon: Icon, title, description, badge, color, bg, border }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className={`relative p-6 rounded-2xl bg-gradient-to-br ${bg} border ${border} backdrop-blur-sm overflow-hidden`}
          >
            {/* Background glow */}
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20 bg-gradient-to-br ${bg}`} />

            <div className="relative flex items-start gap-4">
              <div className={`p-3 rounded-xl bg-white/5 border ${border} ${color} shrink-0`}>
                <Icon size={22} />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="font-semibold text-white font-poppins">{title}</h3>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full bg-white/5 border ${border} ${color}`}>
                    {badge}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
