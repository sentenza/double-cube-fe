import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { SceneComponent } from './scene/scene.component';
import { Scene } from 'three';
import { CubeComponent } from './cube/cube.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: HomeComponent},
    {path: 'models', component: ThreeModelsComponent},
    {path: 'scene', component: SceneComponent},
    {path: 'cube', component: CubeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
