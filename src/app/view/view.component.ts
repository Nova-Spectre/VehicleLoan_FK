import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'mob','symbol'];
  
  applicationDetails:any= [];
 VehcileDetails:any=[];

 
 
 

 

 constructor(private adminservice:AdminService) { }

 ngOnInit(): void {
   this.getAll();
 }
public getAll() {
 this.adminservice.getUserData().subscribe(data=>{
   console.log(data)
   this.applicationDetails=data;
 }
 );
}
 public getVeh() {
   this.adminservice.getPendingVehicleUser().subscribe(data=>{
     console.log(data)
     this.VehcileDetails=data;
   }
   );
   
}
}
