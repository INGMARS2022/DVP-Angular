import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Process } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {
  // main url
  private baseUrl:string=environment.baseUrl;
  constructor(private http:HttpClient) { }

  getProcess(type:string){
    const url=`${this.baseUrl}log/process/${type}`;
    console.log(url);
    return this.http.get<Array<Process>>(url)
  }
}
