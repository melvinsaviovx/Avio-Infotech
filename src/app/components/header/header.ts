import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
// isMenuOpen = false;

//   toggleMenu() {
//     this.isMenuOpen = !this.isMenuOpen;
//     const nav = document.querySelector('.nav-links');
//     if (nav) {
//       nav.classList.toggle('active', this.isMenuOpen);
//     }
//   }
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    const nav = document.querySelector('.nav-links');
    if (nav) {
      nav.classList.toggle('active', this.isMenuOpen);
    }
  }
}
