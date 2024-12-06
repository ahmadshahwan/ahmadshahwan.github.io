import {Routes} from '@angular/router';
import {EnglishComponent} from './i18n/english/english.component';
import {FrenchComponent} from './i18n/french/french.component';
import {baseRoutes} from './sitemap/route-map';

export const routes: Routes = [
  {path: 'en', component: EnglishComponent, children: baseRoutes},
  {path: 'fr', component: FrenchComponent, children: baseRoutes},
  ...baseRoutes,
];
