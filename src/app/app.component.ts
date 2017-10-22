import { Component } from '@angular/core';
import { ThreeDModel } from './threedmodel';
import { ThreeDService } from './threedservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	appTitle = 'Double Cube';
	service = new ThreeDService();
	models = this.service.getModels();
	selectedModel: ThreeDModel;

	onSelect(selected: ThreeDModel): void {
	  this.selectedModel = selected;
	}	
}