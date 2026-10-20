import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function About() {
  const about = portfolioService.getAboutData()

  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            {about.sectionLabel}
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* First Block - Origem & Seleção Brasileira */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div {...fadeInUp} className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-[#14090c] via-[#0d0d10] to-[#08080a] border border-white/10 p-6 flex items-end justify-center min-h-[340px]">
              <img
                src={about.firstBlock.image}
                alt={about.firstBlock.imageAlt}
                className="w-full max-h-[420px] object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              {about.firstBlock.caption}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6"
          >
            {about.firstBlock.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Quote Block */}
        <motion.div {...fadeInUp} className="mb-24 lg:mb-32">
          <h2 className="font-display text-[8vw] lg:text-section leading-none tracking-tight text-gray-300">
            {about.quote.line1}
            <br />
            <span className="text-white underline decoration-red-500/80 underline-offset-8">
              {about.quote.highlight}
            </span>
            <br />
            {about.quote.line3}
            <br />
            {about.quote.line4}
          </h2>
          <p className="mt-6 text-sm text-gray-500 tracking-widest uppercase">
            {about.quote.subtitleTop}
            <br />
            {about.quote.subtitleBottom}
          </p>
        </motion.div>

        {/* Second Block - Londres 2012 Action */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 mb-24 lg:mb-32">
          <motion.div
            {...fadeInUp}
            className="flex flex-col justify-center space-y-6 lg:text-right"
          >
            {about.secondBlock.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-bl from-[#160a0e] via-[#0c0c10] to-[#08080a] border border-white/10 p-6 flex items-end justify-center min-h-[340px]">
              <img
                src={about.secondBlock.image}
                alt={about.secondBlock.imageAlt}
                className="w-full max-h-[420px] object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              {about.secondBlock.caption}
            </p>
          </motion.div>
        </div>

        {/* Third Block - Boxe Team SSA-BA Since 2003 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
          <motion.div {...fadeInUp}>
            <div className="relative overflow-hidden rounded-sm bg-gradient-to-tr from-[#0d0d10] via-[#140a0c] to-[#08080a] border border-white/10 p-10 flex items-center justify-center min-h-[340px]">
              <img
                src={about.thirdBlock.image}
                alt={about.thirdBlock.imageAlt}
                className="w-64 h-64 sm:w-72 sm:h-72 object-contain grayscale hover:grayscale-0 transition-all duration-700 drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
              />
            </div>
            <p className="mt-4 text-xs text-gray-500 tracking-widest uppercase">
              {about.thirdBlock.caption}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            {about.thirdBlock.paragraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-base lg:text-lg text-gray-300 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
