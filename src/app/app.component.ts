import { Component, HostListener, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector:'app-root',
  imports:[RouterOutlet, HeaderComponent, FooterComponent],
  template: `
  <div class="site-shell">
    <div class="scroll-progress" [style.transform]="'scaleX(' + scrollProgress() + ')'" aria-hidden="true"></div>
    <app-header />
    <main id="main-content"><router-outlet /></main>
    <app-footer />
  </div>`
})
export class AppComponent {
  scrollProgress = signal(0);
  @HostListener('window:scroll') onScroll(): void {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    this.scrollProgress.set(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
  }
}
