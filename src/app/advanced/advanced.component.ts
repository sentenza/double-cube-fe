import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-advanced',
  templateUrl: './advanced.component.html',
  styleUrls: ['./advanced.component.scss']
})
export class AdvancedComponent implements OnInit, AfterViewInit {
  @ViewChild('advancedcanvas')
  private canvasRef: ElementRef;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  // The meshes
  private cube1: THREE.Mesh;
  private cube2: THREE.Mesh;
  private cubes: THREE.Mesh[];
  private materials: THREE.Material[];
  // Properties
  @Input() rotationSpeedX = 0.005;
  @Input() rotationSpeedY = 0.002;
  @Input() size = 200;
  @Input() cameraZ = 1800;
  @Input() fieldofview = 40;
  @Input() nearClippingPane = 1;
  @Input() farClipingPane = 10000;

  constructor() {
    // Creating scene and adding a mesh into
    this.scene = new THREE.Scene();
    this.addLightsToScene();
    this.addMeshToScene();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.createCamera();
    this.startRenderingLoop();
    // this.canvas.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.margin = 'auto';
    this.animateScene();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private addMeshToScene(): void {
    // const meshPath = '../assets/meshes/json/cubecolours/cube_fvc.json';
    const meshPath = 'https://raw.githubusercontent.com/sentenza/double-cube-fe/master/src/assets/meshes/json/cubecolours/cube_fvc.json';
    const loader = new THREE.JSONLoader();
    // Load Cube1
    loader.load(
      meshPath,
      (geometry, materials) => {
        this.cube1 = new THREE.Mesh(geometry, materials);
        this.cube1.position.x = -300;
        this.cube1.scale.x = this.cube1.scale.y = this.cube1.scale.z = 150;
        this.scene.add(this.cube1);
      }
    );
    // Load Cube2
    loader.load(
      meshPath,
      (geometry, materials) => {
        this.cube2 = new THREE.Mesh(geometry, materials);
        this.cube2.position.x = 300;
        this.cube2.scale.x = this.cube2.scale.y = this.cube2.scale.z = 150;
        this.scene.add(this.cube2);
        this.cubes = [this.cube1, this.cube2];
      }
    );
  }

  /**
   * Create a Three.scene and adds a camera to it
   */
  private createCamera(): void {
    // Camera
    const aspectRatio = this.getApectRatio();
    this.camera = new THREE.PerspectiveCamera(
      this.fieldofview,       // Field of view
      aspectRatio,            // Aspect ratio
      this.nearClippingPane,  // Near plane
      this.farClipingPane
    );  // Far plane
    this.camera.position.z = this.cameraZ;
  }

  private startRenderingLoop() {
    // Renderer - Alpha: true for a transparent renderer (see the canvas color)
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
  }

  private getApectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  /**
   * Adds ambient, directional and point lights
   */
  private addLightsToScene() {
    const light = new THREE.DirectionalLight( 0xffffff );
    light.position.set( 0, 0, 1 ).normalize();
    this.scene.add( light );
  }

  private animateScene(): void {
    const mouseX = 10;
    const mouseY = 5;
    window.requestAnimationFrame(() => this.animateScene());
    this.camera.position.x += ( mouseX - this.camera.position.x ) * 0.05;
    this.camera.position.y += ( - mouseY - this.camera.position.y ) * 0.05;
    this.camera.lookAt( this.scene.position );
    if (this.cubes !== undefined) {
      for (const c of this.cubes) {
        c.rotation.x += this.rotationSpeedX;
        c.rotation.y += this.rotationSpeedY;
      }
    }
    this.renderer.render(this.scene, this.camera);
  }
}

