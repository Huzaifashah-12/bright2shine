import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, SERVICES } from '../../data/site-data';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer class="bg-navy text-sand-light pt-16 pb-12 border-t-4 border-brand relative overflow-hidden">
      <!-- Background subtle glow elements -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <!-- Company Bio & Logo -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand to-brand-light flex items-center justify-center text-white shadow-glow">
                <svg class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
                </svg>
              </div>
              <div>
                <span class="text-2xl font-heading font-black text-white tracking-tight">
                  Bright<span class="text-brand-light">2</span>Shine
                </span>
                <span class="block text-[11px] font-semibold uppercase tracking-wider text-sand/60">
                  Spotless Spaces. Brighter Days.
                </span>
              </div>
            </div>

            <p class="text-sand/75 text-sm leading-relaxed">
              East London & Essex’s trusted professional cleaning specialists. Fully insured, DBS-vetted staff delivering domestic, commercial, and end of tenancy perfection.
            </p>

            <div class="pt-2 flex items-center space-x-3">
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sand border border-white/10">
                🛡️ £2M Public Liability
              </span>
              <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-sand border border-white/10">
                ⭐ 5.0 Star Rated
              </span>
            </div>
          </div>

          <!-- Quick Navigation -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-light"></span>
              Quick Links
            </h4>
            <ul class="space-y-3 text-sm">
              <li>
                <a routerLink="/" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> Home Overview
                </a>
              </li>
              <li>
                <a routerLink="/services" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> All Cleaning Services
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> Request a Free Quote
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> Emergency Cleans
                </a>
              </li>
              <li>
                <a routerLink="/services" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> Frequently Asked Questions
                </a>
              </li>
            </ul>
          </div>

          <!-- Services List -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-light"></span>
              Our Services
            </h4>
            <ul class="space-y-3 text-sm">
              <li *ngFor="let s of services.slice(0, 5)">
                <a [routerLink]="['/services']" [fragment]="s.id" class="text-sand/80 hover:text-brand-light transition flex items-center gap-2">
                  <span class="text-brand text-xs">›</span> {{ s.title }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Details & Location -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-brand-light"></span>
              Get In Touch
            </h4>
            <div class="space-y-3.5 text-sm text-sand/85">
              <p class="flex items-start gap-3">
                <svg class="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>{{ company.address }}</span>
              </p>

              <p class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a [href]="'tel:' + company.phone1Raw" class="hover:text-brand-light transition font-semibold text-white">
                  {{ company.phone1 }} / {{ company.phone2 }}
                </a>
              </p>

              <p class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a [href]="'mailto:' + company.email" class="hover:text-brand-light transition text-sand">
                  {{ company.email }}
                </a>
              </p>

              <p class="flex items-center gap-3">
                <svg class="w-5 h-5 text-brand-light flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>{{ company.openingHours }}</span>
              </p>
            </div>
          </div>

        </div>

        <!-- Areas Covered Row -->
        <div class="py-6 border-t border-b border-white/10 text-xs text-sand/70 flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-2">
            <span class="font-bold text-white uppercase tracking-wider">Service Coverage:</span>
            <span>Ilford, Barking, Redbridge, Dagenham, Romford, Stratford, Forest Gate, East Ham, Docklands & Greater London</span>
          </div>
          <span class="text-brand-light font-medium">Postcodes: IG1-IG11, RM1-RM14, E1-E20</span>
        </div>

        <!-- Bottom Copyright & Disclaimer -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-sand/60 gap-4">
          <p>© 2026 Bright2Shine Ltd. All Rights Reserved. Registered in England & Wales.</p>
          <div class="flex space-x-6">
            <span class="hover:text-sand cursor-pointer transition">Privacy Policy</span>
            <span class="hover:text-sand cursor-pointer transition">Terms of Service</span>
            <span class="hover:text-sand cursor-pointer transition">Insurance Verification</span>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  company = COMPANY_DETAILS;
  services = SERVICES;
}
