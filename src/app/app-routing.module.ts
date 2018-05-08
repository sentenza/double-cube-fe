import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { Scene } from 'three';
import { RubikComponent } from './rubik/rubik.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/index', pathMatch: 'full'},
    {path: 'index', component: HomeComponent},
    {path: 'models', component: ThreeModelsComponent},
    {path: 'rubik', component: RubikComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
