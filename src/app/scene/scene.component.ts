import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss']
})
export class SceneComponent implements OnInit, AfterViewInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;
  private renderer = new THREE.WebGLRenderer();
  private scene: THREE.Scene = null;
  private camera: THREE.Camera = null;
  private mesh: THREE.Mesh = null;

  constructor() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    this.camera.position.z = 1000;

    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.mesh = new THREE.Mesh(geometry, material);

    this.scene.add(this.mesh);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.renderer.setSize(500, 380);
    this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.animate();
  }

  private animate() {
    window.requestAnimationFrame(() => this.animate());
    this.mesh.rotation.x += 0.01;
    this.mesh.rotation.y += 0.02;
    this.renderer.render(this.scene, this.camera);
  }

}
