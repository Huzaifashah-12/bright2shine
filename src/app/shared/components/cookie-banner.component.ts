import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      *ngIf="showBanner()" 
      class="fixed bottom-16 sm:bottom-6 left-4 right-4 sm:left-6 sm:max-w-md z-50 bg-[#1B2B3A] text-white p-5 rounded-2xl shadow-2xl border border-white/15 animate-in slide-in-from-bottom-5 duration-300">
      
      <div class="flex items-start gap-3">
        <span class="text-xl">🍪</span>
        <div class="space-y-2 flex-1">
          <h4 class="font-heading font-bold text-sm text-white">We value your privacy</h4>
          <p class="text-xs text-white/80 leading-relaxed">
            We use essential cookies to make our website work. With your permission, we also use analytical cookies to improve our services.
          </p>
          <div class="pt-2 flex items-center gap-2">
            <button 
              type="button" 
              (click)="acceptCookies()"
              class="px-4 py-2 rounded-xl bg-[#B5441A] hover:bg-[#9a3814] text-white text-xs font-bold transition">
              Accept All
            </button>
            <button 
              type="button" 
              (click)="rejectCookies()"
              class="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition">
              Essential Only
            </button>
          </div>
        </div>
      </div>

    </div>
  `
})
export class CookieBannerComponent {
  showBanner = signal<boolean>(false);

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const consent = localStorage.getItem('b2s_cookie_consent');
      if (!consent) {
        this.showBanner.set(true);
      }
    }
  }

  acceptCookies(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('b2s_cookie_consent', 'accepted');
    }
    this.showBanner.set(false);
  }

  rejectCookies(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('b2s_cookie_consent', 'rejected');
    }
    this.showBanner.set(false);
  }
}
