import { Component, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, SERVICES, TESTIMONIALS, TEAM_MEMBERS } from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { CounterComponent } from '../../shared/components/counter.component';
import { BeforeAfterComponent } from '../../shared/components/before-after.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    Tilt3DDirective, 
    RevealOnScrollDirective, 
    CounterComponent, 
    BeforeAfterComponent
  ],
  template: `
    <!-- 1. HERO SECTION WITH AMBIENT VIDEO ANIMATION -->
    <section class="relative pt-16 pb-24 sm:pt-24 sm:pb-32 overflow-hidden bg-navy-dark text-white">
      
      <!-- Video Background Layer with Local High-Def Cleaning Video -->
      <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          #heroVideo
          src="cleaning-hero.mp4"
          [muted]="true"
          muted 
          autoplay 
          loop 
          playsinline 
          preload="auto"
          class="w-full h-full object-cover scale-105 opacity-80 filter brightness-100 contrast-105 transition-opacity duration-700">
          <source src="cleaning-hero.mp4" type="video/mp4">
        </video>
        
        <!-- Subtle Gradient Overlay so video remains clearly visible while text stays crisp -->
        <div class="absolute inset-0 bg-gradient-to-r from-navy-deep/80 via-navy/55 to-navy-dark/40"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-transparent to-navy/30"></div>
      </div>

      <!-- 3D Glow Orbs & Light Accents -->
      <div class="absolute -top-24 -right-24 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-br from-brand/25 via-brand-light/15 to-transparent rounded-full blur-3xl pointer-events-none animate-pulseGlow z-0"></div>
      <div class="absolute bottom-10 -left-32 w-80 h-80 bg-brand-light/10 rounded-full blur-3xl pointer-events-none z-0"></div>

      <!-- Floating Live Video Badge & Controls -->
      <div class="absolute top-4 right-4 sm:right-8 z-20 flex items-center gap-2">
        <button 
          type="button"
          (click)="toggleVideo()"
          class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[11px] font-bold bg-white/15 hover:bg-white/25 active:scale-95 backdrop-blur-md text-sand border border-white/20 shadow-sm transition pointer-events-auto cursor-pointer">
          <span class="w-2 h-2 rounded-full" [ngClass]="isVideoPlaying() ? 'bg-emerald-400 animate-ping' : 'bg-amber-400'"></span>
          <span>{{ isVideoPlaying() ? 'Live Demo ⏸' : 'Play Video ▶' }}</span>
        </button>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Compelling Typography & CTAs -->
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            <!-- Trust Badge Pill -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 shadow-sm backdrop-blur-md">
              <span class="flex h-2.5 w-2.5 relative">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-light opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-light"></span>
              </span>
              <span class="text-xs font-semibold tracking-wide text-sand-light uppercase">
                #1 Rated Cleaners in East London & Essex
              </span>
            </div>

            <!-- Main Headline -->
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.12] tracking-tight">
              Spotless spaces. <br class="hidden sm:inline" />
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-light via-brand-warm to-amber-300">
                Brighter days.
              </span>
            </h1>

            <!-- Subheading description -->
            <p class="text-base sm:text-lg text-sand/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the pinnacle of cleanliness. Fully vetted, insured, and DBS-checked professionals providing premium domestic, commercial, and guaranteed deposit return end-of-tenancy cleaning.
            </p>

            <!-- Buttons: Direct Call & WhatsApp Contact -->
            <div class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a 
                [href]="'tel:' + company.phone1Raw"
                class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand via-brand-hover to-brand-light text-white font-heading font-bold text-base shadow-lg shadow-brand/30 hover:shadow-glow hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
                <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <span>Call {{ company.phone1 }}</span>
              </a>

              <a 
                [href]="'https://wa.me/' + company.whatsappRaw"
                target="_blank"
                class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] text-white font-heading font-bold text-base shadow-md hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
                <span>WhatsApp Us</span>
              </a>
            </div>

            <!-- Quick Trust Proof under Hero CTA -->
            <div class="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-sand/85">
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center font-bold">✓</span>
                <span>Zero Obligation Quote</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center font-bold">✓</span>
                <span>£2,000,000 Insured</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="w-5 h-5 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 flex items-center justify-center font-bold">✓</span>
                <span>Same-day Availability</span>
              </div>
            </div>

          </div>

          <!-- Right Column: 3D Interactive Floating Visual Object & Star Motif -->
          <div class="lg:col-span-5 flex justify-center items-center relative perspective-1000">
            
            <!-- Floating Bubble Elements -->
            <div class="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-tr from-brand-light/30 to-amber-200/40 backdrop-blur-md border border-white/50 animate-floatSlow shadow-lg z-20 flex items-center justify-center">
              <span class="text-xl">✨</span>
            </div>

            <div class="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-tr from-navy/15 to-white/60 backdrop-blur-md border border-white/40 animate-float shadow-lg z-20 flex flex-col items-center justify-center text-center p-2">
              <span class="text-[10px] uppercase font-bold text-navy">Deposit</span>
              <span class="text-xs font-black text-brand">100% Back</span>
            </div>

            <!-- Central 3D Card Showcase -->
            <div 
              appTilt3D [maxTilt]="12" 
              class="relative w-full max-w-md rounded-3xl glass-card p-6 sm:p-8 shadow-card-3d border-2 border-white/80 overflow-hidden transform-style-3d cursor-pointer">
              
              <!-- Subtle decorative lighting inside card -->
              <div class="absolute top-0 right-0 w-44 h-44 bg-gradient-to-b from-brand/20 to-transparent rounded-full blur-2xl pointer-events-none"></div>

              <!-- Top Row with Main Website Logo & Rating -->
              <div class="flex items-center justify-between mb-6 translate-z-20">
                <div class="flex items-center gap-3">
                  <div class="w-14 h-14 rounded-2xl bg-white p-1.5 shadow-glow border border-brand/30 flex items-center justify-center overflow-hidden">
                    <img src="logo.jpg" alt="Bright2Shine Main Brand Logo" class="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 class="font-heading font-black text-navy text-lg leading-tight">Bright2Shine</h3>
                    <p class="text-xs text-brand font-bold">East London Cleaning Specialists</p>
                  </div>
                </div>

                <div class="flex items-center gap-1 text-amber-500 text-sm font-bold bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60 shadow-sm">
                  <span>★</span>
                  <span>5.0</span>
                </div>
              </div>

              <!-- Interactive Visual Showcase Grid inside card -->
              <div class="space-y-3.5 mb-6 translate-z-10">
                <div class="p-3.5 rounded-2xl bg-white/70 border border-white/60 flex items-center justify-between shadow-sm hover:shadow transition">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-navy/10 text-navy flex items-center justify-center font-bold text-sm">
                      🏠
                    </div>
                    <div>
                      <p class="text-xs font-bold text-navy">Domestic & Deep Cleaning</p>
                      <p class="text-[11px] text-navy/60">Eco-friendly surface hygiene</p>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-brand">Pristine</span>
                </div>

                <div class="p-3.5 rounded-2xl bg-white/70 border border-white/60 flex items-center justify-between shadow-sm hover:shadow transition">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                      🔑
                    </div>
                    <div>
                      <p class="text-xs font-bold text-navy">End of Tenancy Guarantee</p>
                      <p class="text-[11px] text-navy/60">72-Hour re-clean coverage</p>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-emerald-600">Approved</span>
                </div>

                <div class="p-3.5 rounded-2xl bg-white/70 border border-white/60 flex items-center justify-between shadow-sm hover:shadow transition">
                  <div class="flex items-center gap-3">
                    <div class="w-8 h-8 rounded-xl bg-navy/10 text-navy flex items-center justify-center font-bold text-sm">
                      🏢
                    </div>
                    <div>
                      <p class="text-xs font-bold text-navy">Office & Commercial</p>
                      <p class="text-[11px] text-navy/60">Tailored out-of-hours contracts</p>
                    </div>
                  </div>
                  <span class="text-xs font-bold text-navy">Flexible</span>
                </div>
              </div>

              <!-- Card Bottom Badge -->
              <div class="translate-z-30 p-3 rounded-2xl bg-gradient-to-r from-navy to-navy-light text-white text-center shadow-md">
                <p class="text-xs font-medium">
                  Covering <strong class="text-brand-light">Barking, Ilford, Redbridge & East London</strong>
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- 2. TRUST STRIP (4 Pillars) -->
    <section class="py-8 bg-white border-y border-sand-dark/20 relative z-10 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sand/60 text-brand flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-heading font-bold text-navy text-sm sm:text-base">Fully Insured</h4>
              <p class="text-xs text-navy/60">£2M public liability policy</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sand/60 text-brand flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"/>
              </svg>
            </div>
            <div>
              <h4 class="font-heading font-bold text-navy text-sm sm:text-base">Eco-Friendly</h4>
              <p class="text-xs text-navy/60">Pet & child-safe products</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sand/60 text-brand flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
            </div>
            <div>
              <h4 class="font-heading font-bold text-navy text-sm sm:text-base">DBS-Checked Staff</h4>
              <p class="text-xs text-navy/60">Vetted & thoroughly trained</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-2xl bg-sand/60 text-brand flex items-center justify-center flex-shrink-0 shadow-inner">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
              </svg>
            </div>
            <div>
              <h4 class="font-heading font-bold text-navy text-sm sm:text-base">Guaranteed Clean</h4>
              <p class="text-xs text-navy/60">100% satisfaction promise</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 3. SERVICES PREVIEW (6 3D Tilt Cards) -->
    <section class="py-20 sm:py-28 relative bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">What We Offer</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Comprehensive Cleaning Solutions
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            From scheduled house visits to specialist end-of-tenancy deep cleans, we tailor every detail to your schedule and standards.
          </p>
        </div>

        <!-- 6 Tilt Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let s of services"
            appTilt3D
            [maxTilt]="10"
            class="group rounded-3xl p-7 bg-white/80 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between relative overflow-hidden backdrop-blur-md">
            
            <!-- Popular Badge -->
            <div *ngIf="s.popular" class="absolute top-4 right-4 bg-gradient-to-r from-brand to-brand-light text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Most Popular
            </div>

            <div>
              <!-- Service Icon -->
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sand to-sand-light text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-6 shadow-sm">
                <!-- Icon mapping -->
                <svg *ngIf="s.icon === 'home'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
                <svg *ngIf="s.icon === 'briefcase'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <svg *ngIf="s.icon === 'key'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                </svg>
                <svg *ngIf="s.icon === 'sparkles'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
                <svg *ngIf="s.icon === 'brush'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4 4 4 0 014-4h4a4 4 0 014 4 4 4 0 01-4 4H7zM7 13V5a2 2 0 012-2h6a2 2 0 012 2v8M7 9h10"/>
                </svg>
                <svg *ngIf="s.icon === 'building'" class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>

              <!-- Title & Desc -->
              <h3 class="text-xl font-heading font-extrabold text-navy group-hover:text-brand transition mb-2">
                {{ s.title }}
              </h3>
              <p class="text-xs sm:text-sm text-navy/70 mb-5 leading-relaxed">
                {{ s.shortDesc }}
              </p>

              <!-- Feature bullet points -->
              <ul class="space-y-2 mb-6">
                <li *ngFor="let feat of s.features.slice(0, 3)" class="text-xs text-navy/80 flex items-center gap-2">
                  <svg class="w-3.5 h-3.5 text-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span class="truncate">{{ feat }}</span>
                </li>
              </ul>
            </div>

            <!-- Card Bottom pricing & link -->
            <div class="pt-5 border-t border-sand-dark/20 flex items-center justify-between">
              <div>
                <span class="block text-[10px] text-navy/50 uppercase font-semibold">Pricing</span>
                <span class="text-sm font-heading font-extrabold text-navy">{{ s.startingPrice }}</span>
              </div>

              <a 
                [routerLink]="['/services']" 
                [fragment]="s.id"
                class="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-dark group-hover:translate-x-1 transition-transform">
                <span>Details</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </div>

        <!-- View All Services Button -->
        <div class="mt-14 text-center">
          <a 
            routerLink="/services"
            class="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-white border border-navy/15 hover:border-brand/40 text-navy hover:text-brand font-bold text-sm shadow-sm hover:shadow-md transition">
            <span>Explore All Cleaning Services & Packages</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- 4. WHY CHOOSE US (Split layout with animated counters) -->
    <section class="py-20 bg-navy text-white relative overflow-hidden">
      <!-- Glow circles -->
      <div class="absolute -right-20 -bottom-20 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Left: 4 Reasons -->
          <div class="lg:col-span-6 space-y-8" appRevealOnScroll>
            <div>
              <span class="text-xs uppercase font-bold tracking-widest text-brand-light">The Bright2Shine Difference</span>
              <h2 class="text-3xl sm:text-4xl font-heading font-black tracking-tight mt-2 text-white">
                Why London & Essex Residents Trust Us
              </h2>
            </div>

            <div class="space-y-6">
              
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span class="font-heading font-bold text-lg">01</span>
                </div>
                <div>
                  <h4 class="font-heading font-bold text-lg text-white">Vetted & DBS-Screened Cleaners</h4>
                  <p class="text-sm text-sand/70 mt-1">
                    Every member of our team undergoes rigorous identity verification, criminal record checks, and comprehensive on-site training.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span class="font-heading font-bold text-lg">02</span>
                </div>
                <div>
                  <h4 class="font-heading font-bold text-lg text-white">Hospital-Grade Eco Products</h4>
                  <p class="text-sm text-sand/70 mt-1">
                    We bring top-tier non-toxic, pet-safe, and biodegradable detergents that eliminate 99.9% of bacteria without toxic fumes.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span class="font-heading font-bold text-lg">03</span>
                </div>
                <div>
                  <h4 class="font-heading font-bold text-lg text-white">72-Hour Deposit Return Guarantee</h4>
                  <p class="text-sm text-sand/70 mt-1">
                    Moving out? If your inventory clerk flags anything on our comprehensive clean, we return within 72 hours for a free re-clean.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-2xl bg-white/10 text-brand-light flex items-center justify-center flex-shrink-0 border border-white/10">
                  <span class="font-heading font-bold text-lg">04</span>
                </div>
                <div>
                  <h4 class="font-heading font-bold text-lg text-white">Transparent, No Hidden Fees</h4>
                  <p class="text-sm text-sand/70 mt-1">
                    Fixed transparent quotes agreed before arrival. No surprise travel surcharges or hidden equipment fees.
                  </p>
                </div>
              </div>

            </div>
          </div>

          <!-- Right: 4 Animated Stats Cards -->
          <div class="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6">
            <div 
              *ngFor="let stat of company.stats" 
              class="glass-card-dark p-6 sm:p-8 rounded-3xl border border-white/15 text-center flex flex-col justify-center items-center shadow-float hover:border-brand/40 transition">
              <div class="text-3xl sm:text-4xl lg:text-5xl mb-2">
                <app-counter [target]="stat.value" [suffix]="stat.suffix"></app-counter>
              </div>
              <p class="text-xs sm:text-sm font-semibold uppercase tracking-wider text-sand/75">
                {{ stat.label }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. HOW IT WORKS (3 Steps on curved line) -->
    <section class="py-20 sm:py-28 bg-[#F3E6DA]/40 relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Effortless Process</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            How It Works In 3 Simple Steps
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Booking your clean takes under 60 seconds with our streamlined scheduling.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          <!-- Step 1 -->
          <div class="bg-white rounded-3xl p-8 border border-sand-dark/20 shadow-soft text-center relative z-10 group hover:-translate-y-1 transition duration-300">
            <div class="w-16 h-16 rounded-2xl bg-sand text-brand mx-auto flex items-center justify-center font-heading font-black text-2xl mb-6 group-hover:bg-brand group-hover:text-white transition">
              1
            </div>
            <h3 class="font-heading font-extrabold text-xl text-navy mb-3">Request a Free Quote</h3>
            <p class="text-sm text-navy/70 leading-relaxed">
              Fill out our simple form or reach us directly on WhatsApp/Phone. Tell us about your home or commercial space.
            </p>
          </div>

          <!-- Step 2 -->
          <div class="bg-white rounded-3xl p-8 border border-sand-dark/20 shadow-soft text-center relative z-10 group hover:-translate-y-1 transition duration-300">
            <div class="w-16 h-16 rounded-2xl bg-sand text-brand mx-auto flex items-center justify-center font-heading font-black text-2xl mb-6 group-hover:bg-brand group-hover:text-white transition">
              2
            </div>
            <h3 class="font-heading font-extrabold text-xl text-navy mb-3">We Schedule & Confirm</h3>
            <p class="text-sm text-navy/70 leading-relaxed">
              We match you with our top vetted cleaners at a time that works best for you, with all eco-supplies ready.
            </p>
          </div>

          <!-- Step 3 -->
          <div class="bg-white rounded-3xl p-8 border border-sand-dark/20 shadow-soft text-center relative z-10 group hover:-translate-y-1 transition duration-300">
            <div class="w-16 h-16 rounded-2xl bg-sand text-brand mx-auto flex items-center justify-center font-heading font-black text-2xl mb-6 group-hover:bg-brand group-hover:text-white transition">
              3
            </div>
            <h3 class="font-heading font-extrabold text-xl text-navy mb-3">Enjoy A Gleaming Space</h3>
            <p class="text-sm text-navy/70 leading-relaxed">
              Walk into a refreshed, hygienic, sparkling sanctuary backed by our 100% satisfaction commitment.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 6. BEFORE / AFTER COMPARISON SLIDER -->
    <section class="py-20 sm:py-28 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-12 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Real Results</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            See The Transformation
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Drag the slider horizontally to compare neglected dirt and limescale with the Bright2Shine standard.
          </p>
        </div>

        <app-before-after></app-before-after>

      </div>
    </section>

    <!-- 7. REVIEWS & TESTIMONIALS SECTION -->
    <section class="py-20 sm:py-28 bg-[#F3E6DA]/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-brand text-xs font-bold uppercase tracking-wider shadow-sm border border-brand/20">
            <span>⭐⭐⭐⭐⭐</span>
            <span>Over 1,200+ 5-Star Cleans</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Client Cleaning Reviews
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Real feedback from tenants, homeowners, and commercial facilities across Ilford, Barking, and East London.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div 
            *ngFor="let t of testimonials.slice(0, 3)"
            appTilt3D
            [maxTilt]="8"
            class="bg-white rounded-3xl p-7 border border-sand-dark/30 shadow-soft flex flex-col justify-between hover:shadow-card-3d transition-all duration-300">
            
            <div>
              <div class="flex items-center justify-between mb-4">
                <div class="flex items-center text-amber-400 text-sm tracking-wider">
                  ★★★★★
                </div>
                <span class="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {{ t.date }}
                </span>
              </div>

              <p class="text-xs sm:text-sm text-navy/80 italic leading-relaxed mb-6">
                “{{ t.quote }}”
              </p>
            </div>

            <div class="pt-4 border-t border-sand/60 flex items-center gap-3.5">
              <img 
                [src]="t.avatarUrl" 
                [alt]="t.name" 
                class="w-12 h-12 rounded-full object-cover border-2 border-brand/30 shadow-sm flex-shrink-0"
              />
              <div>
                <h5 class="text-sm font-heading font-bold text-navy leading-tight">{{ t.name }}</h5>
                <p class="text-xs text-navy/60 font-medium">{{ t.location }}</p>
                <span class="inline-block mt-0.5 text-[11px] font-bold text-brand bg-brand/10 px-2 py-0.5 rounded-md">
                  Clean: {{ t.service }}
                </span>
              </div>
            </div>

          </div>
        </div>

        <!-- Link to dedicated reviews page -->
        <div class="mt-12 text-center">
          <a 
            routerLink="/reviews"
            class="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-white border border-brand/30 hover:border-brand text-navy hover:text-brand font-heading font-bold text-sm shadow-soft hover:shadow-card-3d transition-all duration-300 group">
            <span>Read All Verified Customer Reviews ({{ testimonials.length }})</span>
            <span class="text-brand group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- 8. MEET OUR PROFESSIONAL CLEANING TEAM SECTION -->
    <section class="py-20 sm:py-28 bg-white border-y border-sand-dark/20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Vetted & Dedicated</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Meet Our Specialist Cleaning Team
          </h2>
          <p class="text-sm sm:text-base text-navy/70 leading-relaxed">
            Every Bright2Shine cleaning operative is fully DBS-verified, trained in COSHH health and safety protocols, and dedicated to immaculate results.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            *ngFor="let member of team"
            appTilt3D
            [maxTilt]="8"
            class="bg-sand/30 rounded-3xl p-5 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between group">
            
            <div>
              <!-- Team Member Photo -->
              <div class="w-full aspect-square rounded-2xl overflow-hidden mb-5 border-2 border-white shadow-md relative">
                <img 
                  [src]="member.imageUrl" 
                  [alt]="member.name" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute bottom-2 left-2 right-2 bg-navy/80 backdrop-blur-md text-white text-[10px] font-bold py-1 px-2.5 rounded-lg text-center truncate">
                  {{ member.badge }}
                </div>
              </div>

              <!-- Name & Role -->
              <h4 class="text-lg font-heading font-bold text-navy group-hover:text-brand transition">
                {{ member.name }}
              </h4>
              <p class="text-xs font-semibold text-brand mb-2">
                {{ member.role }}
              </p>
              <p class="text-xs text-navy/70 leading-relaxed mb-4">
                {{ member.bio }}
              </p>
            </div>

            <!-- Footer Experience & Specialism -->
            <div class="pt-3 border-t border-sand-dark/30 flex items-center justify-between text-[11px]">
              <span class="font-bold text-navy/75">{{ member.experience }}</span>
              <span class="text-brand font-semibold">Verified Cleaner ✓</span>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 9. AREAS COVERED MAP & POSTCODES -->
    <section class="py-16 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-float">
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-4">
              <span class="text-xs uppercase font-bold tracking-widest text-brand-light">Local Cleaning Coverage</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-black text-white">
                Serving Ilford, Barking, Redbridge & Surrounding Boroughs
              </h2>
              <p class="text-sand/80 text-sm leading-relaxed">
                Our mobile cleaning teams are based directly in Barking (IG11) and service all East London and Essex postal regions with rapid response times.
              </p>

              <div class="pt-2 flex flex-wrap gap-2">
                <span *ngFor="let area of company.areasCovered" class="px-3 py-1 rounded-full text-xs bg-white/10 text-sand border border-white/15">
                  📍 {{ area }}
                </span>
              </div>
            </div>

            <div class="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
              <div class="p-4 rounded-2xl bg-white/10 border border-white/10">
                <p class="text-xs text-sand/60 uppercase font-bold">Main Headquarters</p>
                <p class="text-sm font-semibold text-white mt-1">{{ company.address }}</p>
              </div>
              <a 
                routerLink="/contact"
                class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white text-center font-heading font-bold text-sm shadow-glow hover:scale-[1.02] transition">
                View Contact & Headquarters
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 10. CTA BANNER -->
    <section class="py-20 sm:py-24 bg-gradient-to-b from-[#FAF8F5] to-[#F3E6DA]">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand/10 text-brand mb-2">
          <svg class="w-8 h-8 text-brand animate-twinkle" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z"/>
          </svg>
        </div>

        <h2 class="text-3xl sm:text-5xl font-heading font-black text-navy tracking-tight">
          Ready For A Spotless Clean?
        </h2>

        <p class="text-base sm:text-lg text-navy/70 max-w-2xl mx-auto leading-relaxed">
          Book your cleaning team today with complete peace of mind. Our vetted staff is ready to make your space shine.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white font-heading font-bold text-base shadow-lg shadow-brand/30 hover:shadow-glow hover:-translate-y-1 transition duration-200 flex items-center justify-center gap-2">
            <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>Call {{ company.phone1 }}</span>
          </a>
          <a 
            [href]="'https://wa.me/' + company.whatsappRaw"
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] text-white font-heading font-bold text-base shadow-md hover:scale-105 transition duration-200 flex items-center justify-center gap-2">
            <span>WhatsApp Quick Booking</span>
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements AfterViewInit {
  company = COMPANY_DETAILS;
  services = SERVICES;
  testimonials = TESTIMONIALS;
  team = TEAM_MEMBERS;

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  isVideoPlaying = signal<boolean>(true);

  ngAfterViewInit(): void {
    if (this.heroVideo?.nativeElement) {
      const vid = this.heroVideo.nativeElement;
      vid.muted = true;
      vid.defaultMuted = true;
      vid.playsInline = true;
      
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isVideoPlaying.set(true);
          })
          .catch(() => {
            // Autoplay safety: trigger on first user gesture
            this.isVideoPlaying.set(false);
            const resumeOnInteraction = () => {
              vid.muted = true;
              vid.play().then(() => this.isVideoPlaying.set(true)).catch(() => {});
              window.removeEventListener('click', resumeOnInteraction);
              window.removeEventListener('touchstart', resumeOnInteraction);
            };
            window.addEventListener('click', resumeOnInteraction, { once: true });
            window.addEventListener('touchstart', resumeOnInteraction, { once: true });
          });
      }
    }
  }

  toggleVideo(): void {
    if (this.heroVideo?.nativeElement) {
      const vid = this.heroVideo.nativeElement;
      if (vid.paused) {
        vid.muted = true;
        vid.play().then(() => this.isVideoPlaying.set(true)).catch(() => {});
      } else {
        vid.pause();
        this.isVideoPlaying.set(false);
      }
    }
  }
}
