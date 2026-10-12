import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header.component';
import { FooterComponent } from './core/layout/footer.component';
import { FloatingContactComponent } from './shared/components/floating-contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    FloatingContactComponent
  ],
  template: `
    <div class="min-h-screen flex flex-col bg-[#FAF8F5] text-navy font-sans antialiased">
      <app-header></app-header>
      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
      <app-floating-contact></app-floating-contact>
    </div>
  `
})
export class App {}
