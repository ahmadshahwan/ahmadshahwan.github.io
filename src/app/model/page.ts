import Link from './link';

export default interface Page {
  id: number;
  slug: string;
  title: string;
  links: Link[];
}
