import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'
import { useScrollVisibility } from '@/hooks/useScrollVisibility'
import { portfolioService } from '@/services/portfolioService'
import { cn } from '@/lib/utils'

export function Navigation() {
  const activeSection = useActiveSection()
  const isVisible = useScrollVisibility()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = portfolioService.getNavigationItems()
  const socialLinks = portfolioService.getSocialLinks()
  const heroData = portfolioService.getHeroData()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Top Left Brand Logo - Desktop */}
      <div className="hidden md:flex fixed top-0 left-0 z-50 p-6 md:p-8 items-center gap-3">
        <a
          href="#"
          aria-label="Início - Robenilson Vieira Boxe Team"
          className="flex items-center gap-3 group"
        >
          <img
            src={heroData.teamLogo}
            alt="Logo Robenilson Vieira Boxe Team"
            className="h-14 w-14 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-xs tracking-widest uppercase text-white/80 group-hover:text-white transition-colors">
            Boxe Team • SSA-BA
          </span>
        </a>
      </div>

      {/* Mobile Header - Only visible on mobile */}
      <div className="fixed top-0 left-0 right-0 z-50 p-5 flex justify-between items-start md:hidden bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-sm">
        {/* Menu Button & Logo - Left */}
        <div className="relative">
          <div className="flex items-center gap-3">
            <img
              src={heroData.teamLogo}
              alt="Logo Robenilson Vieira Boxe Team"
              className="h-10 w-10 object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sm text-white uppercase tracking-widest"
            >
              {mobileMenuOpen ? 'Fechar' : 'Menu'}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div
            className={cn(
              'flex flex-col items-start gap-3 mt-4 p-4 rounded-lg bg-black/95 border border-white/10 transition-all duration-300',
              mobileMenuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 -translate-y-4 pointer-events-none hidden'
            )}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'text-sm text-white transition-all duration-300 relative py-1',
                  'hover:opacity-60',
                  activeSection === item.id &&
                    'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Social Links - Right (Mobile) */}
        <div className="flex items-center gap-4 pt-2">
          {socialLinks.map((link) => {
            const isInternal = link.href.startsWith('#')
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (isInternal) {
                    e.preventDefault()
                    scrollToSection(link.href.replace('#', ''))
                  }
                }}
                target={isInternal ? undefined : '_blank'}
                rel={isInternal ? undefined : 'noopener noreferrer'}
                className="text-xs uppercase tracking-wider text-white hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>

      {/* Desktop Social Links - Fixed Top Right (hidden on mobile) */}
      <div className="hidden md:block fixed top-0 right-0 z-50 p-6 md:p-10">
        <div className="flex items-center gap-6 justify-end">
          {socialLinks.map((link) => {
            const isInternal = link.href.startsWith('#')
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (isInternal) {
                    e.preventDefault()
                    scrollToSection(link.href.replace('#', ''))
                  }
                }}
                target={isInternal ? undefined : '_blank'}
                rel={isInternal ? undefined : 'noopener noreferrer'}
                className="text-sm text-white mix-blend-difference hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            )
          })}
        </div>
      </div>

      {/* Desktop Navigation Items - Fixed Bottom Right (hidden on mobile) */}
      <nav
        className={cn(
          'hidden md:block fixed bottom-0 right-0 z-50 p-6 md:p-10 transition-all duration-500',
          isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-8 pointer-events-none'
        )}
      >
        <div className="flex flex-col items-end gap-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                'text-sm text-white mix-blend-difference transition-all duration-300 relative py-1',
                'hover:opacity-60',
                activeSection === item.id &&
                  'after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-white'
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}
