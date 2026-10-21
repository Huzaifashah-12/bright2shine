import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS } from '../../data/site-data';
import { ModalService, PolicyModalType } from '../../shared/services/modal.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Footer (#1B2B3A Deep Navy, #B5441A Burnt Orange border, #3BA8B5 Fresh Aqua accents) -->
    <footer class="bg-[#1B2B3A] text-[#FAFAF8] pt-16 pb-12 border-t-4 border-[#B5441A] relative overflow-hidden">
      <!-- Background subtle glow elements -->
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#B5441A]/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-0 left-10 w-80 h-80 bg-[#3BA8B5]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- 4 Column Grid (Section 3.3) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          
          <!-- Column 1: Brand -->
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-2xl bg-white overflow-hidden p-1 shadow-md border border-[#F3EFEA] flex items-center justify-center">
                <img src="logo.png" alt="Bright2Shine Logo" class="w-full h-full object-contain" />
              </div>
              <div>
                <span class="text-2xl font-heading font-black text-white tracking-tight">
                  Bright<span class="text-[#B5441A]">2</span>Shine
                </span>
                <span class="block text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  {{ company.tagline }}
                </span>
              </div>
            </div>

            <p class="text-white/80 text-sm leading-relaxed">
              Commercial and domestic cleaning across East London &amp; Essex.
            </p>

            <!-- Insurance Badge (Section 3.4) -->
            <div class="pt-2">
              <div class="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs text-white/85 space-y-1">
                <div class="flex items-center gap-1.5 font-bold text-[#3BA8B5]">
                  <span>🛡️</span>
                  <span>Fully Insured</span>
                </div>
                <p class="text-[11px] text-white/75 leading-snug">
                  {{ company.insuranceText }}
                </p>
              </div>
            </div>
          </div>

          <!-- Column 2: Services -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#B5441A]"></span>
              Services
            </h4>
            <ul class="space-y-2.5 text-sm text-white/80">
              <li>
                <a routerLink="/services" fragment="office" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Office Cleaning
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="communal" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Communal Areas
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="hostels" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Hostels &amp; Supported Housing
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="after-builders" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> After Builders
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="home-cleaning" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Home Cleaning
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="pricing" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> End of Tenancy
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="pricing" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Carpet &amp; Upholstery
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Company -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#B5441A]"></span>
              Company
            </h4>
            <ul class="space-y-2.5 text-sm text-white/80">
              <li>
                <a routerLink="/" fragment="about" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> About us
                </a>
              </li>
              <li>
                <a routerLink="/cleaning-process" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> How We Work
                </a>
              </li>
              <li>
                <a routerLink="/services" fragment="pricing" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Prices
                </a>
              </li>
              <li>
                <a routerLink="/contact" fragment="quote" class="hover:text-[#3BA8B5] transition flex items-center gap-2 font-semibold text-[#B5441A]">
                  <span class="text-[#B5441A] text-xs">›</span> Get a Free Quote
                </a>
              </li>
              <li>
                <a routerLink="/contact" class="hover:text-[#3BA8B5] transition flex items-center gap-2">
                  <span class="text-[#B5441A] text-xs">›</span> Contact
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Get in touch -->
          <div>
            <h4 class="font-heading font-bold text-white text-base mb-5 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#B5441A]"></span>
              Get in touch
            </h4>
            <div class="space-y-3 text-sm text-white/85">
              <!-- Phone -->
              <div class="flex items-center gap-3">
                <svg class="w-4 h-4 text-[#3BA8B5] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a [href]="'tel:' + company.phone1Raw" class="hover:text-[#3BA8B5] transition font-bold text-white">
                  {{ company.phoneDisplay }}
                </a>
              </div>

              <!-- General & Home email -->
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-[#3BA8B5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div class="flex flex-col text-xs">
                  <span class="text-white/60">General &amp; Home:</span>
                  <a [href]="'mailto:' + company.email" class="hover:text-[#3BA8B5] transition text-white font-medium">
                    {{ company.email }}
                  </a>
                </div>
              </div>

              <!-- Commercial email -->
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-[#3BA8B5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <div class="flex flex-col text-xs">
                  <span class="text-white/60">Commercial Contracts:</span>
                  <a [href]="'mailto:' + company.emailCommercial" class="hover:text-[#3BA8B5] transition text-white font-medium">
                    {{ company.emailCommercial }}
                  </a>
                </div>
              </div>

              <!-- Opening hours -->
              <div class="pt-1 text-xs text-white/70 space-y-0.5">
                <p class="font-semibold text-white/90">Office hours: {{ company.officeHours }}</p>
                <p class="text-[11px] text-[#3BA8B5]">{{ company.cleaningAvailability }}</p>
              </div>

              <!-- Areas -->
              <div class="pt-2 border-t border-white/10 text-[11px] text-white/70">
                <strong class="text-white">Areas:</strong> {{ company.standardAreasString }}
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom bar (Legal line + working pop-up links: Section 3.3) -->
        <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <!-- Legal Line -->
          <p class="text-center md:text-left text-[11px] text-white/60">
            {{ company.legalLine }}
          </p>

          <!-- Working Pop-up window links -->
          <div class="flex flex-wrap items-center justify-center gap-4 text-xs">
            <button 
              type="button" 
              (click)="openModal('privacy')" 
              class="hover:text-white underline transition focus:outline-none">
              Privacy Policy
            </button>
            <span class="text-white/20">•</span>
            <button 
              type="button" 
              (click)="openModal('terms')" 
              class="hover:text-white underline transition focus:outline-none">
              Terms &amp; Conditions
            </button>
            <span class="text-white/20">•</span>
            <button 
              type="button" 
              (click)="openModal('cookie')" 
              class="hover:text-white underline transition focus:outline-none">
              Cookie Policy
            </button>
            <span class="text-white/20">•</span>
            <a 
              href="insurance-certificate.pdf" 
              target="_blank"
              class="hover:text-[#3BA8B5] underline transition">
              Insurance Certificate
            </a>
          </div>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  company = COMPANY_DETAILS;
  modalService = inject(ModalService);

  openModal(type: PolicyModalType): void {
    this.modalService.open(type);
  }
}
