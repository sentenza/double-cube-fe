import { ThreeDModel } from './threedmodel';
import { Injectable } from '@angular/core';
import { MODELS } from './mock-models';

@Injectable()
export class ThreeDService {
  mockedModels = MODELS;

  getModels(): Promise<ThreeDModel[]> {
    return Promise.resolve(this.mockedModels);
  }

}
