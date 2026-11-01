import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';
@Component({imports:[RouterLink],template:`
<section class="policy-hero"><div class="container"><div class="page-breadcrumb">AVIO <span>/</span> INFORMATION</div><span class="eyebrow light">LEGAL / 01</span><h1>PRIVACY <em>POLICY.</em></h1><p>How personal information may be handled when you use this website.</p></div></section>
<section class="policy-body surface-white"><div class="container policy-layout"><aside><span>PRIVACY / AVIO INFOTECH</span><a routerLink="/contact">Questions? Contact us </a></aside><article>
<p class="policy-notice"><strong>Publication review required.</strong> This is an informational starter policy. Confirm actual data flows, analytics, cookies, forms, hosting providers and applicable laws with qualified counsel before publishing.</p>
<h2>1. About this website</h2><p>{{site.name}} operates this company website to explain its services and products and to provide ways to make contact. Our published office address is {{site.address}}.</p>
<h2>2. Information you choose to provide</h2><p>On this prototype, the enquiry form processes the information you type in your browser to prepare a draft that you can copy. It does not submit that draft to our servers. If you contact us by telephone or another channel, information you provide through that channel may be handled for the purposes of responding.</p>
<h2>3. Technical data</h2><p>Website hosting providers may process technical connection information, such as IP addresses, browser information and request logs, to deliver and secure the website. Details depend on the hosting provider selected for deployment.</p>
<h2>4. External services</h2><p>This design loads fonts from Google Fonts and may link to other websites. External sites operate according to their own policies. Confirm the final third-party services in the production deployment.</p>
<h2>5. Cookies and analytics</h2><p>The supplied source does not intentionally set marketing cookies or include a third-party analytics script. Review this section if analytics, consent tools, advertising or other integrations are added.</p>
<h2>6. Contact and updates</h2><p>For privacy enquiries, use the contact information on our <a routerLink="/contact">contact page</a>. The effective date, retention periods, legal bases, rights-request procedures and other jurisdiction-specific disclosures must be reviewed before publication.</p>
</article></div></section>`})
export class PrivacyPage {readonly site=SITE;}
