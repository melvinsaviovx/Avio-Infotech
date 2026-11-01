import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector:'app-header',
  imports:[RouterLink, RouterLinkActive],
  template: `
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header" [class.is-scrolled]="scrolled()" [class.menu-active]="menuOpen()">
    <a routerLink="/" class="brand" aria-label="Avio Infotech home" (click)="closeMenu()">
      <img class="brand-logo" src="/brand/avio-mark.webp" alt="" width="52" height="52" decoding="async">
      <span class="brand-type"><strong>AVIO</strong><small>INFOTECH</small></span>
    </a>
    <nav class="nav-desktop" aria-label="Primary navigation">
      <a routerLink="/services" routerLinkActive="active">Expertise</a>
      <a routerLink="/company" routerLinkActive="active">Company</a>
      <a routerLink="/ventures" routerLinkActive="active">Ventures</a>
      <a routerLink="/leadership" routerLinkActive="active">Leadership</a>
    </nav>
    <div class="header-right">
      <span class="header-index"><i></i> AVIO / TECHNOLOGY</span>
      <a class="header-cta" routerLink="/contact">Let's talk</a>
      <button type="button" class="menu-toggle" [attr.aria-expanded]="menuOpen()" aria-controls="mobile-nav" [attr.aria-label]="menuOpen() ? 'Close menu' : 'Open menu'" (click)="toggleMenu()">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div id="mobile-nav" class="mobile-menu" [class.open]="menuOpen()" [attr.inert]="!menuOpen() ? '' : null">
    <div class="mobile-menu-inner">
      <span class="eyebrow">Navigate</span>
      <nav aria-label="Mobile navigation">
        <a routerLink="/" (click)="closeMenu()">Home <span></span></a>
        <a routerLink="/services" (click)="closeMenu()">Expertise <span></span></a>
        <a routerLink="/company" (click)="closeMenu()">Company <span></span></a>
        <a routerLink="/ventures" (click)="closeMenu()">Ventures <span></span></a>
        <a routerLink="/leadership" (click)="closeMenu()">Leadership <span></span></a>
        <a routerLink="/contact" (click)="closeMenu()">Contact <span></span></a>
      </nav>
      <div class="mobile-menu-bottom"><span>AVIO INFOTECH © 2026</span><span>INDIA</span></div>
    </div>
  </div>`
})
export class HeaderComponent {
  private readonly router = inject(Router);
  readonly menuOpen = signal(false);
  readonly scrolled = signal(false);
  constructor(){
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe(() => this.closeMenu());
  }
  @HostListener('window:scroll') onScroll(): void { this.scrolled.set(window.scrollY > 25); }
  @HostListener('document:keydown.escape') onEsc(): void { this.closeMenu(); }
  toggleMenu(): void {
    this.menuOpen.update(v => !v);
    document.body.classList.toggle('menu-lock', this.menuOpen());
  }
  closeMenu(): void { this.menuOpen.set(false); document.body.classList.remove('menu-lock'); }
}
