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
  getUserData():Observable<any>{
    const url="http://localhost:8088/StudentApp/user";
    return this.http.get<any>(url)
  }

  getAprovedListUser():Observable<User[]>{
    const url="http://localhost:8088/StudentApp/user/status/approved"
    return this.http.get<User[]>(url)
  }

  getPendingListUser():Observable<User[]>{
    const url="http://localhost:8088/StudentApp/user/status/pending"
    return this.http.get<User[]>(url)
  }

  getVehicleData():Observable<any>{
    const url="http://localhost:8088/StudentApp/user";
    return this.http.get<Vehicle>(url)
  }

  getAprovedListVehicle():Observable<Vehicle[]>{
    const url="http://localhost:8088/StudentApp/user/status/approved"
    return this.http.get<Vehicle[]>(url)
  }

  
  getPendingListVehicle():Observable<Vehicle[]>{
    const url="http://localhost:8088/StudentApp/user/status/pending"
    return this.http.get<Vehicle[]>(url)
  }

  getLoanData():Observable<any>{
    const url="http://localhost:8088/StudentApp/user";
    return this.http.get<Loan>(url)
  }

  getAprovedListLoan():Observable<Loan[]>{
    const url="http://localhost:8088/StudentApp/user/status/approved"
    return this.http.get<Loan[]>(url)
  }

  getPendingListLoan():Observable<Loan[]>{
    const url="http://localhost:8088/StudentApp/user/status/pending"
    return this.http.get<Loan[]>(url)
  }


  
}
