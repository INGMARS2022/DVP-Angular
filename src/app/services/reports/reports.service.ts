import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defaulters, Layout, PaginationDefaulters, PaginationLayout, PaginationPay, Pay } from 'src/app/interface/interface';
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
  defaultersAll(){
    const url=`${this.baseUrl}reports/defaultersAll`;
    console.log(url);
    return this.http.get<Array<Defaulters>>(url)
  }
  layout(page:number,client:string,billing:string,service:string){
    const url=`${this.baseUrl}reports/layout/${page}/${client}/${billing}/${service}`;
    console.log(url);
    return this.http.get<PaginationLayout>(url)
  }
  layoutById(id:number){
    const url=`${this.baseUrl}reports/layoutById/${id}`;
    console.log(url);
    return this.http.get<Layout>(url)
  }
  layoutAll(){
    const url=`${this.baseUrl}reports/layoutAll`;
    console.log(url);
    return this.http.get<Array<Layout>>(url)
  }
  pay(page:number,client:string,billing:string,service:string){
    const url=`${this.baseUrl}reports/pay/${page}/${client}/${billing}/${service}`;
    console.log(url);
    return this.http.get<PaginationPay>(url)
  }
  payById(id:number){
    const url=`${this.baseUrl}reports/payById/${id}`;
    console.log(url);
    return this.http.get<Pay>(url)
  }
  payAll(){
    const url=`${this.baseUrl}reports/payAll`;
    console.log(url);
    return this.http.get<Array<Pay>>(url)
  }
  
}
