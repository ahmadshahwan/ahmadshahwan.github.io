import {Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {CareerComponent} from './pages/career/career.component';

export const routes: Routes = [
  {title: 'Homepage', path: '', component: HomeComponent},
  {title: 'Career', path: 'career', component: CareerComponent},
];
