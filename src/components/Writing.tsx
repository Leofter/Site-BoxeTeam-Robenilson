import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Writing() {
  const writingData = portfolioService.getWritingData()

  return (
    <section id="writing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            {writingData.sectionLabel}
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          {writingData.title}
        </motion.h2>

        {/* Fights List */}
        <div className="space-y-0">
          {writingData.fights.map((fight, index) => (
            <motion.a
              key={fight.title}
              href={fight.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="block border-t border-gray-800 py-6 md:py-8 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
                <div>
                  <h3 className="text-lg md:text-xl lg:text-2xl text-white font-light group-hover:text-gray-300 transition-colors">
                    {fight.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 md:mt-2">
                    {fight.competition}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-xs text-gray-400 border border-gray-800 rounded-full">
                    {fight.resultBadge}
                  </span>
                  <span className="text-sm text-gray-500">{fight.year}</span>
                </div>
              </div>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>
      </div>
    </section>
  )
}
