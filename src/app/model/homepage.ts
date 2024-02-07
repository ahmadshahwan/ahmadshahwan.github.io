import Content from './content';
import Interest from './interest';

export default interface Homepage {
  id: number;
  bio: Content;
  interestsTitle: string;
  interests: Interest[];
}
