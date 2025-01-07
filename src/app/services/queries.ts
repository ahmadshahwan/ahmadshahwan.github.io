import {LocalizedWebsite} from '../model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Typed<T> {}

export type Query<T> = string & Typed<T>;

const PAGE_SIZE = 50;

const FIRST_PAGE_SIZE = `first: ${PAGE_SIZE}, `;

const LIST_PARAMS = `(${FIRST_PAGE_SIZE})`;

function imageWithSize(size: number): string {
  return `{
    height
    width
    url(
      transformation: {
        image: {
          resize: {
            width: ${size}, height: ${size},
          }
        }
        document: {
          output: {
            format: png
          }
        }
      }
    )
  }`;
}

const IMAGE_32 = imageWithSize(32);
const IMAGE_16 = imageWithSize(16);
const IMAGE = `{
  height
  width
  url(
    transformation: {
      document: {
        output: {
          format: png
        }
      }
    }
  )
}`;

const RICH_TEXT = `{
  text
  html
}`;

const LINK = `{
  id
  title
  route
}`;

const PAGE_GROUP = `{
  id
  title
}`;

const INSTITUTE = ` {
  id
  name
  icon ${IMAGE_32}
  classes ${LIST_PARAMS} {
    id
    title
    description ${RICH_TEXT}
    syllabi ${LIST_PARAMS} {
      id
      title
      url
    }
  }
}`;

const PUBLICATION = `{
  id
  description ${RICH_TEXT}
  year
  category {
    id
    name
    rank
    title
  }
}`;

const EVENT = `{
  id
  title
  date
  description ${RICH_TEXT}
}`;

const DEGREE = `{
  id
  title
  year
  institution
  icon ${IMAGE_32}
}`;

const PAGE = `{
    id
    slug
    title
    description
    links ${LINK}
    group ${PAGE_GROUP}
}`;

const CONTENT = `{
  id
  title
  slug
  text ${RICH_TEXT}
  image ${IMAGE}
}`;

const EXPERIENCE = `{
  id
  title
  period
  partner
  summary ${RICH_TEXT}
  details ${RICH_TEXT}
  icon ${IMAGE_32}
}`;

const SKILL = `{
  id,
  title,
  details,
  proficiency,
  icon ${IMAGE_32}
}`;

const HEADER = `{
  id
  subtitle
  links ${LIST_PARAMS} ${LINK}
}`;

const EXTERNAL_LINK = `{
  id
  title
  url
  icon ${IMAGE_16}
}`;

const SIDEBAR = `{
  id
  externalLinksMenuTitle
  languageMenuTitle
  externalLinks ${LIST_PARAMS} ${EXTERNAL_LINK}
}`;

const FOOTER = `{
  id
  address
  links ${LIST_PARAMS} ${EXTERNAL_LINK}
}`;

const HOMEPAGE = `{
  id
  bio ${CONTENT}
  interestsTitle
  interests ${LIST_PARAMS} {
    id
    title
    description
  }
}`;

const WEBSITE = `{
  homepage ${HOMEPAGE}
  header ${HEADER}
  footer ${FOOTER}
  sidebar ${SIDEBAR}
  pages ${LIST_PARAMS} ${PAGE}
  experiences ${LIST_PARAMS} ${EXPERIENCE}
  skills ${LIST_PARAMS} ${SKILL}
  degrees ${LIST_PARAMS} ${DEGREE}
  institutes ${LIST_PARAMS} ${INSTITUTE}
  publications ${LIST_PARAMS} ${PUBLICATION}
  events ${LIST_PARAMS} ${EVENT}
  contents ${LIST_PARAMS} ${CONTENT}
}`;

export const WEBSITE_QUERY: Query<LocalizedWebsite> = `{
  en: website(locales: en, where: {singleton: true}) ${WEBSITE}
  fr: website(locales: [fr, en], where: {singleton: true}) ${WEBSITE}
}`;
