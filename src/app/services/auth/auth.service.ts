import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Login, LoginResponse } from 'src/app/interface/interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // main url
  private baseUrl:string=environment.baseUrl;

  constructor( private http:HttpClient) { }

  login(obj:Login){
    const url=`${this.baseUrl}auth/loginLdap`;
    return this.http.post<LoginResponse>(url,obj)
  }
  validateToken():Observable<boolean>{
    const url=`${this.baseUrl}auth/valid`;
    return this.http.get<any>(url)
    .pipe(
      map( res =>{
        return true;
      }),
      // return false
      catchError( err => { return of(false)})
    )
  }
}
