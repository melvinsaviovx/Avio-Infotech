import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SERVICES, SITE } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';
@Component({imports:[RouterLink,ReactiveFormsModule,RevealDirective],template:`
<section class="inner-hero contact-hero"><div class="shell inner-hero-content"><span class="small-label">GET IN TOUCH</span><h1>Every good project<br>starts with <em>hello.</em></h1><p>Tell us what you're planning. We're always open to a thoughtful conversation.</p></div><div class="inner-hero-orb" aria-hidden="true"></div></section>
<section class="contact-section"><div class="shell contact-grid"><div class="contact-aside" appReveal><span class="small-label">LET'S TALK</span><h2>We'd love to<br><em>hear from you.</em></h2><p>Share your idea, ask a question or simply get to know us. We'll help you find the right next step.</p><div class="contact-facts"><div><small>CALL US</small><a [href]="'tel:'+site.tel">{{site.phone}}</a></div><div><small>VISIT / WRITE</small><span>{{site.address}}</span></div></div><a class="button button-dark" [href]="'tel:'+site.tel">Call our team</a></div>
<div class="contact-form-card" appReveal><div class="contact-form-heading"><span class="small-label">PROJECT ENQUIRY</span><h3>Tell us a little about it.</h3><p>Complete the details below to create a copyable enquiry message. Nothing is sent automatically.</p></div>
<form [formGroup]="form" (ngSubmit)="prepareEnquiry()" novalidate>
<div class="field-pair"><div class="field"><label for="visitor-name">Your name <b>*</b></label><input id="visitor-name" formControlName="name" autocomplete="name" maxlength="100" placeholder="Your full name" [attr.aria-invalid]="attempted()&&form.controls.name.invalid"/>@if(attempted()&&form.controls.name.invalid){<small class="field-error">Please enter your name.</small>}</div><div class="field"><label for="visitor-email">Email address <b>*</b></label><input type="email" id="visitor-email" autocomplete="email" formControlName="email" maxlength="200" placeholder="you@company.com" [attr.aria-invalid]="attempted()&&form.controls.email.invalid"/>@if(attempted()&&form.controls.email.invalid){<small class="field-error">Enter a valid email.</small>}</div></div>
<div class="field"><label for="visitor-interest">What can we help with?</label><div class="select-field"><select id="visitor-interest" formControlName="interest"><option value="General enquiry">Select an area of interest</option>@for(s of services;track s.id){<option [value]="s.name">{{s.name}}</option>}<option value="Partnership or collaboration">Partnership or collaboration</option></select><span aria-hidden="true" class="select-chevron"></span></div></div>
<div class="field"><label for="visitor-message">Tell us about your idea <b>*</b></label><textarea id="visitor-message" formControlName="message" rows="5" maxlength="2500" placeholder="What are you thinking of building?" [attr.aria-invalid]="attempted()&&form.controls.message.invalid"></textarea>@if(attempted()&&form.controls.message.invalid){<small class="field-error">Please write at least ten characters.</small>}</div>
<button type="submit" class="button button-blue">Prepare my enquiry</button><p class="form-hint">This creates a draft on your device. You can copy it and share it using your preferred channel.</p>
</form>
@if(prepared()){<div class="enquiry-result" role="status" aria-live="polite"><strong>Your enquiry is ready</strong><p>Copy the message below, then contact us by phone. It has not been submitted.</p><textarea rows="6" readonly [value]="enquiryText()" aria-label="Prepared enquiry message"></textarea><button class="button button-dark" type="button" (click)="copyEnquiry()">{{copied()?'Copied to clipboard':'Copy enquiry'}}</button></div>}
</div></div></section>
`})
export class ContactPage{
 readonly site=SITE;readonly services=SERVICES;
 private fb=inject(FormBuilder).nonNullable;private route=inject(ActivatedRoute);
 attempted=signal(false);prepared=signal(false);copied=signal(false);enquiryText=signal('');
 form=this.fb.group({name:['',[Validators.required,Validators.minLength(2)]],email:['',[Validators.required,Validators.email]],interest:['General enquiry'],message:['',[Validators.required,Validators.minLength(10)]]});
 constructor(){const interest=this.route.snapshot.queryParamMap.get('interest');if(interest&&SERVICES.some(s=>s.name===interest))this.form.controls.interest.setValue(interest);}
 prepareEnquiry(){this.attempted.set(true);if(this.form.invalid){this.form.markAllAsTouched();this.prepared.set(false);return;}const d=this.form.getRawValue();this.enquiryText.set(`AVIO INFOTECH — PROJECT ENQUIRY\nName: ${d.name.trim()}\nEmail: ${d.email.trim()}\nInterest: ${d.interest}\n\n${d.message.trim()}`);this.prepared.set(true);this.copied.set(false);}
 async copyEnquiry(){try{await navigator.clipboard.writeText(this.enquiryText());this.copied.set(true);}catch{this.copied.set(false);}}
}
