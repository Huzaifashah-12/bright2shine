import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Bright2Shine - Professional Cleaning in East London & Essex'
  },
  {
    path: 'services',
    loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
    title: 'Services & Pricing - Bright2Shine Ltd'
  },
  {
    path: 'reviews',
    loadComponent: () => import('./features/reviews/reviews.component').then(m => m.ReviewsComponent),
    title: 'Client Reviews & Ratings - Bright2Shine Ltd'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact & Free Quote - Bright2Shine Ltd'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
