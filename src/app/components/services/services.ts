import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class Services {
  services = [
    {
      icon: '💡',
      title: 'Custom Software Development',
      description: 'Tailored, scalable, and secure solutions to streamline your business and drive innovation.'
    },
    {
      icon: '🌐',
      title: 'Web & Mobile App Development',
      description: 'Sleek, responsive websites and apps that deliver seamless digital experiences.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions & Integration',
      description: 'Future-ready cloud services that optimize costs, increase flexibility, and unlock new growth.'
    },
    {
      icon: '🤖',
      title: 'AI & Automation',
      description: 'Intelligent solutions that automate workflows, boost productivity, and provide real-time insights.'
    },
    {
      icon: '🔒',
      title: 'Cybersecurity & IT Consulting',
      description: 'End-to-end protection and expert consulting to keep your digital infrastructure safe and resilient.'
    }
  ];

  points = [
    '🚀 Innovation-Driven: We build with tomorrow in mind.',
    '🎯 Client-Centric: Your vision guides every solution.',
    '⚡ Scalable & Reliable: Technology designed for growth.',
    '👨‍💻 Expert Team: Skilled professionals across domains.'
  ];
}
