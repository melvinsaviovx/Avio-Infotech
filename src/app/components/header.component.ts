import { Component, HostListener, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
@Component({selector:'app-header',imports:[RouterLink,RouterLinkActive],template:`
<header class="masthead" [class.masthead-scrolled]="scrolled()">
  <div class="shell masthead-inner">
    <a routerLink="/" class="wordmark" aria-label="Avio Infotech — Home" (click)="closeMenu()">
      <img class="wordmark-logo" src="/brand/avio-nav-mark.webp" alt="" width="56" height="56" decoding="async" aria-hidden="true" />
      <span class="wordmark-title">AVIO <small>INFOTECH</small></span>
    </a>
    <nav class="desktop-nav" aria-label="Main navigation">
      <a routerLink="/services" routerLinkActive="selected">What we do</a>
      <a routerLink="/company" routerLinkActive="selected">Our story</a>
      <a routerLink="/ventures" routerLinkActive="selected">Our product</a>
      <a routerLink="/leadership" routerLinkActive="selected">People</a>
    </nav>
    <a class="nav-contact" routerLink="/contact">Let's connect</a>
    <button class="hamburger" type="button" (click)="toggleMenu()" [attr.aria-label]="menuOpen() ? 'Close navigation' : 'Open navigation'" [attr.aria-expanded]="menuOpen()" aria-controls="mobile-navigation"><span></span><span></span></button>
  </div>
</header>
<div class="mobile-shade" [class.shade-visible]="menuOpen()" (click)="closeMenu()" aria-hidden="true"></div>
<nav id="mobile-navigation" class="mobile-navigation" [class.is-visible]="menuOpen()" [attr.inert]="!menuOpen()? '' : null" aria-label="Mobile navigation">
  <span class="small-label">Explore Avio</span>
  <a routerLink="/" (click)="closeMenu()">Home</a>
  <a routerLink="/services" (click)="closeMenu()">What we do</a>
  <a routerLink="/company" (click)="closeMenu()">Our story</a>
  <a routerLink="/ventures" (click)="closeMenu()">Our product</a>
  <a routerLink="/leadership" (click)="closeMenu()">People</a>
  <a routerLink="/contact" (click)="closeMenu()">Let's connect</a>
  <span class="mobile-nav-note">Considered digital engineering, from India.</span>
</nav>`})
export class HeaderComponent {
 private router=inject(Router);
 readonly menuOpen=signal(false);
 readonly scrolled=signal(false);
 constructor(){this.router.events.pipe(filter(e=>e instanceof NavigationEnd)).subscribe(()=>this.closeMenu());}
 @HostListener('window:scroll') onScroll(){this.scrolled.set(window.scrollY>16);}
 @HostListener('document:keydown.escape') onEscape(){this.closeMenu();}
 toggleMenu(){this.menuOpen.update(v=>!v);document.body.classList.toggle('menu-open',this.menuOpen());}
 closeMenu(){this.menuOpen.set(false);document.body.classList.remove('menu-open');}
}
