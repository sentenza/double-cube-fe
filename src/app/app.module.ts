import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { SceneComponent } from './scene/scene.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CubeComponent } from './cube/cube.component';
import { HomeComponent } from './home/home.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeModelsComponent,
    SceneComponent,
    HeaderComponent,
    CubeComponent,
    HomeComponent,
    AdvancedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
