import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CareerComponent} from './pages/career/career.component';
import {TeachingComponent} from "./pages/teaching/teaching.component";
import {ResearchComponent} from './pages/research/research.component';
import {EventsComponent} from "./pages/events/events.component";
import {ContactsComponent} from "./pages/contacts/contacts.component";

export const routes: Routes = [
  {title: 'Homepage', path: '', component: HomeComponent},
  {title: 'Career', path: 'career', component: CareerComponent},
  {title: 'Teaching', path: 'teaching', component: TeachingComponent},
  {title: 'Research', path: 'research', component: ResearchComponent},
  {title: 'Events', path: 'events', component: EventsComponent},
  {title: 'Contacts', path: 'contacts', component: ContactsComponent},
];
