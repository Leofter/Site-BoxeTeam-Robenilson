import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

export function Hero() {
  const hero = portfolioService.getHeroData()

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-[#060608]"
    >
      {/* Dramatic Ambient Lighting & Athlete Cutout Image */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 25%, rgba(255, 70, 85, 0.22), transparent 55%), radial-gradient(circle at 80% 70%, rgba(255, 0, 64, 0.28), transparent 60%), linear-gradient(to bottom, #05060a, #0b0508, #0a0a0a)',
          }}
        />

        {/* Athlete Cutout Image Positioned on Right/Center */}
        <div className="absolute inset-x-0 bottom-0 md:left-auto md:right-0 md:w-[68%] lg:w-[62%] h-[78%] md:h-[92%] flex items-end justify-center md:justify-end">
          <img
            src={hero.heroImage}
            alt={`${hero.firstName} ${hero.lastName}`}
            className="w-full h-full object-contain object-bottom drop-shadow-[0_32px_60px_rgba(0,0,0,0.95)] opacity-90 md:opacity-100"
          />
        </div>

        {/* Gradient Overlays for Editorial Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/45 to-black/30 md:bg-gradient-to-r md:from-[#0a0a0a] md:via-[#0a0a0a]/60 md:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-end md:items-center pt-28 pb-20 md:py-0 px-4 sm:px-6 md:px-12 lg:px-16">
        <div className="w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Team Badge */}
            <div className="inline-flex items-center gap-3 mb-4 px-3 py-1.5 rounded-full border border-white/15 bg-black/40 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-gray-300">
                {hero.badgeText}
              </span>
            </div>

            {/* Giant Typography */}
            <h1 className="font-display leading-none tracking-tighter text-[15vw] sm:text-[12vw] md:text-hero">
              <span className="block text-white">{hero.firstName}</span>
              <span className="block text-white">{hero.lastName}</span>
              <span className="block text-red-500/90">{hero.teamTitle}</span>
            </h1>

            {/* Olympic Editions Row */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="mt-6 flex flex-wrap items-center gap-3 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase text-white"
            >
              <span>
                {hero.olympicEditions[0]} — {hero.olympicEditions[1]} —{' '}
                {hero.olympicEditions[2]}
              </span>
              <img
                src={hero.olympicLogo}
                alt="Aros Olímpicos"
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-4 md:mt-6 text-sm sm:text-base text-white/80 max-w-md md:max-w-lg leading-relaxed"
            >
              {hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
