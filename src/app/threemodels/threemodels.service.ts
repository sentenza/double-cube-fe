import { Injectable } from '@angular/core';
import { ThreeModel } from './threemodel';
import { MODELS } from './mock-models';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ThreeModelsService {
  private mockedModels = MODELS;
  private modelsUrl = 'http://127.0.0.1:5200/models';

 constructor(private http: Http) { }

 getModels(): Promise<ThreeModel[]> {
   // return Promise.resolve(this.mockedModels);
   return this.http.get(this.modelsUrl)
              .toPromise()
              .then(response => response.json() as ThreeModel[])
              .catch(this.handleError);
 }

 private handleError(error: any): Promise<any> {
   console.error('An error occurred', error); // for demo purposes only
   return Promise.reject(error.message || error);
 }

}
