import { robenilsonPortfolioData } from '@/data/robenilsonPortfolioData'
import {
  AboutData,
  ContactData,
  EducationData,
  HeroData,
  NavItem,
  SkillsData,
  SocialLink,
  SpeakingData,
  WorkData,
  WritingData,
} from '@/domain/types/portfolio'

/**
 * Camada de Aplicação / Serviço (Application Service Layer)
 * Responsável por prover os dados de domínio do portfólio para a camada de apresentação (UI).
 */
export const portfolioService = {
  getNavigationItems(): NavItem[] {
    return robenilsonPortfolioData.navItems
  },

  getSocialLinks(): SocialLink[] {
    return robenilsonPortfolioData.socialLinks
  },

  getHeroData(): HeroData {
    return robenilsonPortfolioData.hero
  },

  getAboutData(): AboutData {
    return robenilsonPortfolioData.about
  },

  getSkillsData(): SkillsData {
    return robenilsonPortfolioData.skills
  },

  getWorkData(): WorkData {
    return robenilsonPortfolioData.work
  },

  getEducationData(): EducationData {
    return robenilsonPortfolioData.education
  },

  getWritingData(): WritingData {
    return robenilsonPortfolioData.writing
  },

  getSpeakingData(): SpeakingData {
    return robenilsonPortfolioData.speaking
  },

  getContactData(): ContactData {
    return robenilsonPortfolioData.contact
  },
}
