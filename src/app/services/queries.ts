import Institute from '../model/institute';
import Publication from '../model/publication';
import Event from '../model/event';
import Degree from '../model/degree';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface Typed<T> {}

export type Query<T> = string & Typed<T>;

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
query DegreesQuery {
  data: degrees {
    id
    title
    year
    institution
    icon ${image32}
  }
}`;
