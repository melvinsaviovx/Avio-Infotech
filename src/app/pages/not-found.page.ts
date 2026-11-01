import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({imports:[RouterLink],template:`<section class="missing-page"><div class="shell"><span class="small-label">PAGE NOT FOUND</span><h1>This page seems to have<br><em>taken a different path.</em></h1><p>Let's get you back to what matters.</p><a class="button button-ivory" routerLink="/">Return to home</a></div></section>`})
export class NotFoundPage{}
