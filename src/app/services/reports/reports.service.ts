import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defaulters, PaginationDefaulters } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  // main url
  private baseUrl:string=environment.baseUrl;

  constructor( private http:HttpClient) { }

  defaulters(page:number,client:string,billing:string,service:string){
    const url=`${this.baseUrl}reports/defaulters/${page}/${client}/${billing}/${service}`;
    console.log(url);
    return this.http.get<PaginationDefaulters>(url)
  }
  defaultersById(id:number){
    const url=`${this.baseUrl}reports/defaultersById/${id}`;
    console.log(url);
    return this.http.get<Defaulters>(url)
  }
}
