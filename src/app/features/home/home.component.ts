import { Component, signal, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  COMPANY_DETAILS,
  COMMERCIAL_SERVICES,
  COMMERCIAL_FAQS,
  HOME_SERVICE_CARDS
} from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    Tilt3DDirective,
    RevealOnScrollDirective
  ],
  template: `
    <!-- 1. HERO SECTION (Office cleaning video background, 2 buttons only: Section 07.1) -->
    <section class="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#1B2B3A] text-white">
      
      <!-- Video Background Layer with Full Loop & Muted Audio -->
      <div class="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <video 
          #heroVideo
          src="cleaning-hero.mp4"
          poster="images/bg2.jpg"
          [muted]="true"
          muted 
          autoplay 
          loop 
          playsinline 
          preload="auto"
          class="hidden sm:block w-full h-full object-cover scale-100 opacity-80 filter brightness-95 contrast-105 transition-opacity duration-700">
          <source src="cleaning-hero.mp4" type="video/mp4">
        </video>

        <!-- Mobile shows poster image only (Section 12) -->
        <img 
          src="images/bg2.jpg" 
          alt="Bright2Shine commercial office cleaner" 
          class="sm:hidden w-full h-full object-cover opacity-75"
        />
        
        <!-- Clean Navy Overlay for text contrast -->
        <div class="absolute inset-0 bg-gradient-to-t from-[#1B2B3A] via-[#1B2B3A]/60 to-[#1B2B3A]/70"></div>
      </div>

      <!-- Center Hero Content Container (Exact Text: Section 07.1) -->
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-20 sm:py-28 space-y-7">
        
        <!-- Pill Tagline -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1B2B3A]/80 border border-white/20 shadow-lg backdrop-blur-md">
          <span class="w-2 h-2 rounded-full bg-[#3BA8B5] animate-pulse"></span>
          <span class="text-xs font-bold tracking-wider text-[#FAFAF8] uppercase">
            COMMERCIAL &amp; OFFICE CLEANING · EAST LONDON &amp; ESSEX
          </span>
        </div>

        <!-- Main Headline -->
        <h1 class="text-3xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.15] tracking-tight drop-shadow-md">
          Reliable cleaning for offices, <br class="hidden sm:inline" />
          <span class="text-[#B5441A]">buildings and hostels.</span>
        </h1>

        <!-- Subheading -->
        <p class="text-base sm:text-xl text-white/95 max-w-3xl mx-auto font-normal leading-relaxed drop-shadow">
          Contract and one-off cleaning by vetted, insured teams — scheduled around your business: early mornings, evenings or weekends. Home cleaning also available.
        </p>

        <!-- Action CTAs: Two buttons only [Get a Free Quote] [WhatsApp us] -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#B5441A] text-white font-heading font-black text-base shadow-xl hover:bg-[#9a3814] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2 group">
            <span>Get a Free Quote</span>
            <span class="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a 
            [href]="company.whatsappLink"
            target="_blank"
            class="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#25D366] text-white font-heading font-bold text-base shadow-lg hover:bg-[#20ba5a] hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
            <span>WhatsApp us</span>
          </a>
        </div>

        <!-- 4 Bullet Checkpoints under buttons -->
        <div class="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm text-white/90 font-medium">
          <span class="flex items-center gap-1.5"><strong class="text-[#3BA8B5]">✓</strong> Free site survey</span>
          <span class="flex items-center gap-1.5"><strong class="text-[#3BA8B5]">✓</strong> Written quote in 48 hrs</span>
          <span class="flex items-center gap-1.5"><strong class="text-[#3BA8B5]">✓</strong> Fully insured</span>
          <span class="flex items-center gap-1.5"><strong class="text-[#3BA8B5]">✓</strong> All products included</span>
        </div>

      </div>
    </section>

    <!-- 2. SECTORS WE CLEAN (6 image cards linking to /services#[anchor] - Section 07.2) -->
    <section class="py-20 sm:py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">SECTORS</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Who we clean for
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            Professional premises, managed blocks, and public environments across East London and Essex.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let s of commercialServices"
            appTilt3D [maxTilt]="5"
            class="group bg-white rounded-3xl overflow-hidden border border-[#F3EFEA] shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between">
            <div>
              <div class="relative w-full aspect-[16/10] overflow-hidden bg-[#1B2B3A]/10">
                <img 
                  [src]="s.image" 
                  [alt]="'Bright2Shine ' + s.title + ' service in London & Essex'" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div class="absolute inset-0 bg-gradient-to-t from-[#1B2B3A]/80 via-transparent to-transparent"></div>
                <div class="absolute bottom-3 left-4 right-4">
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#FAFAF8] bg-[#B5441A] px-2.5 py-0.5 rounded-full">
                    {{ s.priceTag }}
                  </span>
                </div>
              </div>

              <div class="p-6 space-y-2">
                <h3 class="text-xl font-heading font-black text-[#1B2B3A]">{{ s.title }}</h3>
                <p class="text-xs text-[#2B2F33]/75 leading-relaxed">{{ s.targetAudience }}</p>
              </div>
            </div>

            <div class="p-6 pt-0">
              <a 
                [routerLink]="['/services']" 
                [fragment]="s.anchor"
                class="w-full py-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] text-[#1B2B3A] hover:text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center gap-2">
                <span>View Specification &amp; Checklist</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 3. WHY CHOOSE US (6 icons in a grid - Section 07.3) -->
    <section class="py-20 sm:py-24 bg-[#FAF8F5] border-y border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">COMMERCIAL STANDARDS</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Why choose Bright2Shine
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            Dedicated account management, consistent uniformed teams, and guaranteed quality.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Box 1 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              👤
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">One point of contact</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              A named account manager for your site who handles schedules, special requests, and inquiries.
            </p>
          </div>

          <!-- Box 2 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              ⏰
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">Flexible hours</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              Before opening, after closing or at weekends — cleaning designed to suit your business operations.
            </p>
          </div>

          <!-- Box 3 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              📋
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">Written cleaning schedule</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              You know exactly what is cleaned and how often, with room-by-room checkable task lists.
            </p>
          </div>

          <!-- Box 4 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              🔍
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">Regular quality checks</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              Supervisor inspections and fast fixes. Free re-clean within 48 hours if anything is missed.
            </p>
          </div>

          <!-- Box 5 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              🛡️
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">Fully insured</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              £5m / £10m Public Liability and £10m Employers' Liability certificates available on request.
            </p>
          </div>

          <!-- Box 6 -->
          <div class="bg-white rounded-3xl p-7 border border-[#F3EFEA] shadow-soft space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              💷
            </div>
            <h3 class="text-lg font-heading font-bold text-[#1B2B3A]">Clear pricing</h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              Fixed quotes, no hidden extras. All professional cleaning equipment and supplies included.
            </p>
          </div>

        </div>

      </div>
    </section>

    <!-- 4. HOW IT WORKS (4 steps, link to /cleaning-process - Section 07.4) -->
    <section class="py-20 sm:py-24 bg-white relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">THE PROCESS</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            How it works
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            A seamless setup from initial inquiry to ongoing quality assurance.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          
          <div class="bg-[#FAFAF8] rounded-3xl p-6 border border-[#F3EFEA] space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center font-black text-sm">
              1
            </div>
            <h4 class="font-heading font-bold text-base text-[#1B2B3A]">Request a free quote</h4>
            <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
              Tell us about your premises by form, email or WhatsApp. We reply within 2 working hours.
            </p>
          </div>

          <div class="bg-[#FAFAF8] rounded-3xl p-6 border border-[#F3EFEA] space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center font-black text-sm">
              2
            </div>
            <h4 class="font-heading font-bold text-base text-[#1B2B3A]">Free site survey</h4>
            <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
              We visit your commercial premises, or confirm details by phone and photos for homes.
            </p>
          </div>

          <div class="bg-[#FAFAF8] rounded-3xl p-6 border border-[#F3EFEA] space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center font-black text-sm">
              3
            </div>
            <h4 class="font-heading font-bold text-base text-[#1B2B3A]">Written quote &amp; plan</h4>
            <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
              Tasks, frequency, hours and a clear fixed price delivered in writing within 48 hours.
            </p>
          </div>

          <div class="bg-[#FAFAF8] rounded-3xl p-6 border border-[#F3EFEA] space-y-3">
            <div class="w-10 h-10 rounded-xl bg-[#B5441A] text-white flex items-center justify-center font-black text-sm">
              4
            </div>
            <h4 class="font-heading font-bold text-base text-[#1B2B3A]">Cleaning starts</h4>
            <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
              The same vetted, trained team arrives with regular supervisor quality checks.
            </p>
          </div>

        </div>

        <div class="mt-10 text-center">
          <a 
            routerLink="/cleaning-process"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1B2B3A] text-white font-heading font-bold text-xs uppercase tracking-wider hover:bg-[#B5441A] transition shadow-sm">
            <span>Explore full 7-step process ("How We Work")</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- 5. HOME CLEANING ROW (one row, 4 small cards -> /services#home-cleaning - Section 07.5) -->
    <section class="py-20 sm:py-24 bg-[#FAF8F5] border-y border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12" appRevealOnScroll>
          <div>
            <span class="text-xs uppercase font-bold tracking-widest text-[#3BA8B5]">DOMESTIC SERVICES</span>
            <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight mt-1">
              Home cleaning too
            </h2>
            <p class="text-sm text-[#2B2F33]/70">
              Regular cleaning · Deep cleaning · End of tenancy · Carpets &amp; upholstery
            </p>
          </div>

          <a 
            routerLink="/services" 
            fragment="home-cleaning"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white border border-[#1B2B3A]/15 text-[#1B2B3A] hover:bg-[#B5441A] hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition shadow-sm whitespace-nowrap self-start md:self-auto">
            <span>View home cleaning</span>
            <span>→</span>
          </a>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            *ngFor="let card of homeCards"
            class="bg-white rounded-3xl p-6 border border-[#F3EFEA] shadow-soft flex flex-col justify-between hover:border-[#3BA8B5] transition">
            <div class="space-y-2">
              <span class="text-lg font-black text-[#B5441A]">{{ card.price }}</span>
              <h3 class="font-heading font-bold text-base text-[#1B2B3A]">{{ card.title }}</h3>
              <p class="text-xs text-[#2B2F33]/70">{{ card.tagline }}</p>
            </div>
            <div class="pt-4 mt-4 border-t border-[#F3EFEA]">
              <a 
                routerLink="/services" 
                fragment="home-cleaning"
                class="text-xs font-bold text-[#1B2B3A] hover:text-[#B5441A] flex items-center justify-between">
                <span>Details &amp; Tasks</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 6. PRICING PREVIEW (3 cards + [See all prices] -> /services#pricing - Section 07.6) -->
    <section class="py-20 sm:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-14 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">TRANSPARENT PRICING</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Clear prices with all equipment included
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            No VAT charged, no hidden extras. Straightforward rates for commercial premises and homes.
          </p>
        </div>

        <!-- 3 Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          
          <div class="bg-[#FAFAF8] rounded-3xl p-8 border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#B5441A]">Commercial</span>
              <h3 class="text-2xl font-heading font-black text-[#1B2B3A]">Office &amp; Commercial</h3>
              <p class="text-3xl font-heading font-black text-[#1B2B3A]">
                from £21<span class="text-xs font-normal text-[#2B2F33]/70">/hr</span>
              </p>
              <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
                Regular contract cleaning for offices, shared buildings, hostels and schools. Minimum 3 hours per visit.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <a 
                routerLink="/contact"
                fragment="quote"
                class="w-full text-center block py-3 rounded-xl bg-[#1B2B3A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B5441A] transition">
                Request Quote →
              </a>
            </div>
          </div>

          <div class="bg-gradient-to-br from-[#B5441A] to-[#8a3313] text-white rounded-3xl p-8 shadow-card-3d flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-white/80">Domestic</span>
              <h3 class="text-2xl font-heading font-black text-white">Home Cleaning</h3>
              <p class="text-3xl font-heading font-black text-white">
                from £20<span class="text-xs font-normal text-white/80">/hr</span>
              </p>
              <p class="text-xs text-white/90 leading-relaxed">
                Weekly or fortnightly regular domestic cleans by the same vetted cleaner each visit. Products included.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-white/20">
              <a 
                routerLink="/contact"
                fragment="quote"
                class="w-full text-center block py-3 rounded-xl bg-white text-[#B5441A] font-bold text-xs uppercase tracking-wider hover:bg-[#FAFAF8] transition shadow-md">
                Book Domestic →
              </a>
            </div>
          </div>

          <div class="bg-[#FAFAF8] rounded-3xl p-8 border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
            <div class="space-y-4">
              <span class="text-xs font-bold uppercase tracking-wider text-[#3BA8B5]">Fixed Package</span>
              <h3 class="text-2xl font-heading font-black text-[#1B2B3A]">End of Tenancy</h3>
              <p class="text-3xl font-heading font-black text-[#1B2B3A]">
                from £145
              </p>
              <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
                Full checklist: oven, cupboards, fridge, windows. Free re-clean within 48 hours if anything is missed.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <a 
                routerLink="/contact"
                fragment="quote"
                class="w-full text-center block py-3 rounded-xl bg-[#1B2B3A] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#B5441A] transition">
                Request Tenancy Quote →
              </a>
            </div>
          </div>

        </div>

        <div class="text-center">
          <a 
            routerLink="/services" 
            fragment="pricing"
            class="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-[#B5441A] text-white font-heading font-black text-sm uppercase tracking-wider hover:bg-[#9a3814] shadow-lg transition">
            <span>See all prices &amp; full property table</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>

    <!-- 6b. ABOUT US (Anchor #about, exact text from Section 11 & 28 - Section 07.6b) -->
    <section id="about" class="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6" appRevealOnScroll>
            <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">ABOUT US</span>
            <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
              About Bright2Shine
            </h2>
            
            <p class="text-base sm:text-lg text-[#2B2F33]/85 leading-relaxed">
              Bright2Shine Ltd is a cleaning company based in East London, providing commercial and domestic cleaning across East London and Essex. We work with offices, managing agents, hostels and homeowners who want reliable cleaners, clear prices and one point of contact. Our teams are vetted, trained and fully insured, and every site has a written cleaning plan.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-white border border-[#F3EFEA] shadow-sm">
                <span class="text-[#3BA8B5] font-bold text-sm">✓ Vetted Staff</span>
                <p class="text-xs text-[#2B2F33]/70 mt-1">Carefully referenced &amp; uniformed.</p>
              </div>
              <div class="p-4 rounded-2xl bg-white border border-[#F3EFEA] shadow-sm">
                <span class="text-[#3BA8B5] font-bold text-sm">✓ Comprehensive Cover</span>
                <p class="text-xs text-[#2B2F33]/70 mt-1">£5m/£10m Public &amp; £10m Employer.</p>
              </div>
              <div class="p-4 rounded-2xl bg-white border border-[#F3EFEA] shadow-sm">
                <span class="text-[#3BA8B5] font-bold text-sm">✓ Written Plans</span>
                <p class="text-xs text-[#2B2F33]/70 mt-1">Checkable room specifications.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5">
            <div class="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-card-3d border-4 border-white bg-[#1B2B3A]/10">
              <img 
                src="images/service-area-spree.jpg" 
                alt="Bright2Shine commercial and domestic cleaning team equipment" 
                class="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 7. AREAS WE COVER (Region image + list, no address - Section 07.7) -->
    <section class="py-20 sm:py-24 bg-white border-t border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-6 space-y-6" appRevealOnScroll>
            <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">COVERAGE</span>
            <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
              Areas we cover
            </h2>
            <p class="text-sm sm:text-base text-[#2B2F33]/80 leading-relaxed font-medium">
              {{ company.standardAreasString }}
            </p>

            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
              <div *ngFor="let area of company.areasList" class="p-3 rounded-xl bg-[#FAFAF8] border border-[#F3EFEA] text-xs font-semibold text-[#1B2B3A] flex items-center gap-1.5">
                <span class="text-[#3BA8B5]">📍</span>
                <span>{{ area }}</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6">
            <div class="relative w-full aspect-[16/10] rounded-3xl overflow-hidden shadow-soft border border-[#F3EFEA]">
              <img 
                src="images/county-bg.jpg" 
                alt="Bright2Shine cleaning coverage across East London and Essex" 
                class="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- 8. FAQ ACCORDION (6 questions from Section 08.3 - Section 07.8) -->
    <section class="py-20 sm:py-24 bg-[#FAF8F5] border-t border-[#F3EFEA]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-14 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">FAQ</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p class="text-sm text-[#2B2F33]/70">
            Common questions regarding commercial site surveys, access hours, and billing.
          </p>
        </div>

        <div class="space-y-4">
          <div 
            *ngFor="let item of faqs; let i = index" 
            class="bg-white rounded-2xl border border-[#F3EFEA] shadow-sm overflow-hidden transition">
            <button 
              type="button"
              (click)="toggleFaq(i)"
              class="w-full p-5 sm:p-6 text-left font-heading font-bold text-sm sm:text-base text-[#1B2B3A] flex items-center justify-between gap-4 focus:outline-none">
              <span>{{ item.question }}</span>
              <span class="text-xl font-light text-[#B5441A] transition-transform duration-200" [ngClass]="{'rotate-45': activeFaq() === i}">
                +
              </span>
            </button>
            <div *ngIf="activeFaq() === i" class="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed border-t border-[#F3EFEA]/60 pt-4">
              {{ item.answer }}
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 9. FINAL CALL TO ACTION (Exact text: Section 07.9) -->
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
export class HomeComponent implements AfterViewInit {
  company = COMPANY_DETAILS;
  commercialServices = COMMERCIAL_SERVICES;
  homeCards = HOME_SERVICE_CARDS;
  faqs = COMMERCIAL_FAQS;

  activeFaq = signal<number | null>(0);

  @ViewChild('heroVideo') heroVideo?: ElementRef<HTMLVideoElement>;

  ngAfterViewInit(): void {
    if (this.heroVideo?.nativeElement) {
      const vid = this.heroVideo.nativeElement;
      vid.muted = true;
      vid.play().catch(() => {});
    }
  }

  toggleFaq(index: number): void {
    this.activeFaq.update(curr => curr === index ? null : index);
  }
}
