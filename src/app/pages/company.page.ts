import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PRINCIPLES } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
@Component({imports:[RouterLink,RevealDirective],template:`
<section class="inner-hero company-hero"><div class="shell inner-hero-content"><span class="small-label">OUR STORY</span><h1>Thoughtful by<br><em>nature.</em></h1><p>We care about how technology works—and how people experience it.</p></div><div class="inner-hero-orb" aria-hidden="true"></div></section>
<section class="story-section"><div class="shell story-grid" appReveal><span class="small-label">GET TO KNOW US</span><div><h2>Building with curiosity.<br><em>Leading with care.</em></h2><p>Avio Infotech is a technology company based in Tamil Nadu, India. We work across software development, digital experiences, cloud technology and intelligent automation, with a growing focus on original software products.</p><p>Our starting point is always the same: understand the need, choose the right approach, and create something genuinely useful.</p></div></div></section>
<section class="belief-section"><div class="shell"><div class="belief-title" appReveal><span class="small-label">OUR BELIEFS</span><h2>The thinking behind<br><em>every decision.</em></h2></div><div class="belief-grid">@for (p of principles;track p.title){<article class="belief-card" appReveal><div class="belief-mark" aria-hidden="true"></div><h3>{{p.title}}</h3><p>{{p.description}}</p></article>}</div></div></section>
<section class="story-outro"><div class="shell story-outro-grid" appReveal><div><span class="small-label">THE PEOPLE BEHIND AVIO</span><h2>Meet the minds<br>behind the work.</h2></div><div><p>We're building a company where technical thinking and long-term relationships belong together.</p><a routerLink="/leadership" class="button button-dark">Meet our founders</a></div></div></section>
`})
export class CompanyPage{readonly principles=PRINCIPLES;}
