import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ThreeModelsComponent } from './threemodels/threemodels.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RubikComponent } from './rubik/rubik.component';
import { HomeComponent } from './home/home.component';
import { AdvancedComponent } from './advanced/advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeModelsComponent,
    HeaderComponent,
    RubikComponent,
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
