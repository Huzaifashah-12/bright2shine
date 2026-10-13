import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY_DETAILS } from '../../data/site-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Announcement bar -->
    <div class="bg-navy-dark text-sand/90 text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center space-x-6">
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span class="text-white font-medium">Accepting New Bookings in East London & Essex</span>
          </span>
          <span class="text-white/40">|</span>
          <span class="flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            {{ company.openingHours }}
          </span>
        </div>

        <div class="flex items-center space-x-5">
          <a [href]="'tel:' + company.phone1Raw" class="hover:text-brand-light transition flex items-center gap-1 font-semibold text-white">
            <svg class="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            {{ company.phone1 }}
          </a>
          <span class="text-white/30">•</span>
          <a [href]="'https://wa.me/' + company.whatsappRaw" target="_blank" class="hover:text-emerald-400 transition text-sand/80 flex items-center gap-1">
            WhatsApp Us
          </a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header 
      class="sticky top-0 z-50 transition-all duration-300 w-full"
      [ngClass]="{
        'glass-nav shadow-soft border-b border-sand-dark/20 py-3': isScrolled(),
        'bg-white/80 backdrop-blur-md py-4 sm:py-5 border-b border-sand/40': !isScrolled()
      }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo with Real Navbar Logo Image -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative w-12 h-12 rounded-2xl overflow-hidden bg-white shadow-md border border-brand/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="navbar-logo.jpg" 
              alt="Bright2Shine Logo" 
              class="w-full h-full object-contain p-1"
              (error)="$any($event.target).src = 'logo.jpg'"
            />
          </div>

          <div class="flex flex-col">
            <span class="text-xl sm:text-2xl font-heading font-black tracking-tight text-navy leading-none">
              Bright<span class="text-brand">2</span>Shine
            </span>
            <span class="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-navy/60 mt-0.5">
              Professional Cleaning Services
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center space-x-1 lg:space-x-2">
          <a 
            routerLink="/" 
            routerLinkActive="text-brand bg-brand/10 font-bold" 
            [routerLinkActiveOptions]="{exact: true}"
            class="px-4 py-2 rounded-xl text-sm font-semibold text-navy/80 hover:text-brand hover:bg-brand/5 transition">
            Home
          </a>
          <a 
            routerLink="/services" 
            routerLinkActive="text-brand bg-brand/10 font-bold" 
            class="px-4 py-2 rounded-xl text-sm font-semibold text-navy/80 hover:text-brand hover:bg-brand/5 transition">
            Services
          </a>
          <a 
            routerLink="/reviews" 
            routerLinkActive="text-brand bg-brand/10 font-bold" 
            class="px-4 py-2 rounded-xl text-sm font-semibold text-navy/80 hover:text-brand hover:bg-brand/5 transition">
            Reviews
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-brand bg-brand/10 font-bold" 
            class="px-4 py-2 rounded-xl text-sm font-semibold text-navy/80 hover:text-brand hover:bg-brand/5 transition">
            Contact
          </a>
        </nav>

        <!-- Direct contact buttons -->
        <div class="hidden sm:flex items-center gap-3">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="px-4 py-2.5 rounded-xl text-sm font-bold text-navy hover:text-brand border border-navy/15 hover:border-brand/40 bg-white/70 transition shadow-sm flex items-center gap-1.5">
            <svg class="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call Now</span>
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw" 
            target="_blank"
            class="relative group overflow-hidden px-5 py-2.5 rounded-xl font-heading font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:-translate-y-0.5 transition-all duration-200">
            <span class="relative z-10 flex items-center gap-1.5">
              <span>WhatsApp Us</span>
            </span>
          </a>
        </div>

        <!-- Mobile Hamburger Button -->
        <div class="flex items-center gap-2 md:hidden">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="text-xs bg-navy text-white font-bold px-3 py-2 rounded-lg shadow-sm flex items-center gap-1">
            <span>Call</span>
          </a>
          <button 
            (click)="toggleMobileMenu()" 
            class="p-2.5 rounded-xl text-navy hover:bg-sand/60 transition focus:outline-none"
            aria-label="Toggle menu">
            <svg *ngIf="!mobileMenuOpen()" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg *ngIf="mobileMenuOpen()" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile Full-Screen Dropdown / Slide-in Menu -->
      <div 
        *ngIf="mobileMenuOpen()" 
        class="md:hidden border-t border-sand-dark/20 bg-white/95 backdrop-blur-xl px-5 pt-4 pb-8 space-y-3 shadow-2xl animate-in slide-in-from-top-4 duration-200">
        
        <div class="flex items-center gap-3 pb-3 mb-2 border-b border-sand-dark/20 px-2">
          <img src="navbar-logo.jpg" alt="Bright2Shine Logo" class="w-10 h-10 object-contain rounded-xl bg-white p-1 border border-brand/20 shadow-sm" />
          <div>
            <p class="font-heading font-black text-navy text-sm">Bright2Shine</p>
            <p class="text-[10px] text-navy/60 font-semibold uppercase">Cleaning Services</p>
          </div>
        </div>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/" 
          routerLinkActive="bg-brand/10 text-brand font-bold" 
          [routerLinkActiveOptions]="{exact: true}"
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-navy hover:bg-sand/50">
          <span>Home</span>
          <svg class="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/services" 
          routerLinkActive="bg-brand/10 text-brand font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-navy hover:bg-sand/50">
          <span>Services</span>
          <svg class="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/reviews" 
          routerLinkActive="bg-brand/10 text-brand font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-navy hover:bg-sand/50">
          <span>Client Reviews</span>
          <svg class="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/contact" 
          routerLinkActive="bg-brand/10 text-brand font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-navy hover:bg-sand/50">
          <span>Contact & Locations</span>
          <svg class="w-4 h-4 text-navy/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <div class="pt-4 border-t border-sand/60 flex flex-col gap-2.5">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full text-center py-3 rounded-xl font-bold bg-navy text-white flex items-center justify-center gap-2 shadow-md">
            <svg class="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call {{ company.phone1 }}
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw" 
            target="_blank"
            class="w-full text-center py-3 rounded-xl font-bold bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-sm">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  company = COMPANY_DETAILS;
  isScrolled = signal<boolean>(false);
  mobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 25);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
