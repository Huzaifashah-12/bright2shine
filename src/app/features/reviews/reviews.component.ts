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
    <!-- 1. REVIEWS HERO BANNER (#1B2B3A Deep Navy, #B5441A Burnt Orange, #3BA8B5 Fresh Aqua) -->
    <section class="bg-[#1B2B3A] text-white pt-14 pb-16 relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[#B5441A]/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-[#3BA8B5]/15 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-white/60 mb-4">
          <a routerLink="/" class="hover:text-[#3BA8B5] transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Reviews</span>
        </nav>

        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div>
            <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#3BA8B5] text-xs font-bold uppercase tracking-wider mb-3 border border-white/15">
              <span>⭐⭐⭐⭐⭐</span>
              <span>1,250+ Verified Google Reviews</span>
            </div>
            <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
              We don't like to brag, our popularity speaks for itself
            </h1>
            <p class="text-white/80 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read authentic, verified experiences from tenants, homeowners, and office managers across London & Essex.
            </p>
          </div>

          <!-- Trustindex Verified Rating Summary Box -->
          <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-6 shadow-float">
            <div class="text-center sm:text-left">
              <div class="text-xs font-black uppercase text-[#3BA8B5] tracking-wider mb-1">EXCELLENT</div>
              <div class="text-4xl sm:text-5xl font-heading font-black text-amber-400 leading-none">
                5.0<span class="text-2xl text-white/60 font-semibold">/5</span>
              </div>
              <div class="flex items-center justify-center sm:justify-start text-amber-400 text-sm mt-1">
                ★★★★★
              </div>
              <p class="text-xs text-white/70 mt-1 font-medium">Based on 1,250+ clients</p>
            </div>

            <div class="h-px sm:h-16 w-full sm:w-px bg-white/20"></div>

            <div class="space-y-1.5 text-xs text-white/90">
              <div class="flex items-center gap-2">
                <span class="text-[#3BA8B5] font-bold">✓ 99.8%</span>
                <span>Deposit return pass rate</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#3BA8B5] font-bold">✓ 100%</span>
                <span>Fully vetted DBS cleaners</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-[#3BA8B5] font-bold">✓ 🛡️</span>
                <span>Verified by Trustindex</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 2. REVIEWS FILTER & CARDS GRID (#FAFAF8 background with #F3EFEA borders) -->
    <section class="py-16 bg-[#FAFAF8]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" appRevealOnScroll>
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          <button 
            (click)="setFilter('all')"
            [ngClass]="activeFilter() === 'all' ? 'bg-[#1B2B3A] text-white shadow-md' : 'bg-white text-[#1B2B3A] hover:bg-[#F3EFEA]'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-[#F3EFEA]">
            All Reviews ({{ allReviews.length }})
          </button>

          <button 
            (click)="setFilter('tenancy')"
            [ngClass]="activeFilter() === 'tenancy' ? 'bg-[#1B2B3A] text-white shadow-md' : 'bg-white text-[#1B2B3A] hover:bg-[#F3EFEA]'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-[#F3EFEA]">
            End of Tenancy
          </button>

          <button 
            (click)="setFilter('residential')"
            [ngClass]="activeFilter() === 'residential' ? 'bg-[#1B2B3A] text-white shadow-md' : 'bg-white text-[#1B2B3A] hover:bg-[#F3EFEA]'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-[#F3EFEA]">
            Domestic & Regular Cleans
          </button>

          <button 
            (click)="setFilter('commercial')"
            [ngClass]="activeFilter() === 'commercial' ? 'bg-[#1B2B3A] text-white shadow-md' : 'bg-white text-[#1B2B3A] hover:bg-[#F3EFEA]'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-[#F3EFEA]">
            Office & Commercial
          </button>

          <button 
            (click)="setFilter('specialist')"
            [ngClass]="activeFilter() === 'specialist' ? 'bg-[#1B2B3A] text-white shadow-md' : 'bg-white text-[#1B2B3A] hover:bg-[#F3EFEA]'"
            class="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition border border-[#F3EFEA]">
            Carpet & Specialist
          </button>
        </div>

        <!-- Reviews Grid matching Google Review Widget Cards (No Face Photos) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            *ngFor="let t of filteredReviews()" 
            appTilt3D 
            [maxTilt]="5"
            class="bg-white rounded-2xl p-6 border border-[#F3EFEA] shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between relative group">
            
            <div>
              <!-- Top Row: Avatar with initial letter, Name, Time, and Google G Logo -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                  <!-- Initial Letter Avatar circle -->
                  <div 
                    class="w-11 h-11 rounded-full text-white font-heading font-black text-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    [ngClass]="{
                      'bg-[#00897B]': t.avatarText === 'P' || t.name === 'Philip Lopen',
                      'bg-[#008953]': t.avatarText === 'D' || t.name === 'Dion Rankine',
                      'bg-[#D81B60]': t.avatarText === 'K' || t.name === 'Kim Riches',
                      'bg-[#5C6BC0]': t.avatarText === 'S' || t.name === 'Sarah Jenkins',
                      'bg-[#E65100]': t.avatarText === 'T' || t.name === 'Tariq Al-Mansoor',
                      'bg-[#00838F]': t.avatarText === 'E' || t.name === 'Eleanor Vance'
                    }">
                    {{ t.name[0] }}
                  </div>
                  <div>
                    <h5 class="text-sm font-heading font-bold text-[#1B2B3A] leading-tight">{{ t.name }}</h5>
                    <p class="text-xs text-[#2B2F33]/60 mt-0.5">{{ t.date }}</p>
                  </div>
                </div>

                <!-- Google G Logo -->
                <div class="w-6 h-6 flex-shrink-0">
                  <svg viewBox="0 0 24 24" class="w-full h-full">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                </div>
              </div>

              <!-- 5 Gold Stars -->
              <div class="flex text-amber-500 text-sm tracking-wider mb-4">
                ★★★★★
              </div>

              <!-- Review Quote -->
              <p class="text-xs sm:text-sm text-[#2B2F33]/90 leading-relaxed font-normal">
                “{{ t.quote }}”
              </p>
            </div>

            <!-- Bottom Link: Read full review -->
            <div class="pt-6 mt-6 border-t border-[#F3EFEA] flex items-center justify-between text-xs">
              <span class="font-bold text-[#1B2B3A] hover:text-[#B5441A] transition cursor-pointer flex items-center gap-1">
                <span>Read full review</span>
                <span>→</span>
              </span>
              <span class="text-[11px] font-semibold text-[#3BA8B5] bg-[#3BA8B5]/10 px-2 py-0.5 rounded">
                {{ t.service }}
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 3. TRUST HIGHLIGHT BANNER (#1B2B3A Deep Navy) -->
    <section class="py-16 bg-[#F3EFEA] border-y border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-[#1B2B3A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-float">
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center sm:text-left">
            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-[#3BA8B5] flex items-center justify-center font-bold text-xl mb-3">
                🛡️
              </div>
              <h4 class="font-heading font-bold text-lg text-white">72-Hour Free Re-clean</h4>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                If your landlord or estate agent notes any missed spot on checkout, we return and reclean it with zero charge.
              </p>
            </div>

            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-[#3BA8B5] flex items-center justify-center font-bold text-xl mb-3">
                🌿
              </div>
              <h4 class="font-heading font-bold text-lg text-white">Safe Eco Supplies</h4>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                We bring hospital-grade, non-toxic detergents safe for children, dogs, and cats.
              </p>
            </div>

            <div class="space-y-2">
              <div class="w-12 h-12 rounded-2xl bg-white/10 text-[#3BA8B5] flex items-center justify-center font-bold text-xl mb-3">
                ⭐
              </div>
              <h4 class="font-heading font-bold text-lg text-white">DBS-Vetted Staff</h4>
              <p class="text-xs sm:text-sm text-white/80 leading-relaxed">
                Every cleaner is reference-screened, police-checked, and insured up to £2,000,000.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 4. CTA FOOTER SECTION -->
    <section class="py-20 bg-[#FAFAF8] text-center">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">Ready For Spotless Results?</span>
        <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
          Experience Why Clients Give Us 5 Stars
        </h2>
        <p class="text-sm sm:text-base text-[#2B2F33]/80 max-w-xl mx-auto leading-relaxed">
          Call our office or email our team for an immediate, transparent cleaning quote.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-[#1B2B3A] pb-2">
          <a [href]="'mailto:' + company.email" class="text-[#B5441A] hover:underline">✉️ {{ company.email }}</a>
          <span>•</span>
          <a [href]="'mailto:' + company.email2" class="text-[#B5441A] hover:underline">✉️ {{ company.email2 }}</a>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#1B2B3A] hover:bg-[#131e28] text-white font-heading font-bold text-sm shadow-md transition flex items-center justify-center gap-2">
            <svg class="w-4 h-4 text-[#B5441A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call {{ company.phone1 }}</span>
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw" 
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-sm shadow-md transition flex items-center justify-center gap-2">
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
