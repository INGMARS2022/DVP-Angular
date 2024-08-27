import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defaulters } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  // main url
  private baseUrl:string=environment.baseUrl;

  constructor( private http:HttpClient) { }

  defaulters(){
    const url=`${this.baseUrl}reports/defaulters`;
    return this.http.get<Array<Defaulters>>(url)
  }
}
