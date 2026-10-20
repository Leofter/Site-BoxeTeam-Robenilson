import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Skills() {
  const skillsData = portfolioService.getSkillsData()

  return (
    <section id="skills" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            {skillsData.sectionLabel}
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-12 lg:mb-20"
        >
          {skillsData.title}
        </motion.h2>

        {/* Athlete Stats Cards (Ficha Técnica) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 lg:mb-24">
          {skillsData.stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="border border-gray-800 bg-black/40 p-6 rounded-sm hover:border-gray-600 transition-colors"
            >
              <p className="text-xs text-gray-500 tracking-widest uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-xl lg:text-2xl text-white font-medium mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Skills List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 lg:gap-y-6">
          {skillsData.skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border-b border-gray-800 pb-4"
            >
              <span className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light">
                {skill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
