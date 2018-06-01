import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class HomeLogicService {

  constructor() { }

  createDropdownData() {
    console.log('magically mapped your data');
    return [];
  }

  getSomeObservableData() {
    return of([]);
  }
}
