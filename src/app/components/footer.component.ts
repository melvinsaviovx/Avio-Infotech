import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';
@Component({selector:'app-footer',imports:[RouterLink],template:`
<footer class="footer" id="footer">
 <div class="shell footer-invitation">
   <div><span class="small-label muted-light">THE NEXT CONVERSATION</span><h2>Have something<br><em>in mind?</em></h2><p>Tell us what you're imagining. We'll start by listening.</p></div>
   <a routerLink="/contact" class="button button-ivory">Discuss a project</a>
 </div>
 <div class="shell footer-grid">
   <div class="footer-brand"><a routerLink="/" class="footer-name" aria-label="Avio Infotech — Home"><img class="footer-logo" src="/brand/avio-nav-mark.webp" alt="" width="66" height="66" loading="lazy" decoding="async" aria-hidden="true" /><span class="footer-wordmark">AVIO <span>INFOTECH</span></span></a><p>Thoughtful software engineering and digital products, made for people and business.</p><span>Kanniyakumari, Tamil Nadu, India</span></div>
   <div class="footer-links"><strong>Explore</strong><a routerLink="/services">What we do</a><a routerLink="/company">Our story</a><a routerLink="/ventures">Archovexa</a><a routerLink="/leadership">Our people</a></div>
   <div class="footer-links"><strong>Get in touch</strong><a routerLink="/contact">Project enquiry</a><a [href]="'tel:'+site.tel">{{site.phone}}</a><a routerLink="/contact">Contact details</a></div>
   <div class="footer-links"><strong>Information</strong><a routerLink="/privacy">Privacy policy</a><a routerLink="/terms">Terms of use</a><button type="button" class="plain-link" (click)="openCookies()">Cookie preferences</button></div>
 </div>
 <div class="shell footer-end"><span>© {{year}} Avio Infotech. All rights reserved.</span><span>Designed with care. Built with intention.</span></div>
</footer>`})
export class FooterComponent {readonly site=SITE;readonly year=new Date().getFullYear();openCookies(){window.dispatchEvent(new Event('avio:open-cookie-settings'));}}
