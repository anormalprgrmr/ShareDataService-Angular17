import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  constructor() {}

  private data = new BehaviorSubject('initialized value');

  observableData = this.data.asObservable();

  updateData(newData: string): void {
    this.data.next(newData);
  }
  
}
