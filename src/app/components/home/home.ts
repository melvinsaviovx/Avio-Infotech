import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  implements AfterViewInit {
  @ViewChild('heroCanvas') canvasRef!: ElementRef;
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private particles: THREE.Points | undefined;

  ngAfterViewInit() {
    this.initThree();
    this.animate();
  }

  initThree() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvasRef.nativeElement, alpha: true });
    this.renderer.setSize(width, height);

    const particlesCount = 1000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < particlesCount; i++) {
      positions.push((Math.random() - 0.5) * 200);
      positions.push((Math.random() - 0.5) * 200);
      positions.push((Math.random() - 0.5) * 200);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0xf0c27b, size: 1 });
    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);

    // Resize
    window.addEventListener('resize', () => {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    if (this.particles) {
      this.particles.rotation.y += 0.0015;
      this.particles.rotation.x += 0.001;
    }

    this.renderer.render(this.scene, this.camera);
  };
}
