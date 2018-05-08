import * as THREE from 'three';
/**
 * This service contains all the common methods to init the
 * essential objects needed by Three.js to init and manage
 * a three dimensional scene.
 */
export class ThreeManagerService {
    public getCanvasAspectRatio(canvas: HTMLCanvasElement): number {
        return canvas.clientWidth / canvas.clientHeight;
    }

  /**
   * Creates a Three.scene and adds a camera to it.
   * This should be called on AfterViewInit because it needs
   * the aspectRatio of the canvas element.
   *
   * @param fov {number} The view angle of the camera
   * @param nearPane {number} Near clipping pane
   * @param farPane {number} Far clipping pane
   * @param aspectRatio {number} The aspect ratio to define the proportions of
   * the elements that will contain the scene
   */
  public createCamera(
      fov: number,
      nearPane: number,
      farPane: number,
      aspectRatio: number
    ): THREE.PerspectiveCamera {
    // Camera
    const camera = new THREE.PerspectiveCamera(
      fov,       // Field of view
      aspectRatio,
      nearPane,
      farPane
    );
    return camera;
  }
}
