import {
  Institute,
  Publication,
  Event,
  Degree,
  Page,
  Content,
  Experience,
  Header,
  Sidebar,
  Footer,
  Homepage,
} from '../model';

export type QueryParams = Record<string, unknown> | undefined;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Typed<T, P extends QueryParams> {}

export type Query<T, P extends QueryParams = undefined> = string & Typed<T, P>;

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

const image32 = imageWithSize(32);
const image16 = imageWithSize(16);
const image = `{
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

const richText = `{
  text
  html
}`;

const link = `{
  id
  title
  route
}`;

const pageGroup = `{
  id
  title
}`;

export const INSTITUTES_QUERY: Query<Institute[]> = `
{
  data: institutes {
    id
    name
    icon ${image32}
    classes {
      id
      title
      description ${richText}
    }
  }
}
`;

export const PUBLICATIONS_QUERY: Query<Publication[]> = `
{
  data: publications {
    id
    description ${richText}
    year
    category {
      id
      name
      rank
      title
    }
  }
}
`;

export const EVENTS_QUERY: Query<Event[]> = `
 {
  data: events {
    id
    title
    date
    description ${richText}
  }
}
`;

export const DEGREES_QUERY: Query<Degree[]> = `
{
  data: degrees {
    id
    title
    year
    institution
    icon ${image32}
  }
}`;

const page = `{
    id
    slug
    title
    links ${link}
    group ${pageGroup}
}`;

export const PAGES_QUERY: Query<Page[]> = `
{
  data: pages ${page}
}
`;

export const PAGE_BY_SLUG_QUERY: Query<Page, {slug: string}> = `
query Page($slug: String) {
  data: page(where: {slug: $slug}) ${page}
}
`;

const content = `{
  id
  title
  text ${richText}
  image ${image}
}`;

export const CONTENT_BY_SLUG_QUERY: Query<Content, {slug: string}> = `
query ContentBySlug($slug: String) {
  data: content(where: {slug: $slug}) ${content}
}
`;

export const EXPERIENCES_QUERY: Query<Experience[]> = `
{
  data: experiences {
    id
    title
    period
    summary ${richText}
    details ${richText}
    icon ${image32}
  }
}
`;

export const HEADERS_QUERY: Query<Header[]> = `
{
  data: headers {
    id
    subtitle
    links ${link}
  }
}
`;

const externalLinks = `{
  id
  title
  url
  icon ${image16}
}`;

export const SIDEBARS_QUERY: Query<Sidebar[]> = `
{
  data: sidebars {
    id
    externalLinksMenuTitle
    externalLinks ${externalLinks}
  }
}`;

export const FOOTERS_QUERY: Query<Footer> = `
{
  data: footers {
    id
    address
    links ${externalLinks}
  }
}
`;

export const HOMEPAGES_QUERY: Query<Homepage[]> = `
{
  data: homepages {
    id
    bio ${content}
    interestsTitle
    interests {
      id
      title
      description
    }
  }
}
`;
