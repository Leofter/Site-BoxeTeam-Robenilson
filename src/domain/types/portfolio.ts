export interface NavItem {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  icon?: string
}

export interface HeroData {
  firstName: string
  lastName: string
  teamTitle: string
  olympicEditions: string[]
  olympicLogo: string
  heroImage: string
  teamLogo: string
  badgeText: string
  subtitle: string
}

export interface BiographyBlock {
  id: string
  image: string
  imageAlt: string
  caption: string
  paragraphs: string[]
  align?: 'left' | 'right'
  containImage?: boolean
}

export interface AboutQuote {
  line1: string
  highlight: string
  line3: string
  line4: string
  subtitleTop: string
  subtitleBottom: string
}

export interface AboutData {
  sectionLabel: string
  firstBlock: BiographyBlock
  quote: AboutQuote
  secondBlock: BiographyBlock
  thirdBlock: BiographyBlock
}

export interface AthleteStat {
  label: string
  value: string
  detail: string
}

export interface SkillsData {
  sectionLabel: string
  title: string
  stats: AthleteStat[]
  skills: string[]
}

export interface CareerExperience {
  title: string
  organization: string
  location: string
  period: string
  description: string
  tags: string[]
}

export interface WorkData {
  sectionLabel: string
  titleLine1: string
  titleLine2: string
  experiences: CareerExperience[]
}

export interface AchievementShowcaseItem {
  id: string
  title: string
  description: string
  period: string
  caption: string
  image: string
  imageAlt: string
  containImage?: boolean
  badge?: string
}

export interface EducationData {
  sectionLabel: string
  title: string
  items: AchievementShowcaseItem[]
}

export interface FightRecordItem {
  title: string
  competition: string
  year: string
  resultBadge: string
  link: string
}

export interface WritingData {
  sectionLabel: string
  title: string
  fights: FightRecordItem[]
}

export interface MediaReferenceItem {
  title: string
  source: string
  year: string
  link: string
}

export interface SpeakingData {
  sectionLabel: string
  title: string
  references: MediaReferenceItem[]
}

export interface ContactLocation {
  label: string
  detail: string
  link: string
}

export interface ContactData {
  sectionLabel: string
  headline: string
  subheadlineLines: string[]
  subheadlineCaption: string
  locations: ContactLocation[]
  instagramUrl: string
  instagramHandle: string
  instagramIcon: string
  wikipediaUrl: string
  footerCopyrightName: string
  footerLocation: string
}

export interface PortfolioDatabase {
  navItems: NavItem[]
  socialLinks: SocialLink[]
  hero: HeroData
  about: AboutData
  skills: SkillsData
  work: WorkData
  education: EducationData
  writing: WritingData
  speaking: SpeakingData
  contact: ContactData
}
