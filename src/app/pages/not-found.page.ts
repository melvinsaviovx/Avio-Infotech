import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({imports:[RouterLink],template:`<section class="not-found"><div class="container"><span class="eyebrow light">OFF THE GRID / ERROR 404</span><h1>404<span>.</span></h1><p>Somewhere between an idea and a reality, this page got lost.</p><a routerLink="/" class="pill-button light-button">Back to the beginning <span></span></a></div></section>`})
export class NotFoundPage {}
