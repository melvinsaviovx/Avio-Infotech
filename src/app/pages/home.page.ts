import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SERVICES } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
import { TechFieldComponent } from '../components/tech-field.component';
@Component({imports:[RouterLink,RevealDirective,TechFieldComponent],template:`
<section class="hero" aria-labelledby="hero-title">
  <app-tech-field class="hero-network" aria-hidden="true"/>
  <div class="hero-haze" aria-hidden="true"></div>
  <div class="shell hero-grid">
    <div class="hero-copy">
      <span class="small-label hero-kicker"><span class="kicker-line"></span> Software · Digital experience · Cloud</span>
      <h1 id="hero-title">Technology,<br>made to feel<br><em>simple.</em></h1>
      <p>We create purposeful software and digital experiences that make complex work feel effortless.</p>
      <div class="hero-actions"><a routerLink="/services" class="button button-ivory">Explore our expertise</a><a routerLink="/contact" class="text-action">Talk about your idea</a></div>
    </div>
    <div class="hero-stage" aria-label="Avio Infotech metallic brand emblem">
      <div class="stage-ellipse ellipse-one"></div><div class="stage-ellipse ellipse-two"></div>
      <div class="stage-beam"></div><div class="stage-light"></div>
      <img src="/brand/avio-mark.webp" width="750" height="650" alt="Avio Infotech emblem" class="stage-emblem" fetchpriority="high"/>
      <span class="stage-caption">AVIO INFOTECH</span>
    </div>
  </div>
  <div class="hero-base shell"><span>Software built with clarity and care.</span><span class="scroll-cue">Discover the difference</span></div>
</section>
<section class="welcome-section" aria-labelledby="welcome-title">
 <div class="shell welcome-layout" appReveal><div class="section-aside"><span class="small-label">WELCOME TO AVIO</span><div class="aside-stroke"></div></div><div class="welcome-content"><h2 id="welcome-title">Good technology should feel <em>natural.</em></h2><div class="welcome-bottom"><p>We believe strong engineering and considered design belong together. From a simple business need to an ambitious platform, we build with the people who'll use it in mind.</p><a routerLink="/company" class="text-action text-action-dark">Get to know Avio</a></div></div></div>
</section>
<section class="expertise-home" aria-labelledby="expertise-title"><div class="shell"><div class="home-section-top" appReveal><div><span class="small-label">OUR EXPERTISE</span><h2 id="expertise-title">What we can<br><em>build together.</em></h2></div><p>Thoughtful capabilities for the moments that matter—from your first application to the systems supporting what comes next.</p></div>
 <div class="service-list">@for (s of services;track s.id){<a routerLink="/services" [fragment]="s.id" class="service-line" appReveal><div><h3>{{s.name}}</h3><p>{{s.summary}}</p></div><span class="service-view">Explore service</span></a>}</div>
 <div class="expertise-outro"><a class="button button-dark" routerLink="/services">View all services</a></div></div></section>
<section class="craft-section" aria-labelledby="craft-title"><div class="shell craft-layout"><div class="craft-visual" aria-hidden="true"><div class="craft-ambient"></div><div class="craft-plane plane-a"></div><div class="craft-plane plane-b"></div><div class="craft-plane plane-c"></div><div class="craft-trace"></div></div><div class="craft-copy" appReveal><span class="small-label">OUR APPROACH</span><h2 id="craft-title">Precise in the detail.<br><em>Warm in the experience.</em></h2><p>We listen first, engineer deliberately, and refine until the whole experience feels right. Everything is designed to serve a purpose.</p><a routerLink="/company" class="button button-outline-light">Discover our approach</a></div></div></section>
<section class="product-home" aria-labelledby="product-title"><div class="shell product-layout"><div class="product-story" appReveal><span class="small-label">FROM OUR PRODUCT STUDIO</span><h2 id="product-title">Meet<br><em>Archovexa.</em></h2><p>A business platform in development, thoughtfully shaped for architecture, interior design, engineering and construction teams.</p><span class="product-status">Currently in development</span><a routerLink="/ventures" class="button button-dark">Discover Archovexa</a></div><div class="product-art" aria-label="Abstract architecture-inspired illustration"><div class="product-shape shape-left"></div><div class="product-shape shape-mid"></div><div class="product-shape shape-right"></div><div class="product-shine"></div><span>ARCHOVEXA</span></div></div></section>
<section class="people-home"><div class="shell people-home-grid" appReveal><div><span class="small-label">THE PEOPLE</span><h2>Real people.<br><em>Thoughtful work.</em></h2></div><div><p>Behind the technology is a belief in listening closely, staying curious, and building lasting relationships.</p><a routerLink="/leadership" class="text-action text-action-dark">Meet our founders</a></div></div></section>
`})
export class HomePage{readonly services=SERVICES;}
