import { Component, HostListener, signal } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { CookieConsentComponent } from './components/cookie-consent.component';

@Component({selector:'app-root', imports:[RouterOutlet, HeaderComponent, FooterComponent, CookieConsentComponent], template:`
<div class="app-root">
  <a class="skip-link" href="#main-content">Skip to content</a>
  <app-header/>
  <main id="main-content"><router-outlet/></main>
  <app-footer/>
  <app-cookie-consent/>
</div>`})
export class AppComponent {
 constructor(router: Router) {
   router.events.pipe(filter(e=>e instanceof NavigationEnd)).subscribe(()=> {
     if(typeof window !== 'undefined') window.scrollTo({top:0,behavior:'auto'});
   });
 }
}
