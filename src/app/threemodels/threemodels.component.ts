import { Component, OnInit } from '@angular/core';
import { ThreeModel } from './threemodel';
import { ThreeModelsService } from './threemodels.service';

@Component({
  selector: 'app-three-models',
  templateUrl: './threemodels.component.html',
  styleUrls: ['./threemodels.component.css'],
  providers: [ ThreeModelsService ]
})
export class ThreeModelsComponent implements OnInit{
  models: ThreeModel[];
  selectedModel: ThreeModel;

  constructor(private tdService: ThreeModelsService) { }

  ngOnInit(): void {
    this.tdService.getModels().then(promised => this.models = promised);
  }

  onSelect(selected: ThreeModel): void {
    this.selectedModel = selected;
  }
}

