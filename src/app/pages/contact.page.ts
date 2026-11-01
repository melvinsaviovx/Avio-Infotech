import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SERVICES, SITE } from '../core/site-data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  imports: [ReactiveFormsModule, RevealDirective],
  template: `
  <section class="page-hero contact-hero"><div class="container page-hero-inner"><div class="page-breadcrumb">AVIO <span>/</span> CONNECT</div><span class="eyebrow light page-eyebrow">CONTACT / ENQUIRIES</span><h1 class="page-giant">CONTACT<br><em>AVIO.</em></h1><div class="page-hero-description"><p>Big idea or small question, we'd like to hear from you. Every worthwhile project starts with a conversation.</p><span>CONTACT DETAILS </span></div></div></section>
  <section class="section surface-white"><div class="container"><div class="section-meta"><span class="eyebrow">01 / GET IN TOUCH</span><span>START WITH A CONVERSATION</span></div><div class="contact-layout">
    <div class="contact-information" appReveal><h2>Good ideas<br>start with<br><em>hello.</em></h2><div class="contact-method"><span class="eyebrow">CALL US</span><a [href]="'tel:' + site.tel">{{site.phone}} <span></span></a></div><div class="contact-method"><span class="eyebrow">FIND US</span><p>{{site.address}}</p></div><div class="contact-note"><span class="status-pulse"></span> LET’S DISCUSS YOUR NEXT PROJECT</div><a class="contact-phone-button" [href]="'tel:' + site.tel">Call Avio Infotech</a></div>
    <div class="contact-form-panel" appReveal>
      <div class="form-panel-heading"><span class="eyebrow">TELL US ABOUT YOUR IDEA</span><span>001 / ENQUIRY</span></div>
      <form [formGroup]="form" (ngSubmit)="prepareEnquiry()" novalidate>
        <div class="form-row"><label for="name">Your name <b>*</b></label><input id="name" type="text" placeholder="What should we call you?" autocomplete="name" formControlName="name" maxlength="100" [attr.aria-invalid]="attempted() && form.controls.name.invalid"/><span class="field-error" aria-live="polite">@if (attempted() && form.controls.name.invalid) {Please enter your name.}</span></div>
        <div class="form-row"><label for="email">Email address <b>*</b></label><input id="email" type="email" placeholder="you@company.com" autocomplete="email" formControlName="email" maxlength="200" [attr.aria-invalid]="attempted() && form.controls.email.invalid"/><span class="field-error" aria-live="polite">@if (attempted() && form.controls.email.invalid) {Enter a valid email address.}</span></div>
        <div class="form-row"><label for="interest">What can we help with?</label><div class="select-wrap"><select id="interest" formControlName="interest"><option value="General enquiry">Choose an area of interest</option>@for (service of services; track service.id) {<option [value]="service.name">{{service.name}}</option>}<option value="Partnership / collaboration">Partnership / collaboration</option></select><svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></div></div>
        <div class="form-row"><label for="message">Tell us a little more <b>*</b></label><textarea id="message" rows="4" placeholder="A few sentences about your project or question..." formControlName="message" maxlength="2500" [attr.aria-invalid]="attempted() && form.controls.message.invalid"></textarea><span class="field-error" aria-live="polite">@if (attempted() && form.controls.message.invalid) {Please add at least 10 characters about your enquiry.}</span></div>
        <button type="submit" class="form-submit">Create enquiry summary</button>
        <p class="form-explainer">No information is sent from this form. Create and copy your enquiry, then contact us by phone to discuss the next steps.</p>
      </form>
      @if (prepared()) {<div class="prepared-message" role="status" aria-live="polite"><div><span class="eyebrow">ENQUIRY PREPARED</span><b>Your message is ready to share.</b></div><p class="prepared-preview">{{enquiryText()}}</p><button type="button" (click)="copyEnquiry()">{{copied() ? 'Copied ✓' : 'Copy enquiry to clipboard'}}</button>@if (site.email) {<a [href]="mailLink()">Open email app </a>}</div>}
    </div>
  </div></div></section>
  `
})
export class ContactPage {
  readonly site = SITE;
  readonly services = SERVICES;
  private readonly fb = inject(FormBuilder).nonNullable;
  readonly attempted = signal(false);
  readonly prepared = signal(false);
  readonly copied = signal(false);
  readonly enquiryText = signal('');
  readonly form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    interest: ['General enquiry'],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  prepareEnquiry(): void {
    this.attempted.set(true);
    if (this.form.invalid) { this.form.markAllAsTouched(); this.prepared.set(false); return; }
    const { name, email, interest, message } = this.form.getRawValue();
    this.enquiryText.set(`AVIO INFOTECH — ENQUIRY\nName: ${name.trim()}\nEmail: ${email.trim()}\nInterest: ${interest}\n\n${message.trim()}`);
    this.prepared.set(true);
    this.copied.set(false);
  }
  mailLink(): string { return `mailto:${SITE.email}?subject=${encodeURIComponent('Avio Infotech — Project Enquiry')}&body=${encodeURIComponent(this.enquiryText())}`; }
  async copyEnquiry(): Promise<void> {
    try { await navigator.clipboard.writeText(this.enquiryText()); this.copied.set(true); }
    catch { this.copied.set(false); /* User can manually select/copy preview. */ }
  }
}
