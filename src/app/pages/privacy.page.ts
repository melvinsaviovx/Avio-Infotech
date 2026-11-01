import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';
@Component({imports:[RouterLink],template:`
<section class="inner-hero legal-hero"><div class="shell inner-hero-content"><span class="small-label">INFORMATION</span><h1>Privacy <em>policy.</em></h1><p>How this website handles information and your preferences.</p></div></section>
<section class="legal-section"><div class="shell legal-layout"><aside><span class="small-label">AVIO INFOTECH</span><p>Questions about privacy?</p><a routerLink="/contact" class="text-action text-action-dark">Contact us</a></aside><article>
<div class="legal-review"><strong>Publication review required.</strong> This starter policy must be reviewed against your actual hosting, data processing and applicable law before going live.</div>
<h2>Who we are</h2><p>{{site.name}} provides information about our technology services and software products. Our published address is {{site.address}}.</p>
<h2>Information you provide</h2><p>The current enquiry form processes the details you enter inside your browser to create a copyable message. It does not send that information to Avio Infotech servers. If you call us or use a different channel, the information you share through that channel may be used to respond.</p>
<h2>Website hosting</h2><p>Our selected hosting provider may process IP addresses, device information and technical request logs to provide and protect the website. Verify the final provider and retention periods before publication.</p>
<h2>Cookies and local preferences</h2><p>This website currently does not load an analytics or advertising tracker. It stores a small browser preference record named <code>avio_cookie_preferences_v1</code> to remember your cookie selection and whether enhanced visual motion is enabled. This record stays in your browser and can be changed through “Cookie preferences” in the footer. Your browser's reduced-motion setting takes priority.</p>
<h2>External links and images</h2><p>Some pages link to independent sites, and founder photos may be loaded from the existing Avio Infotech website. Third-party providers have their own privacy practices.</p>
<h2>Changes and requests</h2><p>For questions and rights requests, contact us using the details on our <a routerLink="/contact">contact page</a>. The effective date, data retention and jurisdiction-specific rights must be confirmed prior to publishing.</p>
</article></div></section>
`})
export class PrivacyPage{readonly site=SITE;}
