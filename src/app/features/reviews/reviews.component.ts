import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, TESTIMONIALS, TestimonialItem } from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, RouterLink, Tilt3DDirective, RevealOnScrollDirective],
  template: `
    <!-- 1. REVIEWS HERO BANNER -->
    <section class="bg-navy text-white pt-14 pb-16 relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-sand/70 mb-4">
          <a routerLink="/" class="hover:text-brand-light transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Reviews</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-light text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
              <span>⭐⭐⭐⭐⭐</span>
              <span>1,200+ Verified 5-Star Cleans</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
              Client Cleaning Reviews & Ratings
            </h1>
            <p class="text-sand/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read authentic experiences from tenants, homeowners, estate agents, and office managers across Ilford, Barking, Redbridge, and East London.
            </p>
          </div>

          <!-- Rating Summary Box -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-float">
            <div class="text-center sm:text-left">
              <div class="text-4xl sm:text-5xl font-heading font-black text-amber-400 leading-none">
                5.0<span class="text-2xl text-sand/60 font-semibold">/5</span>
              </div>
              <div class="flex items-center justify-center sm:justify-start text-amber-400 text-sm mt-1">
                ★★★★★
              </div>
              <p class="text-xs text-sand/70 mt-1 font-medium">Based on 1,250+ clients</p>
            </div>

            <div class="h-px sm:h-16 w-full sm:w-px bg-white/20"></div>

            <div class="space-y-1.5 text-xs text-sand/90">
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 font-bold">✓ 99.8%</span>
                <span>Deposit return pass rate</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 font-bold">✓ 100%</span>
                <span>Fully vetted DBS cleaners</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-emerald-400 font-bold">✓ £2M</span>
                <span>Insured for peace of mind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. REVIEWS FILTER & CARDS GRID -->
    <section class="py-16 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" appRevealOnScroll>
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button 
            (click)="setFilter('all')"
            [ngClass]="activeFilter() === 'all' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            All Reviews ({{ allReviews.length }})
          </button>

          <button 
            (click)="setFilter('tenancy')"
            [ngClass]="activeFilter() === 'tenancy' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            End of Tenancy
          </button>

          <button 
            (click)="setFilter('residential')"
            [ngClass]="activeFilter() === 'residential' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            Domestic & Regular Cleans
          </button>

          <button 
            (click)="setFilter('commercial')"
            [ngClass]="activeFilter() === 'commercial' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            Office & Commercial
          </button>

          <button 
            (click)="setFilter('specialist')"
            [ngClass]="activeFilter() === 'specialist' ? 'bg-navy text-white shadow-md' : 'bg-white text-navy hover:bg-sand/60'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-sand-dark/30">
            Carpet & Specialist
          </button>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            *ngFor="let t of filteredReviews()" 
            appTilt3D 
            [maxTilt]="8"
            class="bg-white rounded-3xl p-7 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between group">
            
            <div>
              <!-- Stars & Verification Badge -->
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center text-amber-400 text-sm tracking-wider">
                  ★★★★★
                </div>
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {{ t.date }}
                </span>
              </div>

              <!-- Quote -->
              <p class="text-xs sm:text-sm text-navy/85 italic leading-relaxed mb-6">
                “{{ t.quote }}”
              </p>
            </div>

            <!-- Client Info Row -->
            <div class="pt-4 border-t border-sand/60 flex items-center gap-3.5">
              <img 
                [src]="t.avatarUrl" 
                [alt]="t.name" 
                class="w-12 h-12 rounded-full object-cover border-2 border-brand/30 shadow-sm flex-shrink-0"
              />
              <div class="min-w-0 flex-1">
                <h5 class="text-sm font-heading font-bold text-navy leading-tight truncate">{{ t.name }}</h5>
                <p class="text-xs text-navy/60 font-medium truncate">{{ t.location }}</p>
                <span class="inline-block mt-1 text-[11px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-md truncate max-w-full">
                  {{ t.service }}
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 3. TRUST HIGHLIGHT BANNER -->
    <section class="py-16 bg-white border-y border-sand-dark/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-float">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center font-bold text-xl mb-3">
                🛡️
              </div>
              <h4 class="font-heading font-bold text-lg text-white">72-Hour Free Re-clean</h4>
              <p class="text-xs sm:text-sm text-sand/80 leading-relaxed">
                If your landlord or estate agent notes any missed spot on checkout, we return and reclean it with zero charge.
              </p>
            </div>

            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center font-bold text-xl mb-3">
                🌿
              </div>
              <h4 class="font-heading font-bold text-lg text-white">Safe Eco Supplies</h4>
              <p class="text-xs sm:text-sm text-sand/80 leading-relaxed">
                We bring hospital-grade, non-toxic detergents safe for children, dogs, and cats.
              </p>
            </div>

            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center font-bold text-xl mb-3">
                ⭐
              </div>
              <h4 class="font-heading font-bold text-lg text-white">DBS-Vetted Staff</h4>
              <p class="text-xs sm:text-sm text-sand/80 leading-relaxed">
                Every cleaner is reference-screened, police-checked, and insured up to £2,000,000.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. CTA FOOTER SECTION -->
    <section class="py-20 bg-gradient-to-b from-[#FAF8F5] to-[#F3E6DA] text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span class="text-xs uppercase font-bold tracking-widest text-brand">Ready For Spotless Results?</span>
        <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
          Experience Why Clients Give Us 5 Stars
        </h2>
        <p class="text-sm sm:text-base text-navy/70 max-w-xl mx-auto leading-relaxed">
          Call our Barking office or chat with us on WhatsApp for an immediate, transparent cleaning quote.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white font-heading font-bold text-sm shadow-lg shadow-brand/30 hover:shadow-glow hover:-translate-y-0.5 transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call {{ company.phone1 }}</span>
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw"
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] text-white font-heading font-bold text-sm shadow-md hover:scale-105 transition flex items-center justify-center gap-2">
            <span>WhatsApp Quick Booking</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class ReviewsComponent {
  company = COMPANY_DETAILS;
  allReviews = TESTIMONIALS;
  activeFilter = signal<'all' | 'residential' | 'tenancy' | 'commercial' | 'specialist'>('all');

  setFilter(filter: 'all' | 'residential' | 'tenancy' | 'commercial' | 'specialist'): void {
    this.activeFilter.set(filter);
  }

  filteredReviews(): TestimonialItem[] {
    const filter = this.activeFilter();
    if (filter === 'all') return this.allReviews;
    return this.allReviews.filter(r => r.category === filter);
  }
}
