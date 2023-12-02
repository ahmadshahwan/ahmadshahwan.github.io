import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CareerComponent} from './pages/career/career.component';
import {TeachingComponent} from './pages/teaching/teaching.component';
import {ResearchComponent} from './pages/research/research.component';
import {EventsComponent} from './pages/events/events.component';
import {PhdDefenseComponent} from './pages/phd-defense/phd-defense.component';
import {PhdPresentationComponent} from './pages/phd-presentation/phd-presentation.component';
import {EducationComponent} from './pages/education/education.component';

export const routes: Routes = [
  {title: 'Homepage', path: '', component: HomeComponent},
  {title: 'Career', path: 'career', component: CareerComponent},
  {title: 'Education', path: 'education', component: EducationComponent},
  {title: 'Teaching', path: 'teaching', component: TeachingComponent},
  {title: 'Research', path: 'research', component: ResearchComponent},
  {title: 'Events', path: 'events', component: EventsComponent},
  {title: 'PHD defense', path: 'phd-defense', component: PhdDefenseComponent},
  {title: 'PHD defense', path: 'phd-presentation', component: PhdPresentationComponent},
];
