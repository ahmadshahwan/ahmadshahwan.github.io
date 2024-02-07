import {RichText} from './common';

export default interface Publication {
  id: number;
  description: RichText;
  year: number;
  category: {
    id: number;
    rank: number;
    title: string;
    name: string;
  };

}
