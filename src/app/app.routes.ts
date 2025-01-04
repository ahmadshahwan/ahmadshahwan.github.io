import {Routes} from '@angular/router';
import {EnglishComponent} from './i18n/english/english.component';
import {FrenchComponent} from './i18n/french/french.component';
import {HomeComponent} from './pages/home/home.component';
import {CareerComponent} from './pages/career/career.component';
import {EducationComponent} from './pages/education/education.component';
import {TeachingComponent} from './pages/teaching/teaching.component';
import {ResearchComponent} from './pages/research/research.component';
import {EventsComponent} from './pages/events/events.component';
import {MaterialsComponent} from './pages/materials/materials.component';
import {PhdDefenseComponent} from './pages/phd-defense/phd-defense.component';

export const baseRoutes = [
  {path: '', component: HomeComponent},
  {path: 'career', component: CareerComponent},
  {path: 'education', component: EducationComponent},
  {path: 'teaching', component: TeachingComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'events', component: EventsComponent},
  {path: 'materials', component: MaterialsComponent},
  {path: 'phd-defense', component: PhdDefenseComponent},
];

export const routes: Routes = [
  {path: 'en', component: EnglishComponent, children: baseRoutes},
  {path: 'fr', component: FrenchComponent, children: baseRoutes},
  ...baseRoutes,
];
