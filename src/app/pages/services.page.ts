import { Component, AfterViewInit, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SERVICES } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
@Component({imports:[RouterLink,RevealDirective],template:`
<section class="inner-hero"><div class="shell inner-hero-content"><span class="small-label">WHAT WE DO</span><h1>Expertise with<br><em>purpose.</em></h1><p>Software, experiences and systems that fit the way you work—and feel better to use.</p></div><div class="inner-hero-orb" aria-hidden="true"></div></section>
<section class="inner-intro"><div class="shell intro-split" appReveal><span class="small-label">A CONNECTED APPROACH</span><p>Every business is different. We bring the right combination of engineering, design and technical guidance to solve the challenge at hand.</p></div></section>
<section class="service-details"><div class="shell">@for (s of services;track s.id){<article class="service-detail" [id]="s.id" appReveal><div class="service-detail-title"><span class="small-label">{{s.short}}</span><h2>{{s.name}}</h2></div><div class="service-detail-body"><p>{{s.description}}</p><div class="deliverables">@for (item of s.deliverables;track item){<span>{{item}}</span>}</div><a routerLink="/contact" [queryParams]="{interest:s.name}" class="text-action text-action-dark">Discuss this service</a></div></article>}</div></section>
<section class="mini-cta"><div class="shell mini-cta-inner"><div><span class="small-label">LET'S TALK</span><h2>Have a challenge in mind?</h2></div><a routerLink="/contact" class="button button-ivory">Tell us about it</a></div></section>
`})
export class ServicesPage implements AfterViewInit{readonly services=SERVICES;private route=inject(ActivatedRoute);ngAfterViewInit(){const id=this.route.snapshot.fragment;if(id&&this.services.some(s=>s.id===id)){requestAnimationFrame(()=>setTimeout(()=>document.getElementById(id)?.scrollIntoView({block:'start',behavior:'smooth'}),180));}}}
