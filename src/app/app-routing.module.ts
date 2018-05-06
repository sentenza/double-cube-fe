import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { SceneComponent } from './scene/scene.component';
import { Scene } from 'three';
import { CubeComponent } from './cube/cube.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'models', component: ThreeModelsComponent},
    {path: 'scene', component: SceneComponent},
    {path: 'cube', component: CubeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
