import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
import { TechFieldComponent } from '../components/tech-field.component';

@Component({
  imports: [RouterLink, RevealDirective, TechFieldComponent],
  template: `
    <section class="maison-hero" aria-labelledby="maison-title">
      <app-tech-field class="maison-live" aria-hidden="true" />
      <div class="maison-atmosphere" aria-hidden="true"></div>
      <div class="maison-frame container">
        <div class="maison-hero-top"><span>INDEPENDENT TECHNOLOGY COMPANY</span><span>INDIA · GLOBAL AMBITION</span></div>
        <div class="maison-center">
          <div class="maison-halo" aria-hidden="true"></div>
          <img class="maison-symbol" src="/brand/avio-mark.webp" alt="Avio Infotech emblem" width="620" height="520" fetchpriority="high" />
          <h1 id="maison-title">AVIO <span>INFOTECH</span></h1>
          <p>Digital experiences. Thoughtful engineering.<br>Technology made to matter.</p>
        </div>
        <div class="maison-hero-bottom"><a routerLink="/services" class="maison-pill">Discover our expertise</a><a routerLink="/contact" class="maison-outline">Start a conversation</a><span class="maison-scroll">SCROLL TO EXPLORE</span></div>
      </div>
    </section>
    <section class="maison-intro" aria-labelledby="maison-intro-heading">
      <div class="container maison-intro-grid" appReveal>
        <span class="maison-label">THE COMPANY</span>
        <div><h2 id="maison-intro-heading">The detail makes<br><em>the difference.</em></h2><p>Avio Infotech brings technical depth and considered design to custom software, digital platforms and intelligent systems. Every engagement begins with understanding what your business actually needs.</p><a class="maison-textlink" routerLink="/company">Get to know us</a></div>
      </div>
    </section>
    <section class="maison-services" aria-labelledby="maison-service-heading">
      <div class="container">
        <div class="maison-section-head" appReveal><span class="maison-label">WHAT WE DO</span><h2 id="maison-service-heading">Our expertise<span class="maison-blue-dot">.</span></h2><p>Specialist capabilities, brought together around your goals.</p></div>
        <div class="maison-service-stack">
          @for (service of services; track service.id) {
            <a class="maison-service" routerLink="/services" [fragment]="service.id" appReveal><div class="maison-service-name"><h3>{{service.name}}</h3><p>{{service.summary}}</p></div><span class="maison-service-discover">View expertise</span></a>
          }
        </div>
      </div>
    </section>
    <section class="maison-vision" aria-labelledby="maison-vision-heading">
      <div class="maison-vision-art" aria-hidden="true"><div class="maison-circles"></div><div class="maison-orbitline"></div></div>
      <div class="container maison-vision-inner" appReveal><span class="maison-label">THE WAY WE THINK</span><h2 id="maison-vision-heading">Built with intention.<br><em>Made for what’s next.</em></h2><p>From the first conversation to the last detail, we approach digital engineering as a responsibility—not a template.</p><a routerLink="/company" class="maison-pill maison-pill-white">Our approach</a></div>
    </section>
    <section class="maison-product" aria-labelledby="maison-product-heading">
      <div class="container maison-product-grid" appReveal>
        <div class="maison-product-story"><span class="maison-label">OUR PRODUCT VENTURE</span><h2 id="maison-product-heading">Archovexa<span class="maison-blue-dot">.</span></h2><p>A business platform in development for architecture, interior design, engineering and construction teams.</p><a class="maison-textlink" routerLink="/ventures">Explore the venture</a></div>
        <div class="maison-product-sculpture" aria-label="Abstract architectural composition inspired by Archovexa"><div class="maison-tower tower-one"></div><div class="maison-tower tower-two"></div><div class="maison-tower tower-three"></div><span>ARCHOVEXA / IN DEVELOPMENT</span></div>
      </div>
    </section>
    <section class="maison-final" aria-labelledby="maison-final-heading"><div class="container" appReveal><span class="maison-label">A CONVERSATION STARTS HERE</span><h2 id="maison-final-heading">Something in mind?</h2><p>Tell us what you’re building. We’d love to hear about it.</p><a routerLink="/contact" class="maison-pill">Discuss a project</a></div></section>
  `
})
export class HomePage { readonly services = SERVICES; }
