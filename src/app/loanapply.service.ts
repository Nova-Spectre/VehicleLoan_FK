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
  private Vehicleurl:string="http://localhost:8088/StudentApp/Vehicle";

  private getvehicleurls:string="http://localhost:8088/StudentApp/Vehicle";

  constructor(private _httpClient:HttpClient) { }

  getVehicle(vid:number):Observable<Vehicle>{
    return this._httpClient.get<Vehicle>(this.getvehicleurls+'/'+vid);
  }
  
  saveVehicle(vehicle:Vehicle):Observable<Vehicle>{  
    return this._httpClient.post<Vehicle>(this.Vehicleurl,vehicle);
  }
  saveLoan(loan:Loan):Observable<Loan>{
    return this._httpClient.post<Loan>(this.postUrl,loan);
  }

  saveuser(user:User):Observable<User>{
    return this._httpClient.post<User>(this.postUrl,user);
  }

  private url="http://localhost:8088/StudentApp/Vehicle"
  getVehicleUser(vid:number):Observable<Vehicle>{
    return this._httpClient.get<Vehicle>(this.url+'/'+vid)
  }
}
