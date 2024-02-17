/**
 * Components should be loaded lazily to avoid referencing Angular internals in sitemap generation script.
 */
export const baseRoutes = [
  {path: '', loadComponent: () => import('../pages/home/home.component')
      .then(m => m.HomeComponent)},
  {path: 'career', loadComponent: () => import('../pages/career/career.component')
      .then(m => m.CareerComponent)},
  {path: 'education', loadComponent: () => import('../pages/education/education.component')
      .then(m => m.EducationComponent)},
  {path: 'teaching', loadComponent: () => import('../pages/teaching/teaching.component')
      .then(m => m.TeachingComponent)},
  {path: 'research', loadComponent: () => import('../pages/research/research.component')
      .then(m => m.ResearchComponent)},
  {path: 'events', loadComponent: () => import('../pages/events/events.component')
      .then(m => m.EventsComponent)},
  {path: 'materials', loadComponent: () => import('../pages/materials/materials.component')
      .then(m => m.MaterialsComponent)},
  {path: 'phd-defense', loadComponent: () => import('../pages/phd-defense/phd-defense.component')
      .then(m => m.PhdDefenseComponent)},
];
