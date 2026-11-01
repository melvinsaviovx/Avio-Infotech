import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LEADERS } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
@Component({imports:[RouterLink,RevealDirective],template:`
<section class="inner-hero people-hero"><div class="shell inner-hero-content"><span class="small-label">OUR PEOPLE</span><h1>Built by people<br><em>who care.</em></h1><p>Meet the founders shaping the vision and technical direction at Avio Infotech.</p></div><div class="inner-hero-orb" aria-hidden="true"></div></section>
<section class="leadership-section"><div class="shell"><div class="leadership-intro" appReveal><span class="small-label">MEET THE FOUNDERS</span><h2>Leadership with<br><em>intention.</em></h2></div><div class="founders-grid">@for (leader of leaders;track leader.name){<article class="founder-card" appReveal><div class="founder-portrait"><img [src]="leader.image" [alt]="leader.imageDescription" [attr.data-fallback]="leader.fallbackImage" loading="lazy" (error)="imageError($event)"/><div class="portrait-placeholder" aria-hidden="true">AVIO</div></div><div class="founder-description"><span>{{leader.role}}</span><h3>{{leader.name}}</h3><p>{{leader.bio}}</p></div></article>}</div><div class="leadership-close" appReveal><p>We believe the best work comes from staying curious, listening closely and building for the long term.</p><a routerLink="/company" class="button button-dark">Discover our story</a></div></div></section>
`})
export class LeadershipPage {
  readonly leaders = LEADERS;
  imageError(event: Event) {
    const image = event.target as HTMLImageElement;
    const fallback = image.getAttribute('data-fallback');
    // The original site hosts the portraits; use a local branded fallback if unavailable.
    if (fallback && image.dataset['fallbackAttempted'] !== 'true') {
      image.dataset['fallbackAttempted'] = 'true';
      image.src = fallback;
    } else {
      image.style.display = 'none';
    }
  }
}
