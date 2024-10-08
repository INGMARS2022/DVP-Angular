import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlashService {
  private flashSource = new Subject();
  flash$ = this.flashSource.asObservable();

  constructor() { }

  showMessage(message: string, type:string='', time: number = 5000){
    this.flashSource.next({message, time, type})
  }
}
