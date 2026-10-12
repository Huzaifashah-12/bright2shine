import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-before-after',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl select-none border-4 border-white/60 bg-navy-light aspect-[16/10] sm:aspect-[16/9]">
      <!-- Background / Clean Image (After) -->
      <div class="absolute inset-0 w-full h-full">
        <!-- SVG Graphic for AFTER (Sparkling clean room) -->
        <div class="w-full h-full bg-gradient-to-tr from-[#142332] via-[#203a54] to-[#345c80] flex flex-col justify-center items-center text-white relative overflow-hidden">
          <!-- Sparkles overlay -->
          <div class="absolute inset-0 opacity-40 bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div class="relative z-10 text-center px-6">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand/30 border border-brand/60 text-sand mb-4 shadow-glow">
              <svg class="w-10 h-10 text-brand-light" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-400/40 mb-3 inline-block">
              Bright2Shine Result
            </span>
            <h4 class="text-2xl sm:text-3xl font-heading font-extrabold text-white mb-2">100% Spotless & Disinfected</h4>
            <p class="text-sm sm:text-base text-sand/80 max-w-md mx-auto">
              Deep-steamed upholstery, gleaming countertops, polished chrome, and hospital-grade sanitisation.
            </p>
          </div>

          <div class="absolute top-4 right-4 bg-emerald-600/90 text-white font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
            AFTER (Bright2Shine)
          </div>
        </div>
      </div>

      <!-- Foreground / Dirty Image (Before) clipped by slider -->
      <div 
        class="absolute inset-0 h-full overflow-hidden transition-[clip-path] duration-75"
        [style.clipPath]="'inset(0 ' + (100 - sliderPos()) + '% 0 0)'">
        <!-- SVG Graphic for BEFORE (Grime, dusty room) -->
        <div class="w-full h-full bg-gradient-to-tr from-[#382d25] via-[#4a392b] to-[#594433] flex flex-col justify-center items-center text-white relative">
          <div class="relative z-10 text-center px-6">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-900/40 border border-amber-600/40 text-amber-200 mb-4">
              <svg class="w-10 h-10 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <span class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-400/40 mb-3 inline-block">
              Before Treatment
            </span>
            <h4 class="text-2xl sm:text-3xl font-heading font-extrabold text-amber-100 mb-2">Grease, Stains & Heavy Dust</h4>
            <p class="text-sm sm:text-base text-amber-200/80 max-w-md mx-auto">
              Accumulated limescale, dull carpets, post-tenancy grease layers, and overlooked allergens.
            </p>
          </div>

          <div class="absolute top-4 left-4 bg-navy-dark/90 text-sand font-bold text-xs uppercase px-3 py-1.5 rounded-full shadow-lg backdrop-blur-md">
            BEFORE
          </div>
        </div>
      </div>

      <!-- Divider line & drag handle -->
      <div 
        class="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-[0_0_15px_rgba(0,0,0,0.6)]"
        [style.left]="sliderPos() + '%'">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand border-2 border-white text-white flex items-center justify-center shadow-float">
          <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
          </svg>
        </div>
      </div>

      <!-- Interactive Invisible Range input -->
      <input 
        type="range" 
        min="0" 
        max="100" 
        [value]="sliderPos()"
        (input)="onSliderInput($event)"
        class="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Comparison slider"
      />
    </div>
  `
})
export class BeforeAfterComponent {
  sliderPos = signal<number>(50);

  onSliderInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.sliderPos.set(Number(value));
  }
}
