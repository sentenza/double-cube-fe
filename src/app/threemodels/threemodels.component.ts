import { Component, OnInit } from '@angular/core';
import { ThreeModel } from './threemodel';
import { ThreeModelsService } from './threemodels.service';

@Component({
  selector: 'app-three-models',
  templateUrl: './threemodels.component.html',
  styleUrls: ['./threemodels.component.scss'],
  providers: [ ThreeModelsService ]
})
export class ThreeModelsComponent implements OnInit {
  models: ThreeModel[];
  selectedModel: ThreeModel;

  constructor(private tdService: ThreeModelsService) { }

  ngOnInit(): void {
    // this.tdService.getModelsViaHTTP().then(_ => this.onReceive(_));
    this.models = this.tdService.getStaticModels();
  }

  onSelect(selected: ThreeModel): void {
    this.selectedModel = selected;
  }

  private onReceive(data: ThreeModel[]): void {
      this.models = data;
  }
}

