import Link from './link';
import PageGroup from './page-group';

export default interface Page {
  id: number;
  slug: string;
  title: string;
  links: Link[];
  group: PageGroup;
}
