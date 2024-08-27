import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptorService {
  constructor(private route:Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //token of localStorage
    const token = localStorage.getItem('dataDVP') || '';
    let stringToken='';
    if(token!=''){stringToken = JSON.parse(token).jwt;}
    let request = req;
    if(stringToken!=''){
      //set headers
      request = req.clone({
        setHeaders: {
          Authorization: `Bearer ${ stringToken }`
        }
      });
    } 
    return next.handle(request)
    .pipe(
      catchError(error => {
        console.log(error);
        if(error.status=='401'){this.route.navigateByUrl('error/401')}
        throw(error)
      }))
  }
}
