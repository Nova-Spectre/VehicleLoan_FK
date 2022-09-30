import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
  user_login_url!: string;
  

  constructor(private http_ser:HttpClient) { }
  validateUser(u : string): Observable<Object[]> {
    alert(u)
    const user_login_url = "http://localhost:8088/StudentApp/user";
      return this.http_ser.get<Object[]>(this.user_login_url);
      
    }
}
