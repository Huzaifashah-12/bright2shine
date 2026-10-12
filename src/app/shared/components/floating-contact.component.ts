import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPANY_DETAILS } from '../../data/site-data';

@Component({
  selector: 'app-floating-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Desktop & Mobile WhatsApp floating action button -->
    <div class="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
      <!-- Tooltip -->
      <div class="hidden sm:flex items-center gap-2 bg-navy text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-float border border-white/20 animate-bounce">
        <span>Instant WhatsApp Quote 💬</span>
      </div>

      <a 
        [href]="'https://wa.me/' + company.whatsappRaw" 
        target="_blank" 
        rel="noopener noreferrer"
        class="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none"
        aria-label="Chat on WhatsApp">
        <!-- Ripple effect -->
        <span class="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></span>
        
        <!-- WhatsApp SVG icon -->
        <svg class="w-8 h-8 relative z-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>

    <!-- Mobile Sticky Bottom Call & WhatsApp bar -->
    <div class="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-sand-dark/20 p-2.5 px-4 flex items-center justify-between gap-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
      <a 
        [href]="'tel:' + company.phone1Raw"
        class="flex-1 py-2.5 px-3 rounded-xl bg-navy text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition">
        <svg class="w-4 h-4 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
        </svg>
        <span>Call Now</span>
      </a>

      <a 
        [href]="'https://wa.me/' + company.whatsappRaw"
        target="_blank"
        class="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition">
        <span>WhatsApp</span>
      </a>

      <a 
        routerLink="/contact"
        class="flex-1 py-2.5 px-3 rounded-xl bg-navy text-white text-xs font-bold flex items-center justify-center gap-1 shadow-md active:scale-95 transition">
        <span>Location</span>
      </a>
    </div>
  `
})
export class FloatingContactComponent {
  company = COMPANY_DETAILS;
}
