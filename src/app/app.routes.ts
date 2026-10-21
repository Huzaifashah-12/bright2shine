import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Office & Commercial Cleaning in East London & Essex | Bright2Shine'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Cleaning Services & Prices | Bright2Shine'
  },
  {
    path: 'cleaning-process',
    loadComponent: () => import('./features/cleaning-process/cleaning-process.component').then(m => m.CleaningProcessComponent),
    title: 'How We Work | Bright2Shine'
  },
  {
    path: 'pricing',
    redirectTo: 'services',
    pathMatch: 'full'
  },
  {
    // Section 02.1 & 11: Remove from menu; redirect /reviews to Home (301)
    path: 'reviews',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact & Free Quote | Bright2Shine'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
