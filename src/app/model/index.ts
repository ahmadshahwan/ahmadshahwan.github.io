export interface Image {
  url: string;
  height?: number;
  width?: number;
}

export interface RichText {
  html: string;
  text: string;
}

export interface Syllabus {
  id: string;
  title: string;
  url: string;
}

export interface Class {
  id: string;
  title: string;
  description?: RichText;
  syllabi?: Syllabus[];
}

export interface Degree {
  id: string;
  title: string;
  year: number;
  institution: string;
  icon: Image;
}

export interface Certificate {
  id: string;
  title: string;
  year: number;
  institute: Institute;
  url?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  description: RichText;
}

export interface Experience {
  id: string;
  title: string;
  partner: string;
  period: number;
  summary: RichText;
  details?: RichText;
  icon: Image;
}

export interface Skill {
  id: string;
  title: string;
  details: string;
  proficiency: number;
  icon: Image;
}

export interface ExternalLink {
  id: string;
  title: string;
  url: string;
  icon: Image;
}

export interface Institute {
  id: string;
  name: string;
  icon: Image;
  classes: Class[];
}

export interface Interest {
  id: string;
  title: string;
  description: string;
}

export interface Link {
  id: string;
  title: string;
  route: string;
}

export interface Page {
  id: string;
  slug: string;
  title: string;
  description: string;
  group: PageGroup;
  text?: RichText;
  image?: Image;
}

export interface PageGroup {
  title: string;
  links: Link[];
}

export interface PublicationCategory {
  id: number;
  rank: number;
  title: string;
  name: string;
}

export interface Publication {
  id: string;
  description: RichText;
  year: number;
  category: PublicationCategory;
}

export interface Website {
  subtitle: string;
  address: string;
  externalLinksMenuTitle: string;
  languageMenuTitle: string;
  experiences: Experience[];
  skills: Skill[];
  degrees: Degree[];
  certificates: Certificate[];
  events: Event[];
  institutes: Institute[];
  pages: Page[];
  publications: Publication[];
  interests: Interest[];
  links: Link[];
  socialLinks: ExternalLink[];
  externalLinks: ExternalLink[];
}

export interface LocalizedWebsite {
  en: Website;
  fr: Website;
}
