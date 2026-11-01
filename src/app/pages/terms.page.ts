import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';
@Component({imports:[RouterLink],template:`
<section class="policy-hero"><div class="container"><div class="page-breadcrumb">AVIO <span>/</span> INFORMATION</div><span class="eyebrow light">LEGAL / 02</span><h1>TERMS OF <em>USE.</em></h1><p>Important information about visiting this website.</p></div></section>
<section class="policy-body surface-white"><div class="container policy-layout"><aside><span>TERMS / AVIO INFOTECH</span><a routerLink="/contact">Questions? Contact us </a></aside><article>
<p class="policy-notice"><strong>Publication review required.</strong> This is a starting template, not a legal opinion. Have qualified counsel verify it and approve the effective date before using it as an official policy.</p>
<h2>1. Website purpose</h2><p>The {{site.name}} website provides general information about our company, services, ideas and ventures. It is not a binding offer or guarantee of service availability.</p>
<h2>2. Accuracy of content</h2><p>We aim to keep the information clear and useful, but descriptions and features may change. Product concepts described as “in development” represent intended direction rather than promises of completed functionality.</p>
<h2>3. Intellectual property</h2><p>Unless otherwise stated, original copy, designs and other website materials are provided for viewing in connection with this website. Third-party marks and content remain the property of their respective owners.</p>
<h2>4. External links</h2><p>Some pages may link to external sites. External providers control their own content and availability.</p>
<h2>5. Enquiries</h2><p>The included enquiry form creates a draft locally for the visitor to copy. It does not send an enquiry automatically. Contact us using the verified details on our <a routerLink="/contact">contact page</a>.</p>
<h2>6. Amendments</h2><p>Website information and these terms may be updated as the company, product and services evolve. Confirm appropriate governing-law, limitation-of-liability, dispute resolution and other jurisdictional provisions with legal counsel before publication.</p>
</article></div></section>`})
export class TermsPage {readonly site=SITE;}
