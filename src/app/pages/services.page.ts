import { Component, AfterViewInit } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SERVICES } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  imports: [RouterLink, RevealDirective],
  template: `
  <section class="page-hero services-hero" aria-labelledby="services-h"><div class="page-hero-visual page-orb-small" aria-hidden="true"></div><div class="container page-hero-inner"><div class="page-breadcrumb">AVIO <span>/</span> EXPERTISE</div><span class="eyebrow light page-eyebrow">WHAT WE DO / 01—05</span><h1 id="services-h" class="page-giant">OUR<br><em>EXPERTISE.</em></h1><div class="page-hero-description"><p>Software engineering, web and mobile development, cloud solutions, applied AI and technical advisory.</p><span>SCROLL TO EXPLORE </span></div></div></section>
  <section class="section surface-white service-introduction"><div class="container two-column-intro" appReveal><span class="eyebrow">THE WAY WE WORK</span><h2 class="sub-display">Services for<br><em>modern teams.</em></h2><p>We combine design sensibility with rigorous technical thinking. From custom platforms to smarter workflows, every engagement starts with the outcome that matters.</p></div></section>
  <section class="services-detail-section surface-light"><div class="container">
    @for (service of services; track service.id) {
      <article class="detail-service" [id]="service.id" appReveal>
        <div class="detail-service-index"><span>{{service.no}} / 05</span><div class="detail-symbol" aria-hidden="true"><span></span><span></span><span></span></div></div>
        <div class="detail-service-content"><span class="eyebrow">{{service.short}}</span><h2>{{service.name}}<span class="detail-dot">.</span></h2><p class="detail-lead">{{service.summary}}</p><p class="detail-body">{{service.description}}</p><div class="detail-list"><span>AREAS OF FOCUS</span><ul>@for (item of service.deliverables; track item) {<li>{{item}} <i></i></li>}</ul></div></div>
      </article>
    }
  </div></section>
  <section class="closing-statement"><div class="container closing-grid" appReveal><span class="eyebrow light">READY WHEN YOU ARE</span><h2>Have a complex challenge?<br><em>We like those.</em></h2><a routerLink="/contact" class="pill-button light-button">Start a conversation <span></span></a></div></section>
  `
})
export class ServicesPage implements AfterViewInit {
  readonly services = SERVICES;
  constructor(private readonly route: ActivatedRoute) {}
  ngAfterViewInit(): void {
    const fragment = this.route.snapshot.fragment;
    if (fragment && this.services.some(s => s.id === fragment)) {
      requestAnimationFrame(() => setTimeout(() => document.getElementById(fragment)?.scrollIntoView({behavior: 'smooth', block: 'start'}), 120));
    }
  }
}
