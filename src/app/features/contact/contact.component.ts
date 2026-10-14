import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS, SERVICES } from '../../data/site-data';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <!-- Contact Page Header -->
    <section class="bg-navy text-white pt-14 pb-16 relative overflow-hidden">
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-brand/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-sand/70 mb-4">
          <a routerLink="/" class="hover:text-brand-light transition">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Contact</span>
        </nav>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          Get in Touch With Us
        </h1>
        <p class="text-sand/80 text-sm sm:text-base max-w-2xl leading-relaxed">
          Need a quick quote or have questions about our cleaning services? Connect with us directly via phone, WhatsApp, or email. We are here to help 7 days a week.
        </p>
      </div>
    </section>

    <!-- Main Content: Direct Contact Info & Map -->
    <section class="py-16 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Direct Communication Cards & Quick Channels -->
          <div class="lg:col-span-7 space-y-6">
            
            <div class="bg-white rounded-3xl p-6 sm:p-10 border border-sand-dark/30 shadow-soft">
              <span class="text-xs uppercase font-bold tracking-wider text-brand">Direct Contact</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-black text-navy mt-1 mb-2">
                We're Ready To Help You
              </h2>
              <p class="text-sm text-navy/70 mb-8 leading-relaxed">
                Contact our customer support team directly. For instant responses, reach us on WhatsApp or call our hotlines.
              </p>

              <!-- Channels Grid -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                
                <!-- Phone Card -->
                <div class="p-5 rounded-2xl bg-sand/30 border border-sand-dark/20 flex flex-col justify-between">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-navy text-brand-light flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[11px] text-navy/60 uppercase font-bold">Call Us</p>
                      <h4 class="text-sm font-heading font-black text-navy">Direct Hotline</h4>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <a [href]="'tel:' + company.phone1Raw" class="block text-sm font-bold text-navy hover:text-brand transition">
                      {{ company.phone1 }}
                    </a>
                    <a [href]="'tel:' + company.phone2Raw" class="block text-sm font-bold text-navy hover:text-brand transition">
                      {{ company.phone2 }}
                    </a>
                  </div>
                </div>

                <!-- WhatsApp Card -->
                <div class="p-5 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex flex-col justify-between">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[11px] text-[#25D366] uppercase font-bold">Fastest Reply</p>
                      <h4 class="text-sm font-heading font-black text-navy">WhatsApp Chat</h4>
                    </div>
                  </div>
                  <a 
                    [href]="'https://wa.me/' + company.whatsappRaw" 
                    target="_blank"
                    class="block text-sm font-bold text-[#1f9349] hover:underline">
                    Chat with an expert →
                  </a>
                </div>

                <!-- Email Card -->
                <div class="p-5 rounded-2xl bg-sand/30 border border-sand-dark/20 flex flex-col justify-between">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-navy text-brand-light flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[11px] text-navy/60 uppercase font-bold">Official Emails</p>
                      <h4 class="text-sm font-heading font-black text-navy">Written Inquiries</h4>
                    </div>
                  </div>
                  <div class="space-y-1">
                    <a [href]="'mailto:' + company.email" class="block text-sm font-bold text-navy hover:text-brand transition truncate">
                      {{ company.email }}
                    </a>
                    <a [href]="'mailto:' + company.email2" class="block text-sm font-bold text-navy hover:text-brand transition truncate">
                      {{ company.email2 }}
                    </a>
                  </div>
                </div>

                <!-- Hours Card -->
                <div class="p-5 rounded-2xl bg-sand/30 border border-sand-dark/20 flex flex-col justify-between">
                  <div class="flex items-center gap-3 mb-3">
                    <div class="w-10 h-10 rounded-xl bg-navy text-brand-light flex items-center justify-center">
                      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <p class="text-[11px] text-navy/60 uppercase font-bold">Hours</p>
                      <h4 class="text-sm font-heading font-black text-navy">Working Times</h4>
                    </div>
                  </div>
                  <p class="text-xs font-semibold text-navy">
                    {{ company.openingHours }}
                  </p>
                </div>

              </div>

              <!-- Instant Call & WhatsApp Buttons -->
              <div class="flex flex-col sm:flex-row gap-4">
                <a 
                  [href]="'tel:' + company.phone1Raw"
                  class="flex-1 py-4 px-6 rounded-xl font-heading font-bold text-sm text-white bg-navy hover:bg-navy-light text-center transition flex items-center justify-center gap-2 shadow-md">
                  <svg class="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>Call {{ company.phone1 }}</span>
                </a>

                <a 
                  [href]="'https://wa.me/' + company.whatsappRaw"
                  target="_blank"
                  class="flex-1 py-4 px-6 rounded-xl font-heading font-bold text-sm text-white bg-[#25D366] hover:bg-[#20ba5a] text-center transition flex items-center justify-center gap-2 shadow-md">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

            <!-- Areas Coverage Note -->
            <div class="bg-sand/40 rounded-3xl p-6 border border-sand-dark/20">
              <h4 class="font-heading font-bold text-sm text-navy mb-2 flex items-center gap-2">
                <span>📍</span>
                <span>Areas We Cover Directly</span>
              </h4>
              <p class="text-xs text-navy/70 leading-relaxed">
                Barking (IG11), Ilford (IG1, IG2), Redbridge, Dagenham (RM9, RM10), Stratford (E15, E20), Romford, and surrounding East London boroughs.
              </p>
            </div>

          </div>

          <!-- Right Column: Location & Google Map Embed -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- Address Card -->
            <div class="bg-navy rounded-3xl p-6 sm:p-8 text-white relative overflow-hidden shadow-float">
              <div class="absolute -top-10 -right-10 w-40 h-40 bg-brand/20 rounded-full blur-2xl"></div>

              <h3 class="font-heading font-black text-xl text-white mb-4 flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-brand-light"></span>
                Headquarters
              </h3>

              <div class="space-y-4 text-sm text-sand/85">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <div>
                    <p class="text-xs text-sand/60 font-semibold uppercase">Address</p>
                    <p class="font-semibold text-white mt-0.5">{{ company.address }}</p>
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-brand-light flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <div>
                    <p class="text-xs text-sand/60 font-semibold uppercase">Guarantee</p>
                    <p class="text-xs text-sand/80 mt-0.5">Fully Insured (£2M Public Liability) & DBS Checked.</p>
                  </div>
                </div>
              </div>

              <!-- Quick action -->
              <div class="mt-6 pt-4 border-t border-white/10">
                <a 
                  [href]="'https://wa.me/' + company.whatsappRaw"
                  target="_blank"
                  class="w-full py-3 px-4 rounded-xl font-heading font-bold text-xs bg-[#25D366] text-white flex items-center justify-center gap-2 shadow hover:bg-[#20ba5a] transition">
                  <span>Message Us On WhatsApp</span>
                </a>
              </div>
            </div>

            <!-- Embedded Interactive Map -->
            <div class="bg-white rounded-3xl p-6 border border-sand-dark/30 shadow-soft overflow-hidden">
              <h4 class="font-heading font-bold text-navy text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span>📍</span>
                <span>Our Barking Location (IG11)</span>
              </h4>

              <div class="w-full h-64 rounded-2xl overflow-hidden border border-sand-dark/20 relative">
                <iframe 
                  title="Bright2Shine Location Map"
                  class="w-full h-full border-0"
                  loading="lazy"
                  allowfullscreen
                  referrerpolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=104+Renwick+Road,+Barking,+IG11+0QF&t=&z=14&ie=UTF8&iwloc=&output=embed">
                </iframe>
              </div>

              <p class="text-[11px] text-navy/60 mt-3 text-center">
                Located near Barking Riverside, serving Redbridge, Ilford, Newham & Dagenham.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  company = COMPANY_DETAILS;
  services = SERVICES;
}
