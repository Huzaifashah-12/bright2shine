import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reviews',
  standalone: true,
  template: `<div></div>`
})
export class ReviewsComponent implements OnInit {
  private router = inject(Router);

  ngOnInit(): void {
    // Section 02.1: Reviews page (/reviews) removed; redirect /reviews to Home (301)
    this.router.navigate(['/']);
  }
}
