import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalService } from '../services/modal.service';
import { COMPANY_DETAILS } from '../../data/site-data';

@Component({
  selector: 'app-policy-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="modalService.activeModal()" 
      class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true">
      
      <!-- Backdrop -->
      <div 
        (click)="modalService.close()" 
        class="fixed inset-0 bg-[#1B2B3A]/70 backdrop-blur-sm transition-opacity">
      </div>

      <!-- Modal Card -->
      <div 
        class="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-[#F3EFEA] flex flex-col z-10 overflow-hidden text-[#1B2B3A]">
        
        <!-- Header -->
        <div class="px-6 py-5 border-b border-[#F3EFEA] flex items-center justify-between bg-[#FAFAF8]">
          <div>
            <h3 class="font-heading font-black text-xl text-[#1B2B3A]">
              {{ getTitle() }}
            </h3>
            <p class="text-xs text-[#2B2F33]/60 font-medium">Bright2Shine Ltd · Legal & Compliance</p>
          </div>
          <button 
            type="button" 
            (click)="modalService.close()"
            class="w-10 h-10 rounded-2xl bg-[#F3EFEA] hover:bg-[#B5441A] hover:text-white text-[#1B2B3A] transition flex items-center justify-center focus:outline-none"
            aria-label="Close modal">
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Scrollable Content Body -->
        <div class="p-6 sm:p-8 overflow-y-auto space-y-5 text-sm text-[#2B2F33]/90 leading-relaxed">
          
          <!-- PRIVACY POLICY -->
          <ng-container *ngIf="modalService.activeModal() === 'privacy'">
            <div class="space-y-4">
              <div class="p-4 rounded-2xl bg-[#3BA8B5]/10 border border-[#3BA8B5]/20 text-xs">
                <strong class="text-[#1B2B3A] font-bold">Data Controller:</strong> Bright2Shine Ltd · Contact: 
                <a href="mailto:info@bright2shine.com" class="text-[#B5441A] font-semibold underline">info&#64;bright2shine.com</a>
              </div>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">1. Who We Are</h4>
              <p>
                Bright2Shine Ltd ("we", "our", "us") operates the website <strong>www.bright2shine.com</strong>. We are committed to protecting and respecting your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and Data Protection Act 2018.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">2. Information We Collect</h4>
              <p>
                When you request a quote via our website quote form, contact us by email, phone, or message us on WhatsApp, we collect:
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Full name and contact details (email address, telephone/WhatsApp number).</li>
                <li>Premises postcode, service category, property size, and frequency requirements.</li>
                <li>Company name (for commercial tenders and contract accounts).</li>
                <li>Any property photographs or cleaning notes you choose to provide.</li>
              </ul>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">3. How and Why Your Data is Used</h4>
              <p>
                We use your details solely to:
              </p>
              <ul class="list-disc pl-5 space-y-1">
                <li>Prepare and provide your cleaning quote and schedule site surveys.</li>
                <li>Deliver our commercial or domestic cleaning services and coordinate attendance.</li>
                <li>Send written invoices and respond to your customer service queries.</li>
              </ul>
              <p>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">4. Data Retention & Your Rights</h4>
              <p>
                We retain enquiry records for as long as necessary to complete your quote and provide cleaning services, or to meet statutory accounting obligations. Under UK data protection laws, you have the right to request access to your data, rectify inaccuracies, request erasure, or object to processing by emailing 
                <a href="mailto:info@bright2shine.com" class="text-[#B5441A] font-semibold underline">info&#64;bright2shine.com</a>.
              </p>
            </div>
          </ng-container>

          <!-- TERMS & CONDITIONS -->
          <ng-container *ngIf="modalService.activeModal() === 'terms'">
            <div class="space-y-4">
              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">1. Bookings & Minimum Hours</h4>
              <p>
                Bookings are confirmed in writing. A minimum booking duration of <strong>3 hours per visit</strong> applies to all regular and one-off domestic/commercial visits (and <strong>4 hours minimum</strong> for deep cleans and after-builders cleans).
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">2. Pricing & Equipment</h4>
              <p>
                All cleaning products and commercial equipment are included in every quoted price. No VAT is charged—prices shown are final. "From" prices will always be confirmed in writing before commencement. Any surcharges for early morning (before 7am), evening (after 7pm), or weekend sessions (+£3/hr) will be stated upfront.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">3. Cancellations & Rescheduling</h4>
              <p>
                Cancellations made with <strong>less than 24 hours' notice</strong> are subject to <strong>50% of the booking fee</strong> to compensate scheduled team members.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">4. 48-Hour Re-Clean Guarantee</h4>
              <p>
                If any area covered under your agreed checklist is missed or unsatisfactory, notify us within <strong>48 hours</strong> and our team will re-clean the affected areas completely free of charge.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">5. Payment Terms</h4>
              <p>
                Domestic clients pay upon booking confirmation or completion. Commercial contract clients are invoiced on monthly credit terms upon agreement.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">6. Statutory Right to Cancel (Home Customers)</h4>
              <p>
                In accordance with the Consumer Contracts Regulations 2013, domestic customers booking off-premises or online have a 14-day cancellation right, which may be waived if the service is requested to start during the cancellation period.
              </p>
            </div>
          </ng-container>

          <!-- COOKIE POLICY -->
          <ng-container *ngIf="modalService.activeModal() === 'cookie'">
            <div class="space-y-4">
              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">1. Cookies on Bright2Shine</h4>
              <p>
                Cookies are small text files placed on your device to ensure our website operates smoothly, securely, and efficiently.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">2. Essential Cookies</h4>
              <p>
                These cookies are strictly necessary for core site functions, form submissions, security verification, and remembering your cookie consent preferences.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">3. Analytics & Performance</h4>
              <p>
                With your consent, we may use anonymised analytics cookies (such as Google Analytics 4) to understand how visitors navigate our pages and improve our website performance. These cookies are loaded only after explicit cookie consent.
              </p>

              <h4 class="font-heading font-bold text-base text-[#1B2B3A]">4. Managing Cookies</h4>
              <p>
                You can manage or disable cookies via your browser settings at any time. For questions regarding our cookie practices, contact us at 
                <a href="mailto:info@bright2shine.com" class="text-[#B5441A] font-semibold underline">info&#64;bright2shine.com</a>.
              </p>
            </div>
          </ng-container>

        </div>

        <!-- Footer -->
        <div class="px-6 py-4 bg-[#FAFAF8] border-t border-[#F3EFEA] flex justify-end">
          <button 
            type="button" 
            (click)="modalService.close()"
            class="px-6 py-2.5 rounded-xl bg-[#1B2B3A] text-white font-bold text-xs hover:bg-[#B5441A] transition">
            Close
          </button>
        </div>

      </div>
    </div>
  `
})
export class PolicyModalComponent {
  modalService = inject(ModalService);
  company = COMPANY_DETAILS;

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.modalService.activeModal()) {
      this.modalService.close();
    }
  }

  getTitle(): string {
    switch (this.modalService.activeModal()) {
      case 'privacy':
        return 'Privacy Policy';
      case 'terms':
        return 'Terms & Conditions';
      case 'cookie':
        return 'Cookie Policy';
      default:
        return '';
    }
  }
}
