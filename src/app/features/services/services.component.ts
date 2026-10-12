import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { COMPANY_DETAILS, FAQS, SERVICES, ServiceItem } from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, Tilt3DDirective],
  template: `
    <!-- Page Hero Banner with Breadcrumbs -->
    <section class="bg-navy text-white pt-14 pb-16 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-sand/70 mb-4">
          <a routerLink="/" class="hover:text-brand-light transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Services</span>
        </nav>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          Specialist Cleaning Services
        </h1>
        <p class="text-sand/80 text-sm sm:text-base max-w-2xl leading-relaxed">
          Tailored residential, commercial, and tenancy cleaning solutions across East London & Essex. Guaranteed standards, eco-safe materials, and vetted professionals.
        </p>
      </div>
    </section>

    <!-- Filter Tabs & Services Grid -->
    <section class="py-16 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 mb-14">
          <button 
            (click)="setFilter('all')"
            [ngClass]="activeFilter() === 'all' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            All Services ({{ allServices.length }})
          </button>

          <button 
            (click)="setFilter('residential')"
            [ngClass]="activeFilter() === 'residential' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            Residential Cleans
          </button>

          <button 
            (click)="setFilter('commercial')"
            [ngClass]="activeFilter() === 'commercial' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            Commercial & Offices
          </button>

          <button 
            (click)="setFilter('specialist')"
            [ngClass]="activeFilter() === 'specialist' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            End of Tenancy & Carpets
          </button>
        </div>

        <!-- Detailed Services Grid -->
        <div class="space-y-12">
          <div 
            *ngFor="let s of filteredServices()" 
            [id]="s.id"
            appTilt3D
            [maxTilt]="6"
            class="bg-white rounded-3xl p-6 sm:p-10 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300">
            
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <!-- Left: Description and What's Included -->
              <div class="lg:col-span-8 space-y-5">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand/10 text-brand">
                    {{ s.category }}
                  </span>
                  <span *ngIf="s.popular" class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 text-emerald-800">
                    Client Favorite
                  </span>
                </div>

                <h2 class="text-2xl sm:text-3xl font-heading font-black text-navy">
                  {{ s.title }}
                </h2>

                <p class="text-navy/75 text-sm sm:text-base leading-relaxed">
                  {{ s.description }}
                </p>

                <!-- What's included checklist -->
                <div>
                  <h4 class="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-3">
                    What's Included:
                  </h4>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div *ngFor="let item of s.features" class="flex items-start gap-2.5 text-xs sm:text-sm text-navy/85">
                      <svg class="w-4 h-4 text-brand flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span>{{ item }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right: Pricing Box & Action Card -->
              <div class="lg:col-span-4 bg-sand/40 rounded-2xl p-6 border border-sand-dark/30 flex flex-col justify-between space-y-6">
                <div>
                  <span class="text-xs font-bold uppercase text-navy/50 tracking-wider">Estimated Price</span>
                  <p class="text-2xl font-heading font-black text-navy mt-1">{{ s.startingPrice }}</p>
                  <p class="text-xs text-navy/60 mt-1">Turnaround: {{ s.turnaround }}</p>
                </div>

                <div class="space-y-3">
                  <a 
                    [href]="'tel:' + company.phone1Raw"
                    class="w-full text-center block py-3.5 px-4 rounded-xl font-heading font-bold text-sm bg-gradient-to-r from-brand to-brand-light text-white shadow-md hover:shadow-glow transition">
                    Call For {{ s.title }}
                  </a>

                  <a 
                    [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20book%20' + s.title"
                    target="_blank"
                    class="w-full text-center block py-3 px-4 rounded-xl font-bold text-xs bg-[#25D366] text-white hover:bg-[#20ba5a] transition">
                    Inquire via WhatsApp
                  </a>
                </div>

                <div class="text-[11px] text-navy/60 space-y-1">
                  <p>✓ All eco supplies provided</p>
                  <p>✓ 100% Satisfaction guarantee</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Pricing / "How We Quote" Block -->
    <section class="py-16 bg-[#F3E6DA]/50 border-y border-sand-dark/20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span class="text-xs uppercase font-bold tracking-widest text-brand">Transparent Billing</span>
        <h2 class="text-2xl sm:text-3xl font-heading font-black text-navy">
          How We Quote Your Space
        </h2>
        <p class="text-sm sm:text-base text-navy/70 leading-relaxed">
          In the UK, every property is distinctive. Rather than surprising you with rigid upfront figures that don't match your needs, Bright2Shine assesses:
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left pt-4">
          <div class="bg-white p-5 rounded-2xl border border-sand-dark/20 shadow-sm">
            <h4 class="font-heading font-bold text-sm text-navy mb-1">1. Size & Layout</h4>
            <p class="text-xs text-navy/60">Number of bedrooms, bathrooms, receptions and square footage.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-sand-dark/20 shadow-sm">
            <h4 class="font-heading font-bold text-sm text-navy mb-1">2. Level of Dirt / Need</h4>
            <p class="text-xs text-navy/60">Standard upkeep vs. heavy post-tenancy grease or post-builder dust.</p>
          </div>
          <div class="bg-white p-5 rounded-2xl border border-sand-dark/20 shadow-sm">
            <h4 class="font-heading font-bold text-sm text-navy mb-1">3. Preferred Frequency</h4>
            <p class="text-xs text-navy/60">Weekly, fortnightly discounts or one-time deep clean rates.</p>
          </div>
        </div>

        <div class="pt-4">
          <a routerLink="/contact" class="inline-block px-7 py-3.5 rounded-xl bg-navy text-white font-heading font-bold text-sm shadow hover:bg-navy-light transition">
            Get Your Exact Quote in 5 Minutes
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ Accordion -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center mb-14 space-y-3">
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Got Questions?</span>
          <h2 class="text-3xl font-heading font-black text-navy">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-navy/70">
            Everything you need to know regarding our supplies, team vetting, guarantees, and bookings.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            *ngFor="let faq of faqs; let i = index"
            class="rounded-2xl border border-sand-dark/30 overflow-hidden transition-all duration-200"
            [ngClass]="openFaqIndex() === i ? 'bg-sand/30 border-brand/30' : 'bg-white'">
            
            <button 
              (click)="toggleFaq(i)"
              class="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none">
              <span class="font-heading font-bold text-sm sm:text-base text-navy">
                {{ faq.question }}
              </span>
              <span class="w-8 h-8 rounded-full bg-sand flex items-center justify-center flex-shrink-0 text-navy font-bold text-lg">
                {{ openFaqIndex() === i ? '−' : '+' }}
              </span>
            </button>

            <div 
              *ngIf="openFaqIndex() === i"
              class="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-navy/75 leading-relaxed border-t border-sand/40 pt-4">
              {{ faq.answer }}
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-navy text-white text-center">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        <h2 class="text-2xl sm:text-3xl font-heading font-black">
          Need A Bespoke Cleaning Plan?
        </h2>
        <p class="text-sand/80 text-sm">
          Speak with our team today on <strong class="text-white">{{ company.phone1 }}</strong> or submit a quick quote request.
        </p>
        <div class="pt-2">
          <a routerLink="/contact" class="px-8 py-3.5 rounded-xl bg-brand text-white font-heading font-bold text-sm shadow-glow hover:bg-brand-hover transition inline-block">
            Contact Our Team Now
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  company = COMPANY_DETAILS;
  allServices = SERVICES;
  faqs = FAQS;

  activeFilter = signal<'all' | 'residential' | 'commercial' | 'specialist'>('all');
  openFaqIndex = signal<number | null>(0);

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        setTimeout(() => {
          const el = document.getElementById(fragment);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 150);
      }
    });
  }

  setFilter(filter: 'all' | 'residential' | 'commercial' | 'specialist'): void {
    this.activeFilter.set(filter);
  }

  filteredServices(): ServiceItem[] {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allServices;
    return this.allServices.filter(s => s.category === filter);
  }

  toggleFaq(index: number): void {
    this.openFaqIndex.update(cur => cur === index ? null : index);
  }
}
