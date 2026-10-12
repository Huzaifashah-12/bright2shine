import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTilt3D]',
  standalone: true
})
export class Tilt3DDirective {
  @Input() maxTilt = 15; // maximum tilt angle in degrees
  @Input() perspective = 1000; // perspective distance
  @Input() scale = 1.03; // slight zoom on hover

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'transformStyle', 'preserve-3d');
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.15s ease-out, box-shadow 0.25s ease');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -this.maxTilt;
    const rotateY = ((x - centerX) / centerX) * this.maxTilt;

    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(${this.perspective}px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${this.scale}, ${this.scale}, ${this.scale})`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      'transform',
      `perspective(${this.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
  }
}
