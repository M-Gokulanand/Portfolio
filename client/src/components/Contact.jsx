import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMapPin, FiPhone, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import { SiLeetcode } from 'react-icons/si'
import axios from 'axios'
import SectionWrapper, { SectionHeader } from './SectionWrapper'

const socials = [
  { icon: FiGithub, href: 'https://github.com/Gokulanand-M', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/gokulanand-m', label: 'LinkedIn' },
  { icon: SiLeetcode, href: 'https://leetcode.com/gokulanandm', label: 'LeetCode' },
]

function InputField({ label, type = 'text', name, value, onChange, multiline }) {
  const base = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500
    focus:outline-none focus:border-primary/60 focus:bg-white/8 transition-all duration-200 text-sm`

  return (
    <div className="space-y-1.5">
      <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">{label}</label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={`${base} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={`Your ${label.toLowerCase()}...`}
          className={base}
        />
      )}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post('http://localhost:5000/api/contact', form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 4000)
    }
  }

  return (
    <SectionWrapper id="contact">
      <SectionHeader
        label="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
      />

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-6">
            {[
              { icon: FiMail, label: 'Email', value: 'gokulanandm12@gmail.com', href: 'mailto:gokulanandm12@gmail.com' },
              { icon: FiPhone, label: 'Phone', value: '+91 9043795535', href: 'tel:+919043795535' },
              { icon: FiMapPin, label: 'Location', value: 'Namakkal, Tamil Nadu', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="p-3 glass rounded-xl text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{label}</p>
                  {href ? (
                    <a href={href} className="text-gray-300 hover:text-primary transition-colors text-sm">{value}</a>
                  ) : (
                    <p className="text-gray-300 text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Find me on</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass rounded-xl text-gray-400 hover:text-primary transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Decorative card */}
          <div className="card gradient-border p-5 space-y-2">
            <p className="text-sm font-semibold text-white">⚡ Quick Response</p>
            <p className="text-xs text-gray-400">I typically respond within 24 hours. Looking forward to connecting!</p>
          </div>
        </motion.div>

        {/* Right form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="card gradient-border space-y-5"
        >
          <InputField label="Name" name="name" value={form.name} onChange={handleChange} />
          <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
          <InputField label="Message" name="message" value={form.message} onChange={handleChange} multiline />

          {/* Status message */}
          {status === 'success' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 text-sm">
              ✅ Message sent successfully!
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm">
              ❌ Something went wrong. Please try again.
            </motion.p>
          )}

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === 'sending' ? (
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <FiSend size={16} />
            )}
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
