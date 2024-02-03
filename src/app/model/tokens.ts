import {InjectionToken} from '@angular/core';
import Link from './link';

export const RELATED_LINKS_TOKEN = new InjectionToken<Link[]>('RelatedLinks');
