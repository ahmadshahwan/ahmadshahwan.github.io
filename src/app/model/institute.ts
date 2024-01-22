import {Image} from './common';
import Class from './class';

export default interface Institute {
  id: string;
  name: string;
  icon: Image;
  classes: Class[];
}
