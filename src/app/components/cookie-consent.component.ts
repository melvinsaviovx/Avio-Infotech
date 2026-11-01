import { Component, HostListener, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
type Consent={mode:'essential'|'preferences';motion:boolean;updated:string};
const KEY='avio_cookie_preferences_v1';
@Component({selector:'app-cookie-consent',imports:[FormsModule,RouterLink],template:`
@if (open()) {
 <section class="consent-panel" role="region" aria-labelledby="consent-title" aria-describedby="consent-description">
   <div class="consent-heading"><span class="small-label">YOUR CHOICE</span>@if(saved()){<button type="button" class="consent-close" (click)="open.set(false)" aria-label="Close cookie preferences">Close</button>}</div>
   <h2 id="consent-title">A thoughtful experience, on your terms.</h2>
   <p id="consent-description">We use essential browser storage to remember your choice. We do not currently use advertising or analytics cookies. You can choose whether to keep our enhanced visual motion on.</p>
   @if (details()) {<div class="consent-detail"><div><strong>Essential preferences</strong><span>Always active to remember your choice.</span></div><span class="essential-tag">Required</span></div><label class="consent-detail consent-toggle"><span><strong>Enhanced motion</strong><small>Animated visual details. Your device's reduced-motion setting always takes priority.</small></span><input type="checkbox" [(ngModel)]="motion"/></label>}
   <div class="consent-actions">
    <button class="button button-dark" type="button" (click)="save('essential')">Essential only</button>
    @if (details()) {<button class="button button-blue" type="button" (click)="save('preferences')">Save preferences</button>}
    @else {<button class="button button-blue" type="button" (click)="details.set(true)">Personalise</button>}
   </div>
   <p class="consent-foot">Read our <a routerLink="/privacy" (click)="open.set(false)">privacy policy</a>. Change your selection using Cookie preferences in the footer.</p>
 </section>
}`})
export class CookieConsentComponent {
 readonly open=signal(false);readonly details=signal(false);readonly saved=signal(false);motion=true;
 constructor(){
   try{ const s=localStorage.getItem(KEY); if(s){const v=JSON.parse(s) as Consent;if(v.mode==='essential'||v.mode==='preferences'){this.saved.set(true);this.motion=v.motion;this.applyMotion(v.motion);return;}}}catch{}
   this.open.set(true);
 }
 @HostListener('window:avio:open-cookie-settings') showSettings(){this.open.set(true);this.details.set(true);}
 @HostListener('document:keydown.escape') esc(){this.closeIfSaved();}
 closeIfSaved(){if(this.saved())this.open.set(false);}
 save(mode:'essential'|'preferences'){
   const enable=mode==='preferences' && this.motion;
   const data:Consent={mode,motion:enable,updated:new Date().toISOString()};
   try{localStorage.setItem(KEY,JSON.stringify(data));}catch{}
   this.applyMotion(enable);this.saved.set(true);this.open.set(false);
 }
 applyMotion(value:boolean){document.documentElement.classList.toggle('limited-motion',!value);window.dispatchEvent(new Event('avio:motion-changed'));}
}
