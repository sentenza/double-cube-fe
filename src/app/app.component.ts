import { Component, OnInit } from '@angular/core';
import { ThreeDModel } from './threedmodel';
import { ThreeDService } from './threedservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ThreeDService]
})
export class AppComponent implements OnInit{
  appTitle = 'Double Cube';
  models: ThreeDModel[];
  selectedModel: ThreeDModel;



  constructor(private tdService: ThreeDService) { }

  ngOnInit(): void {
    this.tdService.getModels().then(promised => this.models = promised);
    // throw new Error('Method not implemented.');
  }

  onSelect(selected: ThreeDModel): void {
    this.selectedModel = selected;
  }
}
