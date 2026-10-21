import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { COMPANY_DETAILS } from '../../data/site-data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- Top Announcement Bar (Section 3.1) -->
    <div class="bg-[#1B2B3A] text-[#FAFAF8] text-xs py-2 px-4 sm:px-8 border-b border-white/10 hidden md:block">
      <div class="max-w-7xl mx-auto flex justify-between items-center font-medium">
        
        <!-- Left: Serving area & contact info -->
        <div class="flex items-center space-x-3">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 text-[#FAFAF8] text-[11px] font-semibold">
            <span class="w-2 h-2 rounded-full bg-[#3BA8B5] animate-pulse"></span>
            <span>Serving East London &amp; Essex</span>
          </span>
          <span class="text-white/20">|</span>
          <a [href]="'tel:' + company.phone1Raw" class="hover:text-[#3BA8B5] transition text-white font-bold flex items-center gap-1.5">
            <span class="text-[#B5441A]">📞</span> {{ company.phoneDisplay }}
          </a>
          <span class="text-white/20">|</span>
          <a [href]="'mailto:' + company.email" class="hover:text-[#3BA8B5] transition text-white/90 flex items-center gap-1.5">
            <span class="text-[#B5441A]">✉</span> {{ company.email }}
          </a>
        </div>

        <!-- Right: Business opening hours info -->
        <div class="flex items-center space-x-3 text-[11px] text-white/80">
          <span>Office: Mon–Sat, 8am–7pm</span>
          <span class="text-white/20">•</span>
          <span class="text-[#3BA8B5] font-semibold">Cleaning available 7 days</span>
        </div>

      </div>
    </div>

    <!-- Main Navigation Bar -->
    <header 
      class="sticky top-0 z-40 transition-all duration-300 w-full"
      [ngClass]="{
        'bg-white/95 backdrop-blur-md shadow-md border-b border-[#F3EFEA] py-3': isScrolled(),
        'bg-[#FAFAF8]/95 backdrop-blur-sm py-4 border-b border-[#F3EFEA]': !isScrolled()
      }">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <!-- Logo with updated subtitle (Section 3.2: COMMERCIAL & DOMESTIC CLEANING) -->
        <a routerLink="/" class="flex items-center gap-3 group focus:outline-none">
          <div class="relative w-11 h-11 sm:w-12 sm:h-12 rounded-2xl overflow-hidden bg-white shadow-sm border border-[#F3EFEA] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <img 
              src="logo.png" 
              alt="Bright2Shine Logo" 
              class="w-full h-full object-contain p-1"
            />
          </div>

          <div class="flex flex-col">
            <span class="text-xl sm:text-2xl font-heading font-black tracking-tight text-[#1B2B3A] leading-none">
              Bright<span class="text-[#B5441A]">2</span>Shine
            </span>
            <span class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#2B2F33]/70 mt-1">
              COMMERCIAL &amp; DOMESTIC CLEANING
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links (Section 3.2: Home, Services dropdown, Prices, How We Work, Contact) -->
        <nav class="hidden lg:flex items-center space-x-1 xl:space-x-2 whitespace-nowrap">
          <a 
            routerLink="/" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            [routerLinkActiveOptions]="{exact: true}"
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition">
            Home
          </a>

          <!-- Services Dropdown (Section 3.2) -->
          <div class="relative group" (mouseleave)="servicesOpen.set(false)">
            <button 
              type="button"
              (click)="toggleServices()"
              class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition flex items-center gap-1.5 focus:outline-none">
              <span>Services</span>
              <svg class="w-4 h-4 text-[#2B2F33]/60 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <!-- Dropdown Menu -->
            <div 
              class="absolute left-0 mt-1 w-72 bg-white rounded-2xl shadow-xl border border-[#F3EFEA] py-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
              <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#B5441A]">Commercial Cleaning</div>
              <a 
                routerLink="/services" 
                fragment="office"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Office Cleaning
              </a>
              <a 
                routerLink="/services" 
                fragment="communal"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Communal Areas (Flats)
              </a>
              <a 
                routerLink="/services" 
                fragment="hostels"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Hostels &amp; Supported Housing
              </a>
              <a 
                routerLink="/services" 
                fragment="schools"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Schools, Clinics &amp; Worship
              </a>
              <a 
                routerLink="/services" 
                fragment="after-builders"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                After Builders (Commercial)
              </a>
              <a 
                routerLink="/services" 
                fragment="windows"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Commercial Windows
              </a>

              <div class="my-1 border-t border-[#F3EFEA]"></div>
              <div class="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#3BA8B5]">Home Cleaning</div>
              <a 
                routerLink="/services" 
                fragment="home-cleaning"
                class="block px-4 py-2 text-xs font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA] hover:text-[#B5441A] transition">
                Home Cleaning (#home-cleaning)
              </a>
            </div>
          </div>

          <!-- Prices Link (Section 3.2: /services#pricing) -->
          <a 
            routerLink="/services" 
            fragment="pricing"
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition">
            Prices
          </a>

          <!-- How We Work Link (Section 3.2: /cleaning-process) -->
          <a 
            routerLink="/cleaning-process" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition">
            How We Work
          </a>

          <!-- Contact Link (Section 3.2: /contact) -->
          <a 
            routerLink="/contact" 
            routerLinkActive="text-[#B5441A] bg-[#B5441A]/10 font-bold" 
            class="px-3 py-2 rounded-xl text-sm font-semibold text-[#1B2B3A] hover:text-[#B5441A] hover:bg-[#F3EFEA] transition">
            Contact
          </a>
        </nav>

        <!-- Right Side: Get a Free Quote (Orange) + Small Green WhatsApp Icon (Section 3.2) -->
        <div class="hidden sm:flex items-center gap-2.5 whitespace-nowrap flex-shrink-0">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="px-4 py-2.5 rounded-xl font-heading font-bold text-xs xl:text-sm text-white bg-[#B5441A] hover:bg-[#9a3814] shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-1.5">
            <span>Get a Free Quote</span>
          </a>

          <a 
            [href]="company.whatsappLink"
            target="_blank"
            class="w-10 h-10 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-md hover:-translate-y-0.5 transition-all duration-200"
            aria-label="Chat on WhatsApp">
            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </div>

        <!-- Mobile Menu Hamburger Button -->
        <div class="flex items-center gap-2 lg:hidden">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="text-xs bg-[#B5441A] text-white font-bold px-3 py-2 rounded-xl shadow-sm">
            <span>Free Quote</span>
          </a>
          <button 
            type="button"
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
            <p class="text-[9px] text-[#2B2F33]/70 font-bold uppercase tracking-wider">Commercial &amp; Domestic Cleaning</p>
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
          <span>Services</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <!-- Commercial anchor links inside mobile menu -->
        <div class="pl-4 pr-2 py-1 space-y-1 text-xs">
          <a (click)="closeMobileMenu()" routerLink="/services" fragment="office" class="block py-1.5 px-3 rounded-lg text-[#2B2F33]/80 hover:bg-[#F3EFEA]">› Office Cleaning</a>
          <a (click)="closeMobileMenu()" routerLink="/services" fragment="communal" class="block py-1.5 px-3 rounded-lg text-[#2B2F33]/80 hover:bg-[#F3EFEA]">› Communal Areas</a>
          <a (click)="closeMobileMenu()" routerLink="/services" fragment="hostels" class="block py-1.5 px-3 rounded-lg text-[#2B2F33]/80 hover:bg-[#F3EFEA]">› Hostels &amp; HMOs</a>
          <a (click)="closeMobileMenu()" routerLink="/services" fragment="home-cleaning" class="block py-1.5 px-3 rounded-lg text-[#2B2F33]/80 hover:bg-[#F3EFEA]">› Home Cleaning</a>
        </div>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/services" 
          fragment="pricing"
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Prices</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/cleaning-process" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>How We Work</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <a 
          (click)="closeMobileMenu()" 
          routerLink="/contact" 
          routerLinkActive="bg-[#B5441A]/10 text-[#B5441A] font-bold" 
          class="flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1B2B3A] hover:bg-[#F3EFEA]">
          <span>Contact</span>
          <svg class="w-4 h-4 text-[#2B2F33]/40" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
        </a>

        <div class="pt-4 border-t border-[#F3EFEA] flex flex-col gap-2.5">
          <a 
            (click)="closeMobileMenu()"
            routerLink="/contact" 
            fragment="quote"
            class="w-full text-center py-3 rounded-xl font-bold bg-[#B5441A] text-white flex items-center justify-center gap-2 shadow-sm">
            Get a Free Quote
          </a>
          <a 
            [href]="company.whatsappLink" 
            target="_blank"
            class="w-full text-center py-3 rounded-xl font-bold bg-[#25D366] text-white flex items-center justify-center gap-2 shadow-sm">
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
  servicesOpen = signal<boolean>(false);

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 25);
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  toggleServices(): void {
    this.servicesOpen.update(v => !v);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
