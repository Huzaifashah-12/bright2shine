import { Injectable, signal } from '@angular/core';

export type PolicyModalType = 'privacy' | 'terms' | 'cookie' | null;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  activeModal = signal<PolicyModalType>(null);

  open(type: PolicyModalType): void {
    this.activeModal.set(type);
    if (typeof document !== 'undefined') {
      document.body.classList.add('overflow-hidden');
    }
  }

  close(): void {
    this.activeModal.set(null);
    if (typeof document !== 'undefined') {
      document.body.classList.remove('overflow-hidden');
    }
  }
}
