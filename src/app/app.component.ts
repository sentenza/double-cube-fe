import { Component } from '@angular/core';
import { ThreeModelsComponent } from './threemodels/threemodels.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  appTitle = 'Double Cube';
}
