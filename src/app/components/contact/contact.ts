import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  points = [
    '🚀 Innovation-Driven: We build with tomorrow in mind.',
    '🎯 Client-Centric: Your vision guides every solution.',
    '⚡ Scalable & Reliable: Technology designed for growth.',
    '👨‍💻 Expert Team: Skilled professionals across domains.'
  ];
  isModalOpen = false;
  successMessage = '';


  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

submitForm(event: Event) {
  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const name = (form.querySelector('input[placeholder="Your Name"]') as HTMLInputElement).value;
  const phone = (form.querySelector('input[placeholder="Phone Number"]') as HTMLInputElement).value;
  const description = (form.querySelector('textarea') as HTMLTextAreaElement).value;

  const adminNumber = "918903650625"; 
  const message = `
  Name: ${name}
  Phone: ${phone}
  Message: ${description}`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${adminNumber}?text=${encodedMessage}`, "_blank");

  this.closeModal();
}

}
