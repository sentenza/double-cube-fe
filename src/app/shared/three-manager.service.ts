export class ThreeManagerService {
    public getCanvasAspectRatio(canvas: HTMLCanvasElement): number {
        return canvas.clientWidth / canvas.clientHeight;
    }
}
