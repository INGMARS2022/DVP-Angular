import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interface/interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // main url
  private baseUrl:string=environment.baseUrl;

  constructor( private http:HttpClient) { }

  getAll(){
    const url=`${this.baseUrl}user/getAll`;
    return this.http.get<Array<User>>(url)
  }
  save(obj:User){
    const url=`${this.baseUrl}user/addUser`;
    return this.http.post<User>(url,obj)
  }
  delete(id:String){
    const url=`${this.baseUrl}user/delete/${id}`;
    return this.http.delete<Boolean>(url)
  }
}
