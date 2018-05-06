(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _threemodels_threemodels_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threemodels/threemodels.component */ "./src/app/threemodels/threemodels.component.ts");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/scene.component */ "./src/app/scene/scene.component.ts");
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/cube/cube.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var appRoutes = [
    { path: '', redirectTo: '/cube', pathMatch: 'full' },
    { path: 'models', component: _threemodels_threemodels_component__WEBPACK_IMPORTED_MODULE_2__["ThreeModelsComponent"] },
    { path: 'scene', component: _scene_scene_component__WEBPACK_IMPORTED_MODULE_3__["SceneComponent"] },
    { path: 'cube', component: _cube_cube_component__WEBPACK_IMPORTED_MODULE_4__["CubeComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<main role=\"main\">\n\n        <section class=\"jumbotron text-center\">\n          <div class=\"container\">\n            <h1 class=\"jumbotron-heading\">{{ appTitle }}</h1>\n            <p class=\"lead text-muted\">\n                Something short and leading about the collection below—its contents, the creator, etc.<br>\n                Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>\n            <p>\n            <p>\n              <img height=\"100\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\t\t\t\t  \n            </p>\t\t  \n              <a routerLink=\"/\" class=\"btn btn-primary\">First call to action</a>\n              <a routerLink=\"/scene\" class=\"btn btn-secondary\">Secondary action</a>\n          </div>\n        </section>\n  \n        <div class=\"album text-muted\">\n          <div class=\"container\">\n  \n            <router-outlet></router-outlet>\n            \n          </div> \n        </div>\n  \n      </main>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.appTitle = 'Double Cube';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _threemodels_threemodels_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threemodels/threemodels.component */ "./src/app/threemodels/threemodels.component.ts");
/* harmony import */ var _scene_scene_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scene/scene.component */ "./src/app/scene/scene.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _cube_cube_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cube/cube.component */ "./src/app/cube/cube.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _threemodels_threemodels_component__WEBPACK_IMPORTED_MODULE_5__["ThreeModelsComponent"],
                _scene_scene_component__WEBPACK_IMPORTED_MODULE_6__["SceneComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _cube_cube_component__WEBPACK_IMPORTED_MODULE_9__["CubeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cube/cube.component.html":
/*!******************************************!*\
  !*** ./src/app/cube/cube.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <canvas #cubecanvas id=\"cube-canvas\">\n\n    </canvas>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/cube/cube.component.scss":
/*!******************************************!*\
  !*** ./src/app/cube/cube.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cube/cube.component.ts":
/*!****************************************!*\
  !*** ./src/app/cube/cube.component.ts ***!
  \****************************************/
/*! exports provided: CubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubeComponent", function() { return CubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CubeComponent = /** @class */ (function () {
    function CubeComponent() {
        // Properties
        this.rotationSpeedX = 0.005;
        this.rotationSpeedY = 0.01;
        this.size = 200;
        this.cameraZ = 900;
        this.fieldofview = 100;
        this.nearClippingPane = 1;
        this.farClipingPane = 2500;
        this.createSceneOOOLD = function (geometry, materials, x, y, z, b) {
            var zmesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, new three__WEBPACK_IMPORTED_MODULE_1__["MeshFaceMaterial"](materials));
            zmesh.position.set(x, y, z);
            zmesh.rotation.x += 0.7;
            zmesh.scale.set(1, 1, 1);
            zmesh.name = 'Logo';
            var meshLogo = zmesh;
            this.scene.add(zmesh);
        };
        // Creating scene and adding a mesh into
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.addLightsToScene();
        this.loadRubixMaterials();
        this.addMeshToScene();
    }
    CubeComponent.prototype.ngOnInit = function () { };
    CubeComponent.prototype.ngAfterViewInit = function () {
        this.createCamera();
        this.startRenderingLoop();
        // this.canvas.appendChild(this.renderer.domElement);
        this.renderer.domElement.style.display = 'block';
        this.renderer.domElement.style.margin = 'auto';
        this.animateScene();
    };
    Object.defineProperty(CubeComponent.prototype, "canvas", {
        get: function () {
            return this.canvasRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    CubeComponent.prototype.addMeshToScene = function () {
        var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](500, 500, 500);
        var meshFaceMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MultiMaterial"](this.materials);
        // const material = new THREE.MeshBasicMaterial({color: 0xff0000, wireframe: true});
        this.cubeMesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, meshFaceMaterial);
        var xPos = 500;
        this.cubeMesh.position.set(-xPos, 0, 0);
        this.scene.add(this.cubeMesh);
        var secondMeshFaceMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MultiMaterial"](this.materials.slice().reverse());
        this.secondCubeMesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, secondMeshFaceMaterial);
        this.secondCubeMesh.position.set(xPos, 0, 0);
        this.scene.add(this.secondCubeMesh);
    };
    /**
     * Loads the materials to create the Rubik's cube faces
     * TODO: create a service for the Textures?
     */
    CubeComponent.prototype.loadRubixMaterials = function () {
        var texturesPath = '../../assets/textures/';
        // const rubikTextures = texturesPath + 'rubik/';
        var rubikTextures = 'https://raw.githubusercontent.com/sentenza/double-cube-fe/gh-pages/assets/textures/rubik/';
        var material1 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_1.jpg') });
        var material2 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_2.jpg') });
        var material3 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_3.jpg') });
        var material4 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_6.jpg') });
        var material5 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_5.jpg') });
        var material6 = new three__WEBPACK_IMPORTED_MODULE_1__["MeshPhongMaterial"]({ map: new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]().load(rubikTextures + 'face_4.jpg') });
        this.materials = [material1, material2, material3, material4, material5, material6];
    };
    /**
     * Create a Three.scene and adds a camera to it
     */
    CubeComponent.prototype.createCamera = function () {
        // Camera
        var aspectRatio = this.getApectRatio();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](this.fieldofview, // Field of view
        aspectRatio, // Aspect ratio
        this.nearClippingPane, // Near plane
        this.farClipingPane); // Far plane
        this.camera.position.z = this.cameraZ;
    };
    CubeComponent.prototype.startRenderingLoop = function () {
        // Renderer - Alpha: true for a transparent renderer (see the canvas color)
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]({ alpha: true, canvas: this.canvas });
        this.renderer.setPixelRatio(devicePixelRatio);
        this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    };
    CubeComponent.prototype.getApectRatio = function () {
        return this.canvas.clientWidth / this.canvas.clientHeight;
    };
    /**
     * Adds ambient, directional and point lights
     */
    CubeComponent.prototype.addLightsToScene = function () {
        // const ambientLight = new THREE.AmbientLight(0x202020);
        var ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0x888888);
        this.scene.add(ambientLight);
        var directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](0xffffff, 0.75);
        directionalLight.position.set(0, 1, 1).normalize();
        this.scene.add(directionalLight);
        var pointLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xffffff, 5, 29);
        // pointLight.position.set( 0, -25, 10 );
        this.scene.add(pointLight);
    };
    CubeComponent.prototype.animateScene = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animateScene(); });
        this.cubeMesh.rotation.x += this.rotationSpeedX;
        this.secondCubeMesh.rotation.x += this.rotationSpeedX;
        this.cubeMesh.rotation.y += this.rotationSpeedY;
        this.secondCubeMesh.rotation.y += this.rotationSpeedY;
        this.renderer.render(this.scene, this.camera);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cubecanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CubeComponent.prototype, "canvasRef", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "rotationSpeedX", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "rotationSpeedY", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "size", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "cameraZ", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "fieldofview", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "nearClippingPane", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CubeComponent.prototype, "farClipingPane", void 0);
    CubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cube',
            template: __webpack_require__(/*! ./cube.component.html */ "./src/app/cube/cube.component.html"),
            styles: [__webpack_require__(/*! ./cube.component.scss */ "./src/app/cube/cube.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CubeComponent);
    return CubeComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <div class=\"collapse bg-dark\" id=\"navbarHeader\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-8 py-4\">\n          <h4 class=\"text-white\">About</h4>\n          <p class=\"text-muted\">\n            Add some information about Double Cube, the author, or any other background context.\n            Make it a few sentences long so folks can pick up some informative tidbits.\n            Then, link them off to some social networking sites or contact information.</p>\n        </div>\n        <div class=\"col-sm-4 py-4\">\n          <h4 class=\"text-white\">Contact</h4>\n          <ul class=\"list-unstyled\">\n            <li><a href=\"#\" class=\"text-white\">Follow on Twitter</a></li>\n            <li><a href=\"#\" class=\"text-white\">Like on Facebook</a></li>\n            <li><a href=\"#\" class=\"text-white\">Email me</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"navbar navbar-expand-sm navbar-dark bg-dark\">\n      <a routerLink=\"/\" class=\"navbar-brand\">Double Cube</a>\n      <div class=\"collapse navbar-collapse\">\n          <div class=\"navbar-nav\">\n            <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/models\">Models</a>\n            <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/scene\">Scene</a>\n            <a class=\"nav-item nav-link\" routerLinkActive=\"active\" routerLink=\"/cube\">Cube</a>\n          </div>\n      </div>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarHeader\" \n      aria-controls=\"navbarHeader\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/scene/scene.component.html":
/*!********************************************!*\
  !*** ./src/app/scene/scene.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h5>The Renderer Container</h5>\n        <div #rendererContainer></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/scene/scene.component.scss":
/*!********************************************!*\
  !*** ./src/app/scene/scene.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/scene/scene.component.ts":
/*!******************************************!*\
  !*** ./src/app/scene/scene.component.ts ***!
  \******************************************/
/*! exports provided: SceneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneComponent", function() { return SceneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SceneComponent = /** @class */ (function () {
    function SceneComponent() {
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]();
        this.scene = null;
        this.camera = null;
        this.mesh = null;
        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](75, window.innerWidth / window.innerHeight, 1, 10000);
        this.camera.position.z = 1000;
        var geometry = new three__WEBPACK_IMPORTED_MODULE_1__["BoxGeometry"](500, 500, 500);
        var material = new three__WEBPACK_IMPORTED_MODULE_1__["MeshBasicMaterial"]({ color: 0xff0000, wireframe: true });
        this.mesh = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](geometry, material);
        this.scene.add(this.mesh);
    }
    SceneComponent.prototype.ngOnInit = function () { };
    SceneComponent.prototype.ngAfterViewInit = function () {
        this.renderer.setSize(500, 380);
        this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
        this.animate();
    };
    SceneComponent.prototype.animate = function () {
        var _this = this;
        window.requestAnimationFrame(function () { return _this.animate(); });
        this.mesh.rotation.x += 0.01;
        this.mesh.rotation.y += 0.02;
        this.renderer.render(this.scene, this.camera);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('rendererContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SceneComponent.prototype, "rendererContainer", void 0);
    SceneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-scene',
            template: __webpack_require__(/*! ./scene.component.html */ "./src/app/scene/scene.component.html"),
            styles: [__webpack_require__(/*! ./scene.component.scss */ "./src/app/scene/scene.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SceneComponent);
    return SceneComponent;
}());



/***/ }),

/***/ "./src/app/threemodels/mock-models.ts":
/*!********************************************!*\
  !*** ./src/app/threemodels/mock-models.ts ***!
  \********************************************/
/*! exports provided: MODELS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODELS", function() { return MODELS; });
var MODELS = [
    { id: 1, name: 'Fibonacci' },
    { id: 2, name: 'Couchy' },
    { id: 3, name: 'Laplace' },
    { id: 5, name: 'Fourier' },
    { id: 8, name: 'Lagrange' },
    { id: 13, name: 'Talete' },
    { id: 21, name: 'Leibnitz' },
    { id: 34, name: 'Dini' },
    { id: 55, name: 'Rouche' },
    { id: 89, name: 'Capelli' }
];


/***/ }),

/***/ "./src/app/threemodels/threemodels.component.html":
/*!********************************************************!*\
  !*** ./src/app/threemodels/threemodels.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n\t<div class=\"col-3\">\n\t\t<div class=\"\" *ngIf=\"selectedModel\">\n\t\t\t\t<h4>{{selectedModel.name}} details</h4>\n\t\t\t\t<div><label>id: </label>{{selectedModel.id}}</div>\n\t\t\t\t<div>\n\t\t\t\t\t<label>name: </label>\n\t\t\t\t\t<input [(ngModel)]=\"selectedModel.name\" placeholder=\"name\"/>\n\t\t\t\t</div>\n\t\t</div>\n\t</div> <!-- .col -->\n\t<div class=\"col-9\">\n\t\t<ul class=\"list-group list-group-flush\"\t*ngFor=\"let model of models\" (click)=\"onSelect(model)\" [class.selected]=\"model === selectedModel\">\n\t\t\t<li class=\"list-group-item\">{{model.id}} {{model.name}}</li>\n\t\t</ul>\n\t</div> <!-- .col -->\n</div> <!-- .row -->"

/***/ }),

/***/ "./src/app/threemodels/threemodels.component.scss":
/*!********************************************************!*\
  !*** ./src/app/threemodels/threemodels.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/threemodels/threemodels.component.ts":
/*!******************************************************!*\
  !*** ./src/app/threemodels/threemodels.component.ts ***!
  \******************************************************/
/*! exports provided: ThreeModelsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeModelsComponent", function() { return ThreeModelsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _threemodels_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./threemodels.service */ "./src/app/threemodels/threemodels.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeModelsComponent = /** @class */ (function () {
    function ThreeModelsComponent(tdService) {
        this.tdService = tdService;
    }
    ThreeModelsComponent.prototype.ngOnInit = function () {
        // this.tdService.getModelsViaHTTP().then(_ => this.onReceive(_));
        this.models = this.tdService.getStaticModels();
    };
    ThreeModelsComponent.prototype.onSelect = function (selected) {
        this.selectedModel = selected;
    };
    ThreeModelsComponent.prototype.onReceive = function (data) {
        this.models = data;
    };
    ThreeModelsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-three-models',
            template: __webpack_require__(/*! ./threemodels.component.html */ "./src/app/threemodels/threemodels.component.html"),
            styles: [__webpack_require__(/*! ./threemodels.component.scss */ "./src/app/threemodels/threemodels.component.scss")],
            providers: [_threemodels_service__WEBPACK_IMPORTED_MODULE_1__["ThreeModelsService"]]
        }),
        __metadata("design:paramtypes", [_threemodels_service__WEBPACK_IMPORTED_MODULE_1__["ThreeModelsService"]])
    ], ThreeModelsComponent);
    return ThreeModelsComponent;
}());



/***/ }),

/***/ "./src/app/threemodels/threemodels.service.ts":
/*!****************************************************!*\
  !*** ./src/app/threemodels/threemodels.service.ts ***!
  \****************************************************/
/*! exports provided: ThreeModelsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeModelsService", function() { return ThreeModelsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-models */ "./src/app/threemodels/mock-models.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/toPromise';
var ThreeModelsService = /** @class */ (function () {
    function ThreeModelsService(http) {
        this.http = http;
        this.mockedModels = _mock_models__WEBPACK_IMPORTED_MODULE_1__["MODELS"];
        this.modelsUrl = 'http://127.0.0.1:5200/models';
    }
    ThreeModelsService.prototype.getStaticModels = function () {
        return _mock_models__WEBPACK_IMPORTED_MODULE_1__["MODELS"];
    };
    ThreeModelsService.prototype.getModelsViaHTTP = function () {
        // return Promise.resolve(this.mockedModels);
        return this.http.get(this.modelsUrl)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ThreeModelsService.prototype.handleError = function (error) {
        console.error('An error occurred %o', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ThreeModelsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ThreeModelsService);
    return ThreeModelsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/alfredo/projects/double-cube-fe/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map