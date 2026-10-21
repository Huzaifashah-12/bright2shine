import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, HOW_WE_WORK_STEPS } from '../../data/site-data';

@Component({
  selector: 'app-cleaning-process',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Hero Banner (Section 10 & 26: Menu label & Page Heading "How We Work") -->
    <section class="bg-[#1B2B3A] text-white pt-16 pb-20 relative overflow-hidden">
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[#3BA8B5]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-white/70 mb-4">
          <a routerLink="/" class="hover:text-[#3BA8B5] transition font-medium">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">How We Work</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-white mb-4">
          <span>OPERATIONAL EXCELLENCE &amp; QUALITY CHECKS</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          How We Work
        </h1>
        <p class="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
          How our service is set up and managed — from initial enquiry and free site survey to onboarding, supervisor checklists, and ongoing monthly reviews.
        </p>

        <div class="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="px-6 py-3.5 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-sm shadow-md transition">
            Request a Free Quote
          </a>
          <a 
            [href]="company.whatsappLink"
            target="_blank"
            class="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-sm shadow-md transition">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>

    <!-- 7-Step Timeline (Section 10 & 26: Horizontal on desktop, vertical on mobile, icon per step) -->
    <section class="py-20 sm:py-28 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">THE 7-STEP JOURNEY</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Our Structured Client Service Timeline
          </h2>
          <p class="text-sm text-[#2B2F33]/70">
            Professional workflow designed for commercial premises, managing agents, hostels and private residences.
          </p>
        </div>

        <!-- Desktop Horizontal Timeline Grid (Hidden on Mobile) -->
        <div class="hidden lg:grid grid-cols-7 gap-4 relative">
          <!-- Continuous Connection Line -->
          <div class="absolute top-10 left-6 right-6 h-1 bg-[#F3EFEA] z-0"></div>

          <div 
            *ngFor="let step of steps"
            class="relative z-10 flex flex-col items-center text-center space-y-3">
            
            <!-- Number Circle Badge -->
            <div class="w-12 h-12 rounded-full bg-[#1B2B3A] text-white font-heading font-black text-base flex items-center justify-center shadow-md border-4 border-[#FAF8F5]">
              {{ step.number }}
            </div>

            <!-- Card Body -->
            <div class="bg-white rounded-2xl p-4 border border-[#F3EFEA] shadow-soft w-full flex-1 flex flex-col justify-start">
              <span class="text-xl mb-1">
                <ng-container [ngSwitch]="step.number">
                  <span *ngSwitchCase="'1'">📩</span>
                  <span *ngSwitchCase="'2'">🔍</span>
                  <span *ngSwitchCase="'3'">📋</span>
                  <span *ngSwitchCase="'4'">🔑</span>
                  <span *ngSwitchCase="'5'">✨</span>
                  <span *ngSwitchCase="'6'">✅</span>
                  <span *ngSwitchCase="'7'">🔄</span>
                </ng-container>
              </span>
              <h3 class="font-heading font-bold text-xs text-[#1B2B3A] mb-1.5 leading-snug">{{ step.title }}</h3>
              <p class="text-[11px] text-[#2B2F33]/80 leading-relaxed font-medium">{{ step.detail }}</p>
            </div>

          </div>
        </div>

        <!-- Mobile & Tablet Vertical Timeline (Visible < lg) -->
        <div class="lg:hidden space-y-6 relative">
          <!-- Vertical Line -->
          <div class="absolute top-4 bottom-4 left-6 w-1 bg-[#F3EFEA] z-0"></div>

          <div 
            *ngFor="let step of steps" 
            class="relative z-10 flex items-start gap-4">
            
            <div class="w-12 h-12 rounded-full bg-[#1B2B3A] text-white font-heading font-black text-sm flex items-center justify-center flex-shrink-0 shadow-md border-4 border-[#FAF8F5]">
              {{ step.number }}
            </div>

            <div class="bg-white rounded-2xl p-5 border border-[#F3EFEA] shadow-soft flex-1">
              <div class="flex items-center gap-2 mb-1">
                <span class="text-lg">
                  <ng-container [ngSwitch]="step.number">
                    <span *ngSwitchCase="'1'">📩</span>
                    <span *ngSwitchCase="'2'">🔍</span>
                    <span *ngSwitchCase="'3'">📋</span>
                    <span *ngSwitchCase="'4'">🔑</span>
                    <span *ngSwitchCase="'5'">✨</span>
                    <span *ngSwitchCase="'6'">✅</span>
                    <span *ngSwitchCase="'7'">🔄</span>
                  </ng-container>
                </span>
                <h3 class="font-heading font-bold text-sm text-[#1B2B3A]">{{ step.title }}</h3>
              </div>
              <p class="text-xs text-[#2B2F33]/80 leading-relaxed">{{ step.detail }}</p>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Final Call to Action (Section 10: End the page with Final CTA from Section 07) -->
    <section class="py-20 sm:py-28 bg-[#1B2B3A] text-white text-center relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#1B2B3A] via-[#1B2B3A]/90 to-[#1B2B3A]/80"></div>
      
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-heading font-black leading-tight tracking-tight text-white">
          Get your free cleaning quote today
        </h2>

        <p class="text-base sm:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
          Tell us about your premises and we'll send a clear, fixed price — usually within 48 hours.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-base shadow-xl hover:-translate-y-0.5 transition duration-200">
            Get a Free Quote
          </a>
          <a 
            [href]="company.whatsappLink" 
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-base shadow-lg hover:scale-105 transition duration-200">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  `
})
export class CleaningProcessComponent {
  company = COMPANY_DETAILS;
  steps = HOW_WE_WORK_STEPS;
}
