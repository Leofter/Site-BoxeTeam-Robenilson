import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Education() {
  const educationData = portfolioService.getEducationData()

  return (
    <section id="education" className="section-padding bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            {educationData.sectionLabel}
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        <motion.h2
          {...fadeInUp}
          className="font-display text-[10vw] lg:text-section leading-none tracking-tight mb-16 lg:mb-24"
        >
          {educationData.title}
        </motion.h2>

        {/* Showcase Items */}
        <div className="space-y-16 lg:space-y-24">
          {educationData.items.map((item, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={item.id}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24"
              >
                <motion.div
                  {...fadeInUp}
                  className={isReversed ? 'lg:order-2' : undefined}
                >
                  <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#13080b] via-[#0a0a0d] to-[#050507] border border-white/10 p-8 flex items-center justify-center min-h-[320px]">
                    {item.badge && (
                      <span className="absolute top-4 right-4 px-3 py-1 text-xs tracking-widest uppercase bg-black/70 border border-white/15 text-gray-300 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full max-h-[360px] object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-[0_18px_36px_rgba(0,0,0,0.85)]"
                    />
                  </div>
                  <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
                    {item.caption}
                  </p>
                </motion.div>

                <motion.div
                  {...fadeInUp}
                  transition={{ ...fadeInUp.transition, delay: 0.2 }}
                  className={`flex items-center ${isReversed ? 'lg:order-1' : ''}`}
                >
                  <div>
                    <h3 className="text-xl lg:text-2xl font-light text-white mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm lg:text-base">
                      {item.description}
                    </p>
                    <p className="text-sm text-gray-500 tracking-wider uppercase">
                      {item.period}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
