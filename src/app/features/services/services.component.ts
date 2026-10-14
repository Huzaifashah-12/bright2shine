import { Component, signal, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { 
  COMPANY_DETAILS, 
  FAQS, 
  SERVICES, 
  ServiceItem, 
  ROOM_PROCESS, 
  HOURLY_PRICING, 
  EXTRA_CLEANING_ADDONS, 
  PROPERTY_PRICING_TABLE 
} from '../../data/site-data';
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
          <span class="text-white font-semibold">Services & Pricing</span>
        </nav>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          Cleaning Services & Pricing
        </h1>
        <p class="text-sand/80 text-sm sm:text-base max-w-2xl leading-relaxed">
          Tailored residential, commercial, and tenancy cleaning solutions across London & Essex. Guaranteed standards, eco-safe materials, and vetted professionals.
        </p>

        <!-- Quick email links -->
        <div class="mt-4 flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-sand/80">
          <span>Inquiries:</span>
          <a [href]="'mailto:' + company.email" class="text-brand-light hover:underline">{{ company.email }}</a>
          <span>•</span>
          <a [href]="'mailto:' + company.email2" class="text-brand-light hover:underline">{{ company.email2 }}</a>
        </div>
      </div>
    </section>



    <!-- CLEANING PROCESS SECTION (Room-by-Room Breakdown) -->
    <section class="py-20 bg-white border-y border-sand-dark/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Room-by-Room Excellence</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Our Standard Cleaning Process
          </h2>
          <p class="text-sm sm:text-base text-navy/70">
            A comprehensive, hygienic approach to cleaning every room with natural products and specialized methods.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let room of roomProcess" class="bg-[#FAF8F5] rounded-3xl overflow-hidden border border-sand-dark/30 shadow-soft flex flex-col justify-between">
            <div>
              <div class="relative w-full aspect-[4/3] overflow-hidden">
                <img [src]="room.image" [alt]="room.name" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <h3 class="absolute bottom-3 left-4 text-white font-heading font-black text-xl">{{ room.name }}</h3>
              </div>
              <div class="p-6">
                <p class="text-xs text-brand font-bold mb-2">{{ room.tagline }}</p>
                <p class="text-xs text-navy/70 mb-4">{{ room.description }}</p>
                <div class="space-y-1.5 pt-3 border-t border-sand-dark/20">
                  <div *ngFor="let task of room.tasks" class="text-xs text-navy/80 flex items-center gap-2">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand"></span>
                    <span>{{ task }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PRICING TABLE SECTION (From dustbust.co.uk/pricing/) -->
    <section class="py-20 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span class="text-xs uppercase font-bold tracking-widest text-brand">Pricing Packages</span>
          <h2 class="text-3xl sm:text-4xl font-heading font-black text-navy tracking-tight">
            Comprehensive Rates & Fixed Packages
          </h2>
          <p class="text-sm text-navy/70">
            Clear, transparent pricing based on your property layout and frequency needs.
          </p>
        </div>

        <!-- Hourly cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div 
            *ngFor="let item of hourlyPricing"
            class="rounded-3xl p-7 border flex flex-col justify-between"
            [ngClass]="item.featured ? 'bg-[#d4af37] text-navy border-white/60 shadow-card-3d' : 'bg-white text-navy border-sand-dark/30 shadow-soft'">
            <div>
              <h4 class="text-xl font-heading font-black mb-1">{{ item.title }}</h4>
              <p class="text-2xl font-black mb-3">{{ item.rate }}<span class="text-xs font-normal ml-1">{{ item.unit }}</span></p>
              <p class="text-xs opacity-75 mb-4">{{ item.description }}</p>
              <ul class="space-y-1.5 text-xs">
                <li *ngFor="let f of item.features" class="flex items-center gap-1.5">✓ {{ f }}</li>
              </ul>
            </div>
            <div class="pt-6 mt-6 border-t border-black/10">
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw"
                target="_blank"
                class="w-full text-center block py-2.5 rounded-xl font-bold text-xs"
                [ngClass]="item.featured ? 'bg-navy text-white hover:bg-black' : 'bg-brand text-white hover:bg-brand-hover'">
                Book Now →
              </a>
            </div>
          </div>

          <!-- Addons card -->
          <div class="bg-white rounded-3xl p-7 border border-sand-dark/30 shadow-soft flex flex-col justify-between">
            <div>
              <h4 class="text-xl font-heading font-black text-navy mb-2">Extra Add-ons</h4>
              <div class="space-y-2 mt-4">
                <div *ngFor="let add of extraAddons" class="p-2.5 rounded-xl bg-sand/30 flex items-center justify-between text-xs">
                  <span class="font-bold text-navy">{{ add.item }}</span>
                  <span class="font-black text-brand">{{ add.price }}</span>
                </div>
              </div>
            </div>
            <div class="pt-6 mt-6 border-t border-sand-dark/20">
              <a 
                [href]="'https://wa.me/' + company.whatsappRaw"
                target="_blank"
                class="w-full text-center block py-2.5 rounded-xl font-bold text-xs bg-navy text-white hover:bg-brand">
                Inquire For Add-ons →
              </a>
            </div>
          </div>
        </div>

        <!-- Fixed Property Size Table -->
        <div class="bg-white rounded-3xl p-6 sm:p-10 border border-sand-dark/30 shadow-soft overflow-x-auto">
          <h3 class="text-xl font-heading font-black text-navy mb-6">Property Package Pricing Table</h3>
          <table class="w-full text-left text-sm">
            <thead>
              <tr class="border-b border-sand-dark/30 text-xs font-bold text-navy/60 uppercase bg-sand/30">
                <th class="py-3 px-4 rounded-l-lg">Property Size</th>
                <th class="py-3 px-4">Light Cleaning</th>
                <th class="py-3 px-4 bg-amber-50/60 text-amber-900">End of Tenancy</th>
                <th class="py-3 px-4 rounded-r-lg bg-emerald-50/60 text-emerald-900">Tenancy + Carpet Steam</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-sand-dark/20 text-navy">
              <tr *ngFor="let t of propertyPricing" class="hover:bg-sand/20">
                <td class="py-3 px-4 font-bold text-xs sm:text-sm">{{ t.propertyType }}</td>
                <td class="py-3 px-4">{{ t.lightPrice }}</td>
                <td class="py-3 px-4 font-bold text-brand bg-amber-50/30">{{ t.tenancyPrice }}</td>
                <td class="py-3 px-4 font-black text-emerald-700 bg-emerald-50/30">{{ t.tenancyWithCarpetPrice }}</td>
              </tr>
            </tbody>
          </table>
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
          Speak with our team today on <strong class="text-white">{{ company.phone1 }}</strong> or email <strong class="text-white">{{ company.email }}</strong> / <strong class="text-white">{{ company.email2 }}</strong>.
        </p>
        <div class="pt-2 flex flex-wrap justify-center gap-4">
          <a routerLink="/contact" class="px-8 py-3.5 rounded-xl bg-brand text-white font-heading font-bold text-sm shadow-glow hover:bg-brand-hover transition inline-block">
            Contact Our Team Now
          </a>
          <a [href]="'tel:' + company.phone1Raw" class="px-8 py-3.5 rounded-xl bg-white text-navy font-heading font-bold text-sm transition inline-block">
            Call {{ company.phone1 }}
          </a>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent implements OnInit {
  company = COMPANY_DETAILS;
  allServices = SERVICES;
  roomProcess = ROOM_PROCESS;
  hourlyPricing = HOURLY_PRICING;
  extraAddons = EXTRA_CLEANING_ADDONS;
  propertyPricing = PROPERTY_PRICING_TABLE;
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
