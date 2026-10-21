import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { COMPANY_DETAILS } from '../../data/site-data';
import { ModalService } from '../../shared/services/modal.service';

export interface QuoteFormData {
  serviceType: string;
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  postcode: string;
  propertySize: string;
  frequency: string;
  preferredTime: string;
  message: string;
  consent: boolean;
  honeypot: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  template: `
    <!-- Contact Page Header (Section 05) -->
    <section class="bg-[#1B2B3A] text-white pt-14 pb-16 relative overflow-hidden">
      <div class="absolute -bottom-24 -left-24 w-80 h-80 bg-[#B5441A]/20 rounded-full blur-3xl pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center sm:text-left">
        <!-- Breadcrumb -->
        <nav class="flex items-center justify-center sm:justify-start space-x-2 text-xs text-[#FAFAF8]/70 mb-4">
          <a routerLink="/" class="hover:text-[#3BA8B5] transition font-medium">Home</a>
          <span>/</span>
          <span class="text-white font-semibold">Contact</span>
        </nav>

        <h1 class="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-3">
          Get a free cleaning quote
        </h1>
        <p class="text-white/85 text-sm sm:text-base max-w-2xl leading-relaxed">
          Tell us about your office, building or home and we'll send a clear, fixed price — free and with no obligation.
        </p>
      </div>
    </section>

    <!-- Main Content: New Layout (Section 05.2 - LEFT 60% Form #quote, RIGHT 40% Stacked Cards) -->
    <section id="quote" class="py-16 sm:py-20 bg-[#FAF8F5]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- LEFT (60% / col-span-7): Free Quote Form (Section 06) -->
          <div class="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#F3EFEA] shadow-soft relative">
            
            <!-- In-Place Thank You Message (Section 06.2) -->
            <div *ngIf="submitted()" class="text-center py-12 px-4 space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div class="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <div class="space-y-2">
                <h3 class="font-heading font-black text-2xl text-[#1B2B3A]">
                  Thank you — your request has been sent.
                </h3>
                <p class="text-sm text-[#2B2F33]/80 max-w-md mx-auto leading-relaxed">
                  We'll be in touch within 2 working hours (Mon–Sat). A confirmation has been sent to your email.
                </p>
              </div>

              <!-- Auto-reply preview snippet for transparency -->
              <div class="p-4 rounded-2xl bg-[#F3EFEA]/60 border border-[#F3EFEA] text-left text-xs text-[#2B2F33]/80 space-y-2 max-w-md mx-auto">
                <p class="font-bold text-[#1B2B3A]">Summary confirmation sent to {{ form.email }}:</p>
                <p>Hi {{ form.fullName }},</p>
                <p>Thank you for contacting Bright2Shine. We've received your request for <strong>{{ form.serviceType }}</strong> at <strong>{{ form.postcode }}</strong>.</p>
                <p>A member of our team will reply within 2 working hours (Mon–Sat). For commercial sites we'll arrange a free site survey and send a written quote within 48 hours.</p>
              </div>

              <div class="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a 
                  routerLink="/" 
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#1B2B3A] text-white font-bold text-xs hover:bg-[#B5441A] transition text-center">
                  Back to Home
                </a>
                <a 
                  [href]="company.whatsappLink" 
                  target="_blank"
                  class="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba5a] transition text-center flex items-center justify-center gap-2">
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <!-- Free Quote Form (Section 06.1) -->
            <form *ngIf="!submitted()" (ngSubmit)="onSubmit()" class="space-y-6">
              
              <!-- Honeypot anti-spam field -->
              <input 
                type="text" 
                name="b_website" 
                [(ngModel)]="form.honeypot" 
                tabindex="-1" 
                autocomplete="off" 
                class="hidden" 
                aria-hidden="true" 
              />

              <div>
                <h2 class="font-heading font-black text-2xl text-[#1B2B3A] mb-1">
                  Request a Free Quote
                </h2>
                <p class="text-xs sm:text-sm text-[#2B2F33]/70">
                  Fixed pricing, free site survey for commercial premises, and response within 2 working hours.
                </p>
              </div>

              <!-- Field 1: I need cleaning for (Required) -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                  I need cleaning for *
                </label>
                <select 
                  name="serviceType" 
                  [(ngModel)]="form.serviceType" 
                  required
                  class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition">
                  <option value="" disabled>Select premises type...</option>
                  <option value="Office">Office</option>
                  <option value="Commercial building / shop">Commercial building / shop</option>
                  <option value="Block of flats (communal)">Block of flats</option>
                  <option value="Hostel / HMO">Hostel / HMO</option>
                  <option value="School / clinic / place of worship">School / clinic / place of worship</option>
                  <option value="Home">Home</option>
                  <option value="End of tenancy">End of tenancy</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <!-- Field 2: Full name (Required) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Full name *
                  </label>
                  <input 
                    type="text" 
                    name="fullName" 
                    [(ngModel)]="form.fullName" 
                    required 
                    placeholder="Your name"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>

                <!-- Field 3: Company name (Show when commercial selected) -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Company name <span *ngIf="isCommercial()" class="text-[#B5441A]">(Recommended)</span>
                  </label>
                  <input 
                    type="text" 
                    name="companyName" 
                    [(ngModel)]="form.companyName" 
                    [placeholder]="isCommercial() ? 'Your organisation or company' : 'Optional'"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>
              </div>

              <!-- Field 4: Phone (WhatsApp) & Field 5: Email (Both Required) -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Phone (WhatsApp) *
                  </label>
                  <input 
                    type="tel" 
                    name="phone" 
                    [(ngModel)]="form.phone" 
                    required 
                    placeholder="e.g. 07494 809603"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Email *
                  </label>
                  <input 
                    type="email" 
                    name="email" 
                    [(ngModel)]="form.email" 
                    required 
                    placeholder="name@example.com"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>
              </div>

              <!-- Field 6: Postcode (Required) & Field 7: Property size -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Postcode *
                  </label>
                  <input 
                    type="text" 
                    name="postcode" 
                    [(ngModel)]="form.postcode" 
                    required 
                    placeholder="e.g. IG11, RM9, E15"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Property size
                  </label>
                  <input 
                    type="text" 
                    name="propertySize" 
                    [(ngModel)]="form.propertySize" 
                    [placeholder]="isCommercial() ? 'Approx. sq ft, floors, toilets' : 'Bedrooms, bathrooms'"
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition" 
                  />
                </div>
              </div>

              <!-- Field 8: How often? (Required) & Field 9: Preferred time -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    How often? *
                  </label>
                  <select 
                    name="frequency" 
                    [(ngModel)]="form.frequency" 
                    required
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition">
                    <option value="" disabled>Select frequency...</option>
                    <option value="One-off">One-off</option>
                    <option value="Daily">Daily</option>
                    <option value="Several times a week">Several times a week</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Fortnightly">Fortnightly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>

                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                    Preferred time
                  </label>
                  <select 
                    name="preferredTime" 
                    [(ngModel)]="form.preferredTime" 
                    class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition">
                    <option value="">Flexible / Anytime</option>
                    <option value="Early morning">Early morning (before 8am)</option>
                    <option value="Daytime">Daytime</option>
                    <option value="Evening">Evening (after 6pm)</option>
                    <option value="Weekend">Weekend</option>
                  </select>
                </div>
              </div>

              <!-- Field 10: Message (Textarea) -->
              <div>
                <label class="block text-xs font-bold uppercase tracking-wider text-[#1B2B3A] mb-1.5">
                  Message
                </label>
                <textarea 
                  name="message" 
                  [(ngModel)]="form.message" 
                  rows="3" 
                  placeholder="Provide any specific requirements, access notes, or cleaning details..."
                  class="w-full px-4 py-3 rounded-xl border border-[#F3EFEA] focus:border-[#B5441A] focus:ring-2 focus:ring-[#B5441A]/20 bg-[#FAFAF8] text-sm text-[#1B2B3A] outline-none transition resize-none">
                </textarea>
              </div>

              <!-- Field 11: Consent Checkbox (Required under UK GDPR - opens Privacy Policy pop-up) -->
              <div class="flex items-start gap-3 pt-1">
                <input 
                  type="checkbox" 
                  id="consentCheckbox"
                  name="consent" 
                  [(ngModel)]="form.consent" 
                  required
                  class="mt-1 w-4 h-4 rounded text-[#B5441A] border-[#F3EFEA] focus:ring-[#B5441A]" 
                />
                <label for="consentCheckbox" class="text-xs text-[#2B2F33]/80 leading-relaxed cursor-pointer select-none">
                  I agree to Bright2Shine contacting me about my quote. See our 
                  <button 
                    type="button" 
                    (click)="openPrivacyPolicy($event)"
                    class="text-[#B5441A] font-bold underline hover:text-[#9a3814] focus:outline-none">
                    Privacy Policy
                  </button>.
                </label>
              </div>

              <!-- Submit button -->
              <div class="pt-2">
                <button 
                  type="submit" 
                  [disabled]="isSubmitting || !form.consent"
                  class="w-full py-4 px-6 rounded-2xl bg-[#B5441A] hover:bg-[#9a3814] disabled:opacity-50 text-white font-heading font-black text-sm uppercase tracking-wider shadow-md hover:-translate-y-0.5 transition duration-200 flex items-center justify-center gap-2">
                  <span>{{ isSubmitting ? 'Sending Request...' : 'Submit Quote Request →' }}</span>
                </button>
                <p class="text-center text-[11px] text-[#2B2F33]/60 mt-2">
                  ⚡ Free quote with zero obligation · Reply within 2 working hours
                </p>
              </div>

            </form>

          </div>

          <!-- RIGHT (40% / col-span-5): Stacked Cards (Section 05.2) -->
          <div class="lg:col-span-5 space-y-6">
            
            <!-- ① Email Card (Section 05.2) -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3EFEA] shadow-soft space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center">
                  <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#B5441A]">Written Enquiries</span>
                  <h3 class="text-lg font-heading font-black text-[#1B2B3A]">Email us</h3>
                </div>
              </div>

              <div class="space-y-3 text-xs sm:text-sm">
                <div>
                  <p class="text-[11px] font-semibold text-[#2B2F33]/60">General &amp; home cleaning:</p>
                  <a [href]="'mailto:' + company.email" class="text-sm font-bold text-[#1B2B3A] hover:text-[#B5441A] transition">
                    {{ company.email }}
                  </a>
                </div>

                <div>
                  <p class="text-[11px] font-semibold text-[#2B2F33]/60">Commercial contracts &amp; tenders:</p>
                  <a [href]="'mailto:' + company.emailCommercial" class="text-sm font-bold text-[#1B2B3A] hover:text-[#B5441A] transition">
                    {{ company.emailCommercial }}
                  </a>
                </div>
              </div>

              <div class="pt-2 border-t border-[#F3EFEA] text-xs text-[#2B2F33]/70 font-medium">
                We reply within 2 working hours (Mon–Sat).
              </div>
            </div>

            <!-- ② WhatsApp Card (Green - Section 05.2) -->
            <div class="bg-[#25D366]/10 rounded-3xl p-6 sm:p-7 border border-[#25D366]/30 shadow-soft space-y-4">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center">
                  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <span class="text-[10px] font-bold uppercase tracking-wider text-[#128C7E]">Instant Chat</span>
                  <h3 class="text-lg font-heading font-black text-[#1B2B3A]">Prefer to chat?</h3>
                </div>
              </div>

              <p class="text-xs sm:text-sm text-[#2B2F33]/80">
                Send us a message on WhatsApp for a quick quote.
              </p>

              <a 
                [href]="company.whatsappLink"
                target="_blank"
                class="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition">
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <!-- ③ Opening Hours Card (Section 05.2 & Section 1.3) -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3EFEA] shadow-soft space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#3BA8B5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-heading font-black text-[#1B2B3A]">Opening hours</h3>
              </div>

              <div class="text-xs sm:text-sm space-y-1.5 text-[#2B2F33]/90">
                <p><strong>Office hours:</strong> {{ company.officeHours }}</p>
                <p class="text-[#3BA8B5] font-semibold">{{ company.cleaningAvailability }}</p>
              </div>
            </div>

            <!-- ④ Areas We Cover Card (Section 05.2 & Section 18) -->
            <div class="bg-white rounded-3xl p-6 sm:p-7 border border-[#F3EFEA] shadow-soft space-y-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-[#1B2B3A] text-white flex items-center justify-center">
                  <svg class="w-5 h-5 text-[#B5441A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <h3 class="text-lg font-heading font-black text-[#1B2B3A]">Areas we cover</h3>
              </div>

              <p class="text-xs sm:text-sm text-[#2B2F33]/85 leading-relaxed font-medium">
                {{ company.standardAreasString }}
              </p>

              <div class="pt-2 flex flex-wrap gap-1.5">
                <span *ngFor="let area of company.areasList" class="px-2.5 py-1 rounded-full text-[11px] bg-[#F3EFEA] text-[#1B2B3A] font-semibold">
                  {{ area }}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `
})
export class ContactComponent {
  company = COMPANY_DETAILS;
  modalService = inject(ModalService);

  isSubmitting = false;
  submitted = signal<boolean>(false);

  form: QuoteFormData = {
    serviceType: '',
    fullName: '',
    companyName: '',
    phone: '',
    email: '',
    postcode: '',
    propertySize: '',
    frequency: '',
    preferredTime: '',
    message: '',
    consent: false,
    honeypot: ''
  };

  isCommercial(): boolean {
    const t = this.form.serviceType.toLowerCase();
    return t.includes('office') || t.includes('commercial') || t.includes('flats') || t.includes('hostel') || t.includes('school');
  }

  openPrivacyPolicy(event: Event): void {
    event.preventDefault();
    this.modalService.open('privacy');
  }

  onSubmit(): void {
    if (this.form.honeypot) {
      // Spam submission detected, silently discard
      this.submitted.set(true);
      return;
    }

    if (!this.form.serviceType || !this.form.fullName || !this.form.phone || !this.form.email || !this.form.postcode || !this.form.frequency || !this.form.consent) {
      alert('Please fill in all required fields and accept the contact consent.');
      return;
    }

    this.isSubmitting = true;

    // Simulate reliable dispatch to info@bright2shine.com (and contact@ for commercial)
    setTimeout(() => {
      this.isSubmitting = false;
      this.submitted.set(true);
      // Track conversion event if analytics available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'form_submit', {
          service_type: this.form.serviceType,
          is_commercial: this.isCommercial()
        });
      }
    }, 600);
  }
}
