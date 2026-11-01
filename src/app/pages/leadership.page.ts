import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LEADERS } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  imports: [RouterLink, RevealDirective],
  template: `
  <section class="page-hero leadership-hero"><div class="container page-hero-inner"><div class="page-breadcrumb">AVIO <span>/</span> LEADERSHIP</div><span class="eyebrow light page-eyebrow">THE PEOPLE BEHIND THE PERSPECTIVE</span><h1 class="page-giant">OUR<br><em>LEADERSHIP.</em></h1><div class="page-hero-description"><p>Meet the founders shaping the company's direction, culture, and technical ambition.</p><span>EXPLORE BELOW </span></div></div></section>
  <section class="section surface-white"><div class="container"><div class="section-meta"><span class="eyebrow">01 / THE FOUNDERS</span><span>THE PEOPLE GUIDING AVIO</span></div><div class="leadership-grid">
    @for (leader of leaders; track leader.name; let i = $index) {
      <article class="leader-card" appReveal><div class="leader-image"><img [src]="leader.image" [alt]="leader.imageDescription" loading="lazy" (error)="imageError($event)"/><div class="leader-fallback" aria-hidden="true"><span>AV</span></div><span class="leader-photo-no">0{{i+1}} / 02</span></div><div class="leader-info"><span class="eyebrow">{{leader.role}}</span><h2>{{leader.name}}</h2><p>{{leader.bio}}</p></div></article>
    }
  </div><div class="leadership-outro" appReveal><span>THE NEXT CHAPTER IS BEING WRITTEN.</span><p>Curiosity, conviction and a commitment to good work are at the heart of what we are building.</p><a routerLink="/company" class="text-link dark-link">More about Avio <span></span></a></div></div></section>
  `
})
export class LeadershipPage {
  readonly leaders = LEADERS;
  imageError(event: Event): void { const img = event.target as HTMLImageElement; img.style.opacity = '0'; }
}
