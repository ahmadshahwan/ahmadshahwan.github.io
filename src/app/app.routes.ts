import {Routes} from '@angular/router';
import {EnglishComponent} from './i18n/english/english.component';
import {FrenchComponent} from './i18n/french/french.component';
import {baseRoutes} from './sitemap/route-map';

const DEFAULT_LOCALE = 'en';

const redirectRoutes: Routes = [
  ...baseRoutes
    .filter(route => route.path)
    .map(route => ({
      path: route.path,
      redirectTo: `${DEFAULT_LOCALE}/${route.path}`,
    })),
  {path: '', redirectTo: DEFAULT_LOCALE, pathMatch: 'full'},
];

export const routes: Routes = [
  {path: 'en', component: EnglishComponent, children: baseRoutes},
  {path: 'fr', component: FrenchComponent, children: baseRoutes},
  ...redirectRoutes,
];
