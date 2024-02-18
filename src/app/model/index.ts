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

export interface Content {
  id: string;
  title?: string;
  text: RichText;
  image?: Image;
}

export interface Degree {
  id: string;
  title: string;
  year: number;
  institution: string;
  icon: Image;
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
  details: RichText;
  icon: Image;
}

export interface ExternalLink {
  id: string;
  title: string;
  url: string;
  icon: Image;
}

export interface Footer {
  id: string;
  address: string;
  links: ExternalLink[];
}

export interface Header {
  id: string;
  subtitle: string;
  links: Link[];
}

export interface Homepage {
  id: string;
  bio: Content;
  interestsTitle: string;
  interests: Interest[];
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
  links: Link[];
  group: PageGroup;
}

export interface PageGroup {
  title: string;
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

export interface Sidebar {
  id: string;
  externalLinksMenuTitle: string;
  externalLinks: ExternalLink[];
}
