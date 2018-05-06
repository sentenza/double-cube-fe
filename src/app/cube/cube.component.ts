import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit, AfterViewInit {
  @ViewChild('cubecanvas')
  private canvasRef: ElementRef;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  // The meshes
  private cubeMesh: THREE.Mesh;
  private secondCubeMesh: THREE.Mesh;
  private materials: THREE.Material[];
  // Properties
  @Input() rotationSpeedX = 0.005;
  @Input() rotationSpeedY = 0.01;
  @Input() size = 200;
  @Input() cameraZ = 900;
  @Input() fieldofview = 100;
  @Input() nearClippingPane = 1;
  @Input() farClipingPane = 2500;

  constructor() {
    // Creating scene and adding a mesh into
    this.scene = new THREE.Scene();
    this.addLightsToScene();
    this.loadRubixMaterials();
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
    const geometry = new THREE.BoxGeometry(500, 500, 500);
    const meshFaceMaterial = new THREE.MultiMaterial(this.materials);
    // const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
    this.cubeMesh = new THREE.Mesh(geometry, meshFaceMaterial);
    const xPos = 500;
    this.cubeMesh.position.set(-xPos, 0, 0);
    this.scene.add(this.cubeMesh);
    const secondMeshFaceMaterial = new THREE.MultiMaterial(this.materials.slice().reverse());
    this.secondCubeMesh = new THREE.Mesh(geometry, secondMeshFaceMaterial);
    this.secondCubeMesh.position.set(xPos, 0, 0);
    this.scene.add(this.secondCubeMesh);
  }

  createSceneOOOLD = function( geometry, materials, x, y, z, b ) {
    const zmesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
    zmesh.position.set( x, y, z );
    zmesh.rotation.x += 0.7;
    zmesh.scale.set( 1, 1, 1 );
    zmesh.name = 'Logo';
    const meshLogo = zmesh;
    this.scene.add( zmesh );
  };

  /**
   * Loads the materials to create the Rubik's cube faces
   * TODO: create a service for the Textures?
   */
  private loadRubixMaterials(): void {
    const texturesPath = '../../assets/textures/';
    // const rubikTextures = texturesPath + 'rubik/';
    const rubikTextures = 'https://raw.githubusercontent.com/sentenza/double-cube-fe/gh-pages/assets/textures/rubik/';
    const material1 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_1.jpg') } );
    const material2 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_2.jpg') } );
    const material3 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_3.jpg') } );
    const material4 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_6.jpg') } );
    const material5 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_5.jpg') } );
    const material6 = new THREE.MeshPhongMaterial( { map: new THREE.TextureLoader().load(rubikTextures + 'face_4.jpg') } );

    this.materials = [material1, material2, material3, material4, material5, material6];
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
    this.renderer = new THREE.WebGLRenderer({ alpha: true, canvas: this.canvas });
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
    // const ambientLight = new THREE.AmbientLight(0x202020);
    const ambientLight = new THREE.AmbientLight(0x888888);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);
    const pointLight = new THREE.PointLight(0xffffff, 5, 29);
    // pointLight.position.set( 0, -25, 10 );
    this.scene.add(pointLight);
  }

  private animateScene(): void {
    window.requestAnimationFrame(() => this.animateScene());
    this.cubeMesh.rotation.x += this.rotationSpeedX;
    this.secondCubeMesh.rotation.x += this.rotationSpeedX;
    this.cubeMesh.rotation.y += this.rotationSpeedY;
    this.secondCubeMesh.rotation.y += this.rotationSpeedY;
    this.renderer.render(this.scene, this.camera);
  }
}
