import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CareerComponent} from './pages/career/career.component';
import {TeachingComponent} from './pages/teaching/teaching.component';
import {ResearchComponent} from './pages/research/research.component';
import {EventsComponent} from './pages/events/events.component';
import {PhdDefenseComponent} from './pages/phd-defense/phd-defense.component';
import {PhdPresentationComponent} from './pages/phd-presentation/phd-presentation.component';
import {EducationComponent} from './pages/education/education.component';
import {MaterialsComponent} from './pages/materials/materials.component';
import {EnglishComponent} from './i18n/english/english.component';
import {FrenchComponent} from './i18n/french/french.component';

const DEFAULT_LOCALE = 'en';

const baseRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'career', component: CareerComponent},
  {path: 'education', component: EducationComponent},
  {path: 'teaching', component: TeachingComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'events', component: EventsComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'phd-defense', component: PhdDefenseComponent},
  {path: 'phd-presentation', component: PhdPresentationComponent},
];

const redirectRoutes: Routes = [
  ...baseRoutes
    .map(route => ({
      path: route.path,
      redirectTo: `${DEFAULT_LOCALE}/${route.path}`,
      pathMatch: 'full' as const,
    })),
];

export const routes: Routes = [
  {path: 'en', component: EnglishComponent, children: baseRoutes},
  {path: 'fr', component: FrenchComponent, children: baseRoutes},
  ...redirectRoutes,
];
