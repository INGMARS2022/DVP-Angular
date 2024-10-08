import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Defaulters, Layout, PaginationDefaulters, PaginationLayout, PaginationPay, PaginationRevenue, Pay, Revenue } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  // main url
  private baseUrl:string=environment.baseUrl;

  constructor( private http:HttpClient) { }

  defaulters(page:number,client:string,billing:string,service:string,origen:string){
    const url=`${this.baseUrl}reports/defaulters/${page}/${client}/${billing}/${service}/${origen}`;
    
    return this.http.get<PaginationDefaulters>(url)
  }
  defaultersById(id:number){
    const url=`${this.baseUrl}reports/defaultersById/${id}`;
    
    return this.http.get<Defaulters>(url)
  }
  defaultersAll(){
    const url=`${this.baseUrl}reports/defaultersAll`;
    
    return this.http.get<Array<Defaulters>>(url)
  }
  layout(page:number,client:string,billing:string,service:string){
    const url=`${this.baseUrl}reports/layout/${page}/${client}/${billing}/${service}`;
    
    return this.http.get<PaginationLayout>(url)
  }
  layoutById(id:number){
    const url=`${this.baseUrl}reports/layoutById/${id}`;
    
    return this.http.get<Layout>(url)
  }
  layoutAll(){
    const url=`${this.baseUrl}reports/layoutAll`;
    
    return this.http.get<Array<Layout>>(url)
  }
  pay(page:number,client:string,billing:string,service:string){
    const url=`${this.baseUrl}reports/pay/${page}/${client}/${billing}/${service}`;
    
    return this.http.get<PaginationPay>(url)
  }
  payById(id:number){
    const url=`${this.baseUrl}reports/payById/${id}`;
    
    return this.http.get<Pay>(url)
  }
  payAll(){
    const url=`${this.baseUrl}reports/payAll`;
    
    return this.http.get<Array<Pay>>(url)
  }
  revenue(page:number,client:string,billing:string){
    const url=`${this.baseUrl}reports/revenue/${page}/${client}/${billing}`;
    
    return this.http.get<PaginationRevenue>(url)
  }
  revenueById(id:number){
    const url=`${this.baseUrl}reports/revenueById/${id}`;
    
    return this.http.get<Revenue>(url)
  }
  revenueAll(){
    const url=`${this.baseUrl}reports/revenueAll`;
    
    return this.http.get<Array<Revenue>>(url)
  }
  
}
