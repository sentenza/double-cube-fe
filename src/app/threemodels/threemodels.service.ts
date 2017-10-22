import { Injectable } from '@angular/core';
import { ThreeModel } from './threemodel';
import { MODELS } from './mock-models';

@Injectable()
export class ThreeModelsService {
  mockedModels = MODELS;

  getModels(): Promise<ThreeModel[]> {
    return Promise.resolve(this.mockedModels);
  }

}
