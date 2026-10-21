import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header.component';
import { FooterComponent } from './core/layout/footer.component';
import { FloatingContactComponent } from './shared/components/floating-contact.component';
import { PolicyModalComponent } from './shared/components/policy-modal.component';
import { CookieBannerComponent } from './shared/components/cookie-banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FloatingContactComponent,
    PolicyModalComponent,
    CookieBannerComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1B2B3A] font-sans antialiased selection:bg-[#B5441A] selection:text-white">
      <app-header></app-header>
      <main class="flex-grow pb-14 sm:pb-0">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-floating-contact></app-floating-contact>
      <app-policy-modal></app-policy-modal>
      <app-cookie-banner></app-cookie-banner>
    </div>
  `
})
export class App {}
