import { motion } from 'framer-motion'
import { portfolioService } from '@/services/portfolioService'

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, ease: 'easeOut' },
}

export function Contact() {
  const contactData = portfolioService.getContactData()

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <motion.div {...fadeInUp} className="mb-16">
          <span className="text-sm text-gray-500 tracking-widest uppercase">
            {contactData.sectionLabel}
          </span>
          <div className="w-6 h-px bg-gray-600 mt-2" />
        </motion.div>

        {/* Giant Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="font-display text-[12vw] lg:text-hero leading-none tracking-tight mb-8"
        >
          {contactData.headline}
        </motion.h2>

        <motion.div
          {...fadeInUp}
          className="w-full h-px bg-gray-700 mb-12 lg:mb-16"
        />

        {/* Highlight Subheadline */}
        <motion.div {...fadeInUp} className="mb-12 lg:mb-16 max-w-2xl">
          <h3 className="text-xl md:text-2xl lg:text-3xl text-white font-light leading-tight mb-4">
            {contactData.subheadlineLines[0]}
            <br />
            {contactData.subheadlineLines[1]}
            <br />
            {contactData.subheadlineLines[2]}
          </h3>
          <p className="text-sm text-gray-500 tracking-widest uppercase">
            {contactData.subheadlineCaption}
          </p>
        </motion.div>

        {/* Contact Locations / Links */}
        <div className="space-y-0 max-w-2xl">
          {contactData.locations.map((loc, index) => (
            <motion.a
              key={loc.label}
              href={loc.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-between border-t border-gray-800 py-5 md:py-6 group hover:bg-gray-900/30 transition-colors px-4 -mx-4"
            >
              <span className="text-sm text-gray-400 tracking-widest">
                {loc.label}
              </span>
              <span className="text-gray-500 group-hover:text-white transition-colors">
                ↗
              </span>
            </motion.a>
          ))}
          <div className="border-t border-gray-800" />
        </div>

        {/* Direct Social Contact */}
        <motion.div
          {...fadeInUp}
          className="mt-16 lg:mt-24 pt-12 lg:pt-16 border-t border-gray-800"
        >
          <p className="text-sm text-gray-500 mb-6 lg:mb-8 tracking-widest uppercase">
            Canais Oficiais
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
            <a
              href={contactData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-gradient-to-r from-[#ff512f] to-[#dd2476] text-white font-medium text-sm tracking-wider uppercase shadow-lg hover:brightness-110 transition-all self-start"
            >
              <img
                src={contactData.instagramIcon}
                alt="Instagram"
                className="w-7 h-7 rounded-md object-contain"
              />
              <span>Instagram ({contactData.instagramHandle})</span>
            </a>

            <a
              href={contactData.wikipediaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg lg:text-xl text-gray-300 hover:text-white transition-colors underline underline-offset-4"
            >
              Wikipédia — Robenilson de Jesus
            </a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          {...fadeInUp}
          className="mt-24 lg:mt-32 pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} {contactData.footerCopyrightName}. Todos
            os direitos reservados.
          </p>
          <p className="text-xs text-gray-600">{contactData.footerLocation}</p>
        </motion.footer>
      </div>
    </section>
  )
}
