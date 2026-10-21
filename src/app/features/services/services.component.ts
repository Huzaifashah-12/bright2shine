import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  COMPANY_DETAILS,
  COMMERCIAL_SERVICES,
  HOME_SERVICE_CARDS,
  ROOM_PROCESS,
  COMMERCIAL_PRICING_TABLE,
  HOME_PRICING_TABLE,
  FIXED_PROPERTY_PRICING_TABLE,
  SINGLE_JOBS_KITCHEN,
  SINGLE_JOBS_WINDOWS,
  EXTRAS_CARPETS,
  EXTRAS_UPHOLSTERY,
  EXTRAS_ADDONS,
  HOME_FAQS,
  COMMERCIAL_FAQS
} from '../../data/site-data';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Page Header (Section 08 Page Header) -->
    <section class="bg-[#1B2B3A] text-white pt-16 pb-20 relative overflow-hidden">
      <div class="absolute -top-24 -right-24 w-80 h-80 bg-[#B5441A]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-white/70 mb-4">
          <a routerLink="/" class="hover:text-[#3BA8B5] transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Cleaning Services &amp; Prices</span>
        </nav>

        <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-xs font-bold uppercase tracking-wider text-white mb-4">
          <span>PRICES 2026 · NO HIDDEN FEES</span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          Commercial cleaning in East London &amp; Essex
        </h1>
        <p class="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed mb-6">
          Daily, weekly and one-off cleaning for offices, buildings and shared housing — planned around your hours, delivered by the same trained team.
        </p>

        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-4">
          <a 
            routerLink="/contact"
            fragment="quote"
            class="px-6 py-3.5 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-sm shadow-md transition">
            Get a Free Quote
          </a>
          <a 
            routerLink="/services" 
            fragment="pricing"
            class="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-heading font-bold text-sm transition">
            Jump to Full Price List ↓
          </a>
        </div>
      </div>
    </section>

    <!-- Page Anchor Nav Tabs -->
    <div class="sticky top-20 z-30 bg-[#FAFAF8]/95 backdrop-blur-md border-b border-[#F3EFEA] py-3 shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-x-auto whitespace-nowrap text-xs font-bold text-[#1B2B3A]">
        <span class="text-[#B5441A] uppercase tracking-wider">Quick Jump:</span>
        <a href="services#office" class="px-3 py-1.5 rounded-lg bg-white border border-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">Part A: Commercial</a>
        <a href="services#home-cleaning" class="px-3 py-1.5 rounded-lg bg-white border border-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">Part B: Home Cleaning</a>
        <a href="services#pricing" class="px-3 py-1.5 rounded-lg bg-white border border-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">Part C: Price List</a>
        <a href="services#faq" class="px-3 py-1.5 rounded-lg bg-white border border-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">FAQs</a>
      </div>
    </div>

    <!-- ========================================== -->
    <!-- PART A: COMMERCIAL CLEANING (Section 08) -->
    <!-- ========================================== -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div class="border-b border-[#F3EFEA] pb-6">
          <span class="text-xs font-bold uppercase tracking-widest text-[#B5441A]">PART A</span>
          <h2 class="text-3xl font-heading font-black text-[#1B2B3A] mt-1">
            Commercial Cleaning Specifications
          </h2>
          <p class="text-sm text-[#2B2F33]/70">
            Professional premises, managed blocks and clinical standards across East London &amp; Essex.
          </p>
        </div>

        <!-- 8.1 Office Cleaning (#office) -->
        <div id="office" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">from £21/hr · min. 3 hrs per visit</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Offices, shops, clinics, corporate suites</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                Office Cleaning
              </h3>

              <div class="space-y-4 text-xs sm:text-sm text-[#2B2F33]/85">
                <div>
                  <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs mb-2">Every visit:</h4>
                  <p class="leading-relaxed">
                    empty bins and replace liners · vacuum carpets and mop hard floors · wipe and sanitise desks, phones and keyboards (clear desks) · clean and restock washrooms · clean kitchen and breakout areas, sinks and microwave exterior · wipe door handles, light switches and other high-touch points · spot-clean internal glass.
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs mb-2">Weekly:</h4>
                  <p class="leading-relaxed">
                    dust skirting boards, ledges and window sills · clean inside microwaves · polish meeting-room tables · clean glass doors.
                  </p>
                </div>

                <div>
                  <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs mb-2">Monthly:</h4>
                  <p class="leading-relaxed">
                    high-level dusting · descale washrooms · clean inside fridges · carpet spot treatment · internal windows.
                  </p>
                </div>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/bg2.jpg" alt="Office desk and workspace cleaning in London" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8.2 Communal Areas (blocks of flats) (#communal) -->
        <div id="communal" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">from £21/hr · min. 3 hrs per visit</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Stairs, hallways, lifts, bin stores</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                Communal Areas (Blocks of Flats)
              </h3>

              <div class="space-y-3 text-xs sm:text-sm text-[#2B2F33]/85">
                <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs">WHAT'S INCLUDED:</h4>
                <p class="leading-relaxed">
                  Sweep and mop stairs, landings and hallways · vacuum entrance mats · wipe handrails, door handles, intercom panels and lift interiors · clean entrance glass · clean bin stores · remove cobwebs · visit report with photos sent to the managing agent.
                </p>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/service-area-spree.jpg" alt="Communal stairwell and hallway cleaning" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8.3 Hostels, HMOs & supported housing (#hostels) -->
        <div id="hostels" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">from £22/hr · min. 3 hrs per visit</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Shared kitchens, bathrooms, corridors</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                Hostels, HMOs &amp; Supported Housing
              </h3>

              <div class="space-y-3 text-xs sm:text-sm text-[#2B2F33]/85">
                <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs">WHAT'S INCLUDED:</h4>
                <p class="leading-relaxed">
                  Shared kitchens (worktops, hobs, sinks, fridge exteriors) · shared bathrooms and toilets (descale and disinfect) · corridors, stairs and communal lounges · bin areas · room turnaround cleans between residents · daily or weekly schedules.
                </p>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/county-bg.jpg" alt="Hostel and shared housing facility cleaning" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8.4 Schools, clinics & places of worship (#schools) -->
        <div id="schools" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">from £21/hr · min. 3 hrs per visit</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Classrooms, clinical rooms, prayer halls</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                Schools, Clinics &amp; Places of Worship
              </h3>

              <div class="space-y-3 text-xs sm:text-sm text-[#2B2F33]/85">
                <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs">WHAT'S INCLUDED:</h4>
                <p class="leading-relaxed">
                  Classrooms, waiting areas and prayer halls · washrooms and wudu areas · floors and carpets · high-touch points · kitchens and staff rooms · cleaning outside opening and prayer times.
                </p>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/home-3.jpg" alt="School and clinic hygiene cleaning" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8.5 After builders cleaning (#after-builders) -->
        <div id="after-builders" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">£25/hr · min. 4 hrs</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Fit-outs, refurbishments &amp; post-construction</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                After Builders Cleaning (Commercial)
              </h3>

              <div class="space-y-3 text-xs sm:text-sm text-[#2B2F33]/85">
                <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs">WHAT'S INCLUDED:</h4>
                <p class="leading-relaxed">
                  Remove builders' dust from all surfaces · clean windows, frames and sills · remove paint spots and stickers · vacuum and mop floors · clean kitchens and washrooms ready for use.
                </p>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/domestic-1.jpg" alt="Commercial after builders clean-up" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <!-- 8.6 Commercial window cleaning (#windows) -->
        <div id="windows" class="scroll-mt-32 bg-[#FAFAF8] rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-5">
              <div class="flex flex-wrap items-center gap-3">
                <span class="px-3 py-1 rounded-full text-xs font-bold bg-[#B5441A] text-white">Free quote</span>
                <span class="text-xs font-semibold text-[#2B2F33]/70">Offices, shops and restaurant frontages</span>
              </div>

              <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
                Commercial Window Cleaning
              </h3>

              <div class="space-y-3 text-xs sm:text-sm text-[#2B2F33]/85">
                <h4 class="font-bold text-[#1B2B3A] uppercase tracking-wider text-xs">WHAT'S INCLUDED:</h4>
                <p class="leading-relaxed">
                  Office, shop and restaurant windows · inside and outside · frames and sills · weekly, fortnightly or monthly rounds.
                </p>
              </div>

              <div class="pt-2">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="inline-block px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
                  Get a Free Quote →
                </a>
              </div>
            </div>

            <div class="lg:col-span-4">
              <div class="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-soft border border-[#F3EFEA]">
                <img src="images/domestic-4.jpg" alt="Commercial window cleaning in London" class="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- PART B: HOME CLEANING (Section 09) -->
    <!-- ========================================== -->
    <section id="home-cleaning" class="scroll-mt-32 py-20 bg-[#FAF8F5] border-t border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Header -->
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#F3EFEA] pb-6">
          <div>
            <span class="text-xs font-bold uppercase tracking-widest text-[#B5441A]">PART B</span>
            <h2 class="text-3xl font-heading font-black text-[#1B2B3A] mt-1">
              Home cleaning in East London &amp; Essex
            </h2>
            <p class="text-sm text-[#2B2F33]/70">
              Vetted cleaners, transparent hourly rates, and deposit-return guarantees.
            </p>
          </div>
          <a 
            routerLink="/contact" 
            fragment="quote"
            class="px-6 py-3 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition whitespace-nowrap self-start sm:self-auto">
            Get a Free Quote
          </a>
        </div>

        <!-- 4 Service Cards (Section 09.2) -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Card 1: Regular cleaning -->
          <div class="bg-white rounded-3xl p-6 border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold uppercase text-[#B5441A]">Regular</span>
              <h3 class="text-xl font-heading font-black text-[#1B2B3A]">Regular Domestic</h3>
              <p class="text-2xl font-black text-[#1B2B3A]">£20/hr <span class="text-xs font-normal text-[#2B2F33]/60">(min. 3 hrs)</span></p>
              <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
                Weekly or fortnightly. Same cleaner each visit. Fully insured, products included.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <a 
                routerLink="/contact" 
                fragment="quote"
                class="w-full text-center block py-2.5 rounded-xl bg-[#1B2B3A] text-white hover:bg-[#B5441A] font-bold text-xs transition">
                Book Regular Clean →
              </a>
            </div>
          </div>

          <!-- Card 2: One-off clean -->
          <div class="bg-white rounded-3xl p-6 border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold uppercase text-[#B5441A]">One-off</span>
              <h3 class="text-xl font-heading font-black text-[#1B2B3A]">One-off House Clean</h3>
              <p class="text-2xl font-black text-[#1B2B3A]">£22/hr <span class="text-xs font-normal text-[#2B2F33]/60">(min. 3 hrs)</span></p>
              <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
                Spring clean, before guests. A comprehensive room refresh without ongoing contracts.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <a 
                routerLink="/contact" 
                fragment="quote"
                class="w-full text-center block py-2.5 rounded-xl bg-[#1B2B3A] text-white hover:bg-[#B5441A] font-bold text-xs transition">
                Book One-Off →
              </a>
            </div>
          </div>

          <!-- Card 3: Deep clean (Section 09 Deep Clean Card Text) -->
          <div class="bg-white rounded-3xl p-6 border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold uppercase text-[#B5441A]">Intensive</span>
              <h3 class="text-xl font-heading font-black text-[#1B2B3A]">Deep Cleaning</h3>
              <p class="text-2xl font-black text-[#1B2B3A]">£24/hr <span class="text-xs font-normal text-[#2B2F33]/60">(min. 4 hrs)</span></p>
              <p class="text-xs text-[#2B2F33]/75 leading-relaxed">
                A thorough clean for homes that need extra attention: skirting boards, door frames, splashbacks, limescale, window tracks and high-touch areas.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-[#F3EFEA]">
              <a 
                routerLink="/contact" 
                fragment="quote"
                class="w-full text-center block py-2.5 rounded-xl bg-[#1B2B3A] text-white hover:bg-[#B5441A] font-bold text-xs transition">
                Book Deep Clean →
              </a>
            </div>
          </div>

          <!-- Card 4: End of tenancy (Section 09 End of Tenancy Card Text) -->
          <div class="bg-gradient-to-br from-[#B5441A] to-[#8a3313] text-white rounded-3xl p-6 shadow-card-3d flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-xs font-bold uppercase text-white/80">Guaranteed</span>
              <h3 class="text-xl font-heading font-black text-white">End of Tenancy</h3>
              <p class="text-2xl font-black text-white">from £145</p>
              <p class="text-xs text-white/90 leading-relaxed">
                A full top-to-bottom clean for tenants, landlords and agents. Includes oven, inside cupboards, fridge and internal windows. Free re-clean within 48 hours if anything is missed.
              </p>
            </div>
            <div class="pt-6 mt-6 border-t border-white/20">
              <a 
                routerLink="/contact" 
                fragment="quote"
                class="w-full text-center block py-2.5 rounded-xl bg-white text-[#B5441A] font-bold text-xs transition hover:bg-[#FAFAF8]">
                Book Tenancy Clean →
              </a>
            </div>
          </div>

        </div>

        <!-- Room-by-room Section (6 rooms only place on site - Section 09.3 & expandable accordion checklist) -->
        <div class="space-y-8 pt-4">
          <div class="text-center max-w-2xl mx-auto space-y-2">
            <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">ROOM STANDARDS</span>
            <h3 class="text-2xl sm:text-3xl font-heading font-black text-[#1B2B3A]">
              Room-by-Room Cleaning Regimen
            </h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/70">
              Click any room to view its complete checkable task list.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div 
              *ngFor="let room of roomProcess; let idx = index"
              class="bg-white rounded-3xl overflow-hidden border border-[#F3EFEA] shadow-soft flex flex-col justify-between">
              
              <div>
                <div class="relative w-full aspect-[4/3] overflow-hidden bg-[#1B2B3A]/10">
                  <img [src]="room.image" [alt]="room.name" class="w-full h-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#1B2B3A]/80 via-transparent to-transparent"></div>
                  <div class="absolute bottom-3 left-4 right-4 text-white">
                    <span class="text-[10px] font-bold uppercase tracking-wider bg-black/40 px-2 py-0.5 rounded-md">Room 0{{ idx + 1 }}</span>
                    <h4 class="text-lg font-heading font-black text-white mt-0.5">{{ room.name }}</h4>
                  </div>
                </div>

                <div class="p-6 space-y-3">
                  <p class="text-xs font-semibold text-[#B5441A]">{{ room.tagline }}</p>
                  <p class="text-xs text-[#2B2F33]/75 leading-relaxed">{{ room.description }}</p>

                  <!-- Expandable Accordion Checklist (Section 09.3) -->
                  <div class="pt-3 border-t border-[#F3EFEA]">
                    <button 
                      type="button" 
                      (click)="toggleRoomAccordion(room.id)"
                      class="w-full flex items-center justify-between text-xs font-bold text-[#1B2B3A] py-1.5 focus:outline-none">
                      <span>Full Checklist ({{ room.tasks.length }} tasks)</span>
                      <span class="text-base text-[#B5441A]">{{ isRoomExpanded(room.id) ? '−' : '+' }}</span>
                    </button>

                    <div *ngIf="isRoomExpanded(room.id)" class="pt-2 space-y-1.5 animate-in fade-in duration-200">
                      <div *ngFor="let task of room.tasks" class="flex items-center gap-2 text-xs text-[#2B2F33]/85">
                        <span class="text-[#3BA8B5] font-bold">✓</span>
                        <span>{{ task }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="p-6 pt-0">
                <a 
                  routerLink="/contact" 
                  fragment="quote"
                  class="w-full py-2.5 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] text-[#1B2B3A] hover:text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition flex items-center justify-center gap-1.5">
                  <span>Enquire For This Room</span>
                  <span>→</span>
                </a>
              </div>

            </div>
          </div>
        </div>

        <!-- Carpet & Upholstery Card (Section 09.4) -->
        <div class="bg-white rounded-3xl p-6 sm:p-8 border border-[#F3EFEA] shadow-soft flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs uppercase font-bold tracking-widest text-[#3BA8B5]">SPECIALIST CLEANING</span>
            <h3 class="text-xl font-heading font-black text-[#1B2B3A]">
              Professional Carpet &amp; Upholstery Cleaning
            </h3>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              Carpets from £80 call-out · Upholstery from £70 · High-pressure steam extraction neutralising dirt and persistent odours.
            </p>
          </div>

          <a 
            routerLink="/services" 
            fragment="pricing"
            class="px-6 py-3 rounded-xl bg-[#1B2B3A] hover:bg-[#B5441A] text-white font-bold text-xs uppercase tracking-wider transition whitespace-nowrap self-start md:self-auto">
            View Carpet &amp; Upholstery Rates →
          </a>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- PART C: FULL PRICE LIST (Section 04 #pricing) -->
    <!-- ========================================== -->
    <section id="pricing" class="scroll-mt-24 py-20 bg-white border-t border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto space-y-3">
          <span class="text-xs font-bold uppercase tracking-widest text-[#B5441A]">PRICES 2026 · NO HIDDEN FEES</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Clear prices for cleaner offices, buildings and homes.
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            All products and equipment included in every price.
          </p>
          <div class="pt-2">
            <a 
              routerLink="/contact" 
              fragment="quote"
              class="inline-block px-7 py-3 rounded-2xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md transition">
              Get a Free Quote
            </a>
          </div>
        </div>

        <!-- Anchor Tabs at top of pricing (Section 04) -->
        <div class="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <a href="services#table-commercial" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">A. Commercial</a>
          <a href="services#table-home" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">B. Home</a>
          <a href="services#table-fixed" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">C. Fixed Prices</a>
          <a href="services#table-single" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">D. Single Jobs</a>
          <a href="services#table-extras" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">E. Extras</a>
          <a href="services#table-good-to-know" class="px-4 py-2 rounded-xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white transition">F. Good to Know</a>
        </div>

        <!-- Table A: Commercial Cleaning (Section 04.A) -->
        <div id="table-commercial" class="scroll-mt-32 space-y-4">
          <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
            A. Commercial cleaning
          </h3>

          <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-x-auto shadow-sm">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-[#1B2B3A] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th class="py-3.5 px-4 sm:px-6">Service</th>
                  <th class="py-3.5 px-4 sm:px-6">Price</th>
                  <th class="py-3.5 px-4 sm:px-6">Minimum</th>
                  <th class="py-3.5 px-4 sm:px-6">Best for</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F3EFEA] text-[#2B2F33]">
                <tr *ngFor="let row of commercialTable" class="hover:bg-[#FAFAF8] transition">
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-[#1B2B3A]">{{ row.service }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-black text-[#B5441A]">{{ row.price }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-semibold">{{ row.minimum }}</td>
                  <td class="py-3.5 px-4 sm:px-6 text-[#2B2F33]/80">{{ row.bestFor }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Table B: Home Cleaning (Section 04.B) -->
        <div id="table-home" class="scroll-mt-32 space-y-4">
          <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
            B. Home cleaning
          </h3>

          <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-x-auto shadow-sm">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-[#1B2B3A] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th class="py-3.5 px-4 sm:px-6">Service</th>
                  <th class="py-3.5 px-4 sm:px-6">Price</th>
                  <th class="py-3.5 px-4 sm:px-6">Minimum</th>
                  <th class="py-3.5 px-4 sm:px-6">Best for</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F3EFEA] text-[#2B2F33]">
                <tr *ngFor="let row of homeTable" class="hover:bg-[#FAFAF8] transition">
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-[#1B2B3A]">{{ row.service }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-black text-[#B5441A]">{{ row.price }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-semibold">{{ row.minimum }}</td>
                  <td class="py-3.5 px-4 sm:px-6 text-[#2B2F33]/80">{{ row.bestFor }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Exact Text Under Tables A & B (Section 04) -->
          <div class="p-4 rounded-2xl bg-[#FAFAF8] border border-[#F3EFEA] text-xs text-[#2B2F33]/85 leading-relaxed">
            <strong>Minimum booking:</strong> 3 hours per visit (4 hours for deep cleans and after-builders cleans). Early morning (before 7am), evening (after 7pm) and weekends: +£3/hr. Products and equipment included.
          </div>
        </div>

        <!-- Table C: Fixed Prices by Property Size (Section 04.C) -->
        <div id="table-fixed" class="scroll-mt-32 space-y-4">
          <div class="space-y-1">
            <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
              C. Fixed prices by property size
            </h3>
            <p class="text-xs text-[#2B2F33]/70">
              End of Tenancy includes oven, inside cupboards, fridge and internal windows.
            </p>
          </div>

          <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-x-auto shadow-sm">
            <table class="w-full text-left text-xs sm:text-sm">
              <thead class="bg-[#1B2B3A] text-white text-xs uppercase tracking-wider">
                <tr>
                  <th class="py-3.5 px-4 sm:px-6">Property</th>
                  <th class="py-3.5 px-4 sm:px-6">Standard one-off</th>
                  <th class="py-3.5 px-4 sm:px-6 bg-[#B5441A] text-white">End of tenancy</th>
                  <th class="py-3.5 px-4 sm:px-6">EOT + carpets</th>
                  <th class="py-3.5 px-4 sm:px-6">After builders</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#F3EFEA] text-[#2B2F33]">
                <tr *ngFor="let row of propertyTable" class="hover:bg-[#FAFAF8] transition">
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-[#1B2B3A]">{{ row.propertyType }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-semibold">{{ row.standardPrice }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-black text-[#B5441A] bg-[#B5441A]/5">{{ row.tenancyPrice }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-bold text-[#1B2B3A]">{{ row.tenancyWithCarpetPrice }}</td>
                  <td class="py-3.5 px-4 sm:px-6 font-semibold">{{ row.afterBuildersPrice }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p class="text-xs text-[#2B2F33]/70 italic">
            Prices assume one bathroom per 2 bedrooms and normal condition. Extra bathrooms and heavy soiling: see Extras.
          </p>
        </div>

        <!-- Table D: Single Jobs (Section 04.D) -->
        <div id="table-single" class="scroll-mt-32 space-y-4">
          <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
            D. Single jobs
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Oven & Kitchen -->
            <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-hidden shadow-sm">
              <div class="bg-[#1B2B3A] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider flex justify-between">
                <span>Oven &amp; kitchen</span>
                <span>Price</span>
              </div>
              <div class="divide-y divide-[#F3EFEA] text-xs sm:text-sm">
                <div *ngFor="let item of singleKitchen" class="px-5 py-3 flex justify-between items-center hover:bg-[#FAFAF8]">
                  <span class="font-medium text-[#1B2B3A]">{{ item.item }}</span>
                  <span class="font-black text-[#B5441A]">{{ item.price }}</span>
                </div>
              </div>
            </div>

            <!-- Windows -->
            <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-hidden shadow-sm">
              <div class="bg-[#1B2B3A] text-white px-5 py-3 text-xs font-bold uppercase tracking-wider flex justify-between">
                <span>Windows</span>
                <span>Price</span>
              </div>
              <div class="divide-y divide-[#F3EFEA] text-xs sm:text-sm">
                <div *ngFor="let item of singleWindows" class="px-5 py-3 flex justify-between items-center hover:bg-[#FAFAF8]">
                  <span class="font-medium text-[#1B2B3A]">{{ item.item }}</span>
                  <span class="font-black text-[#B5441A]">{{ item.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Table E: Extras (Section 04.E) -->
        <div id="table-extras" class="scroll-mt-32 space-y-4">
          <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
            E. Extras
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Carpets -->
            <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-hidden shadow-sm">
              <div class="bg-[#1B2B3A] text-white px-4 py-3 text-xs font-bold uppercase tracking-wider flex justify-between">
                <span>Carpets (min. call-out £80)</span>
                <span>Price</span>
              </div>
              <div class="divide-y divide-[#F3EFEA] text-xs">
                <div *ngFor="let item of extrasCarpets" class="px-4 py-3 flex justify-between items-center">
                  <span class="font-medium text-[#1B2B3A]">{{ item.item }}</span>
                  <span class="font-black text-[#B5441A]">{{ item.price }}</span>
                </div>
              </div>
            </div>

            <!-- Upholstery -->
            <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-hidden shadow-sm">
              <div class="bg-[#1B2B3A] text-white px-4 py-3 text-xs font-bold uppercase tracking-wider flex justify-between">
                <span>Upholstery (min. £70)</span>
                <span>Price</span>
              </div>
              <div class="divide-y divide-[#F3EFEA] text-xs">
                <div *ngFor="let item of extrasUpholstery" class="px-4 py-3 flex justify-between items-center">
                  <span class="font-medium text-[#1B2B3A]">{{ item.item }}</span>
                  <span class="font-black text-[#B5441A]">{{ item.price }}</span>
                </div>
              </div>
            </div>

            <!-- Add-ons -->
            <div class="bg-white rounded-2xl border border-[#F3EFEA] overflow-hidden shadow-sm">
              <div class="bg-[#1B2B3A] text-white px-4 py-3 text-xs font-bold uppercase tracking-wider flex justify-between">
                <span>Add-ons</span>
                <span>Price</span>
              </div>
              <div class="divide-y divide-[#F3EFEA] text-xs">
                <div *ngFor="let item of extrasAddons" class="px-4 py-3 flex justify-between items-center">
                  <span class="font-medium text-[#1B2B3A]">{{ item.item }}</span>
                  <span class="font-black text-[#B5441A]">{{ item.price }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Table F: Good to know (4 boxes - Section 04.F) -->
        <div id="table-good-to-know" class="scroll-mt-32 space-y-4">
          <h3 class="font-heading font-black text-xl text-[#1B2B3A] flex items-center gap-2">
            <span class="w-3 h-3 rounded-full bg-[#B5441A]"></span>
            F. Good to know (4 boxes)
          </h3>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="p-6 rounded-3xl bg-[#FAFAF8] border border-[#F3EFEA] shadow-soft space-y-2">
              <h4 class="font-heading font-bold text-sm text-[#1B2B3A]">Areas we cover</h4>
              <p class="text-xs text-[#2B2F33]/80 leading-relaxed">
                Barking, Dagenham, Ilford, Redbridge, Romford, East Ham, Stratford, Canary Wharf and nearby Essex.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-[#FAFAF8] border border-[#F3EFEA] shadow-soft space-y-2">
              <h4 class="font-heading font-bold text-sm text-[#1B2B3A]">Everything included</h4>
              <p class="text-xs text-[#2B2F33]/80 leading-relaxed">
                All cleaning products and equipment. No VAT charged — prices shown are final.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-[#FAFAF8] border border-[#F3EFEA] shadow-soft space-y-2">
              <h4 class="font-heading font-bold text-sm text-[#1B2B3A]">Commercial contracts</h4>
              <p class="text-xs text-[#2B2F33]/80 leading-relaxed">
                Free site visit and written quote within 48 hours.
              </p>
            </div>

            <div class="p-6 rounded-3xl bg-[#FAFAF8] border border-[#F3EFEA] shadow-soft space-y-2">
              <h4 class="font-heading font-bold text-sm text-[#1B2B3A]">Cancellations</h4>
              <p class="text-xs text-[#2B2F33]/80 leading-relaxed">
                Less than 24 hours' notice: 50% of the booking. "From" prices are confirmed in writing before we start.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ========================================== -->
    <!-- FAQ SECTION (Commercial & Domestic - Section 08.7 & 09.5) -->
    <!-- ========================================== -->
    <section id="faq" class="scroll-mt-32 py-20 bg-[#FAF8F5] border-t border-[#F3EFEA]">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div class="text-center space-y-2">
          <span class="text-xs font-bold uppercase tracking-widest text-[#B5441A]">QUESTIONS</span>
          <h2 class="text-3xl font-heading font-black text-[#1B2B3A]">
            Commercial &amp; Domestic FAQs
          </h2>
        </div>

        <div class="space-y-4">
          <div *ngFor="let item of allFaqs; let i = index" class="bg-white rounded-2xl border border-[#F3EFEA] shadow-sm overflow-hidden">
            <button 
              type="button" 
              (click)="toggleFaq(i)"
              class="w-full p-5 sm:p-6 text-left font-heading font-bold text-sm sm:text-base text-[#1B2B3A] flex items-center justify-between gap-4 focus:outline-none">
              <span>{{ item.question }}</span>
              <span class="text-xl font-light text-[#B5441A]" [ngClass]="{'rotate-45': activeFaq() === i}">
                +
              </span>
            </button>
            <div *ngIf="activeFaq() === i" class="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed border-t border-[#F3EFEA]/60 pt-4">
              {{ item.answer }}
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="p-8 sm:p-10 rounded-3xl bg-[#1B2B3A] text-white text-center space-y-4">
          <h3 class="text-2xl font-heading font-black">
            Ready to arrange your clean?
          </h3>
          <p class="text-xs sm:text-sm text-white/80 max-w-md mx-auto">
            Contact our team for a tailored written quotation or to book a free commercial site survey.
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a 
              routerLink="/contact" 
              fragment="quote"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-xs uppercase tracking-wider transition">
              Get a Free Quote
            </a>
            <a 
              [href]="company.whatsappLink"
              target="_blank"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-xs uppercase tracking-wider transition">
              WhatsApp 07494 809603
            </a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class ServicesComponent {
  company = COMPANY_DETAILS;
  commercialServices = COMMERCIAL_SERVICES;
  roomProcess = ROOM_PROCESS;

  commercialTable = COMMERCIAL_PRICING_TABLE;
  homeTable = HOME_PRICING_TABLE;
  propertyTable = FIXED_PROPERTY_PRICING_TABLE;
  singleKitchen = SINGLE_JOBS_KITCHEN;
  singleWindows = SINGLE_JOBS_WINDOWS;
  extrasCarpets = EXTRAS_CARPETS;
  extrasUpholstery = EXTRAS_UPHOLSTERY;
  extrasAddons = EXTRAS_ADDONS;

  allFaqs = [...COMMERCIAL_FAQS, ...HOME_FAQS];
  activeFaq = signal<number | null>(0);
  expandedRooms = signal<{ [key: string]: boolean }>({});

  toggleFaq(index: number): void {
    this.activeFaq.update(curr => curr === index ? null : index);
  }

  toggleRoomAccordion(id: string): void {
    this.expandedRooms.update(state => ({
      ...state,
      [id]: !state[id]
    }));
  }

  isRoomExpanded(id: string): boolean {
    return !!this.expandedRooms()[id];
  }
}
