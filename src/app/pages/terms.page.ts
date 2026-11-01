import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';
@Component({imports:[RouterLink],template:`
<section class="inner-hero legal-hero"><div class="shell inner-hero-content"><span class="small-label">INFORMATION</span><h1>Terms of <em>use.</em></h1><p>Helpful information about using this website.</p></div></section>
<section class="legal-section"><div class="shell legal-layout"><aside><span class="small-label">AVIO INFOTECH</span><p>Have a question?</p><a routerLink="/contact" class="text-action text-action-dark">Contact us</a></aside><article>
<div class="legal-review"><strong>Publication review required.</strong> This is a starting template, not legal advice. Confirm governing law, obligations, disclaimers and applicable requirements with counsel before publishing.</div>
<h2>About this website</h2><p>The {{site.name}} website provides general information about the company, services and product development. It does not create a binding contractual offer.</p>
<h2>Content and availability</h2><p>We aim to keep information accurate, but services and product concepts may change. Descriptions of in-development products do not guarantee that individual features are currently available.</p>
<h2>Content ownership</h2><p>Unless stated otherwise, original website design and materials are provided for personal viewing and evaluating the company. Third-party names and trademarks belong to their respective owners.</p>
<h2>Other websites</h2><p>Linked external websites operate independently; we cannot guarantee their availability or content.</p>
<h2>Enquiries</h2><p>The website's enquiry form prepares a message in your browser for you to copy. It does not send a message automatically. Please use the verified contact details on the <a routerLink="/contact">contact page</a> to reach us.</p>
<h2>Updates</h2><p>These terms may change as the company and website evolve. The final publication date, dispute handling and local legal provisions must be verified prior to public release.</p>
</article></div></section>
`})
export class TermsPage{readonly site=SITE;}
