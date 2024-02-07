import {Image, RichText} from './common';

export default interface Content {
  id: number;
  title?: string;
  text: RichText;
  image?: Image;
}
