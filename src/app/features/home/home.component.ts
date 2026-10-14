import { Component, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { 
  COMPANY_DETAILS, 
  SERVICES, 
  TESTIMONIALS, 
  ROOM_PROCESS, 
  HOURLY_PRICING, 
  EXTRA_CLEANING_ADDONS, 
  PROPERTY_PRICING_TABLE,
  ABOUT_US_DATA,
  RoomProcessItem
} from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';
import { BeforeAfterComponent } from '../../shared/components/before-after.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterLink, 
    Tilt3DDirective, 
    RevealOnScrollDirective, 
    BeforeAfterComponent
  ],
  template: `
    <!-- 1. HERO SECTION WITH HIGH-VISIBILITY CLEANING VIDEO (#1B2B3A Deep Navy, #B5441A Burnt Orange, #3BA8B5 Fresh Aqua) -->
    <section class="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1B2B3A] text-white">
      
      <!-- Video Background Layer with Full Clarity -->
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
          class="w-full h-full object-cover scale-100 opacity-90 filter brightness-105 contrast-105 transition-opacity duration-700">
          <source src="cleaning-hero.mp4" type="video/mp4">
        </video>
        
        <!-- Clean Subtle Tint so video remains completely visible from edge to edge -->
        <div class="absolute inset-0 bg-[#1B2B3A]/45 backdrop-brightness-95"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-[#1B2B3A] via-transparent to-black/30"></div>
      </div>

      <!-- Live Video Status Indicator & Toggle -->
      <div class="absolute top-6 right-6 sm:right-10 z-20 flex items-center gap-2">
        <button 
          type="button"
          (click)="toggleVideo()"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#1B2B3A]/60 hover:bg-[#1B2B3A]/80 active:scale-95 backdrop-blur-md text-white border border-white/20 shadow-md transition pointer-events-auto cursor-pointer">
          <span class="w-2.5 h-2.5 rounded-full" [ngClass]="isVideoPlaying() ? 'bg-[#3BA8B5] animate-pulse' : 'bg-[#B5441A]'"></span>
          <span>{{ isVideoPlaying() ? 'Video Playing ⏸' : 'Play Video ▶' }}</span>
        </button>
      </div>

      <!-- Center Hero Content Container -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20 sm:py-28 space-y-7">
        
        <!-- Trust Badge Pill -->
        <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1B2B3A]/70 border border-white/20 shadow-lg backdrop-blur-md">
          <span class="flex h-2.5 w-2.5 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3BA8B5] opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#3BA8B5]"></span>
          </span>
          <span class="text-xs font-bold tracking-wider text-[#FAFAF8] uppercase">
            #1 House & Office Cleaning Service in London & Essex
          </span>
        </div>

        <!-- Main Headline (Deep Navy base with Burnt Orange Accent) -->
        <h1 class="text-4xl sm:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight drop-shadow-md">
          House & Office Cleaning <br class="hidden sm:inline" />
          <span class="text-[#B5441A]">Service in London.</span>
        </h1>

        <!-- Subheading description -->
        <p class="text-base sm:text-xl text-white/95 max-w-2xl mx-auto font-normal leading-relaxed drop-shadow">
          Relax, recharge and let us handle the cleaning. Fully vetted, insured, and DBS-checked professionals providing premium domestic, commercial, and guaranteed deposit return end-of-tenancy cleans.
        </p>

        <!-- Action CTAs (Burnt Orange #B5441A, Fresh Aqua #3BA8B5, and Clean Soft White) -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            routerLink="/cleaning-process"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5441A] text-white font-heading font-black text-base shadow-xl hover:bg-[#9a3814] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
            <span>Our Cleaning Process</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a 
            href="#pricing"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#1B2B3A] font-heading font-black text-base shadow-xl hover:bg-[#F3EFEA] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
            <span>Discover Pricing</span>
            <span class="group-hover:translate-y-0.5 transition-transform">↓</span>
          </a>

          <a 
            [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20get%20a%20cleaning%20quote'"
            target="_blank"
            class="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-base shadow-lg hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
            <span>💬</span>
            <span>WhatsApp Quote</span>
          </a>
        </div>

        <!-- Emails & Quick Trust Proof Badges -->
        <div class="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-white/90">
          <a [href]="'mailto:' + company.email" class="hover:text-[#3BA8B5] transition underline flex items-center gap-1.5 font-medium">
            ✉️ {{ company.email }}
          </a>
          <span class="text-white/40">•</span>
          <a [href]="'mailto:' + company.email2" class="hover:text-[#3BA8B5] transition underline flex items-center gap-1.5 font-medium">
            ✉️ {{ company.email2 }}
          </a>
          <span class="text-white/40">•</span>
          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-[#3BA8B5] font-bold">✓</span> £2,000,000 Insured
          </div>
          <span class="text-white/40">•</span>
          <div class="flex items-center gap-1.5 font-medium">
            <span class="text-[#3BA8B5] font-bold">✓</span> DBS-Checked Cleaners
          </div>
        </div>

      </div>
    </section>

    <!-- 2. 3 MAIN CLEANING PACKAGES (Standard Clean, Deep Clean, Move In/Out Clean - As on DustBust) -->
    <section class="py-20 sm:py-24 bg-gradient-to-b from-blue-50/50 to-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Select Your Service</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Relax, Recharge and let us handle the cleaning.
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Choose from our three core cleaning packages designed to keep your home immaculate, healthy, and stress-free.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Package 1: Standard Clean -->
          <div 
            appTilt3D [maxTilt]="6"
            class="bg-white rounded-3xl p-8 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-black text-navy mb-1">Standard Clean</h3>
              <p class="text-xs font-bold text-brand uppercase tracking-wider mb-4">Best for regular cleaning</p>
              <p class="text-xs sm:text-sm text-navy/70 leading-relaxed mb-6">
                Cleaning on your terms: weekly, bi-weekly or monthly. All options are available. Guaranteed cleanliness with flexible scheduling.
              </p>

              <!-- Standard Checklist -->
              <div class="pt-4 border-t border-sand-dark/20">
                <p class="text-xs font-heading font-bold text-navy uppercase tracking-wider mb-3">
                  Standard Cleaning Checklist:
                </p>
                <ul class="space-y-2 text-xs sm:text-sm text-navy/80">
                  <li class="flex items-center gap-2">
                    <span class="text-brand font-bold">✓</span> Kitchen
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-brand font-bold">✓</span> Bathroom(s)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-brand font-bold">✓</span> Bedroom(s)
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-brand font-bold">✓</span> Dining Room
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="text-brand font-bold">✓</span> Living Room
                  </li>
                </ul>
              </div>
            </div>

            <div class="pt-8 mt-6 border-t border-sand-dark/20 flex items-center justify-between">
              <div>
                <span class="text-[10px] text-navy/50 uppercase font-semibold">Rate</span>
                <p class="text-xl font-heading font-black text-navy">£15<span class="text-xs font-normal text-navy/60">/hr</span></p>
              </div>
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20book%20a%20Standard%20Clean'"
                target="_blank"
                class="px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-brand font-bold text-xs shadow transition">
                Request a Quote →
              </a>
            </div>
          </div>

          <!-- Package 2: Deep Clean (Featured Light Orange Card - No Yellow) -->
          <div 
            appTilt3D [maxTilt]="8"
            class="bg-gradient-to-br from-[#cf5a2d] via-[#B5441A] to-[#9a3814] text-white rounded-3xl p-8 shadow-card-3d transform md:-translate-y-2 flex flex-col justify-between relative group border-2 border-white/40">
            <div class="absolute -top-3.5 right-6 bg-[#1B2B3A] text-white text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
              Most Popular
            </div>

            <div>
              <div class="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6">
                <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-black text-white mb-1">Deep Clean</h3>
              <p class="text-xs font-bold text-white/90 uppercase tracking-wider mb-4">Maintain sparkle with Monthly Cleaning</p>
              <p class="text-xs sm:text-sm text-white/95 leading-relaxed mb-6 font-normal">
                Stay healthy, stay happy with our cleaning expertise. Allergy-free living guaranteed especially during warmer days of the year.
              </p>

              <!-- Deep Clean Checklist -->
              <div class="pt-4 border-t border-white/20">
                <p class="text-xs font-heading font-bold text-white uppercase tracking-wider mb-3">
                  Deep Cleaning Checklist:
                </p>
                <ul class="space-y-1.5 text-xs sm:text-sm text-white/95 font-medium">
                  <li class="flex items-center gap-2">✓ Thorough Dusting and Polishing</li>
                  <li class="flex items-center gap-2">✓ Detailed Hand Cleaning of High-Touch Areas</li>
                  <li class="flex items-center gap-2">✓ Baseboard Cleaning</li>
                  <li class="flex items-center gap-2">✓ Vacuuming & Wipe Down of Window Tracks</li>
                  <li class="flex items-center gap-2">✓ Interior Door Cleaning</li>
                  <li class="flex items-center gap-2">✓ Sparkling Interior Window Cleaning</li>
                  <li class="flex items-center gap-2">✓ Kitchen Backsplash Deep Clean</li>
                  <li class="flex items-center gap-2">✓ Cobweb Removal</li>
                </ul>
              </div>
            </div>

            <div class="pt-8 mt-6 border-t border-white/20 flex items-center justify-between">
              <div>
                <span class="text-[10px] text-white/80 uppercase font-semibold">Rate</span>
                <p class="text-xl font-heading font-black text-white">£19<span class="text-xs font-normal">/hr</span></p>
              </div>
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20book%20a%20Deep%20Clean'"
                target="_blank"
                class="px-5 py-2.5 rounded-xl bg-white text-[#B5441A] hover:bg-[#FAFAF8] font-bold text-xs shadow-md transition">
                Request a Quote →
              </a>
            </div>
          </div>

          <!-- Package 3: Move in/out Clean -->
          <div 
            appTilt3D [maxTilt]="6"
            class="bg-white rounded-3xl p-8 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between relative group">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                <svg class="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-heading font-black text-navy mb-1">Move in/out Clean</h3>
              <p class="text-xs font-bold text-brand uppercase tracking-wider mb-4">Best for Renters and Landlords</p>
              <p class="text-xs sm:text-sm text-navy/70 leading-relaxed mb-6">
                Make sure you have a spotless space. Leave the cleaning to us and have a hassle-free settle in or move out with 72-hour deposit guarantee.
              </p>

              <!-- Move in/out Checklist -->
              <div class="pt-4 border-t border-sand-dark/20">
                <p class="text-xs font-heading font-bold text-navy uppercase tracking-wider mb-3">
                  Move in/out Cleaning Checklist:
                </p>
                <ul class="space-y-1.5 text-xs sm:text-sm text-navy/80">
                  <li class="flex items-center gap-2">✓ Standard Cleaning Services</li>
                  <li class="flex items-center gap-2">✓ Oven Steam Cleaning</li>
                  <li class="flex items-center gap-2">✓ Refrigerator Interior Cleaning</li>
                  <li class="flex items-center gap-2">✓ Kitchen Drawer Organization (inside & out)</li>
                  <li class="flex items-center gap-2">✓ Bathroom Drawer Cleaning (inside & out)</li>
                  <li class="flex items-center gap-2">✓ Interior Window Cleaning (ground-level)</li>
                  <li class="flex items-center gap-2">✓ Backsplash Deep Cleaning</li>
                  <li class="flex items-center gap-2">✓ Trash Removal</li>
                </ul>
              </div>
            </div>

            <div class="pt-8 mt-6 border-t border-sand-dark/20 flex items-center justify-between">
              <div>
                <span class="text-[10px] text-navy/50 uppercase font-semibold">Starting from</span>
                <p class="text-xl font-heading font-black text-navy">£125</p>
              </div>
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20book%20a%20Move%20in%20out%20Clean'"
                target="_blank"
                class="px-5 py-2.5 rounded-xl bg-navy text-white hover:bg-brand font-bold text-xs shadow transition">
                Request a Quote →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- 3. CLEANING PROCESS BY ROOM (With Real DustBust Images & Tasks) -->
    <section id="cleaning-process" class="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Room-by-Room Standards</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight leading-tight">
            Discover our comprehensive approach to cleaning each room and the benefits it brings to your overall well-being
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Click any room below to view our detailed cleaning regimen and hygienic standards.
          </p>
        </div>

        <!-- Room Process Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let room of roomProcess; let idx = index"
            appTilt3D [maxTilt]="6"
            class="group rounded-3xl overflow-hidden bg-white border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between">
            
            <div>
              <!-- Real Room Image from DustBust -->
              <div class="relative w-full aspect-[4/3] overflow-hidden bg-navy/10">
                <img 
                  [src]="room.image" 
                  [alt]="room.name" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent"></div>
                <div class="absolute bottom-4 left-4 right-4 text-white">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-brand-light bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    Room 0{{ idx + 1 }}
                  </span>
                  <h3 class="text-xl font-heading font-black text-white mt-1">{{ room.name }}</h3>
                </div>
              </div>

              <!-- Content and Tasks -->
              <div class="p-6">
                <p class="text-xs font-semibold text-brand mb-2">{{ room.tagline }}</p>
                <p class="text-xs text-navy/70 leading-relaxed mb-4">{{ room.description }}</p>

                <!-- Tasks bullets -->
                <div class="pt-3 border-t border-sand-dark/20 space-y-1.5">
                  <div *ngFor="let task of room.tasks" class="flex items-center gap-2 text-xs text-navy/80 font-medium">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    <span>{{ task }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Action Footer -->
            <div class="p-6 pt-0">
              <a 
                routerLink="/services"
                class="w-full py-2.5 rounded-xl bg-sand/60 hover:bg-brand hover:text-white text-navy font-heading font-bold text-xs text-center transition flex items-center justify-center gap-2">
                <span>View Full Cleaning Checklist</span>
                <span>→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- 4. PROFESSIONAL OFFICE AND HOME CLEANING SERVICES (With DustBust Cascading Images bg2.jpg & fg2.jpg) -->
    <section class="py-20 sm:py-28 bg-white border-y border-sand-dark/20 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Text column -->
          <div class="lg:col-span-6 space-y-6" appRevealOnScroll>
            <div class="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shadow-sm">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>

            <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight leading-tight">
              Professional Office and Home Cleaning Services
            </h2>

            <p class="text-sm sm:text-base text-navy/75 leading-relaxed">
              Bright2Shine sends dedicated professionals straight to your location in London. Cleaning pros will complete each and all tasks with diligence while taking your personal requirements into full consideration.
            </p>

            <p class="text-sm sm:text-base text-navy/75 leading-relaxed">
              Bright2Shine stands for high-end professional equipment and quality cleaning solutions that are not available in-store. Moreover, Bright2Shine is fully dedicated to bringing you absolutely fantastic results. Our workers will come to your office or home at a time you decide, handling the tasks we agree on beforehand with utmost discretion.
            </p>

            <div class="pt-4 flex flex-wrap gap-4">
              <a 
                routerLink="/services"
                class="px-6 py-3.5 rounded-2xl bg-navy text-white hover:bg-brand font-heading font-bold text-sm shadow-md transition">
                Our Office Cleaning Checklist →
              </a>
              <a 
                [href]="'tel:' + company.phone1Raw"
                class="px-6 py-3.5 rounded-2xl bg-sand/60 hover:bg-sand text-navy font-heading font-bold text-sm transition">
                Call {{ company.phone1 }}
              </a>
            </div>
          </div>

          <!-- Cascading Images Column (bg2.jpg + fg2.jpg) -->
          <div class="lg:col-span-6 flex justify-center items-center relative py-6">
            <div class="relative w-full max-w-lg aspect-[4/3]">
              <!-- Background Image -->
              <div class="absolute top-0 right-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-card-3d border-4 border-white">
                <img src="images/bg2.jpg" alt="Commercial Cleaning Service" class="w-full h-full object-cover" />
              </div>
              <!-- Foreground Overlapping Image -->
              <div class="absolute bottom-0 left-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-float border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img src="images/fg2.jpg" alt="Home Cleaning Solutions" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 5. ELECTROSTATIC DISINFECTION (With DustBust Cascading Images bg-1.jpg & fg1.jpg) -->
    <section class="py-20 sm:py-28 bg-[#FAF8F5] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Cascading Images Column (bg-1.jpg + fg1.jpg) -->
          <div class="lg:col-span-6 order-2 lg:order-1 flex justify-center items-center relative py-6">
            <div class="relative w-full max-w-lg aspect-[4/3]">
              <!-- Background Image -->
              <div class="absolute top-0 left-0 w-4/5 h-4/5 rounded-3xl overflow-hidden shadow-card-3d border-4 border-white">
                <img src="images/bg-1.jpg" alt="Electrostatic Disinfection System" class="w-full h-full object-cover" />
              </div>
              <!-- Foreground Overlapping Image -->
              <div class="absolute bottom-0 right-0 w-3/5 h-3/5 rounded-3xl overflow-hidden shadow-float border-4 border-white transform hover:scale-105 transition-transform duration-300">
                <img src="images/fg1.jpg" alt="Hospital Grade Disinfection" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <!-- Text Column -->
          <div class="lg:col-span-6 order-1 lg:order-2 space-y-6" appRevealOnScroll>
            <div class="w-12 h-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shadow-sm">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>

            <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight leading-tight">
              Refreshingly Enhanced Electrostatic Disinfection
            </h2>

            <p class="text-sm sm:text-base text-navy/75 leading-relaxed">
              Bright2Shine Electrostatic Disinfection Service is a powerful solution for homes and offices designed to eradicate germs, bacteria, and viruses. Utilizing a safe, hospital-grade disinfectant, our experts target and eliminate contaminants including coronaviruses, Norovirus, SARS, Covid-19, E. Coli, Salmonella, and more.
            </p>

            <p class="text-sm sm:text-base text-navy/75 leading-relaxed">
              Our detailed process typically takes 30 minutes to an hour depending on area size. We prioritize safety using an EPA-registered, pH-neutral disinfectant that's harmless to people, pets, plants, and the environment. Diligent disinfection of all high-touch surfaces like door handles, toilets, sinks, tables and counters.
            </p>

            <div class="pt-4">
              <a 
                routerLink="/services"
                class="px-6 py-3.5 rounded-2xl bg-brand text-white hover:bg-brand-hover font-heading font-bold text-sm shadow-glow transition inline-block">
                Electrostatic Disinfection Details →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 6. OUR COMMITMENT & SERVICE AREAS (Replicated exactly from User's Screenshot) -->
    <section class="py-20 sm:py-28 bg-[#FAFAF8] relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Our Commitment Text & Process Bullet Points -->
          <div class="lg:col-span-6 space-y-6" appRevealOnScroll>
            
            <!-- Plant Icon Badge -->
            <div class="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl shadow-md">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
            </div>

            <h2 class="text-3xl sm:text-4xl font-heading font-bold text-[#1B2B3A] tracking-tight">
              Our Commitment
            </h2>

            <p class="text-sm sm:text-base text-[#2B2F33]/85 leading-relaxed font-normal">
              At Bright2Shine, London's eco-friendly cleaning company, we're passionate about delivering exceptional cleaning services while prioritizing the well-being of our community and the environment. Committed to sustainability, Bright2Shine exclusively use environmentally safe products to minimize our ecological footprint. Our trustworthy and responsible Bright2Shine team takes pride in contributing to London's preservation and beauty providing reliable and eco-conscious cleaning solutions that benefit both our clients and the planet.
            </p>

            <div class="pt-2 space-y-3">
              <p class="text-sm font-semibold text-[#1B2B3A]">
                The Bright2Shine Cleaning process includes:
              </p>
              <ul class="space-y-2 text-sm text-[#2B2F33]/80">
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#1B2B3A]"></span>
                  <span>Reduced Carbon Footprint</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#1B2B3A]"></span>
                  <span>Minimized Plastic Waste</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#1B2B3A]"></span>
                  <span>Family-Friendly and Non-Toxic Solutions</span>
                </li>
                <li class="flex items-center gap-2">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#1B2B3A]"></span>
                  <span>Hospital-Grade EPA-Registered Disinfectants</span>
                </li>
              </ul>
            </div>

          </div>

          <!-- Right Column: Panoramic County Image Overlapped by White Service Area Card with Orange BOOK NOW Button -->
          <div class="lg:col-span-6 relative flex justify-center items-center py-4">
            
            <!-- Panoramic Landscape Image -->
            <div class="w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden shadow-card-3d relative">
              <img 
                src="images/county-bg.jpg" 
                alt="London & Essex Service Region" 
                class="w-full h-full object-cover" 
              />
              <div class="absolute inset-0 bg-black/10"></div>
            </div>

            <!-- Overlapping White SERVICE AREAS Floating Card -->
            <div 
              appTilt3D [maxTilt]="6"
              class="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden z-20 border border-black/5">
              
              <!-- Pin Icon Circle -->
              <div class="pt-8 pb-4 flex flex-col items-center text-center px-6">
                <div class="w-20 h-20 rounded-full bg-[#F3EFEA] flex items-center justify-center mb-4 shadow-inner">
                  <svg class="w-10 h-10 text-[#1B2B3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>

                <h3 class="text-lg font-heading font-black text-[#1B2B3A] tracking-wider uppercase mb-3">
                  SERVICE AREAS
                </h3>

                <!-- Locations List -->
                <div class="space-y-1.5 text-xs sm:text-sm font-bold text-[#1B2B3A]">
                  <p>Ilford · Barking</p>
                  <p>Redbridge · Dagenham · Romford</p>
                  <p>Stratford · Canary Wharf</p>
                </div>
              </div>

              <!-- Orange BOOK NOW Button -->
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20book%20a%20clean'" 
                target="_blank"
                class="w-full py-4 px-6 bg-[#FF4500] hover:bg-[#e03d00] text-white font-heading font-black text-base uppercase tracking-wider flex items-center justify-center gap-3 transition-colors duration-200">
                <span>BOOK NOW</span>
                <span class="w-6 h-6 rounded-full bg-black/20 flex items-center justify-center text-sm font-bold">+</span>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- 7. FULL COMPREHENSIVE PRICING SECTION (Copied exactly from dustbust.co.uk/pricing/) -->
    <section id="pricing" class="py-20 sm:py-28 bg-[#FAF8F5] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Clear & Competitive Rates</span>
          <h2 class="text-3xl sm:text-5xl font-heading font-black text-navy tracking-tight">
            Transparent Cleaning Pricing
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            Discover our competitive pricing and find the perfect plan for your needs. Get a clear understanding of our rates and packages with zero hidden fees.
          </p>

          <div class="pt-2 flex justify-center">
            <a 
              [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20get%20a%20pricing%20quote'" 
              target="_blank"
              class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-sm shadow-md hover:-translate-y-0.5 transition-all duration-200">
              <span>💬</span>
              <span>WhatsApp Instant Quote</span>
            </a>
          </div>
        </div>

        <!-- Hourly & Core Service Cards (Matching dustbust cards) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            *ngFor="let item of hourlyPricing" 
            appTilt3D [maxTilt]="6"
            class="rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between"
            [ngClass]="item.featured ? 'bg-gradient-to-br from-[#cf5a2d] via-[#B5441A] to-[#9a3814] text-white border-white/40 shadow-card-3d' : 'bg-white text-navy border-sand-dark/30 shadow-soft hover:shadow-card-3d'">
            
            <div>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-heading font-black">{{ item.title }}</h3>
                <span *ngIf="item.badge" class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                  [ngClass]="item.featured ? 'bg-white text-[#B5441A]' : 'bg-navy text-white'">
                  {{ item.badge }}
                </span>
              </div>

              <div class="mb-4">
                <span class="text-3xl sm:text-4xl font-heading font-black">{{ item.rate }}</span>
                <span class="text-sm font-semibold opacity-75 ml-1">{{ item.unit }}</span>
              </div>

              <p class="text-xs sm:text-sm opacity-80 mb-6 leading-relaxed">
                {{ item.description }}
              </p>

              <!-- Features checklist -->
              <ul class="space-y-2 text-xs sm:text-sm">
                <li *ngFor="let f of item.features" class="flex items-center gap-2">
                  <span class="font-bold">✓</span>
                  <span>{{ f }}</span>
                </li>
              </ul>
            </div>

            <div class="pt-6 mt-6 border-t" [ngClass]="item.featured ? 'border-white/20' : 'border-black/10'">
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20would%20like%20to%20request%20a%20quote%20for%20' + item.title"
                target="_blank"
                class="w-full text-center block py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider shadow transition"
                [ngClass]="item.featured ? 'bg-white text-[#B5441A] hover:bg-[#FAFAF8]' : 'bg-[#1B2B3A] text-white hover:bg-[#B5441A]'">
                Request a Quote →
              </a>
            </div>

          </div>

          <!-- Extra Cleaning Card (Matching DustBust Extra Cleaning card) -->
          <div 
            appTilt3D [maxTilt]="6"
            class="bg-white rounded-3xl p-8 border border-sand-dark/30 shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between">
            <div>
              <h3 class="text-xl font-heading font-black text-navy mb-2">Extra Cleaning</h3>
              <p class="text-xs text-navy/70 mb-6">Add specific rooms or special requirements to your service session.</p>

              <div class="space-y-3.5">
                <div *ngFor="let extra of extraAddons" class="p-3.5 rounded-2xl bg-sand/30 border border-sand-dark/20 flex items-center justify-between">
                  <div>
                    <h5 class="text-xs font-bold text-navy">{{ extra.item }}</h5>
                    <p class="text-[10px] text-navy/60">{{ extra.note }}</p>
                  </div>
                  <span class="text-sm font-heading font-black text-brand">{{ extra.price }}</span>
                </div>
              </div>
            </div>

            <div class="pt-6 mt-6 border-t border-sand-dark/20">
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20want%20to%20add%20extra%20cleaning%20services'"
                target="_blank"
                class="w-full text-center block py-3 rounded-xl font-heading font-bold text-xs uppercase tracking-wider bg-navy text-white hover:bg-brand transition">
                Inquire For Add-ons →
              </a>
            </div>
          </div>
        </div>

        <!-- Property Pricing Packages Table (Light, End of Tenancy, Tenancy + Steam) -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-sand-dark/30 shadow-soft">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span class="text-xs uppercase font-bold tracking-widest text-brand">Property Package Rates</span>
              <h3 class="text-2xl font-heading font-black text-navy mt-1">
                Fixed Property Packages & Sizes
              </h3>
            </div>
            <p class="text-xs text-navy/60 max-w-sm sm:text-right">
              Includes full internal checklists. External windows & deep carpet steam extraction available as bundle.
            </p>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left text-sm">
              <thead>
                <tr class="border-b border-sand-dark/30 text-xs font-bold text-navy/60 uppercase tracking-wider bg-sand/30">
                  <th class="py-4 px-4 sm:px-6 rounded-l-xl">Property Size</th>
                  <th class="py-4 px-4 sm:px-6">Light Cleaning</th>
                  <th class="py-4 px-4 sm:px-6 bg-[#B5441A]/10 text-[#B5441A] font-bold">End of Tenancy</th>
                  <th class="py-4 px-4 sm:px-6 rounded-r-xl bg-[#3BA8B5]/15 text-[#1B2B3A] font-bold">Tenancy + Carpet Steam</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-sand-dark/20 text-[#2B2F33]">
                <tr *ngFor="let tier of propertyPricing" class="hover:bg-[#F3EFEA]/50 transition">
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-xs sm:text-sm text-[#1B2B3A]">{{ tier.propertyType }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-semibold text-[#2B2F33]/80">{{ tier.lightPrice }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-[#B5441A] bg-[#B5441A]/5">{{ tier.tenancyPrice }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-black text-[#1B2B3A] bg-[#3BA8B5]/5">{{ tier.tenancyWithCarpetPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="mt-6 pt-4 border-t border-sand-dark/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-navy/70">
            <p>✓ All prices include professional detergents, tools, and DBS-verified cleaning teams.</p>
            <a 
              [href]="'https://wa.me/' + company.whatsappRaw"
              target="_blank"
              class="font-bold text-brand hover:underline flex items-center gap-1">
              Need a bespoke quotation? Contact us on WhatsApp →
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- 8. BEFORE / AFTER COMPARISON SLIDER -->
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

    <!-- 9. REVIEWS SECTION WITH ORIGINAL GOOGLE PHOTO & TRUSTINDEX BADGE (#FAFAF8, #F3EFEA, #1B2B3A, #B5441A) -->
    <section class="py-20 sm:py-28 bg-[#F3EFEA]/60">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header & Trustindex Verified Widget (DustBust Style) -->
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-4" appRevealOnScroll>
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B5441A]/10 border border-[#B5441A]/20 text-[#B5441A] text-xs font-bold uppercase tracking-wider">
            <span>⭐ Original Verified Reviews</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            We don't like to brag, our popularity speaks for itself
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/80">
            Real feedback from verified clients across London and Essex.
          </p>

          <!-- Google Trustindex Badge Card with Official Assets -->
          <div class="inline-flex flex-col sm:flex-row items-center gap-4 px-6 py-3.5 rounded-2xl bg-white border border-[#F3EFEA] shadow-sm">
            <div class="flex items-center gap-2.5">
              <span class="text-sm font-black text-[#1B2B3A] uppercase tracking-wider">EXCELLENT</span>
              <div class="flex text-amber-500 text-base">★★★★★</div>
            </div>
            <span class="hidden sm:inline text-[#2B2F33]/20">|</span>
            <div class="text-xs text-[#2B2F33] font-medium flex items-center gap-1.5">
              <span>Based on <strong class="text-[#1B2B3A] font-bold">1,250+ Google Reviews</strong></span>
            </div>
            <span class="hidden sm:inline text-[#2B2F33]/20">|</span>
            <div class="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#3BA8B5] bg-[#3BA8B5]/10 px-2.5 py-1 rounded-full border border-[#3BA8B5]/20">
              <img src="images/google-icon.svg" alt="Google" class="w-3.5 h-3.5" (error)="$any($event.target).style.display='none'" />
              <span>Verified by Trustindex</span>
            </div>
          </div>
        </div>

        <!-- Reviews Grid matching Google Review Carousel in User's Screenshot -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div 
            *ngFor="let t of testimonials.slice(0, 3)"
            appTilt3D
            [maxTilt]="5"
            class="bg-white rounded-2xl p-6 border border-[#F3EFEA] shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between relative">
            
            <div>
              <!-- Top Row: Avatar with initial letter, Name, Time, and Google G Logo -->
              <div class="flex items-start justify-between mb-4">
                <div class="flex items-center gap-3">
                  <!-- Initial Letter Avatar circle -->
                  <div 
                    class="w-11 h-11 rounded-full text-white font-heading font-black text-lg flex items-center justify-center flex-shrink-0 shadow-sm"
                    [ngClass]="{
                      'bg-[#00897B]': t.name === 'Philip Lopen',
                      'bg-[#008953]': t.name === 'Dion Rankine',
                      'bg-[#D81B60]': t.name === 'Kim Riches'
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
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <span class="text-xs font-bold text-[#1B2B3A] hover:text-[#B5441A] transition cursor-pointer flex items-center justify-between">
                <span>Read full review</span>
                <span class="text-xs opacity-60">→</span>
              </span>
            </div>

          </div>
        </div>

        <!-- Direct Reviews Link -->
        <div class="mt-10 text-center">
          <a 
            routerLink="/reviews"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#1B2B3A]/15 text-[#1B2B3A] hover:text-[#B5441A] hover:border-[#B5441A] font-heading font-bold text-xs uppercase tracking-wider transition shadow-sm">
            <span>Read All Verified Customer Feedback ({{ testimonials.length }})</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- 10. LOCAL CLEANING COVERAGE & HEADQUARTERS -->
    <section class="py-16 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-navy rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-float">
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-4">
              <span class="text-xs uppercase font-bold tracking-widest text-brand-light">Local Cleaning Coverage</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-black text-white">
                Serving Barking, Ilford, Redbridge & Surrounding Boroughs
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

            <div class="lg:col-span-5 flex flex-col gap-4">
              <div class="p-4 rounded-2xl bg-white/10 border border-white/10">
                <p class="text-xs text-sand/60 uppercase font-bold">Main Headquarters</p>
                <p class="text-sm font-semibold text-white mt-1">{{ company.address }}</p>
              </div>

              <div class="p-4 rounded-2xl bg-white/10 border border-white/10">
                <p class="text-xs text-sand/60 uppercase font-bold">Official Emails</p>
                <div class="flex flex-col gap-1 mt-1">
                  <a [href]="'mailto:' + company.email" class="text-sm font-semibold text-brand-light hover:underline">
                    {{ company.email }}
                  </a>
                  <a [href]="'mailto:' + company.email2" class="text-sm font-semibold text-brand-light hover:underline">
                    {{ company.email2 }}
                  </a>
                </div>
              </div>

              <a 
                routerLink="/contact"
                class="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand to-brand-light text-white text-center font-heading font-bold text-sm shadow-glow hover:scale-[1.02] transition">
                View Contact & Headquarters →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 11. CTA BANNER (With DustBust cta-bg-1.jpg Background & Crisp Contrast Text) -->
    <section class="relative py-24 sm:py-32 overflow-hidden text-center text-white">
      <!-- Background Image with High-Contrast Dark Overlay -->
      <div class="absolute inset-0 z-0">
        <img src="images/cta-bg-1.jpg" alt="Clean Home Experience" class="w-full h-full object-cover filter brightness-90" />
        <!-- Rich Deep Navy Gradient Overlay ensuring text is 100% visible & readable -->
        <div class="absolute inset-0 bg-gradient-to-r from-[#1B2B3A]/90 via-[#1B2B3A]/85 to-[#1B2B3A]/80"></div>
        <div class="absolute inset-0 bg-black/35"></div>
      </div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FAFAF8] text-xs font-bold uppercase tracking-wider backdrop-blur-md">
          <span>✨ Immediate Booking & Free Quotes</span>
        </div>

        <h2 class="text-2xl sm:text-4xl lg:text-5xl font-heading font-black leading-tight tracking-tight text-white drop-shadow-md">
          Experience the future of cleaning with London's leading cleaning service Bright2Shine featuring advanced technology, natural products and a satisfaction guarantee.
        </h2>

        <p class="text-base sm:text-lg text-white/95 max-w-2xl mx-auto leading-relaxed font-normal drop-shadow">
          Get in touch with our team today. We provide immediate responses, free quotes, and hassle-free booking.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a 
            [href]="'tel:' + company.phone1Raw"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-[#1B2B3A] font-heading font-bold text-base shadow-xl hover:bg-[#FAFAF8] hover:-translate-y-0.5 transition duration-200 flex items-center justify-center gap-2">
            <span>Call {{ company.phone1 }}</span>
          </a>
          <a 
            [href]="'https://wa.me/' + company.whatsappRaw" 
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-base shadow-lg hover:scale-105 transition duration-200 flex items-center justify-center gap-2">
            <span>WhatsApp Quick Booking</span>
          </a>
          <a 
            [href]="'mailto:' + company.email"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-base shadow-lg hover:-translate-y-0.5 transition duration-200 flex items-center justify-center gap-2">
            <span>Email {{ company.email }}</span>
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
  roomProcess = ROOM_PROCESS;
  hourlyPricing = HOURLY_PRICING;
  extraAddons = EXTRA_CLEANING_ADDONS;
  propertyPricing = PROPERTY_PRICING_TABLE;
  aboutUs = ABOUT_US_DATA;

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;
  isVideoPlaying = signal<boolean>(true);

  ngAfterViewInit(): void {
    if (this.heroVideo?.nativeElement) {
      const vid = this.heroVideo.nativeElement;
      vid.muted = true;
      vid.play().then(() => {
        this.isVideoPlaying.set(true);
      }).catch(() => {
        this.isVideoPlaying.set(false);
      });
    }
  }

  toggleVideo(): void {
    if (!this.heroVideo?.nativeElement) return;
    const vid = this.heroVideo.nativeElement;
    if (vid.paused) {
      vid.play();
      this.isVideoPlaying.set(true);
    } else {
      vid.pause();
      this.isVideoPlaying.set(false);
    }
  }
}
