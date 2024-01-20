import {RichText} from './common';

export default interface Event {
  id: string;
  title: string;
  date: string;
  description: RichText;
}
