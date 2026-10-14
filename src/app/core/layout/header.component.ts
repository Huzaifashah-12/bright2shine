import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY_DETAILS } from '../../data/site-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Announcement Bar (Deep Navy #1B2B3A with Burnt Orange & Fresh Aqua Accents) -->
    <div class="bg-[#1B2B3A] text-[#FAFAF8] text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        
        <!-- Left: Status Badge & Emails -->
        <div class="flex items-center space-x-4">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FAFAF8] font-medium text-[11px]">
            <span class="w-2 h-2 rounded-full bg-[#3BA8B5] animate-pulse"></span>
            <span>Serving London & Essex</span>
          </span>
          <span class="text-white/20">|</span>
          <a [href]="'mailto:' + company.email" class="hover:text-[#3BA8B5] transition text-white/90 flex items-center gap-1.5">
            <span class="text-[#B5441A]">✉</span> {{ company.email }}
          </a>
          <span class="text-white/20">•</span>
          <a [href]="'mailto:' + company.email2" class="hover:text-[#3BA8B5] transition text-white/90 flex items-center gap-1.5">
            <span class="text-[#B5441A]">✉</span> {{ company.email2 }}
          </a>
        </div>

        <!-- Right: Direct Phone & WhatsApp Hotline -->
        <div class="flex items-center space-x-5">
          <a [href]="'tel:' + company.phone1Raw" class="hover:text-[#3BA8B5] transition flex items-center gap-1.5 font-bold text-white">
            <svg class="w-3.5 h-3.5 text-[#B5441A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>{{ company.phone1 }}</span>
          </a>
          <span class="text-white/20">|</span>
          <a [href]="'https://wa.me/' + company.whatsappRaw" target="_blank" class="text-white/90 hover:text-[#3BA8B5] transition flex items-center gap-1 text-[11px] font-semibold">
            <span class="w-2 h-2 rounded-full bg-[#25D366]"></span>
            <span>WhatsApp Available</span>
          </a>
        </div>

      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header 
      class="sticky top-0 z-50 transition-all duration-300 w-full"
      [ngClass]="{
        'bg-white/95 backdrop-blur-md shadow-md border-b border-[#F3EFEA] py-3': isScrolled(),
        'bg-[#FAFAF8]/90 backdrop-blur-sm py-4 border-b border-[#F3EFEA]': !isScrolled()
      }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white shadow-sm border border-[#F3EFEA] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="/navbar-logo.jpg" 
              alt="Bright2Shine Logo" 
              class="w-full h-full object-contain p-1"
              (error)="$any($event.target).src = '/logo.png'"
            />
          </div>

          <div class="flex flex-col">
            <span class="text-xl sm:text-2xl font-heading font-black tracking-tight text-[#1B2B3A] leading-none">
              Bright<span class="text-[#B5441A]">2</span>Shine
            </span>
            <span class="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#2B2F33]/60 mt-0.5">
              Professional Cleaning Services
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links (All in one line, no wrapping) -->
        <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2 whitespace-nowrap">
          <a 
            routerLink="/" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            [routerLinkActiveOptions]="{exact: true}"
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Home
          </a>
          <a 
            routerLink="/services" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Cleaning Services
          </a>
          <a 
            routerLink="/cleaning-process" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Cleaning Process
          </a>
          <a 
            routerLink="/" 
            fragment="pricing"
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Pricing
          </a>
          <a 
            routerLink="/reviews" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Reviews
          </a>
          <a 
            routerLink="/contact" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition whitespace-nowrap">
            Contact
          </a>
        </nav>

        <!-- Right Side: Phone Call & WhatsApp Quote Green Button -->
        <div class="hidden sm:flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="px-3.5 py-2.5 rounded-xl text-xs xl:text-sm font-bold text-[#1B2B3A] hover:text-[#B5441A] border border-[#1B2B3A]/20 hover:border-[#B5441A] bg-white transition shadow-sm flex items-center gap-1.5 whitespace-nowrap">
            <svg class="w-4 h-4 text-[#B5441A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>{{ company.phone1 }}</span>
          </a>

          <!-- WhatsApp Quote Green Button -->
          <a 
            [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20get%20a%20cleaning%20quote'" 
            target="_blank"
            class="px-4 py-2.5 rounded-xl font-heading font-bold text-xs xl:text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap">
            <span>💬</span>
            <span>WhatsApp Quote</span>
          </a>
        </div>

        <!-- Mobile Controls -->
        <div class="flex items-center gap-2 lg:hidden">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="text-xs bg-[#B5441A] text-white font-bold px-3 py-2 rounded-xl shadow-sm flex items-center gap-1">
            <span>Call</span>
          </a>
          <button 
            (click)="toggleMobileMenu()" 
            class="p-2.5 rounded-xl text-[#1B2B3A] hover:bg-[#F3EFEA] transition focus:outline-none"
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

      <!-- Mobile Full-Screen Dropdown Menu -->
      <div 
        *ngIf="mobileMenuOpen()" 
        class="lg:hidden border-t border-[#F3EFEA] bg-[#FAFAF8] px-5 pt-4 pb-8 space-y-2 shadow-2xl animate-in slide-in-from-top-4 duration-200">
        
        <div class="pb-2 mb-2 border-b border-[#F3EFEA] px-2 flex items-center justify-between">
          <div>
            <p class="font-heading font-black text-[#1B2B3A] text-base leading-tight">Bright<span class="text-[#B5441A]">2</span>Shine</p>
            <p class="text-[10px] text-[#2B2F33]/60 font-semibold uppercase tracking-wider">Professional Cleaners</p>
          </div>
          <span class="text-[11px] font-bold text-[#3BA8B5] bg-[#3BA8B5]/10 px-2 py-0.5 rounded-full">Menu</span>
        </div>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          [routerLinkActiveOptions]="{exact: true}"
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Home</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/services" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Cleaning Services</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/cleaning-process" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Cleaning Process</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/" 
          fragment="pricing"
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Pricing</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/reviews" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Client Reviews</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/contact" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Contact & Locations</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <!-- Mobile Email links -->
        <div class="px-4 py-3 rounded-2xl bg-[#F3EFEA] text-xs text-[#2B2F33] space-y-1 mt-3">
          <p class="font-bold text-[#1B2B3A] uppercase text-[10px] tracking-wider">Email Inquiries:</p>
          <a [href]="'mailto:' + company.email" class="block text-[#B5441A] font-semibold">{{ company.email }}</a>
          <a [href]="'mailto:' + company.email2" class="block text-[#B5441A] font-semibold">{{ company.email2 }}</a>
        </div>

        <div class="pt-4 border-t border-[#F3EFEA] flex flex-col gap-2.5">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full text-center py-3 rounded-xl font-bold bg-[#1B2B3A] text-white flex items-center justify-center gap-2 shadow-md">
            <svg class="w-4 h-4 text-[#B5441A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            Call {{ company.phone1 }}
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw" 
            target="_blank"
            class="w-full text-center py-3 rounded-xl font-bold bg-[#B5441A] text-white flex items-center justify-center gap-2 shadow-sm">
            WhatsApp Us
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
