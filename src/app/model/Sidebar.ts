import {ExternalLink} from './external-link';

export interface Sidebar {
  id: number;
  externalLinksMenuTitle: string;
  externalLinks: ExternalLink[];
}
