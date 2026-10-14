import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, ROOM_PROCESS, RoomProcessItem } from '../../data/site-data';
import { Tilt3DDirective } from '../../shared/directives/tilt.directive';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-cleaning-process',
  standalone: true,
  imports: [CommonModule, RouterLink, Tilt3DDirective, RevealOnScrollDirective],
  template: `
    <!-- Hero Banner (#1B2B3A Deep Navy, #FAFAF8 Soft White, #F3EFEA Alternate Warm Grey) -->
    <section class="relative bg-gradient-to-b from-[#F3EFEA] via-[#FAFAF8] to-white py-16 sm:py-24 overflow-hidden border-b border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <!-- Breadcrumb -->
        <nav class="flex items-center space-x-2 text-xs text-[#2B2F33]/70 mb-6">
          <a routerLink="/" class="hover:text-[#B5441A] transition font-medium">Home</a>
          <span>/</span>
          <span class="text-[#1B2B3A] font-bold">Cleaning Process</span>
        </nav>

        <div class="max-w-3xl space-y-4">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B5441A]/10 border border-[#B5441A]/20 text-[#B5441A] text-xs font-bold uppercase tracking-wider">
            <span>✨ Room-by-Room Standards</span>
          </div>

          <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-[#1B2B3A] leading-tight">
            Discover Our Comprehensive Approach to Cleaning Each Room
          </h1>

          <p class="text-base sm:text-lg text-[#2B2F33]/85 leading-relaxed font-normal">
            Every home and office has unique cleaning requirements. Explore our step-by-step room process and discover how our meticulous methods bring sparkle, hygiene, and complete peace of mind.
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#2B2F33]">
            <span class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#F3EFEA] shadow-sm font-semibold">
              <span class="text-[#3BA8B5] font-bold">✓</span> DBS-Checked Staff
            </span>
            <span class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#F3EFEA] shadow-sm font-semibold">
              <span class="text-[#3BA8B5] font-bold">✓</span> Eco-Safe Detergents
            </span>
            <span class="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-xl border border-[#F3EFEA] shadow-sm font-semibold">
              <span class="text-[#3BA8B5] font-bold">✓</span> 72-Hour Quality Guarantee
            </span>
          </div>
        </div>

      </div>
    </section>

    <!-- 6 Room Cleaning Process Detailed Section -->
    <section class="py-16 sm:py-24 bg-[#FAFAF8] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="text-center max-w-2xl mx-auto mb-16 space-y-3" appRevealOnScroll>
          <span class="text-xs uppercase font-bold tracking-widest text-[#B5441A]">Hygienic Excellence</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-[#1B2B3A] tracking-tight">
            Our Standard Cleaning Protocol
          </h2>
          <p class="text-sm sm:text-base text-[#2B2F33]/70">
            Detailed checklists for all 6 core living zones from bedroom sanctuaries to grease-free kitchens.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            *ngFor="let room of roomProcess; let idx = index"
            appTilt3D [maxTilt]="6"
            class="group rounded-3xl overflow-hidden bg-white border border-[#F3EFEA] shadow-soft hover:shadow-card-3d transition-all duration-300 flex flex-col justify-between">
            
            <div>
              <!-- Real Room Image from DustBust -->
              <div class="relative w-full aspect-[4/3] overflow-hidden bg-[#1B2B3A]/5">
                <img 
                  [src]="room.image" 
                  [alt]="room.name" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div class="absolute top-3 left-3 bg-[#1B2B3A]/85 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                  Zone 0{{ idx + 1 }}
                </div>
              </div>

              <!-- Room Info & Tasks -->
              <div class="p-6 sm:p-7 space-y-4">
                <div>
                  <h3 class="text-xl font-heading font-black text-[#1B2B3A]">{{ room.name }}</h3>
                  <p class="text-xs font-bold text-[#B5441A] mt-0.5">{{ room.tagline }}</p>
                </div>

                <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
                  {{ room.description }}
                </p>

                <!-- Checkable Tasks List -->
                <div class="pt-4 border-t border-[#F3EFEA] space-y-2">
                  <p class="text-[11px] font-heading font-bold uppercase tracking-wider text-[#1B2B3A]/70">
                    Included in this room:
                  </p>
                  <ul class="space-y-1.5 text-xs text-[#2B2F33]">
                    <li *ngFor="let task of room.tasks" class="flex items-center gap-2">
                      <span class="w-4 h-4 rounded-full bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-[10px] font-bold">✓</span>
                      <span>{{ task }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="p-6 pt-0">
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw + '?text=Hi%20Bright2Shine,%20I%20want%20to%20book%20a%20clean%20including%20' + room.name"
                target="_blank"
                class="w-full text-center block py-3 rounded-2xl bg-[#F3EFEA] hover:bg-[#B5441A] text-[#1B2B3A] hover:text-white font-heading font-bold text-xs uppercase tracking-wider transition-all duration-200">
                Book {{ room.name }} →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>

    <!-- Additional Process Benefits / DustBust Value Props -->
    <section class="py-16 sm:py-20 bg-[#F3EFEA] border-t border-b border-[#F3EFEA]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="p-8 rounded-3xl bg-white border border-[#F3EFEA] shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              🧴
            </div>
            <h4 class="text-lg font-heading font-bold text-[#1B2B3A]">Eco-Friendly & Safe Products</h4>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              We prioritize non-hazardous, biodegradable products safe for babies, asthma sufferers, and family pets.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#F3EFEA] shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              ⏱️
            </div>
            <h4 class="text-lg font-heading font-bold text-[#1B2B3A]">Punctual & Disciplined Teams</h4>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              Our cleaning staff arrive on schedule with full equipment, ensuring hassle-free cleans while respecting your personal space.
            </p>
          </div>

          <div class="p-8 rounded-3xl bg-white border border-[#F3EFEA] shadow-sm space-y-3">
            <div class="w-12 h-12 rounded-2xl bg-[#3BA8B5]/15 text-[#3BA8B5] flex items-center justify-center text-xl font-bold">
              💯
            </div>
            <h4 class="text-lg font-heading font-bold text-[#1B2B3A]">100% Satisfaction Guarantee</h4>
            <p class="text-xs sm:text-sm text-[#2B2F33]/80 leading-relaxed">
              If any area does not meet our rigorous quality check, we return within 72 hours and re-clean free of charge.
            </p>
          </div>
        </div>

        <!-- Call to action block -->
        <div class="mt-14 p-8 sm:p-12 rounded-3xl bg-[#1B2B3A] text-white text-center space-y-6 shadow-card-3d">
          <h3 class="text-2xl sm:text-3xl font-heading font-black">
            Ready to Experience the Bright2Shine Clean?
          </h3>
          <p class="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Contact us today for a free bespoke quote. Inquiries answered within minutes!
          </p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              [href]="'https://wa.me/' + company.whatsappRaw"
              target="_blank"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#3BA8B5] hover:bg-[#31929d] text-white font-bold text-sm shadow-md transition">
              Chat on WhatsApp
            </a>
            <a 
              [href]="'tel:' + company.phone1Raw"
              class="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white font-bold text-sm shadow-md transition">
              Call {{ company.phone1 }}
            </a>
          </div>
          <div class="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-white/70">
            <a [href]="'mailto:' + company.email" class="hover:text-white underline">✉️ {{ company.email }}</a>
            <span>•</span>
            <a [href]="'mailto:' + company.email2" class="hover:text-white underline">✉️ {{ company.email2 }}</a>
          </div>
        </div>

      </div>
    </section>
  `
})
export class CleaningProcessComponent {
  company = COMPANY_DETAILS;
  roomProcess: RoomProcessItem[] = ROOM_PROCESS;
}
