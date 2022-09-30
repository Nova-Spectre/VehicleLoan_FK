import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './Loan';
import { User } from './User';
import { Vehicle } from './Vehicle';


@Injectable({
  providedIn: 'root'
})
export class AdminService {


  constructor(private http : HttpClient) { }
  getUserData():Observable<User[]>{
    const url="http://localhost:8088/StudentApp/user";
    return this.http.get<User[]>(url)
  }

  getAprovedListUser():Observable<User[]>{
    const url="http://localhost:8088/StudentApp/user/status/approved"
    return this.http.get<User[]>(url)
  }

  getPendingListUser():Observable<User[]>{
    const url="http://localhost:8088/StudentApp/user/status/pending"
    return this.http.get<User[]>(url)
  }

  getPendingVehicleUser():Observable<Vehicle[]>{
    const url="http://localhost:8088/StudentApp/Vehicle"
    return this.http.get<Vehicle[]>(url)
  }

  private urls="http://localhost:8088/StudentApp/user"
  putUser(u:User,u_id:number):Observable<Object>{
    return this.http.put(this.urls+'/'+u_id,User)
  }

  


  
}
