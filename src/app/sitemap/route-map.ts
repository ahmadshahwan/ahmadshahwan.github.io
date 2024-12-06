import {HomeComponent} from '../pages/home/home.component';
import {CareerComponent} from '../pages/career/career.component';
import {EducationComponent} from '../pages/education/education.component';
import {TeachingComponent} from '../pages/teaching/teaching.component';
import {ResearchComponent} from '../pages/research/research.component';
import {EventsComponent} from '../pages/events/events.component';
import {MaterialsComponent} from '../pages/materials/materials.component';
import {PhdDefenseComponent} from '../pages/phd-defense/phd-defense.component';

export const baseRoutes = [
  {path: '', HomeComponent},
  {path: 'career', CareerComponent},
  {path: 'education', EducationComponent},
  {path: 'teaching', TeachingComponent},
  {path: 'research', ResearchComponent},
  {path: 'events', EventsComponent},
  {path: 'materials', MaterialsComponent},
  {path: 'phd-defense', PhdDefenseComponent},
];
