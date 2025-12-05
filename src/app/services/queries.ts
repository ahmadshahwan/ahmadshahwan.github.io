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
  url
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
  links ${LINK}
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

const CERTIFICATE = `{
  id
  title
  year
  institute ${INSTITUTE}
  url
}`;

const PAGE = `{
  id
  slug
  title
  description
  group ${PAGE_GROUP}
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
  icon ${IMAGE}
}`;

const EXTERNAL_LINK = `{
  id
  title
  url
  icon ${IMAGE_16}
}`;

const INTEREST = `{
  id
  title
  description
}`;

const WEBSITE = `{
  pages ${LIST_PARAMS} ${PAGE}
  experiences ${LIST_PARAMS} ${EXPERIENCE}
  skills ${LIST_PARAMS} ${SKILL}
  degrees ${LIST_PARAMS} ${DEGREE}
  certificates ${LIST_PARAMS} ${CERTIFICATE}
  institutes ${LIST_PARAMS} ${INSTITUTE}
  publications ${LIST_PARAMS} ${PUBLICATION}
  events ${LIST_PARAMS} ${EVENT}
  links ${LIST_PARAMS} ${LINK}
  externalLinks ${LIST_PARAMS} ${EXTERNAL_LINK}
  socialLinks ${LIST_PARAMS} ${EXTERNAL_LINK}
  interests ${LIST_PARAMS} ${INTEREST}
  interestsTitle
  subtitle
  externalLinksMenuTitle
  languageMenuTitle
  address
}`;

export const WEBSITE_QUERY: Query<LocalizedWebsite> = `{
  en: website(locales: en, where: {singleton: true}) ${WEBSITE}
  fr: website(locales: [fr, en], where: {singleton: true}) ${WEBSITE}
}`;
