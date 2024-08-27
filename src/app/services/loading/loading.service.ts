import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSource = new Subject();
  loading$ = this.loadingSource.asObservable();

  constructor() { }

  showLoading(message: string, show:boolean=false){
    this.loadingSource.next({message,show})
  }
}
