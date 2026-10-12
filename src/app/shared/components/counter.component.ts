import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <span class="font-heading font-black tracking-tight text-white">{{ currentDisplay }}{{ suffix }}</span>
  `
})
export class CounterComponent implements OnInit {
  @Input() target = 100;
  @Input() suffix = '';
  @Input() duration = 1800; // ms

  currentDisplay = 0;
  private hasAnimated = false;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !this.hasAnimated) {
          this.hasAnimated = true;
          this.startCount();
          observer.disconnect();
        }
      }, { threshold: 0.3 });
      observer.observe(this.el.nativeElement);
    } else {
      this.currentDisplay = this.target;
    }
  }

  private startCount(): void {
    const startTime = performance.now();
    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      this.currentDisplay = Math.floor(easeProgress * this.target);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.currentDisplay = this.target;
      }
    };
    requestAnimationFrame(update);
  }
}
