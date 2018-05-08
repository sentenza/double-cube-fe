import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from '@angular/core';
import * as THREE from 'three-full';
import { ThreeManagerService } from '../shared/three-manager.service';

@Component({
  selector: 'app-interactive',
  templateUrl: './interactive.component.html',
  styleUrls: ['./interactive.component.scss'],
  providers: [ThreeManagerService]
})
export class InteractiveComponent implements OnInit, AfterViewInit {
  @ViewChild('interactiveCanvas')
  private canvasRef: ElementRef;
  // Essential Three.js elements
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private scene: THREE.Scene;
  // Camera position
  private cameraX = 0;
  private cameraY = 5;
  private cameraZ = 20;
  // Plane dimensions
  private planeDimensions = {width: 480, height: 480};
  // Meshes
  private planeMesh: THREE.Mesh;
  // Camera Properties
  @Input() fieldofview = 35; // View angle
  @Input() nearClippingPane = 1;
  @Input() farClipingPane = 100;
  // Other properties
  @Input() rotationSpeedX = 0.005;
  @Input() rotationSpeedY = 0.002;
  // Public properties
  planeAdded = true;
  modelLoaded = true;
  private assetPath = '../assets/';
  private applyShadowMap = true;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  /**
   * Everyting should be added through an eventListener
   */
  constructor(private tmService: ThreeManagerService) {
    this.scene = new THREE.Scene();
  }

  ngOnInit() { }

  ngAfterViewInit() {
    this.initCamera();
    this.addLights();
    this.addPlane();
    this.loadColladaModel();
    this.startRenderingLoop();
    this.animateScene();
  }

  /* **** Generic Three.js helper methods **** */

  private initCamera(): void {
    const aspectRatio = this.tmService.getCanvasAspectRatio(this.canvas);
    // Create camera
    this.camera = new THREE.PerspectiveCamera(
      this.fieldofview,
      aspectRatio,
      this.nearClippingPane,
      this.farClipingPane,
    );
    // Set camera position
    this.camera.position.set(this.cameraX, this.cameraY, this.cameraZ);
    // Add Camera to the scene
    this.scene.add(this.camera);
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.margin = 'auto';
    if (this.applyShadowMap) {
      this.applyRendererShadowMap();
    }
  }

  private applyRendererShadowMap(): void {
    this.renderer.shadowMapEnabled = true;
    this.renderer.shadowMapType = THREE.PCFShadowMap;
  }

  private animateScene(): void {
    window.requestAnimationFrame(() => this.animateScene());
    // const mouseX = 10;
    // const mouseY = 5;
    // this.camera.position.x += ( mouseX - this.camera.position.x ) * 0.05;
    // this.camera.position.y += ( - mouseY - this.camera.position.y ) * 0.05;
    // this.camera.lookAt( this.scene.position );
    this.renderer.render(this.scene, this.camera);
  }

  /* Event listeners */
  public onAddPlaneClick(): void {
    // this.addPlane();
  }

  public onLoadModelClick(): void {
    // this.loadColladaModel();
  }

  /* Component specific methods */

  /**
   * Adds a ground to the scene
   *
   * @see https://threejs.org/docs/#api/materials/MeshPhongMaterial
   */
  private addPlane(): void {
    const planeGeometry = new THREE.PlaneGeometry(this.planeDimensions.width, this.planeDimensions.height);
    const texture = new THREE.TextureLoader().load(this.assetPath + 'textures/ground/stone.jpg');
    const planeMaterial = new THREE.MeshPhongMaterial( {
      color: 0xCCCCCC,
      specular: 0x009900,
      map: texture,
      shininess: 30
    });
    this.planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);

    planeMaterial.map.wrapS = THREE.RepeatWrapping;
    planeMaterial.map.wrapT = THREE.RepeatWrapping;
    planeMaterial.map.repeat.set(this.planeDimensions.width, this.planeDimensions.height);

    this.planeMesh.position.set(0, 0, 0); // center of the ground quad
    this.planeMesh.rotateX(-Math.PI / 2); // set it horizontally because planeGeometry is along X,Y

    planeMaterial.map.repeat.x = planeMaterial.map.repeat.y = 30;
    this.scene.add(this.planeMesh);
    this.planeAdded = true;
    if (this.applyShadowMap) {
      this.planeMesh.castShadow = false;
      this.planeMesh.receiveShadow = true;
    }
  }

  /**
   * Loads a Collada (*.DAE) model using the ES6 three-full node module
   */
  private loadColladaModel(): void {
    let model: THREE.Scene;
    const loader = new THREE.ColladaLoader();
    loader.load( this.assetPath + 'meshes/collada/house/medieval_building.dae', ( collada ) => {
      model = collada.scene;
      model.scale.x = model.scale.y = model.scale.z = 2;
      model.position.set(0, 1.5, -5);
      model.rotateZ(Math.PI / 4);
      model.updateMatrix();
      if (this.applyShadowMap) { // TODO does not work
        // model.children[0].children[0].castShadow = true;
        // model.children[0].children[0].receiveShadow = false;
      }
      this.scene.add(model);
    });
  }

  private addLights(): void {
    const ambientLight = new THREE.AmbientLight(0x777777);
    this.scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.4;
    spotLight.position.set(10, 40, 30);
    if (this.applyShadowMap) {
      spotLight.castShadow = true;

      spotLight.shadowMapWidth = 512;
      spotLight.shadowMapHeight = 512;


      spotLight.shadowCameraNear = 5;
      spotLight.shadowCameraFar = 20;
      spotLight.shadowCameraFov = 60;
    }
    this.scene.add(spotLight);
  }
}
