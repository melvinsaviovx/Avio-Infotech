import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE } from '../core/site-data';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  template: `
  <footer class="site-footer">
    <div class="footer-top container">
      <div class="footer-kicker"><span class="eyebrow light"><i class="eyebrow-dot"></i> LET’S CONNECT</span><p>Have a project in mind?</p></div>
      <a routerLink="/contact" class="footer-large-link"><span>LET’S BUILD</span><span>SOMETHING GREAT<em></em></span></a>
    </div>
    <div class="footer-bottom container">
      <div class="footer-about"><a routerLink="/" class="footer-logotype" aria-label="Avio Infotech home"><span>AVIO<br><small>INFOTECH</small></span></a><p>Software engineering · Digital products<br>Cloud · AI & automation</p><span class="footer-place">TAMIL NADU, INDIA</span></div>
      <div class="footer-col"><span>EXPLORE</span><a routerLink="/services">Expertise</a><a routerLink="/company">Company</a><a routerLink="/ventures">Ventures</a><a routerLink="/leadership">Leadership</a></div>
      <div class="footer-col"><span>CONNECT</span><a routerLink="/contact">Start a project</a><a [href]="'tel:' + site.tel">{{site.phone}}</a><p>Kanniyakumari, Tamil Nadu</p></div>
      <div class="footer-col"><span>INFORMATION</span><a routerLink="/privacy">Privacy Policy</a><a routerLink="/terms">Terms of Use</a><a href="#main-content">Back to top </a></div>
    </div>
    <div class="footer-tail container"><span>© {{year}} AVIO INFOTECH. ALL RIGHTS RESERVED.</span><span>DIGITAL ENGINEERING</span></div>
  </footer>`
})
export class FooterComponent {
  readonly site = SITE;
  readonly year = new Date().getFullYear();
}
