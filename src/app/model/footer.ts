import {ExternalLink} from './external-link';

export default interface Footer {
  id: number;
  address: string;
  links: ExternalLink[];
}
