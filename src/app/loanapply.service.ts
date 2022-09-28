import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from './Loan';
import { User } from './User';
import { Vehicle } from './Vehicle';

@Injectable({
  providedIn: 'root'
})
export class LoanapplyService {

  private postUrl:string="http://localhost:8088/StudentApp/user";
  constructor(private _httpClient:HttpClient) { }

  saveUser(user:User):Observable<User>{
    return this._httpClient.post<User>(this.postUrl,user);
  }
  saveVehicle(vehicle:Vehicle):Observable<Vehicle>{
    return this._httpClient.post<Vehicle>(this.postUrl,vehicle);
  }
  saveLoan(loan:Loan):Observable<Loan>{
    return this._httpClient.post<Loan>(this.postUrl,loan);
  }
}
