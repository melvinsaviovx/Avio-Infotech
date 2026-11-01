import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';
import { SITE } from '../core/site-data';

@Component({
  imports: [RouterLink, RevealDirective],
  template: `
  <section class="page-hero ventures-hero"><div class="page-hero-visual ventures-abstract" aria-hidden="true"></div><div class="container page-hero-inner"><div class="page-breadcrumb">AVIO <span>/</span> VENTURES</div><span class="eyebrow light page-eyebrow">IDEAS WORTH BUILDING</span><h1 class="page-giant">OUR<br><em>VENTURES.</em></h1><div class="page-hero-description"><p>Discover the products being developed at Avio Infotech.</p><span>DISCOVER BELOW </span></div></div></section>
  <section class="section surface-white"><div class="container"><div class="section-meta"><span class="eyebrow">VENTURE / 001</span><span>PRODUCT IN DEVELOPMENT</span></div><div class="venture-intro" appReveal><div><span class="venture-label">INTRODUCING A NEW IDEA</span><h2>ARCHO<span>VEXA</span><b>.</b></h2></div><p>A developing business software platform conceived for architecture, interior design, engineering and construction companies, with the aim of bringing connected operations into a clearer view.</p></div><div class="venture-full-art" appReveal><div class="venture-full-grid"></div><div class="venture-full-center"><span>ARCHOVEXA</span><div class="venture-boxes"><i></i><i></i><i></i><i></i><i></i></div><small>PLAN. DESIGN. MANAGE. DELIVER.</small></div><div class="venture-art-footer"><span>BUILDING WHAT'S NEXT IN AEC OPERATIONS</span><span>CONCEPTUAL ARTWORK — NOT A PRODUCT SCREENSHOT</span></div></div><div class="venture-info-grid" appReveal><div><span class="eyebrow">THE IDEA</span><h3>Complex industries deserve connected thinking.</h3></div><div><p>Archovexa explores the opportunity to connect projects, operations, people, purchasing and business workflows in one cohesive platform for the AEC sector.</p><p class="muted-disclaimer">Archovexa is in active development. Descriptions communicate its intended direction and do not represent a claim that every feature is available.</p><a [href]="archovexaUrl" target="_blank" rel="noopener noreferrer" class="text-link dark-link">Explore the Archovexa website <span></span></a></div></div></div></section>
  <section class="closing-statement"><div class="container closing-grid" appReveal><span class="eyebrow light">YOUR IDEA IS NEXT</span><h2>Let's create something<br><em>worth building.</em></h2><a routerLink="/contact" class="pill-button light-button">Talk to Avio <span></span></a></div></section>
  `
})
export class VenturesPage { readonly archovexaUrl = SITE.archovexaUrl; }
