import {Image, RichText} from './common';

export default interface Experience {
  id: string;
  title: string;
  partner: string;
  period: number;
  summary: RichText;
  details: RichText;
  icon: Image;
}
